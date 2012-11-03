/**
 * @class org.puremvc.js.multicore.utilities.pipes.plumbing.PipeAware
 * Pipe Aware base class.
 * <P>
 * Can be implemented by any PureMVC Core that wishes
 * to communicate with other Cores using the Pipes
 * utility.</P>
 */
function PipeAware()
{
}


PipeAware.NAME = "PipeAware";


PipeAware.prototype.acceptInputPipe =function(/*String*/ name, /*PipeFitting*/ pipe)
{
};

PipeAware.prototype.acceptOutputPipe = function(/*String*/ name, /*PipeFitting*/ pipe)
{
};