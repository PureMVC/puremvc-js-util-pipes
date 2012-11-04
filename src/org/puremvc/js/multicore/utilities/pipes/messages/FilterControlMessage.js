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
 * @extends puremv.pipes.Message
 * @constructor
 * @param {Object} [args]
 * type, name, filter, and params  may be set.
 */
function FilterControlMessage(args)
{
    if (args)
    {
        this.type 	= args.type;
        this.name 	= args.name;
        this.filter 	= args.filter;
        this.params 	= args.params;
    }
}

FilterControlMessage.prototype = new Message;
FilterControlMessage.prototype.constructor = FilterControlMessage;

/**
 * FilterControlMessage Type Base URI
 * @type {string}
 * @protected
 * @static
 */
FilterControlMessage.BASE = Message.BASE + 'filter-control/';

/**
 * FilterControlMessage Type: Set Parameters
 * @type {string}
 * @static
 */
FilterControlMessage.SET_PARAMS = FilterControlMessage.BASE + 'setparams';

/**
 * FilterControlMessage Type: Set Filter Function
 * @type {string}
 * @static
 */
FilterControlMessageSET_FILTER = FilterControlMessage.BASE + 'setfilter';

/**
 * FilterControlMessage Type: Toggle to Filter Bypass Mode
 * @type {string}
 * @static
 */
FilterControlMessage.BYPASS = FilterControlMessage.BASE + 'bypass';

/**
 * FilterControlMessage Type: Toggle to filtering mode (default behavior) 
 * @type {string}
 * @static
FilterControlMessage.FILTER = FilterControlMessage.BASE + 'filter';

/**
 * Target Filter Name
 * @type {string}
 */ 
FilterControlMessage.prototype.name = null;

/**
 * Filter Function
 * @type {Function}
 */ 
FilterControlMessage.prototype.filter = null;

/**
 * Filter Parameters
 * @type {Object}
 */ 
FilterControlMessage.prototype.params = null;
