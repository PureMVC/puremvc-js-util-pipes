/**
 * Pipe.
 * <P>
 * This is the most basic {@link puremvc.pipes.PipeFitting},
 * allowing the connection of an output
 * fitting and writing of a message to that output.</P>
 *
 * @class puremvc.pipes.Pipe
 * @extends puremvc.pipes.PipeFitting
 */
function Pipe( output )
{
   this.connect( output );
}

Pipe.prototype = new PipeFitting;
Pipe.prototype.constructor = Pipe;

/**
 * Connect another PipeFitting to the output.
 * PipeFittings connect to and write to other
 * PipeFittings in a one-way, synchronous chain.</P>
 *
 * @param {puremvc.pipes.PipeFitting} output
 * @return boolean true if no other fitting was already connected.
 */
Pipe.prototype.connect = function( output )
{
    var success = false;
    if (this.output == undefined)
    {
        this.output = output;
        success = true;
    }
    return success;
};

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
 * @return {puremvc.pipes.PipeFitting} the disconnected output fitting
 */

Pipe.prototype.disconnect = function()
{
    var disconnectedFitting = this.output;
    this.output = undefined;
    return disconnectedFitting;
};


/**
 * Write the message to the connected output.
 *
 * @param {puremvc.pipes.PipeMessage} message
 * @return {Boolean} true if any connected downpipe outputs failed
 */

Pipe.prototype.write = function( message )
{
    return this.output.write( message );
};
