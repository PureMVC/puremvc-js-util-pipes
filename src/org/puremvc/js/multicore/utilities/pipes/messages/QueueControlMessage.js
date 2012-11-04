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
 * @extends puremv.pipes.Message
 * @constructor
 * @param {string} [type]
 * The only relevant property is type.
 */
function QueueControlMessage( type )
{
	this.type = type;
}

QueueControlMessage.prototype = new Message;
QueueControlMessage.prototype.constructor = QueueControlMessage;

/**
 * QueueControlMessage Type Base URI
 * @type {string}
 * @protected
 * @static
 */
QueueControlMessage.BASE  = Message.BASE + 'queue/';

/**
 * QueueControlMessage Type: Flush the Queue
 * @type {string}
 * @static
 */
QueueControlMessage.FLUSH = QueueControlMessage.BASE + 'flush';

/**
 * QueueControlMessage Type: Toggle to Sort by Priority Mode
 * @type {string}
 * @static
// toggle to sort-by-priority
QueueControlMessage.SORT  = QueueControlMessage.BASE + 'sort';

/**
 * QueueControlMessage Type: Toggle to FIFO operation (default behavior) 
 * @type {string}
 * @static
QueueControlMessage.FIFO  = QueueControlMessage.BASE + 'fifo';
