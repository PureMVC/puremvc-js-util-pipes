/**
 * Queue Control Message.
 * <P>
 * A special message for controlling the behavior of a Queue.</P>
 * <P>
 * When written to a pipeline containing a Queue, the type
 * of the message is interpreted and acted upon by the Queue.</P>
 * <P>
 * Unlike filters, multiple serially connected queues aren't
 * very useful and so they do not require a name. If multiple
 * queues are connected serially, the message will be acted
 * upon by the first queue only.</P>
 *
 * @class puremvc.pipes.QueueControlMessage
 * @extends puremvc.pipes.PipeMessage
 * @constructor
 * Creates a new QueueControlMessage instance
 * @param {String} type
 */
function QueueControlMessage( type )
{
   this.type = type;
}

QueueControlMessage.prototype = new PipeMessage;
QueueControlMessage.prototype.constructor = QueueControlMessage;

/**
 * QueueControlMessage Type Base URI
 *
 * @protected
 * @static
 * @property {String} [BASE='http://puremvc.org/namespaces/pipes/messages/queue/']
 */
QueueControlMessage.BASE  = Message.BASE + 'queue/';

/**
 * Type: Flush the Queue
 * 
 * @static
 * @property {String} [FLUSH='http://puremvc.org/namespaces/pipes/messages/queue/flush']
 */
QueueControlMessage.FLUSH = QueueControlMessage.BASE + 'flush';

/**
 * Type: Sort by Priority Mode
 * 
 * @static
 * @property {String} [SORT='http://puremvc.org/namespaces/pipes/messages/queue/mode/sort']
 */
QueueControlMessage.SORT  = QueueControlMessage.BASE + 'mode/sort';

/**
 * Type: FIFO operation (default behavior) 
 * 
 * @static
 * @property {String} [FIFO='http://puremvc.org/namespaces/pipes/messages/queue/mode/fifo']
 */
QueueControlMessage.FIFO  = QueueControlMessage.BASE + 'mode/fifo';
