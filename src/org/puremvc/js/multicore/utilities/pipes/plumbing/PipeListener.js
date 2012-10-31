/**
 * Pipe Listener.
 * <P>
 * Allows a class that does not implement <code>PipeFitting</code> to
 * be the final recipient of the messages in a pipeline.</P>
 * @see Junction
 */
puremvc.define(
    // CLASS INFO
    {
        name: 'org.puremvc.js.multicore.utilities.pipes.plumbing.PipeListener',
        parent: org.puremvc.js.multicore.utilities.pipes.plumbing.PipeFitting,
        constructor: function(args) {
            if (args) {
                this.context = args.context;
                this.listener = args.listener;
            }
        }
    },
    // INSTANCE MEMBERS
    {
        context: null,
        listener: null,

        connect: function(/*PipeFitting*/output) {
            return false;
        },


        disconnect: function() {
            return null;
        },


        write: function(/*PipeMessage*/message) {
            this.listener.apply(this.context, [message]);
            return true;
        }
    },
    // STATIC MEMBERS
    {
        NAME: 'PipeAware'
    }
);