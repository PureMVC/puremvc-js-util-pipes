/**
 * Pipe Filter.
 * <P>
 * Filters may modify the contents of messages before writing them to
 * their output pipe fitting. They may also have their parameters and
 * filter function passed to them by control message, as well as having
 * their Bypass/Filter operation mode toggled via control message.</p>
 */
puremvc.define(
    // CLASS INFO
    {
        name: 'org.puremvc.js.multicore.utilities.pipes.plumbing.Filter',
        parent: org.puremvc.js.multicore.utilities.pipes.plumbing.Pipe,
        constructor: function(args)
        {
            this.mode = org.puremvc.js.multicore.utilities.pipes.messages.FilterControlMessage.FILTER;
            this.params = [];
            this.filter = function(message, params)
            {
                return;
            };

            if (args)
            {
                this.name = args.name;
                this.output = args.output;
                if (args.filter != undefined)
                {
                    this.setFilter(args.filter);
                }
                if (args.params != null)
                {
                    this.setParams(args.params);
                }
            }
        }
    },
    // INSTANCE MEMBERS
    {
        mode: null,
        params: null,
        name: null,
        filter: null,
        /**
         * Handle the incoming message.
         * <P>
         * If message type is normal, filter the message (unless in BYPASS mode)
         * and write the result to the output pipe fitting if the filter
         * operation is successful.</P>
         *
         * <P>
         * The FilterControlMessage.SET_PARAMS message type tells the Filter
         * that the message class is FilterControlMessage, which it
         * casts the message to in order to retrieve the filter parameters
         * object if the message is addressed to this filter.</P>
         *
         * <P>
         * The FilterControlMessage.SET_FILTER message type tells the Filter
         * that the message class is FilterControlMessage, which it
         * casts the message to in order to retrieve the filter function.</P>
         *
         * <P>
         * The FilterControlMessage.BYPASS message type tells the Filter
         * that it should go into Bypass mode operation, passing all normal
         * messages through unfiltered.</P>
         *
         * <P>
         * The FilterControlMessage.FILTER message type tells the Filter
         * that it should go into Filtering mode operation, filtering all
         * normal normal messages before writing out. This is the default
         * mode of operation and so this message type need only be sent to
         * cancel a previous BYPASS message.</P>
         *
         * <P>
         * The Filter only acts on the control message if it is targeted
         * to this named filter instance. Otherwise it writes through to the
         * output.</P>
         *
         * @return Boolean True if the filter process does not throw an error and subsequent operations
         * in the pipeline succede.
         */
        write: function(/*PipeMessage*/message) {
            var outputMessage;
            var success = true;

            switch (message.type) {

                // filter normal messages
                case org.puremvc.js.multicore.utilities.pipes.messages.Message.NORMAL:
                    try {
                        if (this.mode == org.puremvc.js.multicore.utilities.pipes.messages.FilterControlMessage.FILTER) {
                            outputMessage = this.applyFilter(message);
                        }
                        else {
                            outputMessage = message;
                        }
                        success = this.output.write(outputMessage);
                    }
                    catch (e) {
                        success = false;
                    }
                    break;

                // accept parameters from control message
                case  org.puremvc.js.multicore.utilities.pipes.messages.FilterControlMessage.SET_PARAMS:
                    if (this.isTarget(message)) {
                        this.setParams(message.params);
                    }
                    else {
                        success = this.output.write(outputMessage);
                    }
                    break;

                // accept filter function from control message
                case org.puremvc.js.multicore.utilities.pipes.messages.FilterControlMessage.SET_FILTER:
                    if (this.isTarget(message)) {
                        this.setFilter(message.filter);
                    }
                    else {
                        success = this.output.write(outputMessage);
                    }
                    break;

                // toggle between filter or bypass operational modes
                case org.puremvc.js.multicore.utilities.pipes.messages.FilterControlMessage.BYPASS:
                case org.puremvc.js.multicore.utilities.pipes.messages.FilterControlMessage.FILTER:
                    if (this.isTarget(message)) {
                        this.mode = message.type;
                    }
                    else {
                        success = this.output.write(message);
                    }
                    break;

                default:
                    success = this.output.write(outputMessage);
            }

            return success;
        },


        /**
         * is the message directed at this filter instance?
         */
        isTarget: function(/*PipeMessage*/message) {
            return (message.name == this.name);
        },


        /**
         * Set the filter parameters
         * <P>
         * This can be an object and can container whatever arbitrary properties and values your filter
         * method requires to operate. </P>
         *
         * @param params the parameters object
         */
        setParams: function(/*Object*/params) {
            this.params = params;
        },


        /**
         * Set the filter function.
         * <P>
         * It must accept two arguments; an PipeMessage, and a parameter Object, which
         * can container whatever arbitrary properties and values your filter method requires.</P>
         * @param filter
         *
         * @param filter the filter function
         */
        setFilter: function(/*Function*/filter) {
            this.filter = filter;
        },


        /**
         * Filter the message
         */
        applyFilter: function(/*PipeMessage*/message) {
            this.filter.apply(this, [message, this.params]);
            return message;
        }
    },
    // STATIC MEMBERS
    {
        NAME: 'Filter'
    }
);