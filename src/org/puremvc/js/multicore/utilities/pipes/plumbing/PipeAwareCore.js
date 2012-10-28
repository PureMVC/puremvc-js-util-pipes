/**
 * Pipe Aware Core Base Class
 * <P>
 * Constructor gets the Facade for this Core, 
 * then calls <code>initializeCore</code>.</P>
 *
 * @class puremvc.pipes.PipeAwareCore
 * @constructor
 * Creates a new PipeAwareCore instance.
 * @param {String} name The unique name for this core.
 */
function PipeAwareCore( name ) {
   this.facade = puremvc.Facade.getInstance( this.name );
   this.initializeCore();
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
 * Initialize the Core. 
 * <P>
 * Called by constructor, registers a JunctionMediator. </P>
 * <P>
 * If you need to override JunctionMediator, you can override 
 * this method and register your own JunctionMediator() subclass.</P>
 * 
 * @protected
 */
PipeAwareCore.prototype.initializeCore = function( ) 
{
   this.facade.registerMediator( new JunctionMediator() );
}

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
PipeAwareCore.prototype.acceptOutputPipe = function( name, pipe )
{
   this.facade.sendNotification( JunctionMediator.ACCEPT_OUTPUT_PIPE, pipe, name );
};

/**
 * Remove a pipe. 
 *
 * @param {String} name
 */
PipeAwareCore.prototype.removePipe = function( name )
{
   this.facade.sendNotification( JunctionMediator.REMOVE_PIPE, null, name );
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
