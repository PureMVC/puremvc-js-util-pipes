/**
 * @fileOverview
 * PureMVC Pipes JS Native Port by Bill White
 */
(function (scope){
	
	if (null == scope)
	    scope = window;
	
	// if the global puremvc namespace already exists, turn back now
	if (scope.puremvc.pipes)
	{
		return;
	}

 	/* implementation begin */
	
	
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
function PipeMessage()
{
}


PipeMessage.NAME = "PipeMessage";


PipeMessage.constructor = PipeMessage;


PipeMessage.prototype.getType = function()
{
    return this.type;
};
PipeMessage.prototype.setType = function(arg)
{
    this.type = arg;
};


PipeMessage.prototype.getHeader = function()
{
    return this.header;
};
PipeMessage.prototype.setHeader = function(arg)
{
    this.header = arg;
};


PipeMessage.prototype.getBody = function()
{
    return this.body;
};
PipeMessage.prototype.setBody = function(arg)
{
    this.body = arg;
};


PipeMessage.prototype.getPriority = function()
{
    return this.priority;
};
PipeMessage.prototype.setPriority = function(arg)
{
    this.priority = arg;
};


PipeMessage.prototype.type = null;
PipeMessage.prototype.header = null;
PipeMessage.prototype.body = null;
PipeMessage.prototype.priority = null;
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
function Message(args)
{
    if (args)
    {
        this.type = args.type;
        this.header = args.header;
        this.body = args.body;
        this.priority = args.priority;
    }
}


Message.NAME = "Message";


Message.prototype = new PipeMessage;
Message.prototype.constructor = Message;


// Message type base URI
Message.PRIORITY_HIGH = 1;
// Set filter parameters
Message.PRIORITY_MED = 5;
// Set filter function
Message.PRIORITY_LOW = 10;
Message.BASE = 'http://puremvc.org/namespaces/pipes/messages/';
Message.NORMAL = 'http://puremvc.org/namespaces/pipes/messages/normal/';
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

function QueueControlMessage(args)
{
    if (args)
    {
        this.type = args.type;
    }
}


QueueControlMessage.NAME = "QueueControlMessage";


QueueControlMessage.prototype = new Message;
QueueControlMessage.prototype.constructor = QueueControlMessage;

QueueControlMessage.BASE  = Message.BASE + '/queue/';
// flush the queue
QueueControlMessage.FLUSH = Message.BASE + 'flush';
// toggle to sort-by-priority
QueueControlMessage.SORT  = Message.BASE + 'sort';
// toggle to FIFO operation mode (default behavior)
QueueControlMessage.FIFO  = Message.BASE + 'fifo';
/**
 * @class org.puremvc.js.multicore.utilities.pipes.interfaces.PipeFitting
 * Pipe Fitting base class.
 * <P>
 * An <code>PipeFitting</code> can be connected to other
 * <code>PipeFitting</code>s, forming a Pipeline.
 * <code>PipeMessage</code>s are written to one end of a
 * Pipeline by some client code. The messages are then
 * transferred in synchronous fashion from one fitting to the next.
 */
function PipeFitting(args)
{
}


PipeFitting.NAME = "PipeFitting";


PipeFitting.prototype.constructor = PipeFitting;

/**
 * Connect another PipeFitting to the output
 * <P>
 * Fittings connect and write to other fittings in a one way
 * synchronous chain, as water typically flows one direction through
 * a physical pipe.</P>
 * @return Boolean true if no other fitting was already connected
 */
PipeFitting.prototype.connect = function(/*PipeFitting*/output)
{
};


/**
 * Disconnect the Pipe Fitting connected to the output.
 * <P>
 * This disconnects the output fitting, returning a reference to it.  If you were
 * splicing another fitting into a pipeline, you need to keep (at least briefly) a
 * reference to both sides of the pipeline in order
 */
PipeFitting.prototype.disconnect = function()
{
};


/**
 * Write the message to the output Pipe Fitting.
 * <P>
 * There may be subsequent filters and tees (which also implement this interface), that
 * the fitting is writing to, and so a message may branch and arrive in different forms
 * at different end points </P>
 * <P>
 * If any fitting in the chain returns false from this method, then the client who
 * originally wrote into the pipe can take action, such as rolling back changes.</P>
 */
PipeFitting.prototype.write = function(/*PipeMessage*/message)
{
};
/**
 * Pipe Listener.
 * <P>
 * Allows a class that does not implement <code>PipeFitting</code> to
 * be the final recipient of the messages in a pipeline.</P>
 * @see Junction
 */
function PipeListener(args)
{
    if (args)
    {
        this.context = args.context;
        this.listener = args.listener;
    }
}


PipeListener.NAME = "PipeListener";


PipeListener.prototype = new PipeFitting;
PipeListener.prototype.constructor = PipeListener;


PipeListener.prototype.context = null;
PipeListener.prototype.listener = null;


PipeListener.prototype.connect = function(/*PipeFitting*/output)
{
    return false;
};


PipeListener.prototype.disconnect =  function()
{
    return null;
};


PipeListener.prototype.write = function(/*PipeMessage*/message)
{
    this.listener.apply(this.context, [message]);
    return true;
};
/**
 * Pipe.
 * <P>
 * This is the most basic <code>PipeFitting</code>,
 * simply allowing the connection of an output
 * fitting and writing of a message to that output.</P>
 */
function Pipe(args)
{
    if (args)
    {
        this.connect(args.output);
    }
}


Pipe.NAME = "Pipe";


Pipe.prototype = new PipeFitting;
Pipe.prototype.constructor = Pipe;


Pipe.prototype.output = null;

/**
 * Connect another PipeFitting to the output.
 * PipeFittings connect to and write to other
 * PipeFittings in a one-way, synchronous chain.</P>
 * @param output
 * @return boolean true if no other fitting was already connected.
 */

Pipe.prototype.connect = function(/*PipeFitting*/output)
{
    var success = false;
    if (this.output == undefined)
    {
        this.output = output;
        success = true;
    }
    return success;
};


/**
 * Disconnect the Pipe Fitting connected to the output.
 * <P>
 * This disconnects the output fitting, returning a
 * reference to it. If you were splicing another fitting
 * into a pipeline, you need to keep (at least briefly)
 * a reference to both sides of the pipeline in order to
 * connect them to the input and output of whatever
 * fiting that you're splicing in.</P>
 *
 * @return PipeFitting the now disconnected output fitting
 */

Pipe.prototype.disconnect = function()
{
    var disconnectedFitting = this.output;
    this.output = undefined;
    return disconnectedFitting;
};


/**
 * Write the message to the connected output.
 * @param message the message to write
 * @return Boolean whether any connected downpipe outputs failed
 */

Pipe.prototype.write = function(/*PipeMessage*/message)
{
    return this.output.write(message);
};
/**
 * Pipe Filter.
 * <P>
 * Filters may modify the contents of messages before writing them to
 * their output pipe fitting. They may also have their parameters and
 * filter function passed to them by control message, as well as having
 * their Bypass/Filter operation mode toggled via control message.</p>
 */
function Filter(args)
{
    if (args)
    {
        this.mode = Filter.FILTER;
        this.params = [];
        this.filter = function(message, params)
        {
            return;
        };

        if (args) {
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
}


Filter.NAME = "Filter";


Filter.prototype = new Pipe;
Filter.prototype.constructor = Filter;


Filter.prototype.mode = null;
Filter.prototype.params = null;
Filter.prototype.name = null;
Filter.prototype.filter = null;


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
Filter.prototype.write = function(/*PipeMessage*/message)
{
    var outputMessage;
    var success = true;

    switch (message.type)
    {
        // filter normal messages
        case Message.NORMAL:
            try {
                if (this.mode == FilterControlMessage.FILTER)
                {
                    outputMessage = this.applyFilter(message);
                }
                else
                {
                    outputMessage = message;
                }
                success = this.output.write(outputMessage);
            }
            catch (e)
            {
                success = false;
            }
            break;

        // accept parameters from control message
        case  FilterControlMessage.SET_PARAMS:
            if (this.isTarget(message))
            {
                this.setParams(message.params);
            }
            else
            {
                success = this.output.write(outputMessage);
            }
            break;

        // accept filter function from control message
        case FilterControlMessage.SET_FILTER:
            if (this.isTarget(message))
            {
                this.setFilter(message.filter);
            }
            else
            {
                success = this.output.write(outputMessage);
            }
            break;

        // toggle between filter or bypass operational modes
        case FilterControlMessage.BYPASS:
        case FilterControlMessage.FILTER:
            if (this.isTarget(message))
            {
                this.mode = message.type;
            }
            else
            {
                success = this.output.write(message);
            }
            break;

        default:
            success = this.output.write(outputMessage);
    }

    return success;
};


/**
 * is the message directed at this filter instance?
 */
Filter.prototype.isTarget = function(/*PipeMessage*/message)
{
    return (message.name == this.name);
};


/**
 * Set the filter parameters
 * <P>
 * This can be an object and can container whatever arbitrary properties and values your filter
 * method requires to operate. </P>
 *
 * @param params the parameters object
 */
Filter.prototype.setParams =function(/*Object*/params)
{
    this.params = params;
};


/**
 * Set the filter function.
 * <P>
 * It must accept two arguments; an PipeMessage, and a parameter Object, which
 * can container whatever arbitrary properties and values your filter method requires.</P>
 * @param filter
 *
 * @param filter the filter function
 */
Filter.prototype.setFilter = function(/*Function*/filter)
{
    this.filter = filter;
};


/**
 * Filter the message
 */
Filter.prototype.applyFilter =function(/*PipeMessage*/message)
{
    this.filter.apply(this, [message, this.params]);
    return message;
};
/**
 * @class org.puremvc.js.multicore.utilities.pipes.PipeAware
 * Pipe Aware interface.
 * <P>
 * Can be implemented by any PureMVC Core that wishes
 * to communicate with other Cores using the Pipes
 * utility.</P>
 */
function Junction(args)
{
    this.inputPipes = [];
    this.outputPipes = [];
    this.pipesMap = [];
    this.pipeTypesMap = [];
}


Junction.NAME = "Junction";


Junction.prototype.constructor = Junction;


Junction.prototype.inputPipes = null;
Junction.prototype.outputPipes = null;
Junction.prototype.pipesMap = null;
Junction.prototype.pipeTypesMap = null;

/**
 * Register a pipe with the junction.
 * <P>
 * Pipes are registered by unique name and type,
 * which must be either <code>Junction.INPUT</code>
 * or <code>Junction.OUTPUT</code>.</P>
 * <P>
 * NOTE: You cannot have an INPUT pipe and an OUTPUT
 * pipe registered with the same name. All pipe names
 * must be unique regardless of type.</P>
 *
 * @return Boolean true if successfully registered. false if another pipe exists by that name.
 */
Junction.prototype.registerPipe = function(/*String*/name, /*String*/type, /*IPipeFitting*/pipe)
{
    var success = true;
    if (this.pipesMap[name] == undefined)
    {
        this.pipesMap[name] = pipe;
        this.pipeTypesMap[name] = type;

        switch (type)
        {
            case Junction.INPUT:
                this.inputPipes.push(name);
                break;

            case Junction.OUTPUT:
                this.outputPipes.push(name);
                break;

            default:
                success = false;
        }
    }
    else
    {
        success = false;
    }

    return success;
};


/**
 * Does this junction have a pipe by this name?
 *
 * @param name the pipe to check for
 * @return Boolean whether as pipe is registered with that name.
 */
Junction.prototype.hasPipe = function(/*String*/name)
{
    return (this.pipesMap[name] != undefined);
};


/**
 * Does this junction have an INPUT pipe by this name?
 *
 * @param name the pipe to check for
 * @return Boolean whether an INPUT pipe is registered with that name.
 */
Junction.prototype.hasInputPipe = function(/*String*/name)
{
    return (this.hasPipe(name) && (this.pipeTypesMap[name] == "input"));
};


/**
 * Does this junction have an OUTPUT pipe by this name?
 *
 * @param name the pipe to check for
 * @return Boolean whether an OUTPUT pipe is registered with that name.
 */
Junction.prototype.hasOutputPipe = function(/*String*/name)
{
    return (this.hasPipe(name) && (this.pipeTypesMap[name] == "output"));
};


/**
 * Remove the pipe with this name if it is registered.
 * <P>
 * NOTE: You cannot have an INPUT pipe and an OUTPUT
 * pipe registered with the same name. All pipe names
 * must be unique regardless of type.</P>
 *
 * @param name the pipe to remove
 */
Junction.prototype.removePipe = function(/*String*/ name)
{
    if (this.hasPipe(name))
    {
        var type = this.pipeTypesMap[name];
        var pipesList = [];

        switch (type)
        {
            case Junction.INPUT:
                pipesList = this.inputPipes;
                break;

            case Junction.OUTPUT:
                pipesList = this.outputPipes;
                break;
        }

        for (var i=0; i<pipesList.length; i++)
        {
            if (pipesList[i] == name) {
                pipesList.splice(i, 1);
                break;
            }
        }

        this.pipesMap.splice(this.pipesMap.indexOf(name), 1);
        this.pipeTypesMap.splice(this.pipeTypesMap.indexOf(name), 1);
    }
};


/**
 * Retrieve the named pipe.
 * @param name the pipe to retrieve
 * @return IPipeFitting the pipe registered by the given name if it exists
 */
Junction.prototype.retrievePipe =function(/*String*/name)
{
    return this.pipesMap[name];
};


/**
 * Add a PipeListener to an INPUT pipe.
 * <P>
 * NOTE: there can only be one PipeListener per pipe,
 * and the listener function must accept an IPipeMessage
 * as its sole argument.</P>
 *
 * @param name the INPUT pipe to add a PipeListener to
 * @param context the calling context or 'this' object
 * @param listener the function on the context to call
 */
Junction.prototype.addPipeListener = function(/*String*/inputPipeName, /*Object*/context, /*Function*/listener)
{
    var success = false;
    if (this.hasInputPipe(inputPipeName))
    {
        var pipe = this.pipesMap[inputPipeName];
        success = pipe.connect(new PipeListener({context:context, listener:listener}));
    }
    return success;
};


/**
 * Send a message on an OUTPUT pipe.
 * @param name the OUTPUT pipe to send the message on
 * @param message the IPipeMessage to send
 */
Junction.prototype.sendMessage = function(/*String*/outputPipeName, /*IPipeMessage*/message)
{
    var success = false;
    if (this.hasOutputPipe(outputPipeName))
    {
        var pipe = this.pipesMap[outputPipeName];
        success = pipe.write(message)
    }
    return success;
};


Junction.INPUT = "input";
Junction.OUTPUT = "output";
/**
 * JunctionMediator
 */
function JunctionMediator()
{
}


JunctionMediator.NAME = "JunctionMediator";


JunctionMediator.prototype = new puremvc.Mediator;
JunctionMediator.prototype.constructor = JunctionMediator;


/**
 * List Notification Interests.
 * <P>
 * Returns the notification interests for this base class.
 * Override in subclass and call <code>super.listNotificationInterests</code>
 * to get this list, then add any sublcass interests to
 * the array before returning.</P>
 */
JunctionMediator.prototype.listNotificationInterests = function()
{
    return [
        JunctionMediator.ACCEPT_INPUT_PIPE,
        JunctionMediator.ACCEPT_OUTPUT_PIPE
    ];
};


/**
 * Handle Notification.
 * <P>
 * This provides the handling for common junction activities. It
 * accepts input and output pipes in response to <code>PipeAware</code>
 * interface calls.</P>
 * <P>
 * Override in subclass, and call <code>super.handleNotification</code>
 * if none of the subclass-specific notification names are matched.</P>
 */
JunctionMediator.prototype.handleNotification = function(notification)
{
    switch (notification.getName())
    {
        // accept an input pipe
        // register the pipe and if successful
        // set this mediator as its listener
        case JunctionMediator.ACCEPT_INPUT_PIPE:
            var inputPipeName = notification.getType();
            var inputPipe = notification.getBody();
            if (this.getJunction().registerPipe(inputPipeName, Junction.INPUT, inputPipe))
            {
                this.getJunction().addPipeListener(inputPipeName, this, this.handlePipeMessage);
            }
            break;

        // accept an output pipe
        case JunctionMediator.ACCEPT_OUTPUT_PIPE:
            var outputPipeName = notification.getType();
            var outputPipe = notification.getBody();
            this.getJunction().registerPipe(outputPipeName, Junction.OUTPUT, outputPipe);
            break;

        default:
            break;
    }
};


JunctionMediator.prototype.handlePipeMessage = function(message)
{
};


JunctionMediator.prototype.getJunction = function()
{
    return this.viewComponent;
};

// accept input pipe notification name constant
JunctionMediator.ACCEPT_INPUT_PIPE = 'acceptInputPipe';
// accept output pipe notification name constant
JunctionMediator.ACCEPT_OUTPUT_PIPE = 'acceptOutputPipe';
/**
 * @class org.puremvc.js.multicore.utilities.pipes.plumbing.PipeAware
 * Pipe Aware base class.
 * <P>
 * Can be implemented by any PureMVC Core that wishes
 * to communicate with other Cores using the Pipes
 * utility.</P>
 */
function PipeAware()
{
}


PipeAware.NAME = "PipeAware";


PipeAware.prototype.acceptInputPipe =function(/*String*/ name, /*PipeFitting*/ pipe)
{
};

PipeAware.prototype.acceptOutputPipe = function(/*String*/ name, /*PipeFitting*/ pipe)
{
};
/**
 * Pipe Queue.
 * <P>
 * The Queue always stores inbound messages until you send it
 * a FLUSH control message, at which point it writes its buffer
 * to the output pipe fitting. The Queue can be sent a SORT
 * control message to go into sort-by-priority mode or a FIFO
 * control message to cancel sort mode and return the
 * default mode of operation, FIFO.</P>
 *
 * <P>
 * NOTE: There can effectively be only one Queue on a given
 * pipeline, since the first Queue acts on any queue control
 * message. Multiple queues in one pipeline are of dubious
 * use, and so having to name them would make their operation
 * more complex than need be.</P>
 */
function Queue(args)
{
    this.mode = QueueControlMessage.SORT;
    this.messages = [];
}


Queue.NAME = "Queue"


Queue.prototype = new Pipe;
Queue.prototype.constructor = Queue;


Queue.prototype.mode = null;
Queue.prototype.message = null;



/**
 * Handle the incoming message.
 * <P>
 * Normal messages are enqueued.</P>
 * <P>
 * The FLUSH message type tells the Queue to write all
 * stored messages to the ouptut PipeFitting, then
 * return to normal enqueing operation.</P>
 * <P>
 * The SORT message type tells the Queue to sort all
 * <I>subsequent</I> incoming messages by priority. If there
 * are unflushed messages in the queue, they will not be
 * sorted unless a new message is sent before the next FLUSH.
 * Sorting-by-priority behavior continues even after a FLUSH,
 * and can be turned off by sending a FIFO message, which is
 * the default behavior for enqueue/dequeue.</P>
 */
Queue.prototype.write = function(/*PipeMessage*/message)
{
    var success = true;
    switch (message.getType())
    {
        // Store normal messages
        case Message.NORMAL:
            this.store(message);
            break;

        // Flush the queue
        case QueueControlMessage.FLUSH:
            success = this.flush();
            break;

        // Put Queue into Priority Sort or FIFO mode
        // Subsequent messages written to the queue
        // will be affected. Sorted messages cannot
        // be put back into FIFO order!
        case QueueControlMessage.SORT:
        case QueueControlMessage.FIFO:
            this.mode = message.getType();
            break;

        default:
            break;
    }
    return success;
};


/**
 * Store a message.
 * @param message the PipeMessage to enqueue.
 * @return int the new count of messages in the queue
 */
Queue.prototype.store = function(/*PipeMessage*/message)
{
    this.messages.push(message);
    if (this.mode == QueueControlMessage.SORT)
    {
        this.message.sort(sortMessageByPriority);
    }
};


/**
 * Sort the Messages by priority
 */
Queue.prototype.sortMessagesByPriority = function(/*PipeMessage*/msgA, /*PipeMessage*/msgB)
{
    var num = 0;
    if (msgA.getPriority() < msgB.getPriority())
    {
        num = -1;
    }
    else
    {
        if (msgA.getPriority() > msgB.getPriority())
        {
            num = 1;
        }
    }
    return num;
};


/**
 * Flush the queue.
 * <P>
 * NOTE: This empties the queue.</P>
 * @return Boolean true if all messages written successfully.
 */
Queue.prototype.flush = function()
{
    var success = false;
    var message = this.messages.shift();
    // TODO: does this work for detecting the end of the messages stack?
    while (message != undefined)
    {
        var ok = this.output.write(message);
        if (!ok)
        {
            success = false;
        }
        message = this.messages.shift();
    }
    return success;
};
/**
 * Merging Pipe Tee.
 * <P>
 * Writes the messages from multiple input pipelines into
 * a single output pipe fitting.</P>
 */

/**
 * Constructor.
 * <P>
 * Create the TeeMerge and the two optional constructor inputs.
 * This is the most common configuration, though you can connect
 * as many inputs as necessary by calling <code>connectInput</code>
 * repeatedly.</P>
 * <P>
 * Connect the single output fitting normally by calling the
 * <code>connect</code> method, as you would with any other PipeFitting.</P>
 */
function TeeMerge(args)
{
    if (args)
    {
        if (args.input1) {
            this.connectInput(args.input1);
        }

        if (args.input2) {
            this.connectInput(args.input2);
        }
    }
}


TeeMerge.NAME = "TeeMerge";


TeeMerge.prototype = new Pipe;
TeeMerge.prototype.constructo = TeeMerge;


/**
 * Connect an input PipeFitting.
 * <P>
 * NOTE: You can connect as many inputs as you want
 * by calling this method repeatedly.</P>
 *
 * @param input the PipeFitting to connect for input.
 */
TeeMerge.prototype.connectInput = function(/*PipeFitting*/input)
{
    return input.connect(this);
};
/**
 * Splitting Pipe Tee.
 * <P>
 * Writes input messages to multiple output pipe fittings.</P>
 */


/**
 * Constructor.
 * <P>
 * Create the TeeSplit and connect the up two optional outputs.
 * This is the most common configuration, though you can connect
 * as many outputs as necessary by calling <code>connect</code>.</P>
 */
function TeeSplit(args)
{
    if (args) {
        if (args.output1)
        {
            this.connect(args.output1);
        }

        if (args.output2)
        {
            this.connect(args.output2);
        }
    }
    this.outputs = [];
}


TeeSplit.NAME = "TeeSplit";


TeeSplit.prototype = new PipeFitting;
TeeSplit.prototype.constructor = TeeSplit;


TeeSplit.prototype.output = null;



/**
 * Connect the output PipeFitting.
 * <P>
 * NOTE: You can connect as many outputs as you want
 * by calling this method repeatedly.</P>
 * @param output the PipeFitting to connect for output.
 */
TeeSplit.prototype.connect = function(/*PipeFitting*/output)
{
    this.outputs.push(output);
    return true;
};


/**
 * Disconnect the most recently connected output fitting. (LIFO)
 * <P>
 * To disconnect all outputs, you must call this
 * method repeatedly untill it returns null.</P>
 * @param output the PipeFitting to connect for output.
 */
TeeSplit.prototype.disconnect = function()
{
    return this.outputs.pop();
};


/**
 * Disconnect a given output fitting.
 * <P>
 * If the fitting passed in is connected
 * as an output of this <code>TeeSplit</code>, then
 * it is disconnected and the reference returned.</P>
 * <P>
 * If the fitting passed in is not connected as an
 * output of this <code>TeeSplit</code>, then <code>null</code>
 * is returned.</P>
 * @param output the PipeFitting to connect for output.
 */
TeeSplit.prototype.disconnectFitting = function(/*PipeFitting*/target)
{
    var removed;
    for (var i = 0; i < this.outputs.length; i++)
    {
        var output = this.outputs[i];
        if (output == target)
        {
            this.outputs.splice(i, 1);
            removed = output;
            break;
        }
    }
    return removed;
};


/**
 * Write the message to all connected outputs.
 * <P>
 * Returns false if any output returns false,
 * but all outputs are written to regardless.</P>
 * @param message the message to write
 * @return Boolean whether any connected outputs failed
 */
TeeSplit.prototype.write = function(/*PipeMessage*/message)
{
    var success = true;
    for (var i = 0; i < this.outputs.length; i++)
    {
        var output = this.outputs[i];
        if (!output.write(message))
        {
            success = false;
        }
    }
    return success;
};
	
 	/* implementation end */
 	 
 	// define the puremvc global namespace and export the actors
 	scope.puremvc.pipes =
 	{
 		PipeMessage: PipeMessage
 	,	Message: Message
 	,	FilterControlMessage: FilterControlMessage
 	,	QueueControlMessage: QueueControlMessage
 	,	PipeFitting: PipeFitting
 	,	PipeListener: PipeListener
 	,	Pipe: Pipe
 	,	Filter: Filter
 	,	Junction: Junction
 	,	JunctionMediator: JunctionMediator
 	,	PipeAware: PipeAware
 	,   Queue: Queue
 	,   TeeMerge: TeeMerge
 	,   TeeSplit: TeeSplit
 	}; 
 	
})(this); // the 'this' parameter will resolve to global scope in all environments
