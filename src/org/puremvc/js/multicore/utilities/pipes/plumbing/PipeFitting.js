/**
 * Pipe Fitting Base Class
 * <P>
 * A PipeFitting has an output that can be connected to other
 * PipeFittings, forming a Pipeline. PipeMessages are written to one 
 * end of a Pipeline by some client code. The messages are then
 * transferred in synchronous fashion from one fitting to the next.
 * 
 * @class puremvc.pipes.PipeFitting
 */
function PipeFitting() {}

/**
 * The output fitting
 *
 * @protected
 * @property {puremvc.pipes.PipeFitting}
 */
PipeFitting.prototype.output = null;

/**
 * Connect a PipeFitting to the output.
 * <P>Override in subclass and implement.</P>
 *
 * @abstract
 * @param {puremvc.pipes.PipeFitting} output
 * @return {Boolean} true if no other fitting was already connected.
 */
PipeFitting.prototype.connect = function( output ) {};

/**
 * Disconnect the Pipe Fitting connected to the output.
 * <P>Override in subclass and implement.</P>
 *
 * @abstract
 * @return {puremvc.pipes.PipeFitting} the disconnected output fitting
 */
PipeFitting.prototype.disconnect = function() {};


/**
 * Write the message to the connected output.
 * <P>Override in subclass and implement.</P>
 *
 * @abstract
 * @param {puremvc.pipes.PipeMessage} message
 * @return {Boolean} true if any connected downpipe outputs failed
 */
PipeFitting.prototype.write = function( message ) {};


