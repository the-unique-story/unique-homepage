(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{326:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var s=typeof a;if("string"===s||"number"===s)e.push(this&&this[a]||a);else if(Array.isArray(a))e.push(r.apply(this,a));else if("object"===s)for(var i in a)n.call(a,i)&&a[i]&&e.push(this&&this[i]||i)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},337:function(e,t,n){"use strict";var a=n(23),r=n(24),s=n(26),i=n(25),o=n(27),l=n(0),p=n(326),c=n.n(p),u={DEFAULT:"",R:"btn-rounded"},b=n(31),m=n.n(b),d={DANGER:"btn-danger",SUCCESS:"btn-success",WARNING:"btn-warning",INFO:"btn-info",PRIMARY:"btn-primary",SECONDARY:"btn-secondary",WHITE:"btn-white",ELEGANT:"btn-elegant",oDANGER:"btn-outline-danger",oSUCCESS:"btn-outline-success",oWARNING:"btn-outline-warning",oINFO:"btn-outline-info",oPRIMARY:"btn-outline-primary",oSECONDARY:"btn-outline-secondary",oWHITE:"btn-outline-white",oELEGANT:"btn-outline-elegant"},g={SM:"btn-sm",MD:"btn-md",LG:"btn-lg",DEFAULT:""},h=c.a.bind(g),f=c.a.bind(d),v=c.a.bind(u);String.prototype.replaceAll=function(e,t,n){return this.replace(new RegExp(e.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g,"\\$&"),n?"gi":"g"),"string"==typeof t?t.replace(/\$/g,"$$$$"):t)};var E=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(s.a)(this,Object(i.a)(t).call(this,e))).isModal=function(){if(n.exists()){if(null===n.props.param.buttonLink||void 0===n.props.param.buttonLink)return n.props.param.buttonPage.urlPath=n.props.param.buttonPage.urlPath.replace("/","#"),!0;if(null!==n.props.param.buttonLink&&void 0!==n.props.param.buttonLink)return console.error("Link"),!1}},n.exists=function(){return void 0!==n.props.param&&null!==n.props.param&&!(!n.props.param.buttonPage&&!n.props.param.buttonLink)},n.getClassProps=function(){return c()("btn","font-weight-bold",f(n.props.btnstyle),v(n.props.btntype),h(n.props.size),n.props.disabled,n.props.className)},n.sendPixel=function(){var e={autoConfig:!0,debug:!1},t=localStorage.getItem("f_e");if(void 0!==t&&null!==t){var n={em:t};m.a.init("398871454084167",n,e)}else m.a.init("398871454084167",e);m.a.track("ViewContent",{placement:"body"})},n.getUrlPath=function(e){if(e)return"#"+e.replaceAll("#","_")},n.state={visible:!1},n}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return console.log(this.props.param),console.log(this.exists(),this.exists()&&this.isModal()),l.createElement(l.Fragment,null,this.exists()&&l.createElement("div",null,this.isModal()?l.createElement("button",{onClick:this.sendPixel,"data-toggle":"modal","data-target":this.getUrlPath(this.props.param.buttonPage.urlPath),className:this.getClassProps()},this.props.param.buttonTitle):l.createElement("a",{href:this.props.param.buttonLink,className:this.getClassProps()},this.props.param.buttonTitle)))}}]),t}(l.Component);E.defaultProps={size:g.DEFAULT,btnstyle:d.WHITE,btntype:u.R,className:"",disabled:!1,buttonLink:null,buttonTitle:"Unnamed",btnhref:""};t.a=E},362:function(e,t,n){"use strict";var a=n(23),r=n(24),s=n(26),i=n(25),o=n(27),l=n(0),p=n.n(l),c=n(326),u=n.n(c),b=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(s.a)(this,Object(i.a)(t).call(this,e))).hexToRgb=function(e){var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null},n.isDark=function(){if(null===n.props.bg||void 0===n.props.bg)return null;var e=n.hexToRgb(n.props.bg).r,t=n.hexToRgb(n.props.bg).g,a=n.hexToRgb(n.props.bg).b,r=/rgb\((\d+).*?(\d+).*?(\d+)\)/.exec("rgb("+e+","+t+","+a+")");return(255&r[1])+(255&r[2])+(255&r[3])<640?"text-white":"text-grey"},n.state={visible:e.show},n}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=u()("alert",this.props.className,this.isDark());return!!this.state.visible&&p.a.createElement("div",{className:e,style:{backgroundColor:this.props.bg},role:"alert"},this.props.children)}}]),t}(p.a.Component);t.a=b},730:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(337),s=n(362),i=n(38),o=n(30),l=n(37),p=n.n(l);t.default=function(e){return a.createElement("div",{className:"container text-left"},!0===e.showHead&&a.createElement("h2",{className:"font-weight-bold",dangerouslySetInnerHTML:{__html:p()(Object(o.renderToString)(a.createElement(i.a,{value:e.heading})))}}),a.createElement("div",{className:"row mt-5"},a.createElement("div",{className:"col-md-6"},a.createElement("div",{className:"row"},a.createElement("div",{className:"view col-12 mb-5 p-0"},a.createElement("img",{draggable:"false",className:"img-fluid",src:"https://pharmaziegasse.at"+e.img,alt:"Beautyprogramm starten"}),a.createElement("div",{className:"mask img-mask"})),a.createElement("div",{className:"col-12"},a.createElement(r.a,{param:e.btn})))),a.createElement("div",{className:"col-md-6"},a.createElement("div",{dangerouslySetInnerHTML:{__html:p()(Object(o.renderToString)(a.createElement(i.a,{value:e.paragraph})))}}),null!==e.footer&&a.createElement(s.a,{show:"true",className:"alert-info"},p()(Object(o.renderToString)(a.createElement(i.a,{value:e.footer})))))))}}}]);
//# sourceMappingURL=7.824ea392.chunk.js.map