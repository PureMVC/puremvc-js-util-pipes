/**
 * Junction Mediator.
 * <P>
 */
puremvc.define(
    // CLASS INFO
    {
        name: 'org.puremvc.js.multicore.utilities.pipes.plumbing.JunctionMediator',
        parent: puremvc.Mediator
    },
    // INSTANCE MEMBERS
    {
        /**
         * List Notification Interests.
         * <P>
         * Returns the notification interests for this base class.
         * Override in subclass and call <code>super.listNotificationInterests</code>
         * to get this list, then add any sublcass interests to
         * the array before returning.</P>
         */
        listNotificationInterests: function() {
            return [
                org.puremvc.js.multicore.utilities.pipes.plumbing.JunctionMediator.ACCEPT_INPUT_PIPE,
                org.puremvc.js.multicore.utilities.pipes.plumbing.JunctionMediator.ACCEPT_OUTPUT_PIPE
            ];
        },


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
        handleNotification: function(notification) {
            switch (notification.getName()) {
                // accept an input pipe
                // register the pipe and if successful
                // set this mediator as its listener
                case org.puremvc.js.multicore.utilities.pipes.plumbing.JunctionMediator.ACCEPT_INPUT_PIPE:
                    var inputPipeName = notification.getType();
                    var inputPipe = notification.getBody();
                    if (this.getJunction().registerPipe(inputPipeName, org.puremvc.js.multicore.utilities.pipes.plumbing.Junction.INPUT, inputPipe)) {
                        this.getJunction().addPipeListener(inputPipeName, this, this.handlePipeMessage);
                    }
                    break;

                // accept an output pipe
                case org.puremvc.js.multicore.utilities.pipes.plumbing.JunctionMediator.ACCEPT_OUTPUT_PIPE:
                    var outputPipeName = notification.getType();
                    var outputPipe = notification.getBody();
                    this.getJunction().registerPipe(outputPipeName, org.puremvc.js.multicore.utilities.pipes.plumbing.Junction.OUTPUT, outputPipe);
                    break;
            }
        },


        handlePipeMessage: function(message) {
        },


        getJunction: function() {
            return this.viewComponent;
        }
    },
    // STATIC MEMBERS
    {
        // accept input pipe notification name constant
        ACCEPT_INPUT_PIPE: 'acceptInputPipe',
        // accept output pipe notification name constant
        ACCEPT_OUTPUT_PIPE: 'acceptOutputPipe'
    }
);