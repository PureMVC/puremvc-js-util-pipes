/**
 * Pipe Aware Core 
 * <P>
 * Can be implemented by any PureMVC Core that wishes
 * to communicate with other Cores using the Pipes
 * utility.</P>
 *
 * @class puremvc.pipes.PipeAwareCore
 * @constructor
 * @param {string} [name]
 */
function PipeAwareCore( name )
{
   this.facade = puremvc.Facade.getInstance( name );
   initializeCore();
}

/**
 * Initialize the Core (called from constructor).
 * Override in subclass, register your startup command, and send your startup notification.
 * During the View Preparation phase of startup, be sure to register a JunctionMediator subclass.
 * @return {void}
 */
PipeAwareCore.prototype.initializeCore = function() {};

/**
 * Accept an input pipe.
 *
 * @param {string} [name]
 * The name of the pipe.
 * @param {puremvc.PipeFitting} [pipe]
 * The input pipe.
 * @return {void}
 */
PipeAwareCore.prototype.acceptInputPipe = function( name, pipe )
{
   this.facade.sendNotification( JunctionMediator.ACCEPT_INPUT_PIPE, pipe, name );
};

/**
 * Accept an output pipe.
 *
 * @param {string} [name]
 * The name of the pipe.
 * @param {puremvc.PipeFitting} [pipe]
 * The output pipe.
 * @return {void}
 */
PipeAwareCore.prototype.acceptOutputPipe = function(/*String*/ name, /*PipeFitting*/ pipe)
{
   this.facade.sendNotification( JunctionMediator.ACCEPT_OUTPUT_PIPE, pipe, name );
};

/** 
 * Facade for the Core
 * @type {puremvc.Facade}
 */
PipeAwareCore.prototype.facade = null;
