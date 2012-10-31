/**
 * Pipe.
 * <P>
 * This is the most basic <code>PipeFitting</code>,
 * simply allowing the connection of an output
 * fitting and writing of a message to that output.</P>
 */
puremvc.define(
    // CLASS INFO
    {
        name: 'org.puremvc.js.multicore.utilities.pipes.plumbing.Pipe',
        parent: org.puremvc.js.multicore.utilities.pipes.plumbing.PipeFitting,
        constructor: function(args) {
            if (args) {
                this.connect(args.output);
            }
        }
    },
    // INSTANCE MEMBERS
    {
        output: null,


        /**
         * Connect another PipeFitting to the output.
         * PipeFittings connect to and write to other
         * PipeFittings in a one-way, synchronous chain.</P>
         * @param output
         * @return boolean true if no other fitting was already connected.
         */
        connect: function(/*PipeFitting*/output) {
            var success = false;
            if (this.output == undefined) {
                this.output = output;
                success = true;
            }
            return success;
        },


        /**
         * Disconnect the Pipe Fitting connected to the output.
         * <P>
         * This disconnects the output fitting, returning a
         * reference to it. If you were splicing another fitting
         * into a pipeline, you need to keep (at least briefly)
         * a reference to both sides of the pipeline in order to
         * connect them to the input and output of whatever
         * fiting that you're splicing in.</P>
         *
         * @return PipeFitting the now disconnected output fitting
         */
        disconnect: function() {
            var disconnectedFitting = this.output;
            this.output = undefined;
            return disconnectedFitting;
        },


        /**
         * Write the message to the connected output.
         * @param message the message to write
         * @return Boolean whether any connected downpipe outputs failed
         */
        write: function(/*PipeMessage*/message) {
            return this.output.write(message);
        }
    },
    // STATIC MEMBERS
    {
        NAME: 'Filter'
    }
);