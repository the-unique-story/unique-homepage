(this["webpackJsonpunique-homepage"]=this["webpackJsonpunique-homepage"]||[]).push([[11],{361:function(e,t,a){"use strict";var n=a(23),r=a(24),s=a(26),c=a(25),o=a(27),l=a(0),i=a.n(l),u=a(325),p=a.n(u),m=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(s.a)(this,Object(c.a)(t).call(this,e))).hexToRgb=function(e){var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null},a.isDark=function(){if(null===a.props.bg||void 0===a.props.bg)return null;var e=a.hexToRgb(a.props.bg).r,t=a.hexToRgb(a.props.bg).g,n=a.hexToRgb(a.props.bg).b,r=/rgb\((\d+).*?(\d+).*?(\d+)\)/.exec("rgb("+e+","+t+","+n+")");return(255&r[1])+(255&r[2])+(255&r[3])<640?"text-white":"text-grey"},a.state={visible:e.show},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=p()("alert",this.props.className,this.isDark());return!!this.state.visible&&i.a.createElement("div",{className:e,style:{backgroundColor:this.props.bg},role:"alert"},this.props.children)}}]),t}(i.a.Component);t.a=m},398:function(e,t,a){"use strict";var n=a(23),r=a(24),s=a(26),c=a(25),o=a(27),l=a(0),i=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(s.a)(this,Object(c.a)(t).call(this,e))).state={visible:!1},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){if(null!==this.props.num&&null!==this.props.text){var e="https://api.whatsapp.com/send?phone="+this.props.num.replace("+","").replace("(","").replace(")","").replace(" ","")+"&text="+encodeURIComponent(this.props.text),t="WhatsApp me!";return void 0!==this.props.title&&(t=this.props.title),l.createElement("a",{className:"btn btn-success btn-rounded font-weight-bold mt-3",href:e,target:"_blank",rel:"noopener noreferrer"},l.createElement("i",{className:"fab fa-whatsapp pr-2"}),t)}return null}}]),t}(l.Component);t.a=i},743:function(e,t,a){"use strict";a.r(t);var n=a(23),r=a(24),s=a(26),c=a(25),o=a(27),l=a(0),i=a(482),u=a(87),p=a(483),m=a(361),d=a(398),h=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(s.a)(this,Object(c.a)(t).call(this,e))).renderContent=function(){return l.createElement("div",null,l.createElement("h2",null,a.state.texts.head),l.createElement("p",{className:"lead mt-3 mb-2"},a.state.texts.sub),l.createElement("div",{className:"row d-flex justify-content-center"},!1===a.state.payment.success?l.createElement("div",{className:"col-lg-8"},l.createElement(p.PayPalButton,{createOrder:function(e,t){return t.order.create({purchase_units:[{amount:{value:a.props.amount}}]})},onApprove:function(e,t){return t.order.capture().then((function(e){void 0!==e.payer&&void 0!==e.payer.name&&void 0!==e.payer.name.given_name&&a.setState((function(t){return{payment:Object(i.a)({},t.payment,{name:e.payer.name.given_name})}})),"COMPLETED"===e.status?a.setState((function(e){return{payment:Object(i.a)({},e.payment,{success:!0}),texts:Object(i.a)({},e.texts,{head:"",sub:"Herzlichen Gl\xfcckwunsch zu Ihrem individuellen Beautyprogramm!"})}})):console.error("There was an error during the payment procedure.")}))}})):l.createElement("div",null,l.createElement(m.a,{show:"true",className:"alert-success"},""!==a.state.payment.name&&l.createElement("p",{className:"lead font-weight-bold"},"Vielen Dank f\xfcr Ihre Bestellung, ",a.state.payment.name,"!"),l.createElement("div",{dangerouslySetInnerHTML:{__html:a.props.success_msg}})),l.createElement(d.a,{text:"Ich habe gerade euer Paket um EUR "+a.props.amount+" gekauft und w\xfcrde mich gerne mit euch verbinden.",num:a.props.wa_num,title:"Kontakt"}))))},a.state={payment:{success:!1,name:""},texts:{head:"Nur noch einen Schritt entfernt!",sub:"Zahlungsart w\xe4hlen"}},a.renderContent=a.renderContent.bind(Object(u.a)(a)),a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return this.renderContent()}}]),t}(l.Component),b=function(e){function t(){return Object(n.a)(this,t),Object(s.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e="paymentModal"+this.props.index;return l.createElement("div",{className:"modal fade",id:e,tabIndex:"-1",role:"dialog","aria-labelledby":"Registrieren","aria-hidden":"true","data-backdrop":"true"},l.createElement("div",{className:"modal-dialog modal-lg modal-notify modal-info",role:"document"},l.createElement("div",{className:"modal-content"},l.createElement("div",{className:"modal-body"},l.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},l.createElement("span",{"aria-hidden":"true",className:"dark-text"},"\xd7")),l.createElement(h,{amount:this.props.amount,success_msg:this.props.success_msg,wa_num:this.props.wa_num})))))}}]),t}(l.Component);t.default=b}}]);
//# sourceMappingURL=11.6cd0df08.chunk.js.map