/**
 * Pipe Filter.
 * <P>
 * Filters may modify the contents of messages before writing them to
 * their output pipe fitting. 
 * <P>
 * They may also have their parameters and
 * filter function passed to them by control message, as well as having
 * their Bypass/Filter operation mode toggled via control message.</p>
 *
 * @class puremvc.pipes.Filter
 * @extends puremvc.pipes.Pipe
 * @constructor
 * Creates a new Filter instance.
 * @param {String} name
 * @param {puremvc.pipes.PipeFitting} output
 * @param {Function} filter
 * @param {Object} params
 */
function Filter( name, output, filter, params )
{
   this.name = name;
   this.output = output;
   this.setParams( params );
   if ( filter ) this.setFilter( filter );
}

Filter.prototype = new Pipe;
Filter.prototype.constructor = Filter;

/**
 * The Filter instance's Name
 * 
 * @protected
 * @property {String}
 */
Filter.prototype.name = "";

/**
 * The Filter Function
 * 
 * @abstract
 * @protected
 * @property {Function}
 */
Filter.prototype.filter = function( message, params ) { return message; };

/**
 * The Filter Mode
 * 
 * @protected
 * @property {String} [mode=FilterControlMessage.FILTER]
 */
Filter.prototype.mode = FilterControlMessage.FILTER;

/**
 * The Filter Params
 * 
 * @protected
 * @property {Object}
 */
Filter.prototype.params = {};

/**
 * Handle the incoming message.
 *
 * <P>
 * In FILTER Mode (default), if the PipeMessage is not a FilterControlMessage, 
 * it is passed to the filter function along with the filter parameters. 
 * The result is written to the output PipeFitting if the filter operation 
 * is successful.</P>
 *
 * <P>
 * In BYPASS Mode, if the PipeMessage is not a FilterControlMessage, 
 * it is written to the output PipeFitting without modification.</P>
 *
 * <P>
 * The Filter only acts on a FilterControlMessage if it is targeted
 * to this named Filter instance. Otherwise it writes through to the
 * output.</P>
 *
 * <P>
 * The FilterControlMessage.SET_PARAMS message type tells the Filter
 * that the message class is FilterControlMessage, which it
 * casts the message to in order to retrieve the filter parameters
 * object if the message is addressed to this filter.</P>
 *
 * <P>
 * The FilterControlMessage.SET_FILTER message type tells the Filter
 * that the message class is FilterControlMessage, which it
 * casts the message to in order to retrieve the filter function.</P>
 *
 * <P>
 * The FilterControlMessage.BYPASS message type tells the Filter
 * that it should go into Bypass mode operation, passing all normal
 * messages through unfiltered.</P>
 *
 * <P>
 * The FilterControlMessage.FILTER message type tells the Filter
 * that it should go into Filtering mode operation, filtering all
 * normal normal messages before writing out. This is the default
 * mode of operation and so this message type need only be sent to
 * cancel a previous BYPASS message.</P>
 *
 * @param {puremvc.pipes.PipeMessage} message
 * @return {Boolean} true if the filter process does not throw an error and subsequent operations
 * in the pipeline succede.
 */
Filter.prototype.write = function( message )
{
    var outputMessage;
    var success = true;

    switch ( message.type )
    {
        // accept parameters from control message
        case  FilterControlMessage.SET_PARAMS:
            if ( this.isTarget( message ) )
            {
                this.setParams( message.params );
            }
            else
            {
                success = this.output.write( outputMessage );
            }
            break;

        // accept filter function from control message
        case FilterControlMessage.SET_FILTER:
            if ( this.isTarget( message ) )
            {
                this.setFilter( message.filter );
            }
            else
            {
                success = this.output.write( outputMessage);
            }
            break;

        // toggle between filter or bypass operational modes
        case FilterControlMessage.BYPASS:
        case FilterControlMessage.FILTER:
            if ( this.isTarget( message ) )
            {
                this.mode = message.type;
            }
            else
            {
                success = this.output.write( message );
            }
            break;

	// filter all other message types
        default:
            try {
                if ( this.mode == FilterControlMessage.FILTER )
                {
                    outputMessage = this.applyFilter( message );
                }
                else
                {
                    outputMessage = message;
                }
                success = this.output.write( outputMessage );
            }
            catch ( e )
            {
                success = false;
            }
            break;
    }

    return success;
};

/**
 * Set the filter parameters
 * <P>
 * This can be an object and can contain whatever arbitrary properties and values your filter
 * method requires to operate. </P>
 *
 * @param {Object} params the parameters object
 */
Filter.prototype.setParams = function( params )
{
    this.params = params;
};

/**
 * Set the filter function.
 * <P>
 * It must accept two arguments; a PipeMessage and a parameter Object, which
 * can contain whatever arbitrary properties and values your filter method requires.</P>
 *
 * @param {Function} filter the filter function
 */
Filter.prototype.setFilter = function( filter )
{
    this.filter = filter;
};

/**
 * Filter the message. Called from the write() method.
 * 
 * @protected
 * @param {puremvc.pipes.PipeMessage}
 * @return {puremvc.pipes.PipeMessage}
 */
Filter.prototype.applyFilter = function( message )
{
    this.filter.apply( this, [ message, this.params ] );
    return message;
};

/**
 * Is the message directed at this Filter instance?
 * 
 * @protected
 * @param {puremvc.pipes.PipeMessage}
 * @return {Boolean} true if the message is for this Filter instance.
 */
Filter.prototype.isTarget = function( message )
{
    return ( message.name == this.name );
};
