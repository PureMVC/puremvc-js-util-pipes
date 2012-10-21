/**
 * Pipe Aware Core Base Class
 *
 * @class puremvc.pipes.PipeAwareCore
 * @param {String} name
 */
function PipeAwareCore( name ) {
   this.name = name;
}

/**
 * Startup Notification Name.
 * 
 * @ignore
 * @static
 * @property {String}
 */
PipeAwareCore.STARTUP = 'PipeAwareCore/startup';

/**
 * Start up the core.
 *
 * The specified Command will be executed, with the body of the notification
 * containing a reference to the PipeAwareCore instance in the body.
 * 
 * @protected
 * @param {Function} startupCommand
 * A puremvc.SimpleCommand or puremvc.MacroCommand
 */
PipeAwareCore.prototype.startup = function( startupCommand ) 
{
   this.facade = puremvc.Facade.getInstance( this.name );
   this.facade.registerCommand( PipeAwareCore.STARTUP, startupCommand );
   this.facade.sendNotification( PipeAwareCore.STARTUP, this );
};

/**
 * Accept an input pipe.
 *
 * @param {String} name 
 * @param {puremvc.pipes.PipeFitting} pipe 
 */
PipeAwareCore.prototype.acceptInputPipe = function( name, pipe )
{
   this.facade.sendNotification( JunctionMediator.ACCEPT_INPUT_PIPE, pipe, name );
};

/**
 * Accept an output pipe.
 *
 * @param {String} name 
 * @param {puremvc.pipes.PipeFitting} pipe
 */
PipeAwareCore.prototype.acceptOutputPipe = function(/*String*/ name, /*PipeFitting*/ pipe)
{
   this.facade.sendNotification( JunctionMediator.ACCEPT_OUTPUT_PIPE, pipe, name );
};

/** 
 * Facade for the Core
 * 
 * @protected
 * @type {puremvc.Facade}
 */
PipeAwareCore.prototype.facade = null;

/** 
 * The name of the core.
 * 
 * @protected
 * @type {String}
 */
PipeAwareCore.prototype.name = null;
