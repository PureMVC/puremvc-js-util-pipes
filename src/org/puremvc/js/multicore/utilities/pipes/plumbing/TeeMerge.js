/**
 * Merging Pipe Tee.
 * <P>
 * Writes the messages from multiple input pipelines into
 * a single output pipe fitting.</P>
 */

/**
 * Constructor.
 * <P>
 * Create the TeeMerge and the two optional constructor inputs.
 * This is the most common configuration, though you can connect
 * as many inputs as necessary by calling <code>connectInput</code>
 * repeatedly.</P>
 * <P>
 * Connect the single output fitting normally by calling the
 * <code>connect</code> method, as you would with any other PipeFitting.</P>
 */
function TeeMerge(args)
{
    if (args)
    {
        if (args.input1) {
            this.connectInput(args.input1);
        }

        if (args.input2) {
            this.connectInput(args.input2);
        }
    }
}


TeeMerge.NAME = "TeeMerge";


TeeMerge.prototype = new Pipe;
TeeMerge.prototype.constructo = TeeMerge;


/**
 * Connect an input PipeFitting.
 * <P>
 * NOTE: You can connect as many inputs as you want
 * by calling this method repeatedly.</P>
 *
 * @param input the PipeFitting to connect for input.
 */
TeeMerge.prototype.connectInput = function(/*PipeFitting*/input)
{
    return input.connect(this);
};