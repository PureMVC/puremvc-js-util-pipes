/**
 * JunctionMediator
 */
function JunctionMediator()
{
}


JunctionMediator.NAME = "JunctionMediator";


JunctionMediator.prototype = new puremvc.Mediator;
JunctionMediator.prototype.constructor = JunctionMediator;


/**
 * List Notification Interests.
 * <P>
 * Returns the notification interests for this base class.
 * Override in subclass and call <code>super.listNotificationInterests</code>
 * to get this list, then add any sublcass interests to
 * the array before returning.</P>
 */
JunctionMediator.prototype.listNotificationInterests = function()
{
    return [
        JunctionMediator.ACCEPT_INPUT_PIPE,
        JunctionMediator.ACCEPT_OUTPUT_PIPE
    ];
};


/**
 * Handle Notification.
 * <P>
 * This provides the handling for common junction activities. It
 * accepts input and output pipes in response to <code>PipeAware</code>
 * interface calls.</P>
 * <P>
 * Override in subclass, and call <code>super.handleNotification</code>
 * if none of the subclass-specific notification names are matched.</P>
 */
JunctionMediator.prototype.handleNotification = function(notification)
{
    switch (notification.getName())
    {
        // accept an input pipe
        // register the pipe and if successful
        // set this mediator as its listener
        case JunctionMediator.ACCEPT_INPUT_PIPE:
            var inputPipeName = notification.getType();
            var inputPipe = notification.getBody();
            if (this.getJunction().registerPipe(inputPipeName, Junction.INPUT, inputPipe))
            {
                this.getJunction().addPipeListener(inputPipeName, this, this.handlePipeMessage);
            }
            break;

        // accept an output pipe
        case JunctionMediator.ACCEPT_OUTPUT_PIPE:
            var outputPipeName = notification.getType();
            var outputPipe = notification.getBody();
            this.getJunction().registerPipe(outputPipeName, Junction.OUTPUT, outputPipe);
            break;

        default:
            break;
    }
};


JunctionMediator.prototype.handlePipeMessage = function(message)
{
};


JunctionMediator.prototype.getJunction = function()
{
    return this.viewComponent;
};

// accept input pipe notification name constant
JunctionMediator.ACCEPT_INPUT_PIPE = 'acceptInputPipe';
// accept output pipe notification name constant
JunctionMediator.ACCEPT_OUTPUT_PIPE = 'acceptOutputPipe';