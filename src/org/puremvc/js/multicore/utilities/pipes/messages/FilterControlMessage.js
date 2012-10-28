/**
 * Filter Control Message.
 * <P>
 * A special message type for controlling the behavior of a Filter.</P>
 * <P>
 * The <code>FilterControlMessage.SET_PARAMS</code> message type tells the Filter
 * to retrieve the filter parameters object.</P>
 *
 * <P>
 * The <code>FilterControlMessage.SET_FILTER</code> message type tells the Filter
 * to retrieve the filter function.</P>
 *
 * <P>
 * The <code>FilterControlMessage.BYPASS</code> message type tells the Filter
 * that it should go into Bypass mode operation, passing all normal
 * messages through unfiltered.</P>
 *
 * <P>
 * The <code>FilterControlMessage.FILTER</code> message type tells the Filter
 * that it should go into Filtering mode operation, filtering all
 * normal normal messages before writing out. This is the default
 * mode of operation and so this message type need only be sent to
 * cancel a previous  <code>FilterControlMessage.BYPASS</code> message.</P>
 *
 * <P>
 * The Filter only acts on a control message if it is targeted
 * to this named filter instance. Otherwise it writes the message
 * through to its output unchanged.</P>
 *
 * @class puremvc.pipes.FilterControlMessage
 * @extends puremvc.pipes.PipeMessage
 * @constructor
 * Creates a new FilterControlMessage instance
 * @param {String} type
 * @param {String} name
 * @param {Function} [filter]
 * @param {Object} [params]
 */
function FilterControlMessage( type, name, filter, params )
{
   this.type 	= type;
   this.name 	= name;
   this.filter 	= filter;
   this.params 	= params;
}

FilterControlMessage.prototype = new PipeMessage;
FilterControlMessage.prototype.constructor = FilterControlMessage;

/**
 * FilterControlMessage Type Base URI
 *
 * @protected
 * @static
 * @property {String} [BASE='http://puremvc.org/namespaces/pipes/messages/filter-control/']
 */
FilterControlMessage.BASE = Message.BASE + 'filter-control/';

/**
 * Type: Set Parameters
 *
 * @static
 * @property {String} [SET_PARAMS='http://puremvc.org/namespaces/pipes/messages/filter-control/params/set']
 */
FilterControlMessage.SET_PARAMS = FilterControlMessage.BASE + 'params/set';

/**
 * Type: Set Filter Function
 *
 * @static
 * @property {String} [SET_FILTER='http://puremvc.org/namespaces/pipes/messages/filter-control/filter/set']
 */
FilterControlMessage.SET_FILTER = FilterControlMessage.BASE + 'filter/set';

/**
 * Type: Bypass Mode
 *
 * @static
 * @property {String} [BYPASS='http://puremvc.org/namespaces/pipes/messages/filter-control/mode/bypass']
 */
FilterControlMessage.BYPASS = FilterControlMessage.BASE + 'mode/bypass';

/**
 * Type: Filtering Mode (default behavior) 
 *
 * @static
 * @property {String} [FILTER='http://puremvc.org/namespaces/pipes/messages/filter-control/mode/filter']
 */
FilterControlMessage.FILTER = FilterControlMessage.BASE + 'mode/filter';

/**
 * Target Filter Name
 *
 * @property {String}
 */ 
FilterControlMessage.prototype.name = null;

/**
 * Filter Function
 *
 * @property {Function}
 */ 
FilterControlMessage.prototype.filter = null;

/**
 * Filter Parameters
 *
 * @property {Object}
 */ 
FilterControlMessage.prototype.params = null;
