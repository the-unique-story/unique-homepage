(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{326:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var s=typeof a;if("string"===s||"number"===s)e.push(this&&this[a]||a);else if(Array.isArray(a))e.push(r.apply(this,a));else if("object"===s)for(var i in a)n.call(a,i)&&a[i]&&e.push(this&&this[i]||i)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},337:function(e,t,n){"use strict";var a=n(23),r=n(24),s=n(26),i=n(25),o=n(27),l=n(0),c=n(326),m=n.n(c),u={DEFAULT:"",R:"btn-rounded"},p=n(31),d=n.n(p),b={DANGER:"btn-danger",SUCCESS:"btn-success",WARNING:"btn-warning",INFO:"btn-info",PRIMARY:"btn-primary",SECONDARY:"btn-secondary",WHITE:"btn-white",ELEGANT:"btn-elegant",oDANGER:"btn-outline-danger",oSUCCESS:"btn-outline-success",oWARNING:"btn-outline-warning",oINFO:"btn-outline-info",oPRIMARY:"btn-outline-primary",oSECONDARY:"btn-outline-secondary",oWHITE:"btn-outline-white",oELEGANT:"btn-outline-elegant"},h={SM:"btn-sm",MD:"btn-md",LG:"btn-lg",DEFAULT:""},f=m.a.bind(h),E=m.a.bind(b),g=m.a.bind(u),v=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(s.a)(this,Object(i.a)(t).call(this,e))).isModal=function(){if(n.exists()){if(null===n.props.param.buttonLink||void 0===n.props.param.buttonLink)return n.props.param.buttonPage.urlPath=n.props.param.buttonPage.urlPath.replace("/","#"),!0;if(null!==n.props.param.buttonLink&&void 0!==n.props.param.buttonLink)return console.error("Link"),!1}},n.exists=function(){return void 0!==n.props.param&&null!==n.props.param&&!(!n.props.param.buttonPage&&!n.props.param.buttonLink)},n.getClassProps=function(){return m()("btn","font-weight-bold",E(n.props.btnstyle),g(n.props.btntype),f(n.props.size),n.props.disabled,n.props.className)},n.sendPixel=function(){var e={autoConfig:!0,debug:!1},t=localStorage.getItem("f_e");if(void 0!==t&&null!==t){var n={em:t};d.a.init("398871454084167",n,e)}else d.a.init("398871454084167",e);d.a.track("ViewContent",{placement:"body"})},n.state={visible:!1},n}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.createElement(l.Fragment,null,this.exists()&&l.createElement("div",null,this.isModal()?l.createElement("button",{onClick:this.sendPixel,"data-toggle":"modal","data-target":this.props.param.buttonPage.urlPath,className:this.getClassProps()},this.props.param.buttonTitle):l.createElement("a",{href:this.props.param.buttonLink,className:this.getClassProps()},this.props.param.buttonTitle)))}}]),t}(l.Component);v.defaultProps={size:h.DEFAULT,btnstyle:b.WHITE,btntype:u.R,className:"",disabled:!1,buttonLink:null,buttonTitle:"Unnamed",btnhref:""};t.a=v},355:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",function(){return a})},737:function(e,t,n){"use strict";n.r(t);var a=n(69),r=n.n(a),s=n(88),i=n(355),o=n(23),l=n(24),c=n(26),m=n(25),u=n(87),p=n(27),d=n(58),b=n(0),h=n(48),f=n(59),E=n(337),g=n(38),v=n(30),N=n(37),y=n.n(N);function O(){var e=Object(d.a)(["\n    query img(\n            $token: String!\n            $id: Int!\n        ){\n        image(\n            token: $token\n            id: $id\n        ){\n            urlLink\n        }\n    }\n"]);return O=function(){return e},e}var k=Object(f.a)(O()),j=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(c.a)(this,Object(m.a)(t).call(this,e))).onImgFetched=function(e,t){n.setState(Object(i.a)({},t,e))},n.renderImg=function(e,t){return b.createElement(h.a,null,function(a){return b.createElement("div",{className:"imgcontainer"},b.createElement("div",{className:"img-profile-container",onClick:Object(s.a)(r.a.mark(function n(){var s,i;return r.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.query({query:k,variables:{id:e,token:this.props.token}});case 2:s=n.sent,void 0!==(i=s.data)&&this.onImgFetched(i.image,t);case 5:case"end":return n.stop()}},n,this)})).bind(Object(u.a)(n))},n.state[t]&&b.createElement("img",{className:"img-fluid w-100",src:"https://pharmaziegasse.at"+n.state[t].urlLink,alt:"step "+(t+1)})))})},n.renderItem=function(e,t){var n="far fa-"+e.icon+" fa-2x";return b.createElement("div",{className:"py-2"},b.createElement("i",{className:n}),b.createElement("p",{className:"lead mt-3"},"STEP ",t+1),b.createElement("p",{className:"lead"},y()(Object(v.renderToString)(b.createElement(g.a,{value:e.head})))),b.createElement("p",{dangerouslySetInnerHTML:{__html:y()(Object(v.renderToString)(b.createElement(g.a,{value:e.text})))}}))},n.isOdd=function(e){return 1===Math.abs(e%2)},n.renderElaborateItem=function(e,t){var a="fas fa-"+e.icon+" fa-2x",r="row d-flex";return n.isOdd(t)||(r+=" flex-row-reverse"),b.createElement("div",{className:r,key:t},b.createElement("div",{className:"view col-md-6 p-0"},n.renderImg(e.img,t),b.createElement("div",{className:"mask img-mask"})),b.createElement("div",{className:"col-md-6 p-0 d-flex justify-content-center"},b.createElement("div",{className:"m-auto pl-5 pr-5"},b.createElement("div",{className:"spacer-4 d-block d-sm-none"}),b.createElement("i",{className:a}),b.createElement("h4",{className:"mt-3 mb-0 font-weight-bold dark-grey-text"},"Schritt ",t+1),b.createElement("p",{className:"lead"},y()(Object(v.renderToString)(b.createElement(g.a,{value:e.head})))),b.createElement("p",{dangerouslySetInnerHTML:{__html:y()(Object(v.renderToString)(b.createElement(g.a,{value:e.text})))}}))))},n.state={},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return!0===this.props.simple?b.createElement("div",{className:"container py-5"},!0===this.props.showHead&&b.createElement("h2",{className:"font-weight-bold",dangerouslySetInnerHTML:{__html:y()(Object(v.renderToString)(b.createElement(g.a,{value:this.props.title})))}}),b.createElement("h4",{className:"text-muted",dangerouslySetInnerHTML:{__html:y()(Object(v.renderToString)(b.createElement(g.a,{value:this.props.lead})))}}),b.createElement("div",{className:"row d-flex justify-content-center mt-5"},this.props.items.map(function(t,n){return b.createElement("div",{key:n,className:"col-md-3"},e.renderItem(t,n))})),b.createElement(E.a,{param:this.props.btn})):b.createElement("div",{className:"container py-5"},!0===this.props.showHead&&b.createElement("h2",{className:"font-weight-bold",dangerouslySetInnerHTML:{__html:y()(Object(v.renderToString)(b.createElement(g.a,{value:this.props.title})))}}),b.createElement("h4",{className:"text-muted mb-5",dangerouslySetInnerHTML:{__html:y()(Object(v.renderToString)(b.createElement(g.a,{value:this.props.lead})))}}),this.props.items.map(function(t,n){return e.renderElaborateItem(t,n)}),b.createElement(E.a,{className:"mt-5",param:this.props.btn}))}}]),t}(b.Component);t.default=j}}]);
//# sourceMappingURL=10.8e850b90.chunk.js.map