/**
 * @class org.puremvc.js.multicore.utilities.pipes.plumbing.PipeMessage
 * Pipe Message base class
 * <P>
 * <code>PipeMessage</code>s are objects written into a Pipeline, composed of
 * <code>PipeFitting</code>s.  The message is passed from one fitting to the
 * next in synchronous fashion. </P>
 * <P>
 * Depending on type, message may be handled differently by the fittings. </P>
 */
puremvc.define(
    // CLASS INFO
    {
        name: 'org.puremvc.js.multicore.utilities.pipes.messages.PipeMessage'
    },
    // INSTANCE MEMBERS
    {
        type: null,
        header: null,
        body: null,
        priority: null,


        getType: function()
        {
            return this.type;
        },
        setType: function(arg)
        {
            this.type = arg;
        },


        getHeader: function()
        {
            return this.header;
        },
        setHeader: function(arg)
        {
            this.header = arg;
        },


        getBody: function()
        {
            return this.body;
        },
        setBody: function(arg)
        {
            this.body = arg;
        },


        getPriority: function()
        {
            return this.priority;
        },
        setPriority: function(arg)
        {
            this.priority = arg;
        }

    },
    // STATIC MEMBERS
    {
    }
);