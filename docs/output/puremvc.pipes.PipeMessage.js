Ext.data.JsonP.puremvc_pipes_PipeMessage({"singleton":false,"statics":{"cfg":[],"property":[{"owner":"puremvc.pipes.PipeMessage","meta":{"protected":true,"static":true},"name":"BASE","id":"static-property-BASE","tagname":"property"},{"owner":"puremvc.pipes.PipeMessage","meta":{"static":true},"name":"ERROR","id":"static-property-ERROR","tagname":"property"},{"owner":"puremvc.pipes.PipeMessage","meta":{"static":true},"name":"NORMAL","id":"static-property-NORMAL","tagname":"property"},{"owner":"puremvc.pipes.PipeMessage","meta":{"static":true},"name":"PRIORITY_HIGH","id":"static-property-PRIORITY_HIGH","tagname":"property"},{"owner":"puremvc.pipes.PipeMessage","meta":{"static":true},"name":"PRIORITY_LOW","id":"static-property-PRIORITY_LOW","tagname":"property"},{"owner":"puremvc.pipes.PipeMessage","meta":{"static":true},"name":"PRIORITY_MED","id":"static-property-PRIORITY_MED","tagname":"property"}],"css_var":[],"event":[],"css_mixin":[],"method":[]},"files":[{"filename":"PipeMessage.js","href":"PipeMessage.html#puremvc-pipes-PipeMessage"}],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/PipeMessage.html#puremvc-pipes-PipeMessage' target='_blank'>PipeMessage.js</a></div></pre><div class='doc-contents'><p>PipeMessage Base Class</p>\n\n<P>\nPipeMessages are written into a pipeline composed of\nPipeFittings. Pipelines to connect cores in a \nPureMVC MultiCore app.</P>\n\n\n<P>\nThe PipeMessage is passed from one fitting to the\nnext in synchronous fashion. Depending on type, \nmessage may be handled differently by the fittings. </P>\n\n\n<P>\nPipeMessages travelling through a Pipeline can\nbe filtered, and queued. In a queue, they may\nbe sorted by priority. Based on type, they\nmay used as control messages to modify the\nbehavior of filter or queue fittings connected\nto the pipleline into which they are written.</P>\n\n</div><div class='members'><div class='members-section'><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Instance Properties</h3><div id='property-body' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='puremvc.pipes.PipeMessage'>puremvc.pipes.PipeMessage</span><br/><a href='source/PipeMessage.html#puremvc-pipes-PipeMessage-property-body' target='_blank' class='view-source'>view source</a></div><a href='#!/api/puremvc.pipes.PipeMessage-property-body' class='name expandable'>body</a><span> : Object</span></div><div class='description'><div class='short'>PipeMessage Body ...</div><div class='long'><p>PipeMessage Body</p>\n<p>Defaults to: <code>null</code></p></div></div></div><div id='property-header' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='puremvc.pipes.PipeMessage'>puremvc.pipes.PipeMessage</span><br/><a href='source/PipeMessage.html#puremvc-pipes-PipeMessage-property-header' target='_blank' class='view-source'>view source</a></div><a href='#!/api/puremvc.pipes.PipeMessage-property-header' class='name expandable'>header</a><span> : Object</span></div><div class='description'><div class='short'>PipeMessage Header ...</div><div class='long'><p>PipeMessage Header</p>\n<p>Defaults to: <code>null</code></p></div></div></div><div id='property-priority' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='puremvc.pipes.PipeMessage'>puremvc.pipes.PipeMessage</span><br/><a href='source/PipeMessage.html#puremvc-pipes-PipeMessage-property-priority' target='_blank' class='view-source'>view source</a></div><a href='#!/api/puremvc.pipes.PipeMessage-property-priority' class='name expandable'>priority</a><span> : Number</span></div><div class='description'><div class='short'>PipeMessage Priority ...</div><div class='long'><p>PipeMessage Priority</p>\n<p>Defaults to: <code>PipeMessage.PRIORITY_MED</code></p></div></div></div><div id='property-type' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='puremvc.pipes.PipeMessage'>puremvc.pipes.PipeMessage</span><br/><a href='source/PipeMessage.html#puremvc-pipes-PipeMessage-property-type' target='_blank' class='view-source'>view source</a></div><a href='#!/api/puremvc.pipes.PipeMessage-property-type' class='name expandable'>type</a><span> : String</span></div><div class='description'><div class='short'>PipeMessage Type ...</div><div class='long'><p>PipeMessage Type</p>\n<p>Defaults to: <code>PipeMessage.NORMAL</code></p></div></div></div></div><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static Properties</h3><div id='static-property-BASE' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='puremvc.pipes.PipeMessage'>puremvc.pipes.PipeMessage</span><br/><a href='source/PipeMessage.html#puremvc-pipes-PipeMessage-static-property-BASE' target='_blank' class='view-source'>view source</a></div><a href='#!/api/puremvc.pipes.PipeMessage-static-property-BASE' class='name expandable'>BASE</a><span> : String</span><strong class='protected signature'>protected</strong><strong class='static signature'>static</strong></div><div class='description'><div class='short'>PipeMessage Type Base URI ...</div><div class='long'><p>PipeMessage Type Base URI</p>\n<p>Defaults to: <code>&quot;http://puremvc.org/namespaces/pipes/messages/&quot;</code></p></div></div></div><div id='static-property-ERROR' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='puremvc.pipes.PipeMessage'>puremvc.pipes.PipeMessage</span><br/><a href='source/PipeMessage.html#puremvc-pipes-PipeMessage-static-property-ERROR' target='_blank' class='view-source'>view source</a></div><a href='#!/api/puremvc.pipes.PipeMessage-static-property-ERROR' class='name expandable'>ERROR</a><span> : String</span><strong class='static signature'>static</strong></div><div class='description'><div class='short'>Type: Error ...</div><div class='long'><p>Type: Error</p>\n<p>Defaults to: <code>&quot;http://puremvc.org/namespaces/pipes/messages/error&quot;</code></p></div></div></div><div id='static-property-NORMAL' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='puremvc.pipes.PipeMessage'>puremvc.pipes.PipeMessage</span><br/><a href='source/PipeMessage.html#puremvc-pipes-PipeMessage-static-property-NORMAL' target='_blank' class='view-source'>view source</a></div><a href='#!/api/puremvc.pipes.PipeMessage-static-property-NORMAL' class='name expandable'>NORMAL</a><span> : String</span><strong class='static signature'>static</strong></div><div class='description'><div class='short'>Type: Normal ...</div><div class='long'><p>Type: Normal</p>\n<p>Defaults to: <code>&quot;http://puremvc.org/namespaces/pipes/messages/normal&quot;</code></p></div></div></div><div id='static-property-PRIORITY_HIGH' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='puremvc.pipes.PipeMessage'>puremvc.pipes.PipeMessage</span><br/><a href='source/PipeMessage.html#puremvc-pipes-PipeMessage-static-property-PRIORITY_HIGH' target='_blank' class='view-source'>view source</a></div><a href='#!/api/puremvc.pipes.PipeMessage-static-property-PRIORITY_HIGH' class='name expandable'>PRIORITY_HIGH</a><span> : Number</span><strong class='static signature'>static</strong></div><div class='description'><div class='short'>Priority: High. ...</div><div class='long'><p>Priority: High. PipeMessage can be sorted to the front of the queue</p>\n<p>Defaults to: <code>1</code></p></div></div></div><div id='static-property-PRIORITY_LOW' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='puremvc.pipes.PipeMessage'>puremvc.pipes.PipeMessage</span><br/><a href='source/PipeMessage.html#puremvc-pipes-PipeMessage-static-property-PRIORITY_LOW' target='_blank' class='view-source'>view source</a></div><a href='#!/api/puremvc.pipes.PipeMessage-static-property-PRIORITY_LOW' class='name expandable'>PRIORITY_LOW</a><span> : Number</span><strong class='static signature'>static</strong></div><div class='description'><div class='short'>Priority: Low. ...</div><div class='long'><p>Priority: Low. PipeMessage can be sorted to the back of the queue</p>\n<p>Defaults to: <code>10</code></p></div></div></div><div id='static-property-PRIORITY_MED' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='puremvc.pipes.PipeMessage'>puremvc.pipes.PipeMessage</span><br/><a href='source/PipeMessage.html#puremvc-pipes-PipeMessage-static-property-PRIORITY_MED' target='_blank' class='view-source'>view source</a></div><a href='#!/api/puremvc.pipes.PipeMessage-static-property-PRIORITY_MED' class='name expandable'>PRIORITY_MED</a><span> : Number</span><strong class='static signature'>static</strong></div><div class='description'><div class='short'>Priority: Medium. ...</div><div class='long'><p>Priority: Medium. The default</p>\n<p>Defaults to: <code>5</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='puremvc.pipes.PipeMessage'>puremvc.pipes.PipeMessage</span><br/><a href='source/PipeMessage.html#puremvc-pipes-PipeMessage-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/puremvc.pipes.PipeMessage-method-constructor' class='name expandable'>puremvc.pipes.PipeMessage</a>( <span class='pre'>String type, [Object header], [Object body], [Number priority]</span> ) : Object</div><div class='description'><div class='short'>Creates a new PipeMessage instance ...</div><div class='long'><p>Creates a new PipeMessage instance</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>type</span> : String<div class='sub-desc'>\n</div></li><li><span class='pre'>header</span> : Object (optional)<div class='sub-desc'>\n</div></li><li><span class='pre'>body</span> : Object (optional)<div class='sub-desc'>\n</div></li><li><span class='pre'>priority</span> : Number (optional)<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","component":false,"uses":[],"code_type":"function","inheritdoc":null,"superclasses":[],"mixedInto":[],"mixins":[],"members":{"property":[{"owner":"puremvc.pipes.PipeMessage","meta":{},"name":"body","id":"property-body","tagname":"property"},{"owner":"puremvc.pipes.PipeMessage","meta":{},"name":"header","id":"property-header","tagname":"property"},{"owner":"puremvc.pipes.PipeMessage","meta":{},"name":"priority","id":"property-priority","tagname":"property"},{"owner":"puremvc.pipes.PipeMessage","meta":{},"name":"type","id":"property-type","tagname":"property"}],"cfg":[],"css_var":[],"css_mixin":[],"event":[],"method":[{"owner":"puremvc.pipes.PipeMessage","meta":{},"name":"constructor","id":"method-constructor","tagname":"method"}]},"allMixins":[],"meta":{},"private":false,"name":"puremvc.pipes.PipeMessage","alternateClassNames":[],"aliases":{},"html_meta":{},"tagname":"class","extends":null,"requires":[],"id":"class-puremvc.pipes.PipeMessage","subclasses":["puremvc.pipes.FilterControlMessage","puremvc.pipes.QueueControlMessage"],"inheritable":false});