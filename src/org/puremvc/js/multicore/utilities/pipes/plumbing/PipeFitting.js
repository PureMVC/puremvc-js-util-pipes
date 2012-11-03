/**
 * @class org.puremvc.js.multicore.utilities.pipes.interfaces.PipeFitting
 * Pipe Fitting base class.
 * <P>
 * An <code>PipeFitting</code> can be connected to other
 * <code>PipeFitting</code>s, forming a Pipeline.
 * <code>PipeMessage</code>s are written to one end of a
 * Pipeline by some client code. The messages are then
 * transferred in synchronous fashion from one fitting to the next.
 */
function PipeFitting(args)
{
}


PipeFitting.NAME = "PipeFitting";


PipeFitting.prototype.constructor = PipeFitting;

/**
 * Connect another PipeFitting to the output
 * <P>
 * Fittings connect and write to other fittings in a one way
 * synchronous chain, as water typically flows one direction through
 * a physical pipe.</P>
 * @return Boolean true if no other fitting was already connected
 */
PipeFitting.prototype.connect = function(/*PipeFitting*/output)
{
};


/**
 * Disconnect the Pipe Fitting connected to the output.
 * <P>
 * This disconnects the output fitting, returning a reference to it.  If you were
 * splicing another fitting into a pipeline, you need to keep (at least briefly) a
 * reference to both sides of the pipeline in order
 */
PipeFitting.prototype.disconnect = function()
{
};


/**
 * Write the message to the output Pipe Fitting.
 * <P>
 * There may be subsequent filters and tees (which also implement this interface), that
 * the fitting is writing to, and so a message may branch and arrive in different forms
 * at different end points </P>
 * <P>
 * If any fitting in the chain returns false from this method, then the client who
 * originally wrote into the pipe can take action, such as rolling back changes.</P>
 */
PipeFitting.prototype.write = function(/*PipeMessage*/message)
{
};