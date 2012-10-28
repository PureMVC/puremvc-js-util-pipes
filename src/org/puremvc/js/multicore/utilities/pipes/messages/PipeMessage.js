/**
 * PipeMessage Base Class
 * <P>
 * PipeMessages are written into a pipeline composed of
 * PipeFittings. Pipelines to connect cores in a 
 * PureMVC MultiCore app.</P>
 * <P>
 * The PipeMessage is passed from one fitting to the
 * next in synchronous fashion. Depending on type, 
 * message may be handled differently by the fittings. </P>
 * <P>
 * PipeMessages travelling through a Pipeline can
 * be filtered, and queued. In a queue, they may
 * be sorted by priority. Based on type, they
 * may used as control messages to modify the
 * behavior of filter or queue fittings connected
 * to the pipleline into which they are written.</P>
 *
 * @class puremvc.pipes.PipeMessage
 * @constructor
 * Creates a new PipeMessage instance
 * @param {String} type
 * @param {Object} [header]
 * @param {Object} [body]
 * @param {Number} [priority]
 */
function PipeMessage( type, header, body, priority )
{
   this.type 	 = type;
   this.header 	 = header;
   this.body 	 = body;
   this.priority = priority;
}

/** 
 * Priority: High. PipeMessage can be sorted to the front of the queue 
 *
 * @static
 * @property {Number}
 */
PipeMessage.PRIORITY_HIGH = 1;

/** 
 * Priority: Medium. The default
 *
 * @static
 * @property {Number}
 */
PipeMessage.PRIORITY_MED = 5;

/** 
 * Priority: Low. PipeMessage can be sorted to the back of the queue
 *
 * @static
 * @property {Number}
 */
PipeMessage.PRIORITY_LOW = 10;

/** 
 * PipeMessage Type Base URI
 *
 * @protected
 * @static
 * @property {String}
 */
PipeMessage.BASE = 'http://puremvc.org/namespaces/pipes/messages/';

/** 
 * Type: Normal
 *
 * @static
 * @property {String} [NORMAL='http://puremvc.org/namespaces/pipes/messages/normal']
 */
PipeMessage.NORMAL = PipeMessage.BASE + 'normal';

/** 
 * Type: Error
 *
 * @static
 * @property {String} [ERROR='http://puremvc.org/namespaces/pipes/messages/error']
 */
PipeMessage.ERROR = PipeMessage.BASE + 'error';

/** 
 * PipeMessage Type
 *
 * @property {String} [type=PipeMessage.NORMAL]
 */
PipeMessage.prototype.type = PipeMessage.NORMAL;

/** 
 * PipeMessage Header
 *
 * @property {Object}
 */
PipeMessage.prototype.header = null;

/** 
 * PipeMessage Body
 *
 * @property {Object}
 */
PipeMessage.prototype.body = null;

/** 
 * PipeMessage Priority
 *
 * @property {Number} [priority=PipeMessage.PRIORITY_MED]
 */
PipeMessage.prototype.priority = PipeMessage.PRIORITY_MED;
