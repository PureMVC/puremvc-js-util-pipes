/**
 * @class org.puremvc.js.multicore.utilities.pipes.plumbing.PipeAware
 * Pipe Aware base class.
 * <P>
 * Can be implemented by any PureMVC Core that wishes
 * to communicate with other Cores using the Pipes
 * utility.</P>
 */
puremvc.define(
    // CLASS INFO
    {
        name: 'org.puremvc.js.multicore.utilities.pipes.plumbing.PipeAware'
    },
    // INSTANCE MEMBERS
    {
        acceptInputPipe: function(/*String*/ name, /*PipeFitting*/ pipe) {
        },

        acceptOutputPipe: function(/*String*/ name, /*PipeFitting*/ pipe) {
        }
    },
    // STATIC MEMBERS
    {
        NAME: 'PipeAware'
    }
);