/**
 * Pipe Listener.
 * <P>
 * Allows a class that does not implement <code>PipeFitting</code> to
 * be the final recipient of the messages in a pipeline.</P>
 * 
 * @class puremvc.pipes.PipeListener
 * @extends puremvc.pipes.Pipe
 * 
 * @constructor
 * Creates a new PipeListener instance.
 * @param {Object} caller The calling object
 * @param {Function} callback The callback method on the caller
 */
function PipeListener( caller, callback )
{
   if (caller && callback) {
      this.caller = caller;
      this.callback = callback;
   }
}

PipeListener.prototype = new PipeFitting();
PipeListener.prototype.constructor = PipeListener;

/**
 * @protected
 * @property {Object} caller The calling Object
 */
PipeListener.prototype.caller = null;

/**
 * @protected
 * @property {Function} callback The callback method on the calling Object
 */
PipeListener.prototype.callback = null;

/**
 * Can't connect any further output.
 * 
 * @param {puremvc.pipes.PipeFitting} output 
 * @return {Boolean} always false
 */
PipeListener.prototype.connect = function( output )
{
    return false;
};

/**
 * Nothing to disconnect.
 * 
 * @return {puremvc.pipes.PipeFitting} always null
 */
PipeListener.prototype.disconnect =  function()
{
   return null;
};

/**
 * Write the message to the listener.
 * 
 * @param {puremvc.pipes.PipeMessage} message The message to write.
 * @return {Boolean} true if the message is written
 */ 
PipeListener.prototype.write = function( message )
{
   var success = false;
   if ( message && this.caller && this.callback ) {
      this.callback.apply( this.caller, [ message ] );
      success = true;
   }
   return success;
};
