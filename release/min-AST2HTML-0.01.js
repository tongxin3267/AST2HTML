(function(){var t={},i=function(){!function(t){t.on=function(t,i){return this._ev||(this._ev={}),this._ev[t]||(this._ev[t]=[]),this._ev[t].push(i),this},t.removeListener=function(t,i){if(this._ev&&this._ev[t])for(var n=this._ev[t],e=0;e<n.length;e++)if(n[e]==i)return void n.splice(e,1)},t.trigger=function(t,i,n){if(this._ev&&this._ev[t]){return this._ev[t].forEach(function(t){t(i,n)}),this}}}(this),function(t){t.getHTML=function(t){return this._walker?(this._outHTML="",console.log("--> starting the walk to createHtml"),this._walker.startWalk(t,{functions:{},vars:{},variables:{}}),this._outHTML):"No ASTWalker given as parameter to AST2HTML"},t.__traitInit&&!t.hasOwnProperty("__traitInit")&&(t.__traitInit=t.__traitInit.slice()),t.__traitInit||(t.__traitInit=[]),t.__traitInit.push(function(t,i){this._walker=t,this._options=i||{};var n,e,t=this._walker;this._outHTML="";var o=this;t.on("node",function(t){n=t.node,e=t.ctx}),t.on("newline",function(){o._outHTML+="</div>"}),t.on("startline",function(){o._outHTML+="<div class='code_line'><div class='code_line_number'>",o._outHTML+=t.getLineNumber(),o._outHTML+="</div>"});var r=["for","function","if","Array","arguments","console","typeof","window","var","return","const","this","let"].reduce(function(t,i){return t[i]=i,t},{});t.on("out",function(t){var i=n._ecnt||0;if("Literal"==n.type&&n.raw==t){var e="out_char ";return"string"==typeof n.value&&(e+=" string_literal"),o._outHTML+="<div class='"+e+"'>",o._outHTML+=t,void(o._outHTML+="</div>")}var s=t.split(" ");s.forEach(function(e,s){var u="out_char ";r[t.trim()]&&(u+=t.trim()),u+=" "+n.type,u+=0==i?" notvisited ":" visited ",i>10&&(u+=" plus10visits "),i>50&&(u+=" plus50visits "),i>100&&(u+=" plus100visits "),o._outHTML+="<div class='"+u+"' visitCnt='"+i+"'>",s>0&&(outHTML+="&nbsp;"),o._outHTML+=e,o._outHTML+="</div>"})}),t.on("tabs",function(t){if(t)for(;t--;)o._outHTML+="<div class='out_tab'></div>"})})}(this)},n=function(t,i,e,o,r,s,u,a){var f,_=this;if(!(_ instanceof n))return new n(t,i,e,o,r,s,u,a);var l=[t,i,e,o,r,s,u,a];if(_.__factoryClass)if(_.__factoryClass.forEach(function(t){f=t.apply(_,l)}),"function"==typeof f){if(f._classInfo.name!=n._classInfo.name)return new f(t,i,e,o,r,s,u,a)}else if(f)return f;_.__traitInit?_.__traitInit.forEach(function(t){t.apply(_,l)}):"function"==typeof _.init&&_.init.apply(_,l)};n._classInfo={name:"AST2HTML"},n.prototype=new i,function(){"undefined"!=typeof define&&null!==define&&null!=define.amd?(t.AST2HTML=n,this.AST2HTML=n):"undefined"!=typeof module&&null!==module&&null!=module.exports?module.exports.AST2HTML=n:this.AST2HTML=n}.call(new Function("return this")()),"undefined"!=typeof define&&null!==define&&null!=define.amd&&define(t)}).call(new Function("return this")());