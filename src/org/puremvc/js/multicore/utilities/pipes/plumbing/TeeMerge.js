/**
 * Merging Pipe Tee.
 * <P>
 * Writes the messages from multiple input pipelines into
 * a single output pipe fitting.</P>
 * Constructor.
 * <P>
 * Create the TeeMerge and the two optional constructor inputs.
 * This is the most common configuration, though you can connect
 * as many inputs as necessary by calling <code>connectInput</code>
 * repeatedly.</P>
 * <P>
 * Connect the single output fitting normally by calling the
 * <code>connect</code> method, as you would with any other PipeFitting.</P>
 *
 * @class puremvc.pipes.TeeMerge
 * @extends puremvc.pipes.PipeFitting
 * @constructor
 * @param {puremvc.pipes.PipeFitting} [input1]
 * @param {puremvc.pipes.PipeFitting} [input1]
 */
function TeeMerge( input1, input2 )
{
   this.connectInput( input1 );
   this.connectInput( input2 );
}

TeeMerge.prototype = new Pipe;
TeeMerge.prototype.constructor = TeeMerge;

/**
 * Connect an input PipeFitting.
 * <P>
 * NOTE: You can connect as many inputs as you want
 * by calling this method repeatedly.</P>
 *
 * @param {puremvc.PipeFitting} [input]
 * {@link puremvc.pipes.PipeFitting PipeFitting} to connect for input.
 */
TeeMerge.prototype.connectInput = function( input )
{
   return input.connect( this );
};
