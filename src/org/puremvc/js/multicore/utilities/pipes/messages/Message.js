/**
 * Pipe Message.
 * <P>
 * Messages travelling through a Pipeline can
 * be filtered, and queued. In a queue, they may
 * be sorted by priority. Based on type, they
 * may used as control messages to modify the
 * behavior of filter or queue fittings connected
 * to the pipleline into which they are written.</P>
 */
puremvc.define(
    // CLASS INFO
    {
        name: 'org.puremvc.js.multicore.utilities.pipes.messages.Message',
        parent: org.puremvc.js.multicore.utilities.pipes.messages.PipeMessage,
        constructor: function(args)
        {
            if (args)
            {
                this.type = args.type;
                this.header = args.header;
                this.body = args.body;
                this.priority = args.priority;
            }
        }
    },
    // INSTANCE MEMBERS
    {
    },
    // STATIC MEMBERS
    {
        // Message type base URI
        PRIORITY_HIGH: 1,
        // Set filter parameters
        PRIORITY_MED: 5,
        // Set filter function
        PRIORITY_LOW: 10,
        BASE: 'http://puremvc.org/namespaces/pipes/messages/',
        NORMAL: 'http://puremvc.org/namespaces/pipes/messages/normal/'
    }
);