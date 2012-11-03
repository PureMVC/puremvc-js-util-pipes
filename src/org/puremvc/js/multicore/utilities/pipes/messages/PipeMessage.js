/**
 * @class org.puremvc.js.multicore.utilities.pipes.plumbing.PipeMessage
 * Pipe Message base class
 * <P>
 * <code>PipeMessage</code>s are objects written into a Pipeline, composed of
 * <code>PipeFitting</code>s.  The message is passed from one fitting to the
 * next in synchronous fashion. </P>
 * <P>
 * Depending on type, message may be handled differently by the fittings. </P>
 */
function PipeMessage()
{
}


PipeMessage.NAME = "PipeMessage";


PipeMessage.constructor = PipeMessage;


PipeMessage.prototype.getType = function()
{
    return this.type;
};
PipeMessage.prototype.setType = function(arg)
{
    this.type = arg;
};


PipeMessage.prototype.getHeader = function()
{
    return this.header;
};
PipeMessage.prototype.setHeader = function(arg)
{
    this.header = arg;
};


PipeMessage.prototype.getBody = function()
{
    return this.body;
};
PipeMessage.prototype.setBody = function(arg)
{
    this.body = arg;
};


PipeMessage.prototype.getPriority = function()
{
    return this.priority;
};
PipeMessage.prototype.setPriority = function(arg)
{
    this.priority = arg;
};


PipeMessage.prototype.type = null;
PipeMessage.prototype.header = null;
PipeMessage.prototype.body = null;
PipeMessage.prototype.priority = null;