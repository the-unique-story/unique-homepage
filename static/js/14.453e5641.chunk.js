/*! For license information please see 14.453e5641.chunk.js.LICENSE.txt */
(this["webpackJsonpunique-homepage"]=this["webpackJsonpunique-homepage"]||[]).push([[14],{333:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var l=typeof n;if("string"===l||"number"===l)e.push(this&&this[n]||n);else if(Array.isArray(n))e.push(r.apply(this,n));else if("object"===l)for(var s in n)a.call(n,s)&&n[s]&&e.push(this&&this[s]||s)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},337:function(e,t,a){"use strict";var n=a(29),r=a(30),l=a(32),s=a(31),i=a(0),o=a(333),c=a.n(o),m={DEFAULT:"",R:"btn-rounded"},p=a(36),u=a.n(p),d={DANGER:"btn-danger",SUCCESS:"btn-success",WARNING:"btn-warning",INFO:"btn-info",PRIMARY:"btn-primary",SECONDARY:"btn-secondary",WHITE:"btn-white",ELEGANT:"btn-elegant",oDANGER:"btn-outline-danger",oSUCCESS:"btn-outline-success",oWARNING:"btn-outline-warning",oINFO:"btn-outline-info",oPRIMARY:"btn-outline-primary",oSECONDARY:"btn-outline-secondary",oWHITE:"btn-outline-white",oELEGANT:"btn-outline-elegant"},b={SM:"btn-sm",MD:"btn-md",LG:"btn-lg",DEFAULT:""},g=c.a.bind(b),h=c.a.bind(d),f=c.a.bind(m);String.prototype.replaceAll=function(e,t,a){return this.replace(new RegExp(e.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g,"\\$&"),a?"gi":"g"),"string"==typeof t?t.replace(/\$/g,"$$$$"):t)};var E=function(e){Object(l.a)(a,e);var t=Object(s.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).isModal=function(){if(r.exists()){if(null===r.props.param.buttonLink||void 0===r.props.param.buttonLink)return r.props.param.buttonPage.urlPath=r.props.param.buttonPage.urlPath.replace("/","#"),!0;if(null!==r.props.param.buttonLink&&void 0!==r.props.param.buttonLink)return console.error("Link"),!1}},r.exists=function(){return void 0!==r.props.param&&null!==r.props.param&&!(!r.props.param.buttonPage&&!r.props.param.buttonLink)},r.getClassProps=function(){return c()("btn","font-weight-bold",h(r.props.btnstyle),f(r.props.btntype),g(r.props.size),r.props.disabled,r.props.className)},r.sendPixel=function(){var e={autoConfig:!0,debug:!1},t=localStorage.getItem("f_e");if(void 0!==t&&null!==t){var a={em:t};u.a.init("398871454084167",a,e)}else u.a.init("398871454084167",e);u.a.track("ViewContent",{placement:"body"})},r.getUrlPath=function(e){if(e)return"#"+e.replaceAll("#","_")},r.state={visible:!1},r}return Object(r.a)(a,[{key:"render",value:function(){return console.log(this.props.param),console.log(this.exists(),this.exists()&&this.isModal()),i.createElement(i.Fragment,null,this.exists()&&i.createElement("div",null,this.isModal()?i.createElement("button",{onClick:this.sendPixel,"data-toggle":"modal","data-target":this.getUrlPath(this.props.param.buttonPage.urlPath),className:this.getClassProps()},this.props.param.buttonTitle):i.createElement("a",{href:this.props.param.buttonLink,className:this.getClassProps()},this.props.param.buttonTitle)))}}]),a}(i.Component);E.defaultProps={size:b.DEFAULT,btnstyle:d.WHITE,btntype:m.R,className:"",disabled:!1,buttonLink:null,buttonTitle:"Unnamed",btnhref:""};t.a=E},416:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(337),l=a(46),s=a(35),i=a(45),o=a.n(i);t.default=function(e){var t=e.content,a=e.btn;return n.createElement("div",{className:"container text-center"},!0===e.showHead&&n.createElement("h2",{className:"font-weight-bold",dangerouslySetInnerHTML:{__html:o()(Object(s.renderToString)(n.createElement(l.a,{value:t[0].heading})))}}),n.createElement("div",{className:"row section0-row my-5"},n.createElement("div",{className:"col-md-4"},n.createElement("a",{href:"#individual1",className:"sscroll"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col-12"},n.createElement("img",{draggable:"false",className:"img-fluid",src:t[1].icon,alt:"Search Icon"})),n.createElement("div",{className:"col-12",dangerouslySetInnerHTML:{__html:o()(Object(s.renderToString)(n.createElement(l.a,{value:t[1].text})))}})))),n.createElement("div",{className:"col-md-4"},n.createElement("a",{href:"#individual2",className:"sscroll"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col-12"},n.createElement("img",{draggable:"false",className:"img-fluid",src:t[2].icon,alt:"Expert Icon"})),n.createElement("div",{className:"col-12",dangerouslySetInnerHTML:{__html:o()(Object(s.renderToString)(n.createElement(l.a,{value:t[2].text})))}})))),n.createElement("div",{className:"col-md-4"},n.createElement("a",{href:"#individual3",className:"sscroll"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col-12"},n.createElement("img",{draggable:"false",className:"img-fluid",src:t[3].icon,alt:"Leaf Icon"})),n.createElement("div",{className:"col-12",dangerouslySetInnerHTML:{__html:o()(Object(s.renderToString)(n.createElement(l.a,{value:t[3].text})))}}))))),n.createElement(r.a,{param:a}))}}}]);
//# sourceMappingURL=14.453e5641.chunk.js.map