/**
 * Splitting Pipe Tee.
 * <P>
 * Writes input messages to multiple output pipe fittings.</P>
 * <P>
 * Create the TeeSplit and connect the up two optional outputs.
 * This is the most common configuration, though you can connect
 * as many outputs as necessary by calling <code>connect</code>.</P>
 *
 * @class puremvc.pipes.TeeSplit
 * @extends puremvc.pipes.Pipe
 * @constructor
 * Creates a new TeeSplit instance.
 * @param {puremvc.pipes.PipeFitting} output1
 * @param {puremvc.pipes.PipeFitting} output2
 */
function TeeSplit( output1, output2 )
{
   this.outputs = [];
   this.connect( output1 );
   this.connect( output2 );
}

TeeSplit.prototype = new Pipe;
TeeSplit.prototype.constructor = TeeSplit;

/**
 * @ignore
 * @protected
 * @property {Array} outputs;
 */
TeeSplit.prototype.outputs = null; 

/**
 * Connect an output PipeFitting.
 * <P>
 * NOTE: You can connect as many outputs as you want
 * by calling this method repeatedly.</P>
 *
 * @param {puremvc.pipes.PipeFitting} output the PipeFitting to connect for output.
 * @return {Boolean}
 */
TeeSplit.prototype.connect = function( output )
{
    this.outputs.push( output );
    return true;
};

/**
 * Disconnect the most recently connected output fitting. (LIFO)
 * <P>
 * To disconnect all outputs, you must call this
 * method repeatedly until it returns null.</P>
 *
 * @return {puremvc.pipes.PipeFitting} output The PipeFitting to connect for output.
 */
TeeSplit.prototype.disconnect = function()
{
    return this.outputs.pop();
};

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
 * 
 * @param {puremvc.pipes.PipeFitting} target the fitting to disconnect
 * @return {puremvc.pipes.PipeFitting} the removed PipeFitting
 */
TeeSplit.prototype.disconnectFitting = function( target )
{
    var removed;
    for (var i = 0; i < this.outputs.length; i++)
    {
        var output = this.outputs[i];
        if (output === target)
        {
            this.outputs.splice(i, 1);
            removed = output;
            break;
        }
    }
    return removed;
};

/**
 * Write the message to all connected outputs.
 * <P>
 * Returns false if any output returns false,
 * but all outputs are written to regardless.</P>
 * 
 * @param {puremvc.pipes.PipeMessage} message The message to write
 * @return {Boolean} true if any connected outputs failed
 */
TeeSplit.prototype.write = function( message )
{
    var success = true;
    for ( var i = 0; i < this.outputs.length; i++ )
    {
        var output = this.outputs[i];
        if ( !output.write( message ) )
        {
            success = false;
        }
    }
    return success;
};
