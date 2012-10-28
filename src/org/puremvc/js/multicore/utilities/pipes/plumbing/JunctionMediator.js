/**
 * Junction Mediator
 * <P>
 * A base class for handling the Pipe Junction in an PipeAwareCore.</P> 
 * 
 * <P>Although you can subclass and add your own functionality, you can
 * also use it out-of-box by registering an instance of JunctionMediator.</P> 
 * 
 * <P>To be usful out-of-box, it creates its own Junction instance, handles 
 * ACCEPT_INPUT_PIPE, ACCEPT_OUTPUT_PIPE, REMOVE_PIPE, and SEND_MESSAGE
 * Notifications, and rebroadcasts incoming messages as notifications.</P>
 * 
 * 
 * @class puremvc.pipes.JunctionMediator
 * @extends puremvc.Mediator
 * @constructor
 * Creates a new JunctionMediator instance.
 */
function JunctionMediator() {
    this.super.constructor( NAME, new Junction() );
}

JunctionMediator.prototype = new puremvc.Mediator;
JunctionMediator.prototype.constructor = JunctionMediator;

/**
 * Mediator name
 *
 * @static
 * @property {String}
 */
JunctionMediator.NAME = "JunctionMediator";

/**
 * Notification: Accept input pipe 
 * 
 * @static
 * @property {String} [ACCEPT_INPUT_PIPE='JunctionMediator/accept/pipe/input']
 */
JunctionMediator.ACCEPT_INPUT_PIPE = JunctionMediator.NAME + '/accept/pipe/input';

/**
 * Notification: Accept output pipe 
 * 
 * @static
 * @property {String} [ACCEPT_OUTPUT_PIPE='JunctionMediator/accept/pipe/output']
 */
JunctionMediator.ACCEPT_OUTPUT_PIPE = JunctionMediator.NAME + '/accept/pipe/output';

/**
 * Notification: Remove a pipe 
 * 
 * @static
 * @property {String} [REMOVE_PIPE='JunctionMediator/remove/pipe']
 */
JunctionMediator.REMOVE_PIPE = JunctionMediator.NAME + '/remove/pipe';

/** 
 * Get the Junction
 *
 * @protected
 * @return {puremvc.pipes.Junction} the Junction for this core
 */
JunctionMediator.prototype.getJunction = function()
{
    return this.viewComponent;
};

/**
 * List Notification Interests.
 * <P>
 * Returns the notification interests for this base class.
 * Override in subclass and call <code>this.super.listNotificationInterests()</code>
 * to get this list, then add any sublcass interests to
 * the array before returning.</P>
 * 
 * @return {Array} interests a list of notification names this Mediator is interested in.
 */
JunctionMediator.prototype.listNotificationInterests = function()
{
    return [
        JunctionMediator.ACCEPT_INPUT_PIPE,
        JunctionMediator.ACCEPT_OUTPUT_PIPE,
        JunctionMediator.REMVOVE_PIPE
    ];
};

/**
 * Handle Notification.
 * <P>
 * This provides the handling for common junction activities. It
 * accepts input and output pipes in response to <code>PipeAware</code>
 * interface calls.</P>
 * <P>
 * Override in subclass, and call <code>this.super.handleNotification( notification )</code>
 * if none of the subclass-specific notification names are matched.</P>
 *
 * @param {puremvc.Notification} notification the inbound Notification
 */
JunctionMediator.prototype.handleNotification = function( notification )
{
    switch ( notification.getName() ) 
    {
        // accept an input pipe
        // register the pipe and if successful
        // set this mediator as its listener
        case JunctionMediator.ACCEPT_INPUT_PIPE:
            var inputPipeName = notification.getType();
            var inputPipe = notification.getBody();
            if ( this.getJunction().registerPipe( inputPipeName, Junction.INPUT, inputPipe ) )
            {
                this.getJunction().addPipeListener( inputPipeName, this, this.handlePipeMessage );
            }
            break;

        // accept an output pipe
        case JunctionMediator.ACCEPT_OUTPUT_PIPE:
            var outputPipeName = notification.getType();
            var outputPipe = notification.getBody();
            this.getJunction().registerPipe( outputPipeName, Junction.OUTPUT, outputPipe );
            break;

        // remove a pipe
        case JunctionMediator.REMOVE_PIPE:
            var outputPipeName = notification.getType();
            this.getJunction().removePipe( outputPipeName );
            break;

        default:
            break;
    }
};


/**
 * Handle incoming pipe messages.
 * 
 * <P>
 * By default, incoming PipeMessages are rebroadcast as notifications
 * with notification name being the same as the {puremvc.pipes.PipeMessage.type} 
 * and the body of the notification being the PipeMessage itself.
 * If this is not desireable, then override in subclass and handle 
 * PipeMessages appropriately for your core. 
 * <P>If you override this method, you can  still call <code>this.super.handlePipeMessage( message )</code>
 * and reach this default functionality.</P>
 * 
 * @param {puremvc.pipes.PipeMessage} message the inbound PipeMessage
 */
JunctionMediator.prototype.handlePipeMessage = function( message )
{
   this.sendNotification( message.type, message );
};

JunctionMediator.prototype.super = {};
JunctionMediator.prototype.super.constructor = JunctionMediator.prototype.constructor;
JunctionMediator.prototype.super.listNotificationIntrests = JunctionMediator.prototype.listNotificationInterests;
JunctionMediator.prototype.super.handleNotification = JunctionMediator.prototype.handleNotificationInterests;
