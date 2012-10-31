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
 */
puremvc.define(
    // CLASS INFO
    {
        name: 'org.puremvc.js.multicore.utilities.pipes.messages.QueueControlMessage',
        parent: org.puremvc.js.multicore.utilities.pipes.messages.Message,
        constructor: function(args)
        {
            if (args)
            {
                this.type = args.type;
            }
        }
    },
    // INSTANCE MEMBERS
    {
    },
    // STATIC MEMBERS
    {
        BASE:  org.puremvc.js.multicore.utilities.pipes.messages.Message.BASE + '/queue/',
        // flush the queue
        FLUSH: org.puremvc.js.multicore.utilities.pipes.messages.Message.BASE + 'flush',
        // toggle to sort-by-priority
        SORT:  org.puremvc.js.multicore.utilities.pipes.messages.Message.BASE + 'sort',
        // toggle to FIFO operation mode (default behavior)
        FIFO:  org.puremvc.js.multicore.utilities.pipes.messages.Message.BASE + 'fifo'
    }
);