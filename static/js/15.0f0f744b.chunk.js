(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{156:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var l=typeof n;if("string"===l||"number"===l)e.push(this&&this[n]||n);else if(Array.isArray(n))e.push(r.apply(this,n));else if("object"===l)for(var s in n)a.call(n,s)&&n[s]&&e.push(this&&this[s]||s)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},168:function(e,t,a){"use strict";var n=a(10),r=a(11),l=a(13),s=a(12),o=a(14),i=a(0),c=a(156),m=a.n(c),p={DEFAULT:"",R:"btn-rounded"},u={DANGER:"btn-danger",SUCCESS:"btn-success",WARNING:"btn-warning",INFO:"btn-info",PRIMARY:"btn-primary",SECONDARY:"btn-secondary",WHITE:"btn-white",ELEGANT:"btn-elegant",oDANGER:"btn-outline-danger",oSUCCESS:"btn-outline-success",oWARNING:"btn-outline-warning",oINFO:"btn-outline-info",oPRIMARY:"btn-outline-primary",oSECONDARY:"btn-outline-secondary",oWHITE:"btn-outline-white",oELEGANT:"btn-outline-elegant"},d={SM:"btn-sm",MD:"btn-md",LG:"btn-lg",DEFAULT:""},b=m.a.bind(d),E=m.a.bind(u),g=m.a.bind(p),f=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(s.a)(t).call(this,e))).isModal=function(){if(a.exists()){if(null===a.props.param.btnlink||void 0===a.props.param.btnlink)return a.props.param.buttonPage.urlPath=a.props.param.buttonPage.urlPath.replace("/","#"),!0;if(null!==a.props.param.btnlink&&void 0!==a.props.param.btnlink)return console.error("Link"),!1}},a.exists=function(){return void 0!==a.props.param&&null!==a.props.param&&(null!==a.props.param.buttonPage&&void 0!==a.props.param.buttonPage||null!==a.props.param.btnlink&&void 0!==a.props.param.btnlink)},a.getClassProps=function(){return m()("btn","font-weight-bold",E(a.props.btnstyle),g(a.props.btntype),b(a.props.size),a.props.disabled,a.props.className)},a.state={visible:!1},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.createElement("div",null,this.exists()&&i.createElement("div",null,!0===this.isModal()?i.createElement("button",{"data-toggle":"modal","data-target":this.props.param.buttonPage.urlPath,className:this.getClassProps()},this.props.param.buttonTitle):i.createElement("a",{href:this.props.param.buttonLink,className:this.getClassProps()},this.props.param.buttonTitle)))}}]),t}(i.Component);f.defaultProps={size:d.DEFAULT,btnstyle:u.WHITE,btntype:p.R,className:"",disabled:!1,btnlink:null,btntitle:"Unnamed",btnhref:""};t.a=f},625:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(168),l=a(26),s=a(16),o=a(27),i=a.n(o);t.default=function(e){var t=e.content,a=e.btn;return n.createElement("div",{className:"container text-center"},!0===e.showHead&&n.createElement("h2",{className:"font-weight-bold",dangerouslySetInnerHTML:{__html:i()(Object(s.renderToString)(n.createElement(l.a,{value:t[0].heading})))}}),n.createElement("div",{className:"row section0-row my-5"},n.createElement("div",{className:"col-md-4"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col-12"},n.createElement("img",{draggable:"false",className:"img-fluid",src:t[1].icon,alt:"Search Icon"})),n.createElement("div",{className:"col-12",dangerouslySetInnerHTML:{__html:i()(Object(s.renderToString)(n.createElement(l.a,{value:t[1].text})))}}))),n.createElement("div",{className:"col-md-4"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col-12"},n.createElement("img",{draggable:"false",className:"img-fluid",src:t[2].icon,alt:"Expert Icon"})),n.createElement("div",{className:"col-12",dangerouslySetInnerHTML:{__html:i()(Object(s.renderToString)(n.createElement(l.a,{value:t[2].text})))}}))),n.createElement("div",{className:"col-md-4"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col-12"},n.createElement("img",{draggable:"false",className:"img-fluid",src:t[3].icon,alt:"Leaf Icon"})),n.createElement("div",{className:"col-12",dangerouslySetInnerHTML:{__html:i()(Object(s.renderToString)(n.createElement(l.a,{value:t[3].text})))}})))),n.createElement(r.a,{param:a}))}}}]);
//# sourceMappingURL=15.0f0f744b.chunk.js.map