/**
 * Pipe Listener.
 * <P>
 * Allows a class that does not implement <code>PipeFitting</code> to
 * be the final recipient of the messages in a pipeline.</P>
 * @see Junction
 */
function PipeListener(args)
{
    if (args)
    {
        this.context = args.context;
        this.listener = args.listener;
    }
}


PipeListener.NAME = "PipeListener";


PipeListener.prototype = new PipeFitting;
PipeListener.prototype.constructor = PipeListener;


PipeListener.prototype.context = null;
PipeListener.prototype.listener = null;


PipeListener.prototype.connect = function(/*PipeFitting*/output)
{
    return false;
};


PipeListener.prototype.disconnect =  function()
{
    return null;
};


PipeListener.prototype.write = function(/*PipeMessage*/message)
{
    this.listener.apply(this.context, [message]);
    return true;
};