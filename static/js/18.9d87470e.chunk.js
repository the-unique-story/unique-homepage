(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{400:function(e,t,a){"use strict";var l=a(23),n=a(24),c=a(26),r=a(25),m=a(27),s=a(0),o=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(r.a)(t).call(this,e))).state={visible:!1},a}return Object(m.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){if(null!==this.props.num&&null!==this.props.text){var e="https://api.whatsapp.com/send?phone="+this.props.num.replace("+","").replace("(","").replace(")","").replace(" ","")+"&text="+encodeURIComponent(this.props.text),t="WhatsApp me!";return void 0!==this.props.title&&(t=this.props.title),s.createElement("a",{className:"btn btn-success btn-rounded font-weight-bold mt-3",href:e,target:"_blank",rel:"noopener noreferrer"},s.createElement("i",{className:"fab fa-whatsapp pr-2"}),t)}return null}}]),t}(s.Component);t.a=o},723:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a(400),c=a(111);t.default=function(e){var t=e.background,a=e.sociallinks,r=e.companyinfo,m=e.logo,s={backgroundColor:t};return l.createElement("footer",{className:"page-footer font-small lighten-5 py-4 ",style:s},l.createElement("div",{className:"container text-center text-md-left"},l.createElement("div",{className:"row text-center text-md-left mt-3 pb-3 dark-grey-text"},l.createElement("div",{className:"col-md-2 col-lg-2 col-xl-2 mx-auto mt-3"},l.createElement("img",{className:"img-fluid",src:m,alt:"The Unique Story"})),l.createElement("hr",{className:"w-100 clearfix d-md-none"}),l.createElement("div",{className:"col-md-2 col-lg-2 col-xl-2 mx-auto mt-3"},l.createElement("h6",{className:"text-uppercase mb-4 font-weight-bold"},"Anschrift"),l.createElement("p",null,r[0].address),l.createElement("p",null,r[0].zip," ",r[0].city)),l.createElement("hr",{className:"w-100 clearfix d-md-none"}),l.createElement("div",{className:"col-md-3 col-lg-3 col-xl-3 mx-auto mt-3"},l.createElement("h6",{className:"text-uppercase mb-4 font-weight-bold"},"Kontakt"),l.createElement("p",null,l.createElement("i",{className:"fas fa-phone mr-3"}),r[0].phone),l.createElement("a",{className:"email-link",href:"mailto:"+r[0].email},l.createElement("i",{className:"fas fa-envelope mr-3"}),r[0].email),l.createElement(n.a,{text:e.wa_text,num:e.wa_num})),l.createElement("hr",{className:"w-100 clearfix d-md-none"}),l.createElement("div",{className:"col-md-4 col-lg-3 col-xl-3 mx-auto mt-3"},l.createElement("p",null,l.createElement("span",{className:"link","data-toggle":"modal","data-target":"#aboutModal"},"Impressum")),l.createElement("p",null,l.createElement("span",{className:"link","data-toggle":"modal","data-target":"#privacyModal"},"Datenschutz")),l.createElement(c.a,{items:a}))),l.createElement("hr",null),l.createElement("div",{className:"row d-flex align-items-center dark-grey-text mb-3"},l.createElement("div",{className:"col-md-6"},l.createElement("p",{className:"text-center text-md-left"},"\xa9 2018 - ",(new Date).getFullYear()," Copyright: ",r[0].copyrightholder)))))}}}]);
//# sourceMappingURL=18.9d87470e.chunk.js.map