Ext.data.JsonP.puremvc_pipes_Pipe({"singleton":false,"statics":{"cfg":[],"property":[],"css_var":[],"event":[],"css_mixin":[],"method":[]},"files":[{"filename":"Pipe.js","href":"Pipe.html#puremvc-pipes-Pipe"}],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/puremvc.pipes.PipeFitting' rel='puremvc.pipes.PipeFitting' class='docClass'>puremvc.pipes.PipeFitting</a><div class='subclass '><strong>puremvc.pipes.Pipe</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/Pipe.html#puremvc-pipes-Pipe' target='_blank'>Pipe.js</a></div></pre><div class='doc-contents'><p>Pipe.</p>\n\n<P>\nThis is the most basic <a href=\"#!/api/puremvc.pipes.PipeFitting\" rel=\"puremvc.pipes.PipeFitting\" class=\"docClass\">puremvc.pipes.PipeFitting</a>,\nallowing the connection of an output\nfitting and writing of a message to that output.</P>\n\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-output' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/puremvc.pipes.PipeFitting' rel='puremvc.pipes.PipeFitting' class='defined-in docClass'>puremvc.pipes.PipeFitting</a><br/><a href='source/PipeFitting.html#puremvc-pipes-PipeFitting-property-output' target='_blank' class='view-source'>view source</a></div><a href='#!/api/puremvc.pipes.PipeFitting-property-output' class='name expandable'>output</a><span> : <a href=\"#!/api/puremvc.pipes.PipeFitting\" rel=\"puremvc.pipes.PipeFitting\" class=\"docClass\">puremvc.pipes.PipeFitting</a></span><strong class='protected signature'>protected</strong></div><div class='description'><div class='short'>The output fitting ...</div><div class='long'><p>The output fitting</p>\n<p>Defaults to: <code>null</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='puremvc.pipes.Pipe'>puremvc.pipes.Pipe</span><br/><a href='source/Pipe.html#puremvc-pipes-Pipe-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/puremvc.pipes.Pipe-method-constructor' class='name expandable'>puremvc.pipes.Pipe</a>( <span class='pre'><a href=\"#!/api/puremvc.pipes.PipeFitting\" rel=\"puremvc.pipes.PipeFitting\" class=\"docClass\">puremvc.pipes.PipeFitting</a> output</span> ) : Object</div><div class='description'><div class='short'>Creates a new Pipe instance. ...</div><div class='long'><p>Creates a new Pipe instance.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>output</span> : <a href=\"#!/api/puremvc.pipes.PipeFitting\" rel=\"puremvc.pipes.PipeFitting\" class=\"docClass\">puremvc.pipes.PipeFitting</a><div class='sub-desc'><p>the output to connect this pipe too.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-connect' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='puremvc.pipes.Pipe'>puremvc.pipes.Pipe</span><br/><a href='source/Pipe.html#puremvc-pipes-Pipe-method-connect' target='_blank' class='view-source'>view source</a></div><a href='#!/api/puremvc.pipes.Pipe-method-connect' class='name expandable'>connect</a>( <span class='pre'><a href=\"#!/api/puremvc.pipes.PipeFitting\" rel=\"puremvc.pipes.PipeFitting\" class=\"docClass\">puremvc.pipes.PipeFitting</a> output</span> )</div><div class='description'><div class='short'>Connect a PipeFitting to this pipe's output. ...</div><div class='long'><p>Connect a PipeFitting to this pipe's output.\nPipeFittings connect to and write to other\nPipeFittings in a one-way, synchronous chain.</P></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>output</span> : <a href=\"#!/api/puremvc.pipes.PipeFitting\" rel=\"puremvc.pipes.PipeFitting\" class=\"docClass\">puremvc.pipes.PipeFitting</a><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href='#!/api/puremvc.pipes.PipeFitting-method-connect' rel='puremvc.pipes.PipeFitting-method-connect' class='docClass'>puremvc.pipes.PipeFitting.connect</a></p></div></div></div><div id='method-disconnect' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='puremvc.pipes.Pipe'>puremvc.pipes.Pipe</span><br/><a href='source/Pipe.html#puremvc-pipes-Pipe-method-disconnect' target='_blank' class='view-source'>view source</a></div><a href='#!/api/puremvc.pipes.Pipe-method-disconnect' class='name expandable'>disconnect</a>( <span class='pre'></span> ) : <a href=\"#!/api/puremvc.pipes.PipeFitting\" rel=\"puremvc.pipes.PipeFitting\" class=\"docClass\">puremvc.pipes.PipeFitting</a></div><div class='description'><div class='short'>Disconnect the Pipe Fitting connected to the output. ...</div><div class='long'><p>Disconnect the Pipe Fitting connected to the output.</p>\n\n<P>\nThis disconnects the output fitting, returning a\nreference to it. If you were splicing another fitting\ninto a pipeline, you need to keep (at least briefly)\na reference to both sides of the pipeline in order to\nconnect them to the input and output of whatever\nfiting that you're splicing in.</P>\n\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/puremvc.pipes.PipeFitting\" rel=\"puremvc.pipes.PipeFitting\" class=\"docClass\">puremvc.pipes.PipeFitting</a></span><div class='sub-desc'><p>the disconnected output fitting</p>\n</div></li></ul><p>Overrides: <a href='#!/api/puremvc.pipes.PipeFitting-method-disconnect' rel='puremvc.pipes.PipeFitting-method-disconnect' class='docClass'>puremvc.pipes.PipeFitting.disconnect</a></p></div></div></div><div id='method-write' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='puremvc.pipes.Pipe'>puremvc.pipes.Pipe</span><br/><a href='source/Pipe.html#puremvc-pipes-Pipe-method-write' target='_blank' class='view-source'>view source</a></div><a href='#!/api/puremvc.pipes.Pipe-method-write' class='name expandable'>write</a>( <span class='pre'><a href=\"#!/api/puremvc.pipes.PipeMessage\" rel=\"puremvc.pipes.PipeMessage\" class=\"docClass\">puremvc.pipes.PipeMessage</a> message</span> ) : Boolean</div><div class='description'><div class='short'>Write the message to the connected output. ...</div><div class='long'><p>Write the message to the connected output.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>message</span> : <a href=\"#!/api/puremvc.pipes.PipeMessage\" rel=\"puremvc.pipes.PipeMessage\" class=\"docClass\">puremvc.pipes.PipeMessage</a><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>true if any connected downpipe outputs failed</p>\n</div></li></ul><p>Overrides: <a href='#!/api/puremvc.pipes.PipeFitting-method-write' rel='puremvc.pipes.PipeFitting-method-write' class='docClass'>puremvc.pipes.PipeFitting.write</a></p></div></div></div></div></div></div></div>","component":false,"uses":[],"code_type":"function","inheritdoc":null,"superclasses":["puremvc.pipes.PipeFitting","puremvc.pipes.Pipe"],"mixedInto":[],"mixins":[],"members":{"property":[{"owner":"puremvc.pipes.PipeFitting","meta":{"protected":true},"name":"output","id":"property-output","tagname":"property"}],"cfg":[],"css_var":[],"css_mixin":[],"event":[],"method":[{"owner":"puremvc.pipes.Pipe","meta":{},"name":"constructor","id":"method-constructor","tagname":"method"},{"owner":"puremvc.pipes.Pipe","meta":{},"name":"connect","id":"method-connect","tagname":"method"},{"owner":"puremvc.pipes.Pipe","meta":{},"name":"disconnect","id":"method-disconnect","tagname":"method"},{"owner":"puremvc.pipes.Pipe","meta":{},"name":"write","id":"method-write","tagname":"method"}]},"allMixins":[],"meta":{},"private":false,"name":"puremvc.pipes.Pipe","alternateClassNames":[],"aliases":{},"html_meta":{},"tagname":"class","extends":"puremvc.pipes.PipeFitting","requires":[],"id":"class-puremvc.pipes.Pipe","subclasses":["puremvc.pipes.Filter","puremvc.pipes.PipeListener","puremvc.pipes.Queue","puremvc.pipes.TeeMerge","puremvc.pipes.TeeSplit"],"inheritable":false});