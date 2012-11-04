/**
 * Message base class
 * <P>
 * <code>Message</code>s are written into a pipeline composed of
 * <code>PipeFitting</code>s. Pipelines to connect cores in a PureMVC MultiCore app.
 * The <code>Message is passed from one fitting to the
 * next in synchronous fashion. </P>
 * <P>
 * Depending on type, message may be handled differently by the fittings. </P>
 * <P>
 * Messages travelling through a Pipeline can
 * be filtered, and queued. In a queue, they may
 * be sorted by priority. Based on type, they
 * may used as control messages to modify the
 * behavior of filter or queue fittings connected
 * to the pipleline into which they are written.</P>
 *
 * @class puremvc.pipes.Message
 * @constructor
 * @param {Object} [args]
 * type, header, body, and priority may be set.
 */
function Message( args )
{
    if (args)
    {
        this.type 	= args.type;
        this.header 	= args.header;
        this.body 	= args.body;
        this.priority 	= args.priority;
    }
}

/** 
 * High priority Messages can be sorted to the front of the queue 
 * @static
 */
Message.PRIORITY_HIGH = 1;

/** 
 * Medium priority Messages are the default
 * @static
 */
Message.PRIORITY_MED = 5;

/** 
 * Low priority Messages can be sorted to the back of the queue
 * @static
 */
Message.PRIORITY_LOW = 10;

/** 
 * Message Type Base URI
 * @static
 */
Message.BASE = 'http://puremvc.org/namespaces/pipes/messages/';

/** 
 * Message Type: Normal
 * @static
 */
Message.NORMAL = Message.BASE + 'normal';

/** 
 * Message Type
 * @type {string}
 */
Message.prototype.type = Message.NORMAL;

/** 
 * Message Header
 * @type {Object}
 */
Message.prototype.header = null;

/** 
 * Message Body
 * @type {Object}
 */
Message.prototype.body = null;

/** 
 * Message Priority
 * @type {int}
 */
Message.prototype.priority = Message.PRIORITY_MED;
