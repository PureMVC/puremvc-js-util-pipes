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
puremvc.define(
    // CLASS INFO
    {
        name: 'org.puremvc.js.multicore.utilities.pipes.messages.FilterControlMessage',
        parent: org.puremvc.js.multicore.utilities.pipes.messages.Message,
        constructor: function(args)
        {
            if (args)
            {
                this.type = args.type;
                this.name = args.name;
                this.filter = args.filter;
                this.params = args.params;
            }
        }
    },
    // INSTANCE MEMBERS
    {
        name: null,
        filter: null,
        params: null
    },
    // STATIC MEMBERS
    {
        // Message type base URI
        BASE: org.puremvc.js.multicore.utilities.pipes.messages.Message.BASE + 'filter-control/',
        // Set filter parameters
        SET_PARAMS: org.puremvc.js.multicore.utilities.pipes.messages.Message.BASE + 'setparams',
        // Set filter function
        SET_FILTER: org.puremvc.js.multicore.utilities.pipes.messages.Message.BASE + 'setfilter',
        // Toggle to filter bypass mode
        BYPASS: org.puremvc.js.multicore.utilities.pipes.messages.Message.BASE + 'bypass',
        // Toggle to filtering mode (default behavior)
        FILTER: org.puremvc.js.multicore.utilities.pipes.messages.Message.BASE + 'filter'
    }
);