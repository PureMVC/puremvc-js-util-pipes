/**
 * Pipe Queue.
 * <P>
 * The Queue always stores inbound messages until you send it
 * a FLUSH control message, at which point it writes its buffer
 * to the output pipe fitting. The Queue can be sent a SORT
 * control message to go into sort-by-priority mode or a FIFO
 * control message to cancel sort mode and return the
 * default mode of operation, FIFO.</P>
 *
 * <P>
 * NOTE: There can effectively be only one Queue on a given
 * pipeline, since the first Queue acts on any queue control
 * message. Multiple queues in one pipeline are of dubious
 * use, and so having to name them would make their operation
 * more complex than need be.</P>
 */
function Queue(args)
{
    this.mode = QueueControlMessage.SORT;
    this.messages = [];
}


Queue.NAME = "Queue"


Queue.prototype = new Pipe;
Queue.prototype.constructor = Queue;


Queue.prototype.mode = null;
Queue.prototype.message = null;



/**
 * Handle the incoming message.
 * <P>
 * Normal messages are enqueued.</P>
 * <P>
 * The FLUSH message type tells the Queue to write all
 * stored messages to the ouptut PipeFitting, then
 * return to normal enqueing operation.</P>
 * <P>
 * The SORT message type tells the Queue to sort all
 * <I>subsequent</I> incoming messages by priority. If there
 * are unflushed messages in the queue, they will not be
 * sorted unless a new message is sent before the next FLUSH.
 * Sorting-by-priority behavior continues even after a FLUSH,
 * and can be turned off by sending a FIFO message, which is
 * the default behavior for enqueue/dequeue.</P>
 */
Queue.prototype.write = function(/*PipeMessage*/message)
{
    var success = true;
    switch (message.getType())
    {
        // Store normal messages
        case Message.NORMAL:
            this.store(message);
            break;

        // Flush the queue
        case QueueControlMessage.FLUSH:
            success = this.flush();
            break;

        // Put Queue into Priority Sort or FIFO mode
        // Subsequent messages written to the queue
        // will be affected. Sorted messages cannot
        // be put back into FIFO order!
        case QueueControlMessage.SORT:
        case QueueControlMessage.FIFO:
            this.mode = message.getType();
            break;

        default:
            break;
    }
    return success;
};


/**
 * Store a message.
 * @param message the PipeMessage to enqueue.
 * @return int the new count of messages in the queue
 */
Queue.prototype.store = function(/*PipeMessage*/message)
{
    this.messages.push(message);
    if (this.mode == QueueControlMessage.SORT)
    {
        this.message.sort(sortMessageByPriority);
    }
};


/**
 * Sort the Messages by priority
 */
Queue.prototype.sortMessagesByPriority = function(/*PipeMessage*/msgA, /*PipeMessage*/msgB)
{
    var num = 0;
    if (msgA.getPriority() < msgB.getPriority())
    {
        num = -1;
    }
    else
    {
        if (msgA.getPriority() > msgB.getPriority())
        {
            num = 1;
        }
    }
    return num;
};


/**
 * Flush the queue.
 * <P>
 * NOTE: This empties the queue.</P>
 * @return Boolean true if all messages written successfully.
 */
Queue.prototype.flush = function()
{
    var success = false;
    var message = this.messages.shift();
    // TODO: does this work for detecting the end of the messages stack?
    while (message != undefined)
    {
        var ok = this.output.write(message);
        if (!ok)
        {
            success = false;
        }
        message = this.messages.shift();
    }
    return success;
};