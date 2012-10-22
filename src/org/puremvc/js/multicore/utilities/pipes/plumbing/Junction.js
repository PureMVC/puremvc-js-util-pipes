/**
 * Pipe Junction.
 *
 * <P>
 * Manages Pipes for a Core.</p>
 *
 * <P>
 * When you register a Pipe with a Junction, it is
 * declared as being an INPUT pipe or an OUTPUT pipe.</P>
 *
 * <P>
 * You can retrieve or remove a registered Pipe by name,
 * check to see if a Pipe with a given name exists,or if
 * it exists AND is an INPUT or an OUTPUT Pipe.</P>
 *
 * <P>
 * You can send a PipeMessage on a named OUTPUT Pipe
 * or add a PipeListener to registered INPUT Pipe.</P>
 *
 * @class puremvc.pipes.Junction
 */
function Junction() {} 

/**
 * Input Pipe Type
 * 
 * @static
 * @property {String}
 */
Junction.INPUT = "input";

/**
 * Output Pipe Type
 * 
 * @static
 * @property {String}
 */
Junction.OUTPUT = "output";

/**
 * Input Pipe Names
 * 
 * @property {Array}
 */
Junction.prototype.inputPipes = [];

/**
 * Output Pipe Names
 * 
 * @property {Array}
 */
Junction.prototype.outputPipes = [];

/**
 *  Pipes Map 
 * 
 * @property {Array}
 */
Junction.prototype.pipesMap = [];

/**
 *  Pipe Types Map 
 * 
 * @property {Array}
 */
Junction.prototype.pipeTypesMap = [];

/**
 * Register a pipe with the junction.
 * <P>
 * Pipes are registered by unique name and type,
 * which must be either Junction.INPUT
 * or Junction.OUTPUT.</P>
 * <P>
 * NOTE: You cannot have an INPUT pipe and an OUTPUT
 * pipe registered with the same name. All pipe names
 * must be unique regardless of type.</P>
 *
 * @param {String} name
 * @param {String} type
 * @param {puremvc.pipes.PipeFitting} pipe
 * @return {Boolean} true if successfully registered. false if another pipe exists by that name.
 */
Junction.prototype.registerPipe = function( name, type, pipe )
{
    var success = true;
    if ( this.pipesMap[ name ] == undefined )
    {
        this.pipesMap[ name ] = pipe;
        this.pipeTypesMap[ name ] = type;

        switch ( type )
        {
            case Junction.INPUT:
                this.inputPipes.push( name );
                break;

            case Junction.OUTPUT:
                this.outputPipes.push( name );
                break;

            default:
                success = false;
        }
    }
    else
    {
        success = false;
    }

    return success;
};

/**
 * Does this junction have a pipe by this name?
 *
 * @param {String} name the pipe to check for
 * @return {Boolean} true if a pipe is registered with that name.
 */
Junction.prototype.hasPipe = function( name )
{
    return ( this.pipesMap[ name ] != undefined );
};

/**
 * Does this junction have an INPUT pipe by this name?
 *
 * @param {String} name the pipe to check for
 * @return {Boolean} true if an INPUT pipe is registered with that name.
 */
Junction.prototype.hasInputPipe = function( name )
{
    return ( this.hasPipe( name ) && ( this.pipeTypesMap[ name ] == Junction.INPUT ) );
};

/**
 * Does this junction have an OUTPUT pipe by this name?
 *
 * @param {String} name the name of the pipe to check for
 * @return {Boolean} true if an OUTPUT pipe is registered with that name.
 */
Junction.prototype.hasOutputPipe = function(/*String*/name)
{
    return ( this.hasPipe( name ) && ( this.pipeTypesMap[ name ] == Junction.OUTPUT ) );
};

/**
 * Remove the pipe with this name if it is registered.
 * <P>
 * NOTE: You cannot have an INPUT pipe and an OUTPUT
 * pipe registered with the same name. All pipe names
 * must be unique regardless of type.</P>
 *
 * @param {String} name the pipe to remove
 */
Junction.prototype.removePipe = function( name )
{
    if ( this.hasPipe( name ) )
    {
        var type = this.pipeTypesMap[ name ];
        var pipesList = [];

        switch ( type )
        {
            case Junction.INPUT:
                pipesList = this.inputPipes;
                break;

            case Junction.OUTPUT:
                pipesList = this.outputPipes;
                break;
        }

        for ( var i=0; i<pipesList.length; i++ )
        {
            if ( pipesList[ i ] == name ) {
                pipesList.splice( i, 1 );
                break;
            }
        }

        this.pipesMap.splice( this.pipesMap.indexOf( name ), 1 );
        this.pipeTypesMap.splice( this.pipeTypesMap.indexOf( name ), 1 );
    }
};

/**
 * Retrieve the named pipe.
 * 
 * @param {String} name the name of the pipe to retrieve
 * @return {puremvc.pipes.PipeFitting} the pipe registered by the given name if it exists
 */
Junction.prototype.retrievePipe =function( name )
{
    return this.pipesMap[ name ];
};

/**
 * Add a PipeListener to an INPUT pipe.
 * <P>
 * NOTE: there can only be one PipeListener per pipe,
 * and the listener function must accept a PipeMessage
 * as its sole argument.</P>
 *
 * @param {String} name the name of the INPUT pipe to add a PipeListener to
 * @param {Object} context the calling context or 'this' object
 * @param {Function} listener the function on the context to call
 * @return {Boolean} true if listener was successfully added
 */
Junction.prototype.addPipeListener = function( inputPipeName, context, listener )
{
    var success = false;
    if ( this.hasInputPipe( inputPipeName ) )
    {
        var pipe = this.pipesMap[ inputPipeName ];
        success = pipe.connect( new PipeListener( { context:context, listener:listener } ) );
    }
    return success;
};

/**
 * Send a message on an OUTPUT pipe.
 * 
 * @param {String} name the OUTPUT pipe to send the message on
 * @param {puremvc.pipes.PipeMessage} message the PipeMessage to send
 * @return {Boolean} true if message was successfully sent
 */
Junction.prototype.sendMessage = function( outputPipeName, message )
{
    var success = false;
    if ( this.hasOutputPipe( outputPipeName ) )
    {
        var pipe = this.pipesMap[ outputPipeName ];
        success = pipe.write( message );
    }
    return success;
};
