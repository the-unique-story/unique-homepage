(this["webpackJsonpunique-homepage"]=this["webpackJsonpunique-homepage"]||[]).push([[16],{349:function(e,t,a){"use strict";var n=a(29),r=a(30),s=a(32),i=a(31),l=a(0),o=a.n(l),c=a(340),m=a.n(c),d=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).hexToRgb=function(e){var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null},r.isDark=function(){if(null===r.props.bg||void 0===r.props.bg)return null;var e=r.hexToRgb(r.props.bg).r,t=r.hexToRgb(r.props.bg).g,a=r.hexToRgb(r.props.bg).b,n=/rgb\((\d+).*?(\d+).*?(\d+)\)/.exec("rgb("+e+","+t+","+a+")");return(255&n[1])+(255&n[2])+(255&n[3])<640?"text-white":"text-grey"},r.state={visible:e.show},r}return Object(r.a)(a,[{key:"render",value:function(){var e=m()("alert",this.props.className,this.isDark());return!!this.state.visible&&o.a.createElement("div",{className:e,style:{backgroundColor:this.props.bg},role:"alert"},this.props.children)}}]),a}(o.a.Component);t.a=d},435:function(e,t,a){"use strict";a.r(t);var n=a(76),r=a.n(n),s=a(99),i=a(29),l=a(30),o=a(32),c=a(31),m=a(66),d=a(0),h=a.n(d),u=a(434),p=a(365),v=a(56),g=a(67),b=(a(366),a(340)),f=a.n(b),E=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).rand=Math.floor(1e3*Math.random()+1),e}return Object(l.a)(a,[{key:"onFieldChange",value:function(e){var t=e.target.name,a=e.target.checked;this.props.onChange(t,a)}},{key:"render",value:function(){var e=f()("form-check",this.props.className);return h.a.createElement("div",{className:e},h.a.createElement("input",{type:"checkbox",name:this.props.name,className:"form-check-input",id:this.props.name+"-"+this.rand,checked:this.props.checked,onChange:this.onFieldChange.bind(this)}),h.a.createElement("label",{className:"form-check-label text-left",htmlFor:this.props.name+"-"+this.rand},this.props.children))}}]),a}(h.a.Component),N=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"onFieldChange",value:function(e){var t=e.target.name,a=e.target.value;this.props.onChange(t,a)}},{key:"validate",value:function(){return this.props.validation?"valid":!1===this.props.validation?"invalid":void 0}},{key:"render",value:function(){var e=f()("form-control",this.props.className,this.validate());return h.a.createElement("input",{className:e,type:this.props.type,value:this.props.value,name:this.props.name,placeholder:this.props.placeholder,onChange:this.onFieldChange.bind(this)})}}]),a}(h.a.Component),S={DEFAULT:"",R:"btn-rounded"},y={DANGER:"btn-danger",SUCCESS:"btn-success",WARNING:"btn-warning",INFO:"btn-info",PRIMARY:"btn-primary",SECONDARY:"btn-secondary",WHITE:"btn-white",ELEGANT:"btn-elegant",oDANGER:"btn-outline-danger",oSUCCESS:"btn-outline-success",oWARNING:"btn-outline-warning",oINFO:"btn-outline-info",oPRIMARY:"btn-outline-primary",oSECONDARY:"btn-outline-secondary",oWHITE:"btn-outline-white",oELEGANT:"btn-outline-elegant"},k={SM:"btn-sm",MD:"btn-md",LG:"btn-lg",DEFAULT:""},w=f.a.bind(k),C=f.a.bind(y),T=f.a.bind(S),x=function(e){var t=e.btnstyle,a=e.btntype,n=e.size,r=e.href,s=e.children,i=e.className,l=e.disabled,o=e.onClick,c=f()("btn",C(t),T(a),w(n),{disabled:l},i);return d.createElement("a",{href:r,className:c,onClick:o},s)};x.defaultProps={size:k.DEFAULT,btnstyle:y.oWHITE,btntype:S.R,className:"",disabled:!1};var O,j,I=x,A=a(408),_=Object(A.a)(d,{useCssModules:!1}),D=a(349),R=a(46),F=a(35),M=a(45),L=a.n(M),H=Object(g.a)(O||(O=Object(m.a)(['\n    mutation register($token: String!, $values: GenericScalar!) {\n        registrationRegistrationformPage(token: $token, url: "/pharmaziegasse/registration", values: $values) {\n            result\n            errors {\n            name\n            errors\n            }\n        }\n    }\n']))),z=Object(g.a)(j||(j=Object(m.a)(['\n    query modal($token: String!) {\n    page(token: $token, url: "/pharmaziegasse/registration") {\n        urlPath\n        ... on RegistrationRegistrationformPage {\n        registrationHead\n        registrationInfoText\n        registrationNewsletterText\n        registrationPrivacyText\n        registrationStepText\n        thankYouText\n        registrationButton {\n            buttonTitle\n            buttonPage {\n            id\n            urlPath\n            }\n        }\n        }\n    }\n    }\n']))),P=function(e){Object(o.a)(n,e);var t=Object(c.a)(n);function n(e){var l;return Object(i.a)(this,n),(l=t.call(this,e)).responseFacebook=function(e){void 0!==e.first_name&&null!==e.first_name&&l.setState({prenamelive:e.first_name}),void 0!==e.last_name&&null!==e.last_name&&l.setState({surnamelive:e.last_name}),void 0!==e.email&&null!==e.email&&l.setState({emaillive:e.email}),void 0!==e.picture&&null!==e.picture&&l.setState({picture:e.picture.data.url}),void 0!==e.accessToken&&null!==e.accessToken&&l.setState({verified:!0}),l.validateInput(),l.oAuthSuccess()},l.oAuthSuccess=function(){l.setState({oAuthed:!0}),l.setState({formHidden:!0})},l.sendData=Object(s.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(localStorage.setItem("f_n",l.state.prename),localStorage.setItem("f_l",l.state.surname),localStorage.setItem("f_e",l.state.email),localStorage.setItem("f_p",l.state.phone),null===(t={title:"",first_name:l.state.prename,last_name:l.state.surname,email:l.state.email,telephone:l.state.phone,address:l.state.address,postal_code:l.state.postalcode,city:l.state.city,country:l.state.country,verified:l.state.verified,newsletter:l.state.newsletter})&&void 0===t){e.next=10;break}return e.next=8,l.props.register({variables:{token:l.props.token,values:t}}).then((function(e){"OK"===e.data.registrationRegistrationformPage.result?(l.setState({showError:!1}),l.setState({showSuccess:!0})):(l.setState({buffer:"Ihre Eingaben entspricht nicht den Vorraussetzungen. Bitte \xfcberpr\xfcfen Sie Ihre Eingaben."}),l.setState({showError:!0}),l.setState({showSuccess:!1}))})).catch((function(e){"GraphQL error: {'telephone': ['A user with that phone number already exists.']}"===e.message?l.setState({buffer:"Die eingetragene Telefonnummer wurde bereits verwendet.",showError:!0,devError:e.message}):l.setState({buffer:"Es ist ein unerwarteter Fehler aufgetreten. Bitte versuchen Sie es etwas sp\xe4ter erneut.",showError:!0,devError:e.message}),console.error(e)}));case 8:e.next=13;break;case 10:l.setState({buffer:"Ihre Eingaben entspricht nicht den Vorraussetzungen. Bitte \xfcberpr\xfcfen Sie Ihre Eingaben."}),l.setState({showError:!0}),l.setState({showSuccess:!1});case 13:case"end":return e.stop()}}),e)}))),l.validateInput=function(){l.checkTel(l.state.phonelive),l.checkEmail(l.state.emaillive),l.checkName("surname",l.state.surnamelive),l.checkName("prename",l.state.prenamelive)},l.handleSubmitForm=function(e){e.preventDefault();var t=[],a=[];if(void 0!==l.state.prename&&void 0!==l.state.surname||(a.push("Bitte geben Sie Ihren Namen ein."),t.push(4)),void 0===l.state.phone&&(a.push("Bitte geben Sie eine Telefonnummer ein."),t.push(1)),!1===l.state.phone&&(a.push("Die eingegebene Telefonnummer ist ung\xfcltig. Bitte geben Sie auch die L\xe4ndervorzahl (z.B. +43) an."),t.push(1)),void 0===l.state.email&&(a.push("Bitte geben Sie eine E-Mail Adresse ein."),t.push(3)),!1===l.state.email&&(a.push("Die eingegebene E-Mail Adresse ist ung\xfcltig."),t.push(3)),!1!==l.state.prename&&!1!==l.state.surname||(a.push("Ihr Name darf keine Sonderzeichen enthalten."),t.push(5)),!1===l.state.gdpr&&(a.push("Bitte beachten Sie die Datenschutzerkl\xe4rung."),t.push(6)),void 0!==t&&t.length>0)l.setState({buffer:a}),l.setState({showError:!0}),l.setState({showSuccess:!1});else{var n={name:l.state.prename+" "+l.state.surname,email:l.state.email,phone:l.state.phone};l.props.pixel.track("CompleteRegistration",n),l.sendData()}},l.handleChange=function(e,t){switch(e){case"phone":l.setState({phonelive:t},l.checkTel(t));break;case"email":l.setState({emaillive:t},l.checkEmail(t));break;case"prename":l.setState({prenamelive:t},l.checkName("prename",t));break;case"surname":l.setState({surnamelive:t},l.checkName("surname",t));break;case"newsletter":l.setState({newsletter:t});break;case"gdpr":l.setState({gdpr:t});break;default:l.setState({[e]:t})}},l.checkTel=function(e){if(""!==e){var t=Object(u.a)(e);if(void 0!==t){if(t.formatInternational(),l.setState({phone:t.number}),void 0!==t.country){var n=a(370).getName;l.setState({country:n(t.country),cc:t.country.toLowerCase()})}}else l.setState({country:!1,cc:!1}),l.setState({phone:!1})}else l.setState({country:!1,cc:!1}),l.setState({phone:void 0})},l.checkEmail=function(e){""!==e?p.validate(e)?l.setState({email:e}):l.setState({email:!1}):l.setState({email:void 0})},l.checkName=function(e,t){""!==t.trim()?l.setState({[e]:t}):l.setState({[e]:void 0})},l.printFlag=function(){if(!1!==l.state.cc)return d.createElement(_,{code:l.state.cc})},l.printErrorDialogs=function(){if(Array.isArray(l.state.buffer)){var e=[],t=l.state.buffer;return Object.keys(t).forEach((function(a,n){e.push(d.createElement("p",{key:n},t[n]))})),e}return d.createElement("p",null,l.state.buffer)},l.printError=function(){return!!l.state.showError&&(null!==l.state.buffer||void 0!==l.state.buffer?d.createElement(D.a,{className:"alert-danger",show:"true"},l.printErrorDialogs()):d.createElement(D.a,{className:"alert-danger",show:"true"},"Unknown error."))},l.editForm=function(){l.setState({formHidden:!1})},l.state={phone:void 0,email:void 0,prename:void 0,surname:void 0,country:!1,picture:void 0,gdpr:!1,newsletter:!1,showError:!1,verified:!1,showSuccess:!1,oAuthed:!1,formHidden:!1,phonelive:"",emaillive:"",prenamelive:"",surnamelive:""},l}return Object(l.a)(n,[{key:"renderContent",value:function(){var e=this,t=this.props.data.page;return console.log(t),void 0!==this.props.data.page&&d.createElement("div",{className:"modal fade",id:"_pharmaziegasse_registration",tabIndex:"-1",role:"dialog","aria-labelledby":"Registrieren","aria-hidden":"true","data-backdrop":"true"},d.createElement("div",{className:"modal-dialog modal-lg modal-notify modal-info",role:"document"},d.createElement("div",{className:"modal-content"},d.createElement("div",{className:"modal-body"},d.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},d.createElement("span",{"aria-hidden":"true",className:"dark-text"},"\xd7")),d.createElement("div",{className:"lead font-weight-bold text-center",dangerouslySetInnerHTML:{__html:L()(Object(F.renderToString)(d.createElement(R.a,{value:t.registrationHead})))}}),d.createElement("hr",null),this.state.showSuccess?d.createElement("div",{className:"success"},d.createElement(D.a,{className:"alert-success",show:"true"},d.createElement("i",{className:"far fa-check-circle fa-3x green-text mt-1 mb-2"}),d.createElement("div",{dangerouslySetInnerHTML:{__html:L()(Object(F.renderToString)(d.createElement(R.a,{value:t.thankYouText})))}}))):d.createElement("div",{className:"register-form"},d.createElement("div",{className:"row"},d.createElement("div",{className:"col-md-7"},this.state.oAuthed?d.createElement("div",{className:"alert alert-success mb-4"},d.createElement("h4",{className:"font-weight-bold"},"Hallo ",this.state.prename,"!"),d.createElement("p",null,"Wir ben\xf6tigen jetzt nur noch Deine Telefonnummer.")):d.createElement("div",{class:"d-none"},d.createElement("div",{className:"oAuth"}),d.createElement("div",{className:"w-100"},d.createElement("div",{className:"splitter my-4"},d.createElement("span",{className:"or"},d.createElement("span",{className:"or-text"},"oder"))))),this.printError(),"dev"===window.location.search.substr(1)&&this.state.devError&&d.createElement(D.a,{className:"alert-warning",show:"true"},this.state.devError),d.createElement("form",{id:"form-reg",onSubmit:function(t){e.handleSubmitForm(t),t.preventDefault()}},d.createElement("div",null,d.createElement("div",{className:"input-grp"},d.createElement("i",{className:"far fa-user-circle"}),d.createElement(N,{className:"my-3",type:"text",name:"prename",placeholder:"Vorname*",value:this.state.prenamelive,validation:this.state.valid3,onChange:this.handleChange.bind(this)})),d.createElement("div",{className:"input-grp"},d.createElement("i",{className:"far fa-user-circle"}),d.createElement(N,{className:"my-3",type:"text",name:"surname",placeholder:"Nachname*",value:this.state.surnamelive,validation:this.state.valid4,onChange:this.handleChange.bind(this)}))),d.createElement("div",{className:"input-grp"},this.printFlag(),d.createElement("i",{className:"fas fa-phone"}),d.createElement(N,{className:"my-3",type:"text",name:"phone",placeholder:"Telefonnummer*",value:this.state.phonelive,validation:this.state.valid1,onChange:this.handleChange.bind(this)})),this.state.formHidden?d.createElement("div",{className:"alert alert-info register-info alert-data"},d.createElement("p",{className:"m-0"},d.createElement("span",{className:"font-weight-bold"},"Meine Daten"),d.createElement("br",null),"Name: ",this.state.prename," ",this.state.surname,d.createElement("br",null),"E-Mail: ",this.state.email,d.createElement("br",null),d.createElement(I,{btnstyle:"oELEGANT",size:"SM",onClick:this.editForm},"\xc4ndern"))):d.createElement(d.Fragment,null,d.createElement("div",null,d.createElement("div",{className:"input-grp"},d.createElement("i",{className:"far fa-envelope"}),d.createElement(N,{className:"my-3",type:"email",name:"email",placeholder:"E-Mail Adresse*",value:this.state.emaillive,validation:this.state.valid2,onChange:this.handleChange.bind(this)}))),d.createElement("div",{className:"row"},d.createElement("div",{className:"col-md-4"},d.createElement("div",{className:"input-grp"},d.createElement("i",{className:"fas fa-globe"}),d.createElement(N,{className:"my-3",type:"text",name:"postalcode",placeholder:"PLZ",value:this.state.postalcode,validation:this.state.valid5,onChange:this.handleChange.bind(this)}))),d.createElement("div",{className:"col-md-8"},d.createElement("div",{className:"input-grp"},d.createElement("i",{className:"fas fa-city"}),d.createElement(N,{className:"my-3",type:"text",name:"city",placeholder:"Stadt",value:this.state.city,validation:this.state.valid6,onChange:this.handleChange.bind(this)}))),d.createElement("div",{className:"col-md-12"},d.createElement("div",{className:"input-grp"},d.createElement("i",{className:"far fa-building"}),d.createElement(N,{className:"mb-2",type:"text",name:"address",placeholder:"Adresse",value:this.state.address,validation:this.state.valid7,onChange:this.handleChange.bind(this)})))),d.createElement("span",{className:"text-muted"},"* = Pflichtfeld")),d.createElement("div",{className:"text-left mb-3"},d.createElement(E,{name:"newsletter",className:"my-4",onChange:this.handleChange.bind(this)},d.createElement("div",{dangerouslySetInnerHTML:{__html:L()(Object(F.renderToString)(d.createElement(R.a,{value:t.registrationNewsletterText})))}})),d.createElement(E,{name:"gdpr",validation:this.state.valid6,onChange:this.handleChange.bind(this)},d.createElement("div",{dangerouslySetInnerHTML:{__html:L()(Object(F.renderToString)(d.createElement(R.a,{value:t.registrationPrivacyText})))}}))),d.createElement("input",{className:"btn btn-outline-elegant font-weight-bold",type:"submit",value:"Kostenloses Beratungsgespr\xe4ch anfordern"}))),d.createElement("div",{className:"col-md-5 text-left"},d.createElement(D.a,{className:"alert-info register-info",show:"true"},d.createElement("i",{className:"far fa-lightbulb fa-2x"}),d.createElement("div",{className:"mt-2 dark-grey-text",dangerouslySetInnerHTML:{__html:L()(Object(F.renderToString)(d.createElement(R.a,{value:t.registrationInfoText})))}})))))))))}},{key:"render",value:function(){return console.log(this.state),console.log(this.props.data),void 0!==this.props.data&&this.renderContent()}}]),n}(d.Component);t.default=Object(v.d)(Object(v.e)(H,{name:"register"}),Object(v.e)(z,{options:function(e){return{variables:{token:e.token}}}}))(P)}}]);
//# sourceMappingURL=16.b99b6033.chunk.js.map