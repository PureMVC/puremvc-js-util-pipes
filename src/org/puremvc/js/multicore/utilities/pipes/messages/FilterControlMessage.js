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
 */
function FilterControlMessage(args)
{
    if (args)
    {
        this.type = args.type;
        this.name = args.name;
        this.filter = args.filter;
        this.params = args.params;
    }
}


FilterControlMessage.NAME = "FilterControlMessage";


FilterControlMessage.prototype = new Message;
FilterControlMessage.prototype.constructor = FilterControlMessage;


FilterControlMessage.prototype.name = null;
FilterControlMessage.prototype.filter = null;
FilterControlMessage.prototype.params = null;

// Message type base URI
FilterControlMessage.BASE = Message.BASE + 'filter-control/';
// Set filter parameters
FilterControlMessageSET_PARAMS = Message.BASE + 'setparams';
// Set filter function
FilterControlMessageSET_FILTER = Message.BASE + 'setfilter';
// Toggle to filter bypass mode
FilterControlMessageBYPASS = Message.BASE + 'bypass';
// Toggle to filtering mode (default behavior)
FilterControlMessageFILTER = Message.BASE + 'filter';