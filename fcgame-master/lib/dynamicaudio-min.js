var swfobject=function(){var o,l,r,s,d,c,m="undefined",w="object",f="Shockwave Flash",v="application/x-shockwave-flash",u="SWFObjectExprInst",e="onreadystatechange",p=window,h=document,y=navigator,g=!1,a=[function(){(g?function(){var t=h.getElementsByTagName("body")[0],n=O(w),a=(n.setAttribute("type",v),t.appendChild(n));{var i;a?(i=0,function(){if(typeof a.GetVariable!=m){var e=a.GetVariable("$version");e&&(e=e.split(" ")[1].split(","),S.pv=[parseInt(e[0],10),parseInt(e[1],10),parseInt(e[2],10)])}else if(i<10)return i++,setTimeout(arguments.callee,10);t.removeChild(n),a=null,x()}()):x()}}:x)()}],b=[],C=[],E=[],i=!1,A=!1,n=!0,S=function(){var e=typeof h.getElementById!=m&&typeof h.getElementsByTagName!=m&&typeof h.createElement!=m,t=y.userAgent.toLowerCase(),n=y.platform.toLowerCase(),a=/win/.test(n||t),n=/mac/.test(n||t),t=!!/webkit/.test(t)&&parseFloat(t.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")),i=!1,o=[0,0,0],l=null;if(typeof y.plugins!=m&&typeof y.plugins[f]==w)!(l=y.plugins[f].description)||typeof y.mimeTypes!=m&&y.mimeTypes[v]&&!y.mimeTypes[v].enabledPlugin||(i=!(g=!0),l=l.replace(/^.*\s+(\S+\s+\S+$)/,"$1"),o[0]=parseInt(l.replace(/^(.*)\..*$/,"$1"),10),o[1]=parseInt(l.replace(/^.*\.(.*)\s.*$/,"$1"),10),o[2]=/[a-zA-Z]/.test(l)?parseInt(l.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0);else if(typeof p.ActiveXObject!=m)try{var r=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");r&&(l=r.GetVariable("$version"))&&(i=!0,l=l.split(" ")[1].split(","),o=[parseInt(l[0],10),parseInt(l[1],10),parseInt(l[2],10)])}catch(e){}return{w3:e,pv:o,wk:t,ie:i,win:a,mac:n}}();S.w3&&((typeof h.readyState!=m&&"complete"==h.readyState||typeof h.readyState==m&&(h.getElementsByTagName("body")[0]||h.body))&&t(),i||(typeof h.addEventListener!=m&&h.addEventListener("DOMContentLoaded",t,!1),S.ie&&S.win&&(h.attachEvent(e,function(){"complete"==h.readyState&&(h.detachEvent(e,arguments.callee),t())}),p==top&&function(){if(!i){try{h.documentElement.doScroll("left")}catch(e){return setTimeout(arguments.callee,0)}t()}}()),S.wk&&function(){i||(/loaded|complete/.test(h.readyState)?t():setTimeout(arguments.callee,0))}(),$(t)));function t(){if(!i){try{var e=h.getElementsByTagName("body")[0].appendChild(O("span"));e.parentNode.removeChild(e)}catch(e){return}i=!0;for(var t=a.length,n=0;n<t;n++)a[n]()}}function I(e){i?e():a[a.length]=e}function $(e){var t,n,a,i;typeof p.addEventListener!=m?p.addEventListener("load",e,!1):typeof h.addEventListener!=m?h.addEventListener("load",e,!1):typeof p.attachEvent!=m?(a="onload",i=e,(n=p).attachEvent(a,i),E[E.length]=[n,a,i]):"function"==typeof p.onload?(t=p.onload,p.onload=function(){t(),e()}):p.onload=e}function x(){var e=b.length;if(0<e)for(var t=0;t<e;t++){var n=b[t].id,a=b[t].callbackFn,i={success:!1,id:n};if(0<S.pv[0]){var o=B(n);if(o)if(!F(b[t].swfVersion)||S.wk&&S.wk<312)if(b[t].expressInstall&&N()){for(var l={},r=(l.data=b[t].expressInstall,l.width=o.getAttribute("width")||"0",l.height=o.getAttribute("height")||"0",o.getAttribute("class")&&(l.styleclass=o.getAttribute("class")),o.getAttribute("align")&&(l.align=o.getAttribute("align")),{}),s=o.getElementsByTagName("param"),d=s.length,c=0;c<d;c++)"movie"!=s[c].getAttribute("name").toLowerCase()&&(r[s[c].getAttribute("name")]=s[c].getAttribute("value"));k(l,r,n,a)}else{l=f=void 0;var f=o;S.ie&&S.win&&4!=f.readyState?(l=O("div"),f.parentNode.insertBefore(l,f),l.parentNode.replaceChild(L(f),l),f.style.display="none",function(){4==f.readyState?f.parentNode.removeChild(f):setTimeout(arguments.callee,10)}()):f.parentNode.replaceChild(L(f),f),a&&a(i)}else W(n,!0),a&&(i.success=!0,i.ref=T(n),a(i))}else W(n,!0),a&&((o=T(n))&&typeof o.SetVariable!=m&&(i.success=!0,i.ref=o),a(i))}}function T(e){var t=null,e=B(e);return e&&"OBJECT"==e.nodeName&&(typeof e.SetVariable!=m?t=e:(e=e.getElementsByTagName(w)[0])&&(t=e)),t}function N(){return!A&&F("6.0.65")&&(S.win||S.mac)&&!(S.wk&&S.wk<312)}function k(e,t,n,a){r=a||null,s={success:!(A=!0),id:n};var i=B(n);i&&(l="OBJECT"==i.nodeName?(o=L(i),null):(o=i,n),e.id=u,(typeof e.width==m||!/%$/.test(e.width)&&parseInt(e.width,10)<310)&&(e.width="310"),(typeof e.height==m||!/%$/.test(e.height)&&parseInt(e.height,10)<137)&&(e.height="137"),h.title=h.title.slice(0,47)+" - Flash Player Installation",a=S.ie&&S.win?"ActiveX":"PlugIn",a="MMredirectURL="+p.location.toString().replace(/&/g,"%26")+"&MMplayerType="+a+"&MMdoctitle="+h.title,typeof t.flashvars!=m?t.flashvars+="&"+a:t.flashvars=a,S.ie&&S.win&&4!=i.readyState&&((a=O("div")).setAttribute("id",n+="SWFObjectNew"),i.parentNode.insertBefore(a,i),i.style.display="none",function(){4==i.readyState?i.parentNode.removeChild(i):setTimeout(arguments.callee,10)}()),j(e,t,n))}function L(e){var t=O("div");if(S.win&&S.ie)t.innerHTML=e.innerHTML;else{e=e.getElementsByTagName(w)[0];if(e){var n=e.childNodes;if(n)for(var a=n.length,i=0;i<a;i++)1==n[i].nodeType&&"PARAM"==n[i].nodeName||8==n[i].nodeType||t.appendChild(n[i].cloneNode(!0))}}return t}function j(e,t,n){var a,i,o,l,r,s=B(n);if(S.wk&&S.wk<312)return a;if(s)if(typeof e.id==m&&(e.id=n),S.ie&&S.win){var d,c="";for(d in e)e[d]!=Object.prototype[d]&&("data"==d.toLowerCase()?t.movie=e[d]:"styleclass"==d.toLowerCase()?c+=' class="'+e[d]+'"':"classid"!=d.toLowerCase()&&(c+=" "+d+'="'+e[d]+'"'));var f,u="";for(f in t)t[f]!=Object.prototype[f]&&(u+='<param name="'+f+'" value="'+t[f]+'" />');s.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+c+">"+u+"</object>",C[C.length]=e.id,a=B(e.id)}else{var p,h,y=O(w);for(p in y.setAttribute("type",v),e)e[p]!=Object.prototype[p]&&("styleclass"==p.toLowerCase()?y.setAttribute("class",e[p]):"classid"!=p.toLowerCase()&&y.setAttribute(p,e[p]));for(h in t)t[h]!=Object.prototype[h]&&"movie"!=h.toLowerCase()&&(i=y,l=t[o=h],r=void 0,(r=O("param")).setAttribute("name",o),r.setAttribute("value",l),i.appendChild(r));s.parentNode.replaceChild(y,s),a=y}return a}function D(a){var i=B(a);i&&"OBJECT"==i.nodeName&&(S.ie&&S.win?(i.style.display="none",function(){if(4==i.readyState){var e=a,t=B(e);if(t){for(var n in t)"function"==typeof t[n]&&(t[n]=null);t.parentNode.removeChild(t)}}else setTimeout(arguments.callee,10)}()):i.parentNode.removeChild(i))}function B(e){var t=null;try{t=h.getElementById(e)}catch(e){}return t}function O(e){return h.createElement(e)}function F(e){var t=S.pv,e=e.split(".");return e[0]=parseInt(e[0],10),e[1]=parseInt(e[1],10)||0,e[2]=parseInt(e[2],10)||0,t[0]>e[0]||t[0]==e[0]&&t[1]>e[1]||t[0]==e[0]&&t[1]==e[1]&&t[2]>=e[2]}function M(e,t,n,a){var i;S.ie&&S.mac||(i=h.getElementsByTagName("head")[0])&&(n=n&&"string"==typeof n?n:"screen",a&&(c=d=null),d&&c==n||((a=O("style")).setAttribute("type","text/css"),a.setAttribute("media",n),d=i.appendChild(a),S.ie&&S.win&&typeof h.styleSheets!=m&&0<h.styleSheets.length&&(d=h.styleSheets[h.styleSheets.length-1]),c=n),S.ie&&S.win?d&&typeof d.addRule==w&&d.addRule(e,t):d&&typeof h.createTextNode!=m&&d.appendChild(h.createTextNode(e+" {"+t+"}")))}function W(e,t){n&&(t=t?"visible":"hidden",i&&B(e)?B(e).style.visibility=t:M("#"+e,"visibility:"+t))}function V(e){return null!=/[\\\"<>\.;]/.exec(e)&&typeof encodeURIComponent!=m?encodeURIComponent(e):e}S.ie&&S.win&&window.attachEvent("onunload",function(){for(var e=E.length,t=0;t<e;t++)E[t][0].detachEvent(E[t][1],E[t][2]);for(var n,a,i=C.length,o=0;o<i;o++)D(C[o]);for(n in S)S[n]=null;for(a in S=null,swfobject)swfobject[a]=null;swfobject=null});return{registerObject:function(e,t,n,a){var i;S.w3&&e&&t?((i={}).id=e,i.swfVersion=t,i.expressInstall=n,i.callbackFn=a,b[b.length]=i,W(e,!1)):a&&a({success:!1,id:e})},getObjectById:function(e){if(S.w3)return T(e)},embedSWF:function(l,r,s,d,c,f,u,p,h,y){var v={success:!1,id:r};S.w3&&!(S.wk&&S.wk<312)&&l&&r&&s&&d&&c?(W(r,!1),I(function(){s+="",d+="";var e={};if(h&&typeof h===w)for(var t in h)e[t]=h[t];e.data=l,e.width=s,e.height=d;var n={};if(p&&typeof p===w)for(var a in p)n[a]=p[a];if(u&&typeof u===w)for(var i in u)typeof n.flashvars!=m?n.flashvars+="&"+i+"="+u[i]:n.flashvars=i+"="+u[i];if(F(c)){var o=j(e,n,r);e.id==r&&W(r,!0),v.success=!0,v.ref=o}else{if(f&&N())return e.data=f,void k(e,n,r,y);W(r,!0)}y&&y(v)})):y&&y(v)},switchOffAutoHideShow:function(){n=!1},ua:S,getFlashPlayerVersion:function(){return{major:S.pv[0],minor:S.pv[1],release:S.pv[2]}},hasFlashPlayerVersion:F,createSWF:function(e,t,n){if(S.w3)return j(e,t,n)},showExpressInstall:function(e,t,n,a){S.w3&&N()&&k(e,t,n,a)},removeSWF:function(e){S.w3&&D(e)},createCSS:function(e,t,n,a){S.w3&&M(e,t,n,a)},addDomLoadEvent:I,addLoadEvent:$,getQueryParamValue:function(e){var t=h.location.search||h.location.hash;if(t){if(/\?/.test(t)&&(t=t.split("?")[1]),null==e)return V(t);for(var n=t.split("&"),a=0;a<n.length;a++)if(n[a].substring(0,n[a].indexOf("="))==e)return V(n[a].substring(n[a].indexOf("=")+1))}return""},expressInstallCallback:function(){var e;A&&((e=B(u))&&o&&(e.parentNode.replaceChild(o,e),l&&(W(l,!0),S.ie&&S.win&&(o.style.display="block")),r&&r(s)),A=!1)}}}();function DynamicAudio(e){if(!(this instanceof arguments.callee))return new arguments.callee(arguments);"function"==typeof this.init&&this.init.apply(this,e&&e.callee?e:arguments)}window.AudioContext=window.AudioContext||window.webkitAudioContext,DynamicAudio.VERSION="0.2",DynamicAudio.nextId=1,DynamicAudio.prototype={nextId:null,swf:"dynamicaudio.swf",audioContext:null,flashWrapper:null,flashElement:null,init:function(t){var n=this;n.id=DynamicAudio.nextId++,t&&void 0!==t.swf&&(n.swf=t.swf);try{n.audioContext=new AudioContext}catch(e){console.log("Couldn't create AudioContext:"+e+", falling back to flash player"),n.flashWrapper=document.createElement("div"),n.flashWrapper.id="dynamicaudio-flashwrapper-"+n.id;t=n.flashWrapper.style;t.position="fixed",t.width=t.height="8px",t.bottom=t.left="0px",t.overflow="hidden",n.flashElement=document.createElement("div"),n.flashElement.id="dynamicaudio-flashelement-"+n.id,n.flashWrapper.appendChild(n.flashElement),document.body.appendChild(n.flashWrapper),swfobject.embedSWF(n.swf,n.flashElement.id,"8","8","9.0.0",null,null,{allowScriptAccess:"always"},null,function(e){n.flashElement=e.ref})}},write:function(e){if(null!==this.audioContext)this.webAudioWrite(e);else if(null!==this.flashElement){for(var t=new Array(e.length),n=e.length-1;0!==n;n--)t[n]=this.floatToIntSample(e[n]);this.flashElement.write(t.join(" "))}},writeInt:function(e){null!==this.audioContext?this.webAudioWrite(e,this.intToFloatSample):null!==this.flashElement&&this.flashElement.write(e.join(" "))},webAudioWrite:function(e,t){var n=this.audioContext.createBuffer(2,e.length,this.audioContext.sampleRate),a=n.getChannelData(0),i=n.getChannelData(1),o=0;if(t)for(var l=0;l<e.length;l+=2)a[o]=t(e[l]),i[o]=t(e[l+1]),o++;else for(l=0;l<e.length;l+=2)a[o]=e[l],i[o]=e[l+1],o++;var r=this.audioContext.createBufferSource();r.buffer=n,r.connect(this.audioContext.destination),r.start()},intToFloatSample:function(e){return e/32768},floatToIntSample:function(e){return Math.floor(32768*e)}};