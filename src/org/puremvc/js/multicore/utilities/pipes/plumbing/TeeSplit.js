/**
 * Junction Mediator.
 * <P>
 */
puremvc.define(
    // CLASS INFO
    {
        name: 'org.puremvc.js.multicore.utilities.pipes.plumbing.TeeSplit',
        parent: org.puremvc.js.multicore.utilities.pipes.plumbing.PipeFitting,
        /**
         * Constructor.
         * <P>
         * Create the TeeSplit and connect the up two optional outputs.
         * This is the most common configuration, though you can connect
         * as many outputs as necessary by calling <code>connect</code>.</P>
         */
        constructor: function(args) {
            if (args) {
                if (args.output1) {
                    this.connect(args.output1);
                }

                if (args.output2) {
                    this.connect(args.output2);
                }
            }
            this.outputs = [];
        }
    },
    // INSTANCE MEMBERS
    {
        /**
         * Splitting Pipe Tee.
         * <P>
         * Writes input messages to multiple output pipe fittings.</P>
         */
        outputs: null,


        /**
         * Connect the output PipeFitting.
         * <P>
         * NOTE: You can connect as many outputs as you want
         * by calling this method repeatedly.</P>
         * @param output the PipeFitting to connect for output.
         */
        connect: function(/*PipeFitting*/output) {
            this.outputs.push(output);
            return true;
        },


        /**
         * Disconnect the most recently connected output fitting. (LIFO)
         * <P>
         * To disconnect all outputs, you must call this
         * method repeatedly untill it returns null.</P>
         * @param output the PipeFitting to connect for output.
         */
        disconnect: function() {
            return this.outputs.pop();
        },


        /**
         * Disconnect a given output fitting.
         * <P>
         * If the fitting passed in is connected
         * as an output of this <code>TeeSplit</code>, then
         * it is disconnected and the reference returned.</P>
         * <P>
         * If the fitting passed in is not connected as an
         * output of this <code>TeeSplit</code>, then <code>null</code>
         * is returned.</P>
         * @param output the PipeFitting to connect for output.
         */
        disconnectFitting: function(/*PipeFitting*/target) {
            var removed;
            for (var i = 0; i < this.outputs.length; i++) {
                var output = this.outputs[i];
                if (output == target) {
                    this.outputs.splice(i, 1);
                    removed = output;
                    break;
                }
            }
            return removed;
        },


        /**
         * Write the message to all connected outputs.
         * <P>
         * Returns false if any output returns false,
         * but all outputs are written to regardless.</P>
         * @param message the message to write
         * @return Boolean whether any connected outputs failed
         */
        write: function(/*PipeMessage*/message) {
            var success = true;
            for (var i = 0; i < this.outputs.length; i++) {
                var output = this.outputs[i];
                if (!output.write(message)) {
                    success = false;
                }
            }
            return success;
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