(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{107:function(e,t,a){},116:function(e,t,a){},122:function(e,t,a){},124:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(53),c=a.n(l),i=(a(75),a(8)),o=a(9),s=a(11),m=a(10),u=a(12),d=a(18),h=a(23),p=a(20),b=a(32),f=a(30),g=a(21),k=(a(77),a(78),a(45)),E=a(52),v=a(55),y=function(e){return r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader__ball loader__ball--1"}),r.a.createElement("span",{className:"loader__ball loader__ball--2"}),r.a.createElement("span",{className:"loader__ball loader__ball--3"}))},x=a(38),_=Object(n.lazy)(function(){return Promise.resolve().then(a.bind(null,68))}),S=Object(n.lazy)(function(){return a.e(6).then(a.bind(null,208))}),w=function(e){var t=e.navitems,a=e.heroitems,r=e.sociallinks,l=e.logos,c=e.theme;function i(e){return e?"nav-item active":"nav-item"}return n.createElement("header",{id:"home"},n.createElement(n.Suspense,{fallback:n.createElement(y,null)},n.createElement(_,{theme:c,logo:function(e){return"D"===e?l[0].light:l[0].dark}(c)},n.createElement("ul",{className:"navbar-nav ml-auto d-flex justify-content-center align-items-center"},t.map(function(e,t){return function(e,t){return"text"===e.type?"#"===e.href.charAt(0)?n.createElement("li",{key:t,className:i(e.active)},n.createElement("a",{className:"nav-link m-1 sscroll",href:e.href,dangerouslySetInnerHTML:{__html:e.text}})):n.createElement("li",{key:t,className:i(e.active)},n.createElement("a",{className:"nav-link m-1",href:e.href,dangerouslySetInnerHTML:{__html:e.text}})):"D"===c?[n.createElement("li",{key:t,className:i(e.active)},n.createElement(x.a,{btnstyle:"WHITE",modal:"#modalRegister",className:"font-weight-bold d-none d-sm-block"},e.text)),n.createElement("li",{key:t+1,className:i(e.active)},n.createElement("a",{className:"nav-link m-1 d-block d-sm-none",href:e.href,dangerouslySetInnerHTML:{__html:e.text}}))]:"L"===c?[n.createElement("li",{key:t,className:i(e.active)},n.createElement(x.a,{btnstyle:"oELEGANT",modal:"#modalRegister",className:"font-weight-bold d-none d-sm-block"},e.text)),n.createElement("li",{key:t+1,className:i(e.active)},n.createElement("a",{className:"nav-link m-1 d-block d-sm-none",href:e.href,dangerouslySetInnerHTML:{__html:e.text}}))]:void 0}(e,t)})))),n.createElement(n.Suspense,{fallback:n.createElement("div",null)},n.createElement(S,{heroitems:a,sociallinks:r})))},N=a(24),B=a.n(N),H=a(56),j=a.n(H),O=a(57),P=a.n(O),z=a(25),L=a.n(z),I=a(58),C=a.n(I),A=a(59),D=a.n(A),R=a(60),M=a.n(R),T=a(61),G=a.n(T),W=[{href:"#why",text:"Warum PHARMAZIEGASSE<sup>\xae</sup>?",active:!1,type:"text"},{href:"#method",text:"Wie funktioniert es?",active:!1,type:"text"},{href:"#pricing",text:"Preise",active:!1,type:"text"},{href:"#about",text:"\xdcber uns",active:!1,type:"text"},{href:"/getting-started",text:"Loslegen",active:!1,type:"button"}],U=(L.a,P.a,[C.a,D.a,M.a,G.a]);a(107);function F(){var e=Object(k.a)(["\nquery pages {\n  pages {\n    id\n    title\n    ... on HomeUniquePage {\n      __typename\n      token\n      id\n      title\n      city\n      zipCode\n      address\n      telephone\n      telefax\n      vatNumber\n      taxId\n      courtOfRegistry\n      placeOfRegistry\n      tradeRegisterNumber\n      copyrightholder\n      sociallinks{\n        ... on StringBlock{\n          value\n        }\n      }\n      ownership\n      email\n      headers{\n        ... on HomeHero_SlideBlockListBlock{\n          value{\n            slideHead\n            slideSubhead\n            slideImage{\n              urlLink\n            }\n            slideButton{\n              buttonTitle\n              buttonPage{\n                id\n                urlPath\n              }\n            }\n          }\n        }\n      }\n      footers {\n        ... on Home_F_InfoBlock{\n          __typename\n          infoPlaceholder\n          infoBackground\n        }\n      }\n      sections {\n      \t... on Home_S_WhyBlock {\n          __typename\n          whyBackground\n          whyDisplayhead\n          whyHead\n          whyButton{\n            id\n          }\n          whyCollum1{\n            collumImage{\n              urlLink\n            }\n            collumParagraph\n          }\n          whyCollum2{\n            collumImage{\n              urlLink\n            }\n            collumParagraph\n          }\n          whyCollum3{\n            collumImage{\n              urlLink\n            }\n            collumParagraph\n          }\n        }\n        ... on Home_S_IndividualBlock {\n          __typename\n          individualHead\n          individualDisplayhead\n          individualBackground\n          individualLead\n          individualImage{\n            urlLink\n          }\n          individualButton{\n            id\n          }\n          individualParagraph\n        }\n        ... on Home_S_ExpertsBlock {\n          __typename\n          expertsHead\n          expertsBackground\n          expertsDisplayhead\n          expertsLead\n          expertsImage{\n            urlLink\n          }\n          expertsButton{\n            id\n          }\n          expertsParagraph\n        }\n        ... on Home_S_LabBlock {\n          __typename\n          labHead\n          labLead\n          labBackground\n          labDisplayhead\n          labImage{\n            urlLink\n          }\n          labButton{\n            id\n          }\n          labParagraph\n        }\n        ... on Home_S_MethodBlock {\n          __typename\n          methodHead\n          methodDisplayhead\n          methodBackground\n          methodButton{\n            id\n          }\n          methodSphere1{\n            sphereStep\n          }\n          methodSphere2{\n            sphereStep\n          }\n          methodSphere3{\n            sphereStep\n          }\n          methodSphere4{\n            sphereStep\n          }\n        }\n        ... on Home_S_ServicesBlock {\n          __typename\n          servicesBackground\n          servicesServices\n          servicesButton{\n            id\n          }\n        }\n        ... on Home_S_ReviewsBlock {\n          __typename\n          reviewsHead\n          reviewsDisplayhead\n          reviewsBackground\n          reviewsReviews\n        }\n        ... on Home_S_PricingBlock {\n          __typename\n          pricingHead\n          pricingBackground\n          pricingDisplayhead\n          pricingPricingcards\n        }\n        ... on Home_S_AboutBlock {\n          __typename\n          aboutHead\n          aboutDisplayhead\n          aboutBackground\n          aboutImage{\n            urlLink\n          }\n          aboutParagraph\n        }\n        ... on Home_S_FacebookBlock{\n          facebookHead\n          facebookDisplayhead\n          facebookBackground\n          facebookUrls\n        }\n        ... on Home_S_InstagramBlock{\n          instagramHead\n          instagramDisplayhead\n          instagramBackground\n          instagramCaptions\n          instagramUrls\n        }\n      }\n    }\n  }\n}\n"]);return F=function(){return e},e}var q=[{light:j.a,dark:B.a}],Y=Object(E.a)(F()),Z=Object(n.lazy)(function(){return Promise.resolve().then(a.bind(null,35))}),K=Object(n.lazy)(function(){return Promise.resolve().then(a.bind(null,36))}),J=Object(n.lazy)(function(){return Promise.all([a.e(4),a.e(7)]).then(a.bind(null,209))}),Q=Object(n.lazy)(function(){return Promise.resolve().then(a.bind(null,37))}),V=Object(n.lazy)(function(){return a.e(17).then(a.bind(null,198))}),$=Object(n.lazy)(function(){return a.e(11).then(a.bind(null,199))}),X=Object(n.lazy)(function(){return a.e(9).then(a.bind(null,200))}),ee=Object(n.lazy)(function(){return a.e(12).then(a.bind(null,201))}),te=Object(n.lazy)(function(){return a.e(13).then(a.bind(null,202))}),ae=Object(n.lazy)(function(){return a.e(16).then(a.bind(null,203))}),ne=Object(n.lazy)(function(){return a.e(15).then(a.bind(null,204))}),re=Object(n.lazy)(function(){return a.e(14).then(a.bind(null,205))}),le=Object(n.lazy)(function(){return a.e(8).then(a.bind(null,206))}),ce=Object(n.lazy)(function(){return a.e(5).then(a.bind(null,210))}),ie=Object(n.lazy)(function(){return Promise.all([a.e(3),a.e(10)]).then(a.bind(null,207))});var oe=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).getUnique=function(e){for(var t=[],a=0;a<e.length;a++)t.includes(e[a])||t.push(e[a]);return t},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"renderContent",value:function(){var e=this.props.data;if(console.log(e),e.loading)return r.a.createElement("div",{className:"h-100"},r.a.createElement("div",{className:"flex-center flex-column"},r.a.createElement(v.RingLoader,{sizeUnit:"px",size:50,color:"#9dbdd6"}),r.a.createElement("span",{className:"mt-3"},"Loading your experience...")));if(e.error)return console.error(e.error),r.a.createElement("div",{className:"h-100"},r.a.createElement("div",{className:"flex-center flex-column"},r.a.createElement("h1",{className:"animated fadeIn mb-4 orange-text"},r.a.createElement("i",{className:"fas fa-exclamation-triangle"})),r.a.createElement("h5",{className:"animated fadeIn mb-3"},"Error!"),r.a.createElement("p",{className:"animated fadeIn text-muted"},"An error occurred! We will be back shortly.")));var t=e.pages[0],a=t.headers,l=t.sections,c=t.footers,i=[];return function(e){for(var t=window.location.search.substring(1).split("&"),a=0;a<t.length;a++){var n=t[a].split("=");if(n[0]===e)return n[1]}return!1}("token")===t.token?r.a.createElement("main",{className:"Homepage"},a.map(function(e,a){return r.a.createElement(w,{key:a,logos:q,navitems:W,theme:"D",heroitems:e.value.map(function(e,t){return i.push(e.slideButton.buttonPage.id),{img:Pe+e.slideImage.urlLink,head:e.slideHead,subhead:e.slideSubhead,btntext:"Beautyprogramm starten",btnhref:"/start"}}),sociallinks:[{fb:t.sociallinks[0].value,ig:t.sociallinks[1].value}]})}),l.map(function(e,t){return"Home_S_WhyBlock"===e.__typename?r.a.createElement(n.Suspense,{key:t,fallback:r.a.createElement(y,null)},r.a.createElement(Z,{sectionid:"why",background:e.whyBackground,"data-id":"0"},r.a.createElement(n.Suspense,{fallback:r.a.createElement(y,null)},r.a.createElement(V,{btnShow:e.whyButton,showHead:e.whyDisplayhead,content:[{heading:e.whyHead},{icon:Pe+e.whyCollum1.collumImage.urlLink,text:e.whyCollum1.collumParagraph},{icon:Pe+e.whyCollum2.collumImage.urlLink,text:e.whyCollum2.collumParagraph},{icon:Pe+e.whyCollum3.collumImage.urlLink,text:e.whyCollum3.collumParagraph},{btntext:"Beautyprogramm starten",btnhref:"/start"}]})))):"Home_S_IndividualBlock"===e.__typename?r.a.createElement(n.Suspense,{key:t,fallback:r.a.createElement(y,null)},r.a.createElement(Z,{sectionid:"individual",background:e.individualBackground,"data-id":"1"},r.a.createElement(n.Suspense,{fallback:r.a.createElement(y,null)},r.a.createElement($,{btnShow:e.individualButton,showHead:e.individualDisplayhead,content:[{heading:e.individualHead},{img:Pe+e.individualImage.urlLink},{btntext:"Beautyprogramm starten",btnhref:"/start"},{lead:e.individualLead},{paragraph:e.individualParagraph}]})))):"Home_S_ExpertsBlock"===e.__typename?r.a.createElement(n.Suspense,{key:t,fallback:r.a.createElement(y,null)},r.a.createElement(Z,{sectionid:"experts",background:e.expertsBackground,"data-id":"2"},r.a.createElement(n.Suspense,{fallback:r.a.createElement(y,null)},r.a.createElement(X,{btnShow:e.expertsButton,showHead:e.expertsDisplayhead,content:[{heading:e.expertsHead},{img:Pe+e.expertsImage.urlLink},{btntext:"Beautyprogramm starten",btnhref:"/start"},{lead:e.expertsLead},{paragraph:e.expertsParagraph}]})))):"Home_S_LabBlock"===e.__typename?r.a.createElement(n.Suspense,{key:t,fallback:r.a.createElement(y,null)},r.a.createElement(Z,{sectionid:"lab",background:e.labBackground,"data-id":"3"},r.a.createElement(n.Suspense,{fallback:r.a.createElement(y,null)},r.a.createElement(ee,{btnShow:e.labButton,showHead:e.labDisplayhead,content:[{heading:e.labHead},{img:Pe+e.labImage.urlLink},{btntext:"Beautyprogramm starten",btnhref:"/start"},{lead:e.labLead},{paragraph:e.labParagraph}]})))):"Home_S_MethodBlock"===e.__typename?r.a.createElement(n.Suspense,{key:t,fallback:r.a.createElement(y,null)},r.a.createElement(Z,{sectionid:"method",background:e.methodBackground,"data-id":"4"},r.a.createElement(n.Suspense,{fallback:r.a.createElement(y,null)},r.a.createElement(te,{btnShow:e.methodButton,showHead:e.methodDisplayhead,content:[{heading:e.methodHead},{btntext:"Beautyprogramm starten",btnhref:"/start"},{text:e.methodSphere1.sphereStep,href:"#"},{text:e.methodSphere2.sphereStep,href:"#"},{text:e.methodSphere3.sphereStep,href:"#"},{text:e.methodSphere4.sphereStep,href:"#"}]})))):"Home_S_ServicesBlock"===e.__typename?r.a.createElement(n.Suspense,{key:t,fallback:r.a.createElement(y,null)},r.a.createElement(Z,{sectionid:"quotes",background:e.servicesBackground,"data-id":"5"},r.a.createElement(n.Suspense,{fallback:r.a.createElement(y,null)},r.a.createElement(ae,{btnShow:e.servicesButton,content:e.servicesServices.map(function(e,t){return{title:e.value.service_head,text:e.value.service_content}}),btn:[{btntext:"Beautyprogramm starten",btnhref:"/start"}]})))):"Home_S_ReviewsBlock"===e.__typename?r.a.createElement(n.Suspense,{key:t,fallback:r.a.createElement(y,null)},r.a.createElement(Z,{sectionid:"reviews",background:e.reviewsBackground,"data-id":"6"},r.a.createElement(n.Suspense,{fallback:r.a.createElement(y,null)},r.a.createElement(ne,{showHead:e.reviewsDisplayhead,heading:e.reviewsHead,users:e.reviewsReviews.map(function(e,t){return{name:e.value.review_name,img:U[t],quote:e.value.review_quote,info:e.value.review_info}})})))):"Home_S_PricingBlock"===e.__typename?r.a.createElement(n.Suspense,{key:t,fallback:r.a.createElement(y,null)},r.a.createElement(Z,{sectionid:"pricing",background:e.pricingBackground,"data-id":"7"},r.a.createElement(n.Suspense,{fallback:r.a.createElement(y,null)},r.a.createElement(re,{showHead:e.pricingDisplayhead,heading:e.pricingHead,cards:e.pricingPricingcards.map(function(e,t){return{title:e.value.pricingcard_title,description:e.value.pricingcard_description,price:e.value.pricingcard_price}})})))):"Home_S_AboutBlock"===e.__typename?r.a.createElement(n.Suspense,{key:t,fallback:r.a.createElement(y,null)},r.a.createElement(Z,{sectionid:"about",background:e.aboutBackground,"data-id":"8"},r.a.createElement(n.Suspense,{fallback:r.a.createElement(y,null)},r.a.createElement(le,{showHead:e.aboutDisplayhead,content:[{heading:e.aboutHead},{img:Pe+e.aboutImage.urlLink},{paragraph:e.aboutParagraph}]})))):"Home_S_InstagramBlock"===e.__typename?r.a.createElement(n.Suspense,{key:t,fallback:r.a.createElement(y,null)},r.a.createElement(Z,{sectionid:"gallery",background:e.instagramBackground},r.a.createElement(n.Suspense,{fallback:r.a.createElement(y,null)},r.a.createElement(ce,{showHead:e.instagramDisplayhead,title:e.instagramHead,captions:e.instagramCaptions,urls:e.instagramUrls.map(function(e,t){return{url:e.value.instagram_url}})})))):"Home_S_FacebookBlock"===e.__typename&&r.a.createElement(n.Suspense,{key:t,fallback:r.a.createElement(y,null)},r.a.createElement(Z,{sectionid:"facebook",background:e.facebookBackground},r.a.createElement(n.Suspense,{fallback:r.a.createElement(y,null)},r.a.createElement(ie,{showHead:e.facebookDisplayhead,title:e.facebookHead,urls:e.facebookUrls.map(function(e,t){return{url:e.value.facebook_url}})}))))}),c.map(function(e,a){var l;return"Home_F_InfoBlock"===e.__typename&&(l=r.a.createElement(n.Suspense,{key:a,fallback:r.a.createElement(y,null)},r.a.createElement(K,{background:e.infoBackground,sociallinks:[{fb:t.sociallinks[0].value,ig:t.sociallinks[1].value}],companyinfo:[{zip:t.zipCode,address:t.address,city:t.city,phone:t.telephone,email:t.email,copyrightholder:t.copyrightholder}],logo:q[0].dark}))),l}),this.getUnique(i).map(function(e,t){return r.a.createElement(n.Suspense,{key:t,fallback:r.a.createElement("div",null)},r.a.createElement(J,{pageid:e}))}),r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",null)},r.a.createElement(Q,null))):r.a.createElement("main",{className:"Homepage"},r.a.createElement("div",{className:"h-100"},r.a.createElement("div",{className:"flex-center flex-column"},r.a.createElement("h1",{className:"animated fadeIn mb-4 red-text"},r.a.createElement("i",{className:"fas fa-exclamation-triangle"})),r.a.createElement("h5",{className:"animated fadeIn mb-3"},"Not authorized."),r.a.createElement("p",{className:"animated fadeIn text-muted"},"Please proceed with token."))))}},{key:"render",value:function(){return this.renderContent()}}]),t}(n.Component),se=Object(b.c)(Y)(oe),me=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(se,null)}}]),t}(n.Component),ue=(a(116),a(68)),de=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"GetState",value:function(e){return e?"nav-item active":"nav-item"}},{key:"GetLogo",value:function(e){return"D"===e?this.props.logos[0].light:this.props.logos[0].dark}},{key:"PrintType",value:function(e,t){return"text"===e.type?"#"===e.href.charAt(0)||"#"===e.href.charAt(26)?r.a.createElement("li",{key:t,className:this.GetState(e.active)},r.a.createElement("a",{className:"nav-link m-1 sscroll",href:e.href},e.text)):r.a.createElement("li",{key:t,className:this.GetState(e.active)},r.a.createElement("a",{className:"nav-link m-1",href:e.href},e.text)):"D"===this.props.theme?[r.a.createElement("li",{key:t,className:this.GetState(e.active)},r.a.createElement("a",{className:"ml-5 btn btn-outline-white btn-rounded d-none d-sm-block",href:e.href},e.text)),r.a.createElement("li",{key:t+1,className:this.GetState(e.active)},r.a.createElement("a",{className:"nav-link m-1 d-block d-sm-none",href:e.href},e.text))]:"L"===this.props.theme?[r.a.createElement("li",{key:t,className:this.GetState(e.active)},r.a.createElement("a",{className:"ml-5 btn btn-outline-elegant btn-rounded d-none d-sm-block",href:e.href},e.text)),r.a.createElement("li",{key:t+1,className:this.GetState(e.active)},r.a.createElement("a",{className:"nav-link m-1 d-block d-sm-none",href:e.href},e.text))]:void 0}},{key:"render",value:function(){var e=this;return r.a.createElement("header",null,r.a.createElement(ue.default,{theme:this.props.theme,logo:this.GetLogo(this.props.theme)},r.a.createElement("ul",{className:"navbar-nav ml-auto d-flex justify-content-center align-items-center"},this.props.navitems.map(function(t,a){return e.PrintType(t,a)}))))}}]),t}(r.a.Component),he=a(35),pe=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"printParagraph",value:function(e){if("undefined"!=typeof this.props.content[e].paragraph)return n.createElement("div",{key:e,dangerouslySetInnerHTML:{__html:this.props.content[e].paragraph}})}},{key:"render",value:function(){var e=this;return n.createElement("div",{className:"container pb-5 text-center"},n.createElement("h2",{className:"font-weight-bold",dangerouslySetInnerHTML:{__html:this.props.content[0].heading}}),this.props.content.map(function(t,a){return e.printParagraph(a)}))}}]),t}(n.Component),be=a(36),fe=a(37),ge=a(66),ke=a.n(ge),Ee=[{href:"/?token=Pharmaziegasse-9020#why",text:"Warum PHARMAZIEGASSE\xae?",active:!1,type:"text"},{href:"/?token=Pharmaziegasse-9020#method",text:"Wie funktioniert es?",active:!1,type:"text"},{href:"/?token=Pharmaziegasse-9020#pricing",text:"Preise",active:!1,type:"text"},{href:"/?token=Pharmaziegasse-9020#about",text:"\xdcber uns",active:!1,type:"text"},{href:"/getting-started",text:"Loslegen",active:!1,type:"button"}],ve=[{light:L.a,dark:B.a}],ye=[{fb:"https://www.facebook.com/Friends-of-Pharmaziegasse-309175709736059/",ig:"https://www.instagram.com/friendsofpharmaziegasse/"}],xe=[{city:"Klagenfurt",zip:"9020",address:"Pharmaziegasse 5",phone:"+43 463 45 904-0",email:"office@pharmaziegasse.at",copyrightholder:"Pharmaziegasse\xae"}],_e=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).getContent=function(){fetch(ke.a).then(function(e){return e.text()}).then(function(t){e.setState({data:t})})},e.state={data:""},e.getContent(),e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("main",{className:"About"},r.a.createElement(de,{logos:ve,navitems:Ee,theme:"L"}),r.a.createElement(he.default,{sectionid:"about",background:"BLUE","data-id":"0"},r.a.createElement(pe,{content:[{heading:"Impressum"},{paragraph:this.state.data}]})),r.a.createElement("div",{className:"container"},r.a.createElement("div",{id:"map-container-google-11",class:"z-depth-1-half map-container-6"},r.a.createElement("iframe",{title:"Pharmaziegasse Map",className:"w-100 h-100",src:"https://maps.google.com/maps?q=Pharmaziegasse 5&t=&z=13&ie=UTF8&iwloc=&output=embed",frameborder:"0",allowfullscreen:!0}))),r.a.createElement(be.default,{sociallinks:ye,companyinfo:xe,logo:ve[0].dark}),r.a.createElement(fe.default,null))}}]),t}(n.Component),Se=(a(122),a(67)),we=a.n(Se),Ne=[{href:"/?token=Pharmaziegasse-9020#why",text:"Warum PHARMAZIEGASSE\xae?",active:!1,type:"text"},{href:"/?token=Pharmaziegasse-9020#method",text:"Wie funktioniert es?",active:!1,type:"text"},{href:"/?token=Pharmaziegasse-9020#pricing",text:"Preise",active:!1,type:"text"},{href:"/?token=Pharmaziegasse-9020#about",text:"\xdcber uns",active:!1,type:"text"},{href:"/getting-started",text:"Loslegen",active:!1,type:"button"}],Be=[{light:L.a,dark:B.a}],He=[{fb:"https://www.facebook.com/Friends-of-Pharmaziegasse-309175709736059/",ig:"https://www.instagram.com/friendsofpharmaziegasse/"}],je=[{city:"Klagenfurt",zip:"9020",address:"Pharmaziegasse 5",phone:"+43 463 45 904-0",email:"office@pharmaziegasse.at",copyrightholder:"Pharmaziegasse\xae"}],Oe=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).getContent=function(){fetch(we.a).then(function(e){return e.text()}).then(function(t){e.setState({data:t})})},e.state={data:""},e.getContent(),e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("main",{className:"Privacy"},r.a.createElement(de,{logos:Be,navitems:Ne,theme:"L"}),r.a.createElement(he.default,{sectionid:"privacy",background:"BLUE","data-id":"0"},r.a.createElement(pe,{content:[{heading:"Datenschutzerkl\xe4rung"},{paragraph:this.state.data}]})),r.a.createElement(be.default,{sociallinks:He,companyinfo:je,logo:Be[0].dark}),r.a.createElement(fe.default,null))}}]),t}(n.Component),Pe="https://pharmaziegasse.at",ze=new p.b({introspectionQueryResultData:{__schema:{types:[]}}}),Le=new p.a({fragmentMatcher:ze}),Ie=Pe+"/api/graphql",Ce=new d.a({cache:Le,link:new h.a({uri:Ie})}),Ae=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(b.a,{client:Ce},r.a.createElement(f.a,null,r.a.createElement(g.c,null,r.a.createElement(g.a,{path:"/",exact:!0,component:me}),r.a.createElement(g.a,{path:"/about",component:_e}),r.a.createElement(g.a,{path:"/privacy",component:Oe}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(Ae,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},24:function(e,t,a){e.exports=a.p+"static/media/black.58fe2d77.png"},25:function(e,t,a){e.exports=a.p+"static/media/light.eb77c372.png"},35:function(e,t,a){"use strict";a.r(t);var n=a(0);t.default=function(e){var t=e.background,a=e.children,r=e.className,l=e.sectionid,c={backgroundColor:t};return n.createElement("section",{id:l,className:r,style:c},a)}},36:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(30);t.default=function(e){var t=e.background,a=e.sociallinks,l=e.companyinfo,c=e.logo,i={backgroundColor:t};return n.createElement("footer",{className:"page-footer font-small lighten-5 py-4 ",style:i},n.createElement("div",{className:"container text-center text-md-left"},n.createElement("div",{className:"row text-center text-md-left mt-3 pb-3 dark-grey-text"},n.createElement("div",{className:"col-md-2 col-lg-2 col-xl-2 mx-auto mt-3"},n.createElement("img",{className:"img-fluid",src:c,alt:"The Unique Story"})),n.createElement("hr",{className:"w-100 clearfix d-md-none"}),n.createElement("div",{className:"col-md-2 col-lg-2 col-xl-2 mx-auto mt-3"},n.createElement("h6",{className:"text-uppercase mb-4 font-weight-bold"},"Anschrift"),n.createElement("p",null,l[0].address),n.createElement("p",null,l[0].zip," ",l[0].city)),n.createElement("hr",{className:"w-100 clearfix d-md-none"}),n.createElement("div",{className:"col-md-3 col-lg-3 col-xl-3 mx-auto mt-3"},n.createElement("h6",{className:"text-uppercase mb-4 font-weight-bold"},"Kontakt"),n.createElement("p",null,n.createElement("i",{className:"fas fa-phone mr-3"}),l[0].phone),n.createElement("a",{className:"email-link",href:"mailto:"+l[0].email},n.createElement("i",{className:"fas fa-envelope mr-3"}),l[0].email)),n.createElement("hr",{className:"w-100 clearfix d-md-none"}),n.createElement("div",{className:"col-md-4 col-lg-3 col-xl-3 mx-auto mt-3"},n.createElement("p",null,n.createElement(r.b,{to:"/about"},"Impressum")),n.createElement("p",null,n.createElement(r.b,{to:"/privacy"},"Datenschutz")),n.createElement("ul",{className:"list-unstyled list-inline"},n.createElement("li",{className:"list-inline-item"},n.createElement("a",{href:a[0].fb,rel:"noopener noreferrer",target:"_blank",className:"mx-2"},n.createElement("i",{className:"fab fa-facebook-f"}))),n.createElement("li",{className:"list-inline-item"},n.createElement("a",{href:a[0].ig,rel:"noopener noreferrer",target:"_blank",className:"mx-2"},n.createElement("i",{className:"fab fa-instagram"})))))),n.createElement("hr",null),n.createElement("div",{className:"row d-flex align-items-center dark-grey-text"},n.createElement("div",{className:"col-md-12"},n.createElement("p",{className:"text-center text-md-left"},"\xa9 2018 - ",(new Date).getFullYear()," Copyright: ",l[0].copyrightholder)))))}},37:function(e,t,a){"use strict";a.r(t);var n=a(8),r=a(9),l=a(11),c=a(10),i=a(12),o=a(28),s=a(0),m=a(43),u=a.n(m),d=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(c.a)(t).call(this,e))).state={show:!0},a.handleClick=a.handleClick.bind(Object(o.a)(Object(o.a)(a))),a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"handleClick",value:function(){this.setState(function(e){return{show:!1}}),u.a.set("AcceptCookie","1")}},{key:"getStatus",value:function(){var e=u.a.get("AcceptCookie");return"0"===e||"1"!==e}},{key:"render",value:function(){return!!this.getStatus()&&(!!this.state.show&&s.createElement("div",{className:"modal fade bottom show d-block",id:"cookieModal",tabIndex:"-1",role:"dialog","aria-labelledby":"cookieModalLabel","aria-hidden":"true","area-backdrop":"false"},s.createElement("div",{className:"modal-dialog modal-full-height modal-bottom",role:"document"},s.createElement("div",{className:"modal-content"},s.createElement("div",{className:"modal-body"},s.createElement("p",null,"Wir verwenden Cookies, damit unsere Website optimal funktioniert. Mit der Nutzung dieser Website erkl\xe4ren Sie sich einverstanden, dass PHARMAZIEGASSE\xae Cookies einsetzt. ",s.createElement("a",{href:"/privacy"},"Mehr \xfcber Cookies")),s.createElement("button",{name:"dismiss_cookie",className:"btn btn-outline-elegant btn-rounded waves-effect",onClick:this.handleClick},s.createElement("i",{className:"fas fa-check pr-2"}),"Verstanden"))))))}}]),t}(s.Component);t.default=d},38:function(e,t,a){"use strict";var n=a(0),r=a(19),l=a.n(r),c={DEFAULT:"",R:"btn-rounded"},i={DANGER:"btn-danger",SUCCESS:"btn-success",WARNING:"btn-warning",INFO:"btn-info",PRIMARY:"btn-primary",SECONDARY:"btn-secondary",WHITE:"btn-white",ELEGANT:"btn-elegant",oDANGER:"btn-outline-danger",oSUCCESS:"btn-outline-success",oWARNING:"btn-outline-warning",oINFO:"btn-outline-info",oPRIMARY:"btn-outline-primary",oSECONDARY:"btn-outline-secondary",oWHITE:"btn-outline-white",oELEGANT:"btn-outline-elegant"},o={SM:"btn-sm",MD:"btn-md",LG:"btn-lg",DEFAULT:""},s=l.a.bind(o),m=l.a.bind(i),u=l.a.bind(c),d=function(e){var t=e.btnstyle,a=e.btntype,r=e.size,c=e.children,i=e.className,o=e.disabled,d=e.modal,h=l()("btn",m(t),u(a),s(r),{disabled:o},i);return n.createElement("button",{"data-toggle":"modal","data-target":d,className:h},c)};d.defaultProps={size:o.DEFAULT,btnstyle:i.oWHITE,btntype:c.R,className:"",disabled:!1};t.a=d},56:function(e,t,a){e.exports=a.p+"static/media/white.b858081a.png"},57:function(e,t,a){e.exports=a.p+"static/media/dark.e5e7aac7.png"},58:function(e,t,a){e.exports=a.p+"static/media/1.93169b00.jpg"},59:function(e,t,a){e.exports=a.p+"static/media/2.e0473847.jpg"},60:function(e,t,a){e.exports=a.p+"static/media/3.e4b45ac3.jpg"},61:function(e,t,a){e.exports=a.p+"static/media/4.13bb17e7.jpg"},66:function(e,t,a){e.exports=a.p+"static/media/text.a92899c4.txt"},67:function(e,t,a){e.exports=a.p+"static/media/text.2ee53caf.txt"},68:function(e,t,a){"use strict";a.r(t);var n=a(8),r=a(9),l=a(11),c=a(10),i=a(12),o=a(0),s=a(19),m=a.n(s),u={L:"navbar-light",D:"navbar-dark"},d=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(i)))).navt=m.a.bind(u),a.classProps=m()("navbar","navbar-expand-lg","fixed-top","scrolling-navbar",a.navt(a.props.theme),a.props.className,"text-white","z-depth-0"),a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.createElement("nav",{className:this.classProps},o.createElement("div",{className:"container"},o.createElement("a",{className:"navbar-brand sscroll",href:"#home"},o.createElement("strong",null,o.createElement("img",{src:this.props.logo,alt:"Pharmaziegasse Logo"}))),o.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},o.createElement("span",{className:"navbar-toggler-icon"})),o.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},this.props.children)))}}]),t}(o.Component);t.default=d},70:function(e,t,a){e.exports=a(124)},75:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){}},[[70,1,2]]]);
//# sourceMappingURL=main.02a2f8cc.chunk.js.map