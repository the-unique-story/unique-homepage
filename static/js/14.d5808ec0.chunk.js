/*! For license information please see 14.d5808ec0.chunk.js.LICENSE */
(this["webpackJsonpunique-homepage"]=this["webpackJsonpunique-homepage"]||[]).push([[14],{325:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var l=typeof n;if("string"===l||"number"===l)e.push(this&&this[n]||n);else if(Array.isArray(n))e.push(r.apply(this,n));else if("object"===l)for(var s in n)a.call(n,s)&&n[s]&&e.push(this&&this[s]||s)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},336:function(e,t,a){"use strict";var n=a(23),r=a(24),l=a(26),s=a(25),o=a(27),i=a(0),c=a(325),u=a.n(c),p={DEFAULT:"",R:"btn-rounded"},m=a(31),b=a.n(m),d={DANGER:"btn-danger",SUCCESS:"btn-success",WARNING:"btn-warning",INFO:"btn-info",PRIMARY:"btn-primary",SECONDARY:"btn-secondary",WHITE:"btn-white",ELEGANT:"btn-elegant",oDANGER:"btn-outline-danger",oSUCCESS:"btn-outline-success",oWARNING:"btn-outline-warning",oINFO:"btn-outline-info",oPRIMARY:"btn-outline-primary",oSECONDARY:"btn-outline-secondary",oWHITE:"btn-outline-white",oELEGANT:"btn-outline-elegant"},h={SM:"btn-sm",MD:"btn-md",LG:"btn-lg",DEFAULT:""},g=u.a.bind(h),f=u.a.bind(d),v=u.a.bind(p);String.prototype.replaceAll=function(e,t,a){return this.replace(new RegExp(e.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g,"\\$&"),a?"gi":"g"),"string"==typeof t?t.replace(/\$/g,"$$$$"):t)};var E=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(s.a)(t).call(this,e))).isModal=function(){if(a.exists()){if(null===a.props.param.buttonLink||void 0===a.props.param.buttonLink)return a.props.param.buttonPage.urlPath=a.props.param.buttonPage.urlPath.replace("/","#"),!0;if(null!==a.props.param.buttonLink&&void 0!==a.props.param.buttonLink)return console.error("Link"),!1}},a.exists=function(){return void 0!==a.props.param&&null!==a.props.param&&!(!a.props.param.buttonPage&&!a.props.param.buttonLink)},a.getClassProps=function(){return u()("btn","font-weight-bold",f(a.props.btnstyle),v(a.props.btntype),g(a.props.size),a.props.disabled,a.props.className)},a.sendPixel=function(){var e={autoConfig:!0,debug:!1},t=localStorage.getItem("f_e");if(void 0!==t&&null!==t){var a={em:t};b.a.init("398871454084167",a,e)}else b.a.init("398871454084167",e);b.a.track("ViewContent",{placement:"body"})},a.getUrlPath=function(e){if(e)return"#"+e.replaceAll("#","_")},a.state={visible:!1},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return console.log(this.props.param),console.log(this.exists(),this.exists()&&this.isModal()),i.createElement(i.Fragment,null,this.exists()&&i.createElement("div",null,this.isModal()?i.createElement("button",{onClick:this.sendPixel,"data-toggle":"modal","data-target":this.getUrlPath(this.props.param.buttonPage.urlPath),className:this.getClassProps()},this.props.param.buttonTitle):i.createElement("a",{href:this.props.param.buttonLink,className:this.getClassProps()},this.props.param.buttonTitle)))}}]),t}(i.Component);E.defaultProps={size:h.DEFAULT,btnstyle:d.WHITE,btntype:p.R,className:"",disabled:!1,buttonLink:null,buttonTitle:"Unnamed",btnhref:""};t.a=E},731:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(336),l=a(38),s=a(30),o=a(37),i=a.n(o);t.default=function(e){var t=e.content,a=e.btn;return n.createElement("div",null,n.createElement("div",{className:"wrapper-carousel-fix"},n.createElement("div",{id:"interview-carousel",className:"carousel no-flex testimonial-carousel slide dark-grey-text","data-ride":"carousel","data-interval":"10000"},n.createElement("ol",{className:"carousel-indicators"},t.map((function(e,t){return n.createElement("button",{key:t,"data-target":"#interview-carousel","data-slide-to":t,className:(a=t,0===a?"btn-floating btn-lg active":"btn-floating btn-lg")},n.createElement("span",null,t+1));var a}))),n.createElement("div",{className:"carousel-inner py-5",role:"listbox"},t.map((function(e,t){return n.createElement("div",{key:t,className:(a=t,0===a?"carousel-item active":"carousel-item")},n.createElement("div",{className:"testimonial pb-5"},n.createElement("div",{className:"num-display font-weight-bold"},n.createElement("span",null,"0"+(t+1))),n.createElement("h2",{className:"h1-responsive font-weight-bold mb-5"},i()(Object(s.renderToString)(n.createElement(l.a,{value:e.title})))),n.createElement("div",{dangerouslySetInnerHTML:{__html:i()(Object(s.renderToString)(n.createElement(l.a,{value:e.text})))}}),n.createElement("h4",{className:"font-weight-bold"},i()(Object(s.renderToString)(n.createElement(l.a,{value:e.name})))),n.createElement("h6",{className:"font-weight-bold my-3 text-muted"},i()(Object(s.renderToString)(n.createElement(l.a,{value:e.info}))))));var a}))),n.createElement("a",{className:"carousel-control-prev left carousel-control",href:"#interview-carousel",role:"button","data-slide":"prev"},n.createElement("span",{className:"icon-prev","aria-hidden":"true"}),n.createElement("span",{className:"sr-only"},"Previous")),n.createElement("a",{className:"carousel-control-next right carousel-control",href:"#interview-carousel",role:"button","data-slide":"next"},n.createElement("span",{className:"icon-next","aria-hidden":"true"}),n.createElement("span",{className:"sr-only"},"Next")))),n.createElement(r.a,{param:a}))}}}]);
//# sourceMappingURL=14.d5808ec0.chunk.js.map