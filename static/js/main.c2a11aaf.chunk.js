(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{111:function(e,n,a){"use strict";var t=a(23),l=a(24),r=a(26),i=a(25),c=a(27),o=a(0),s=a.n(o),u=function(e){function n(){var e,a;Object(t.a)(this,n);for(var l=arguments.length,c=new Array(l),o=0;o<l;o++)c[o]=arguments[o];return(a=Object(r.a)(this,(e=Object(i.a)(n)).call.apply(e,[this].concat(c)))).getType=function(e){return e.value.includes("facebook")?"facebook":e.value.includes("instagram")?"instagram":e.value.includes("twitter")?"twitter":e.value.includes("linkedin")?"linkedin":e.value.includes("xing")?"xing":e.value.includes("pinterest")?"pinterest":void 0},a.printItem=function(e,n){var t="";switch(a.getType(e)){case"facebook":t="fab fa-facebook-f";break;case"instagram":t="fab fa-instagram";break;case"twitter":t="fab fa-twitter";break;case"linkedin":t="fab fa-linkedin-in";break;case"xing":t="fab fa-xing";break;case"pinterest":t="fab pinterest-p";break;default:t="fas fa-hashtag"}return s.a.createElement("li",{key:n,className:"list-inline-item"},s.a.createElement("a",{href:e.value,rel:"noopener noreferrer",target:"_blank",className:"mx-1"},s.a.createElement("i",{className:t})))},a.renderItems=function(){var e=a.props.items;return null!==e&&void 0!==e?s.a.createElement("ul",{className:"list-unstyled list-inline list-social"},e.map(function(e,n){return a.printItem(e,n)})):null},a}return Object(c.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return this.renderItems()}}]),n}(s.a.Component);n.a=u},138:function(e,n,a){e.exports=a.p+"static/media/black.58fe2d77.png"},139:function(e,n,a){e.exports=a.p+"static/media/white.b858081a.png"},158:function(e,n,a){e.exports=a(320)},163:function(e,n,a){},165:function(e,n,a){},217:function(e,n){},235:function(e,n,a){},320:function(e,n,a){"use strict";a.r(n);var t=a(0),l=a.n(t),r=a(92),i=a.n(r),c=(a(163),a(23)),o=a(24),s=a(26),u=a(25),m=a(27),d=a(31),p=a.n(d),h=a(29),b=a(44),g=a(35),f=a(48),k=(a(165),a(69)),v=a.n(k),E=a(88),y=a(58),_=a(45),S=a(59),w=a(138),x=a.n(w),B=a(139);function H(){var e=Object(y.a)(["\nquery pages($token: String!) {\n  page: root(token: $token) {\n    rootPage{\n      title\n      uniquepage{\n        __typename\n        id\n        whatsappTelephone\n        whatsappContactline\n        token\n        title\n        city\n        zipCode\n        privacy\n        about\n        address\n        telephone\n        telefax\n        vatNumber\n        taxId\n        courtOfRegistry\n        placeOfRegistry\n        tradeRegisterNumber\n        copyrightholder\n        sociallinks{\n          ... on StringBlock{\n            value\n          }\n        }\n        ownership\n        email\n        headers{\n          ... on HomeHero_SlideBlockListBlock{\n            __typename\n            value{\n              slideHead\n              slideSubhead\n              slideImage{\n                urlLink\n              }\n              slideButton{\n                buttonTitle\n                buttonLink\n                buttonPage{\n                  id\n                  urlPath\n                }\n              }\n            }\n          }\n          ... on StringBlock{\n            code: value\n          }\n        }\n        sections {\n          ... on Home_S_WhyBlock {\n            __typename\n            whyBackground\n            whyDisplayhead\n            whyHead\n            whyButton{\n              buttonLink\n              buttonTitle\n              buttonPage{\n                id\n                urlPath\n              }\n              id\n            }\n            whyCollum1{\n              collumImage{\n                urlLink\n              }\n              collumParagraph\n            }\n            whyCollum2{\n              collumImage{\n                urlLink\n              }\n              collumParagraph\n            }\n            whyCollum3{\n              collumImage{\n                urlLink\n              }\n              collumParagraph\n            }\n          }\n          ... on Home_S_IndividualBlock {\n            __typename\n            individualHead\n            individualDisplayhead\n            individualBackground\n            individualFooter\n            individualParagraph\n            individualFooterBackground\n            individualImage{\n              urlLink\n            }\n            individualButton{\n              buttonLink\n              buttonTitle\n              buttonPage{\n                id\n                urlPath\n              }\n              id\n            }\n          }\n          ... on Home_S_ExpertsBlock {\n            __typename\n            expertsFooter\n            expertsHead\n            expertsBackground\n            expertsDisplayhead\n            expertsParagraph\n            expertsImage{\n              urlLink\n            }\n            expertsButton{\n              buttonLink\n              buttonTitle\n              buttonPage{\n                id\n                urlPath\n              }\n              id\n            }\n          }\n          ... on Home_S_LabBlock {\n            __typename\n            labHead\n            labLead\n            labBackground\n            labDisplayhead\n            labImage{\n              urlLink\n            }\n            labButton{\n              buttonLink\n              buttonTitle\n              buttonPage{\n                id\n                urlPath\n              }\n              id\n            }\n            labParagraph\n          }\n          ... on Home_S_MethodBlock {\n            __typename\n            methodHead\n            methodDisplayhead\n            methodBackground\n            methodButton{\n              buttonLink\n              buttonTitle\n              buttonPage{\n                id\n                urlPath\n              }\n              id\n            }\n            methodSphere1{\n              sphereStep\n            }\n            methodSphere2{\n              sphereStep\n            }\n            methodSphere3{\n              sphereStep\n            }\n            methodSphere4{\n              sphereStep\n            }\n          }\n          ... on Home_S_FeaturesBlock{\n            __typename\n            featuresBackground\n            featuresHead\n            featuresSubhead\n            featuresFeatures\n            featuresDisplayhead\n            featuresDisplaysubhead\n            featuresButton{\n              buttonLink\n              buttonTitle\n              buttonPage{\n                urlPath\n              }\n            }\n          }\n          ... on Home_S_ManifestBlock{ \n            manifestHead\n            manifestImage{\n              urlLink\n            }\n            manifestParagraph\n            manifestBackground\n          }\n          ... on Home_S_StepsBlock{\n            __typename\n            stepsUseSimpleDesign\n            stepsBackground\n            stepsHead\n            stepsSubhead\n            stepsDisplayhead\n            stepsSteps\n            stepsButton{\n              buttonLink\n              buttonTitle\n              buttonPage{\n                urlPath\n              }\n            }\n          }\n          ... on Home_S_ServicesBlock {\n            __typename\n            servicesBackground\n            servicesServices\n            servicesButton{\n              buttonLink\n              buttonTitle\n              buttonPage{\n                id\n                urlPath\n              }\n              id\n            }\n          }\n          ... on Home_S_ReviewsBlock {\n            __typename\n            reviewsHead\n            reviewsDisplayhead\n            reviewsBackground\n            reviewsReviews\n          }\n          ... on Home_S_PricingBlock {\n            __typename\n            pricingHead\n            pricingBackground\n            pricingDisplayhead\n            pricingPricingcards\n          }\n          ... on Home_S_AboutBlock {\n            __typename\n            aboutHead\n            aboutDisplayhead\n            aboutBackground\n            aboutImage{\n              urlLink\n            }\n            aboutParagraph\n          }\n          ... on Home_S_FacebookBlock{\n            __typename\n            facebookHead\n            facebookDisplayhead\n            facebookBackground\n            facebookUrls\n          }\n          ... on Home_S_InstagramBlock{\n            __typename\n            instagramHead\n            instagramDisplayhead\n            instagramBackground\n            instagramCaptions\n            instagramUrls\n          }\n          ... on StringBlock{\n            __typename\n            code: value\n          }\n        }\n      }\n    }\n  }\n} \n"]);return H=function(){return e},e}var O=[{href:"#steps",text:"So funktioniert's",active:!1,type:"text"},{href:"#features",text:"Warum PHARMAZIEGASSE<sup>\xae</sup>",active:!1,type:"text"},{href:"#manifest",text:"\xdcber uns",active:!1,type:"text"}],j=[{light:a.n(B).a,dark:x.a}],I=Object(S.a)(H()),N=a(143),L=a.n(N),P=a(30),z=a(37),D=a.n(z),T=function(e){return l.a.createElement("div",{className:"loader"},l.a.createElement("span",{className:"loader__ball loader__ball--1"}),l.a.createElement("span",{className:"loader__ball loader__ball--2"}),l.a.createElement("span",{className:"loader__ball loader__ball--3"}))},C=a(111),M=a(38),A=Object(t.lazy)(function(){return a.e(19).then(a.bind(null,741))}),F=Object(t.lazy)(function(){return a.e(6).then(a.bind(null,742))}),R=function(e){var n=e.navitems,a=e.heroitems,l=e.sociallinks,r=e.logos;function i(e){return e?"nav-item active":"nav-item"}function c(){var e={autoConfig:!0,debug:!1},n=localStorage.getItem("f_e");if(void 0!==n&&null!==n){var a={em:n};p.a.init("398871454084167",a,e)}else p.a.init("398871454084167",e);p.a.track("ViewContent",{placement:"nav"})}return t.createElement("header",{id:"home"},t.createElement(t.Suspense,{fallback:t.createElement(T,null)},t.createElement(A,{logo:r[0].light},t.createElement("ul",{className:"navbar-nav ml-auto d-flex justify-content-center align-items-center"},n.map(function(e,n){return function(e,n){return"text"===e.type?"#"===e.href.charAt(0)?t.createElement("li",{key:n,className:i(e.active)},t.createElement("a",{className:"nav-link m-1 sscroll",href:e.href,dangerouslySetInnerHTML:{__html:D()(Object(P.renderToString)(t.createElement(M.a,{value:e.text})))}})):t.createElement("li",{key:n,className:i(e.active)},t.createElement("a",{className:"nav-link m-1",href:e.href,dangerouslySetInnerHTML:{__html:D()(Object(P.renderToString)(t.createElement(M.a,{value:e.text})))}})):[t.createElement("li",{key:n,className:i(e.active)},t.createElement("button",{onClick:c,"data-toggle":"modal","data-target":"#registration",className:"btn btn-white btn-rounded font-weight-bold d-none d-sm-block"},e.text)),t.createElement("li",{key:n+1,className:i(e.active)},t.createElement("a",{"data-toggle":"modal",className:"nav-link m-1 d-block d-sm-none",href:e.href,dangerouslySetInnerHTML:{__html:D()(Object(P.renderToString)(t.createElement(M.a,{value:e.text})))}}))]}(e,n)}),t.createElement(C.a,{items:l}),t.createElement("li",{className:"nav-item"},t.createElement("button",{onClick:c,"data-toggle":"modal","data-target":"#registration",className:"btn btn-white btn-rounded font-weight-bold d-none d-sm-block"},"Loslegen"))))),t.createElement(t.Suspense,{fallback:t.createElement("div",null)},t.createElement(F,{heroitems:a})))},U=(a(235),Object(t.lazy)(function(){return a.e(29).then(a.bind(null,722))})),q=Object(t.lazy)(function(){return a.e(18).then(a.bind(null,723))}),W=Object(t.lazy)(function(){return a.e(23).then(a.bind(null,724))}),$=Object(t.lazy)(function(){return a.e(24).then(a.bind(null,725))}),G=Object(t.lazy)(function(){return a.e(25).then(a.bind(null,726))}),J=Object(t.lazy)(function(){return Promise.all([a.e(5),a.e(17)]).then(a.bind(null,743))}),V=Object(t.lazy)(function(){return a.e(20).then(a.bind(null,727))}),Q=Object(t.lazy)(function(){return Promise.all([a.e(2),a.e(11)]).then(a.bind(null,744))}),Z=Object(t.lazy)(function(){return a.e(15).then(a.bind(null,728))}),K=Object(t.lazy)(function(){return a.e(8).then(a.bind(null,729))}),X=Object(t.lazy)(function(){return a.e(7).then(a.bind(null,730))}),Y=Object(t.lazy)(function(){return a.e(12).then(a.bind(null,731))}),ee=Object(t.lazy)(function(){return a.e(14).then(a.bind(null,732))}),ne=Object(t.lazy)(function(){return a.e(22).then(a.bind(null,733))}),ae=Object(t.lazy)(function(){return a.e(13).then(a.bind(null,734))}),te=Object(t.lazy)(function(){return a.e(28).then(a.bind(null,735))}),le=Object(t.lazy)(function(){return a.e(26).then(a.bind(null,736))}),re=Object(t.lazy)(function(){return a.e(16).then(a.bind(null,745))}),ie=Object(t.lazy)(function(){return Promise.all([a.e(4),a.e(27)]).then(a.bind(null,737))}),ce=Object(t.lazy)(function(){return a.e(9).then(a.bind(null,738))}),oe=Object(t.lazy)(function(){return a.e(10).then(a.bind(null,739))}),se=Object(t.lazy)(function(){return a.e(21).then(a.bind(null,740))});var ue=function(e){function n(e){var a;return Object(c.a)(this,n),(a=Object(s.a)(this,Object(u.a)(n).call(this,e))).getUnique=function(e){for(var n=[],a=0;a<e.length;a++)n.includes(e[a])||n.push(e[a]);return n},a.state={data:void 0,privacy:!1},a}return Object(m.a)(n,e),Object(o.a)(n,[{key:"componentDidMount",value:function(){if(void 0===this.state.data&&void 0!==this.props.data){this.setState({data:this.props.data});var e=window.location.search,n=L.a.parse(e);void 0!==n.p&&"privacy"===n.p.toLowerCase().trim()&&this.setState({privacy:!0})}}},{key:"renderContent",value:function(){var e=this;if(void 0!==this.state.data){var n=this.state.data;if(n.loading)return l.a.createElement("div",{className:"h-100"},l.a.createElement("div",{className:"flex-center flex-column"},l.a.createElement(_.RingLoader,{sizeUnit:"px",size:50,color:"#9dbdd6"}),l.a.createElement("span",{className:"mt-3"},"Loading your experience...")));if(n.error)return console.error(n.error),l.a.createElement("div",{className:"h-100"},l.a.createElement("div",{className:"flex-center flex-column"},l.a.createElement("h1",{className:"animated fadeIn mb-4 orange-text"},l.a.createElement("i",{className:"fas fa-exclamation-triangle"})),l.a.createElement("h5",{className:"animated fadeIn mb-3"},"Error!"),l.a.createElement("p",{className:"animated fadeIn text-muted"},"An error occurred! We will be back shortly.")));if(void 0===n.page)return console.log("OMG ITS UNDEFINED"),l.a.createElement("div",{className:"h-100"},l.a.createElement("div",{className:"flex-center flex-column"},l.a.createElement(_.RingLoader,{sizeUnit:"px",size:50,color:"#9dbdd6"}),l.a.createElement("span",{className:"mt-3"},"Loading your experience...")));var a=n.page.rootPage.uniquepage,r=a.headers;console.log(r);var i=a.sections,c=[];return this.state.privacy?l.a.createElement("main",{className:"Homepage"},l.a.createElement("div",{className:"container py-5"},l.a.createElement("p",{className:"text-left",dangerouslySetInnerHTML:{__html:D()(Object(P.renderToString)(l.a.createElement(M.a,{value:a.privacy})))}}))):function(e){for(var n=window.location.search.substring(1).split("&"),a=0;a<n.length;a++){var t=n[a].split("=");if(t[0]===e)return t[1]}return!1}("token")===a.token||""===a.token||void 0===a.token||null===a.token||this.state.privacy?l.a.createElement("main",{className:"Homepage"},r.map(function(e,n){return"HomeHero_SlideBlockListBlock"===e.__typename?l.a.createElement(R,{key:n,logos:j,navitems:O,heroitems:e.value.map(function(e,n){return c.push(e.slideButton.buttonPage),{img:be+e.slideImage.urlLink,head:e.slideHead,subhead:e.slideSubhead,btn:e.slideButton}}),sociallinks:a.sociallinks}):"StringBlock"===e.__typename&&l.a.createElement("div",{key:n,dangerouslySetInnerHTML:{__html:e.code}})}),i.map(function(n,r){return"Home_S_WhyBlock"===n.__typename?l.a.createElement(t.Suspense,{key:r,fallback:l.a.createElement(T,null)},l.a.createElement(U,{sectionid:"why",background:n.whyBackground},l.a.createElement(t.Suspense,{fallback:l.a.createElement(T,null)},l.a.createElement(Z,{showHead:n.whyDisplayhead,btn:n.whyButton,content:[{heading:n.whyHead},{icon:be+n.whyCollum1.collumImage.urlLink,text:n.whyCollum1.collumParagraph},{icon:be+n.whyCollum2.collumImage.urlLink,text:n.whyCollum2.collumParagraph},{icon:be+n.whyCollum3.collumImage.urlLink,text:n.whyCollum3.collumParagraph}]})))):"Home_S_IndividualBlock"===n.__typename?l.a.createElement(t.Suspense,{key:r,fallback:l.a.createElement(T,null)},l.a.createElement(U,{sectionid:"individual"+r,background:n.individualBackground},l.a.createElement(t.Suspense,{fallback:l.a.createElement(T,null)},l.a.createElement(K,{showHead:n.individualDisplayhead,btn:n.individualButton,heading:n.individualHead,img:n.individualImage.urlLink,footer:n.individualFooter,footercolor:n.individualFooterBackground,paragraph:n.individualParagraph,index:r})))):"Home_S_ExpertsBlock"===n.__typename?l.a.createElement(t.Suspense,{key:r,fallback:l.a.createElement(T,null)},l.a.createElement(U,{sectionid:"experts",background:n.expertsBackground},l.a.createElement(t.Suspense,{fallback:l.a.createElement(T,null)},l.a.createElement(X,{showHead:n.expertsDisplayhead,btn:n.expertsButton,heading:n.expertsHead,img:n.expertsImage.urlLink,footer:n.expertsFooter,paragraph:n.expertsParagraph})))):"Home_S_LabBlock"===n.__typename?l.a.createElement(t.Suspense,{key:r,fallback:l.a.createElement(T,null)},l.a.createElement(U,{sectionid:"lab",background:n.labBackground},l.a.createElement(t.Suspense,{fallback:l.a.createElement(T,null)},l.a.createElement(Y,{showHead:n.labDisplayhead,btn:n.labButton,content:[{heading:n.labHead},{img:be+n.labImage.urlLink},{lead:n.labLead},{paragraph:n.labParagraph}]})))):"Home_S_MethodBlock"===n.__typename?l.a.createElement(t.Suspense,{key:r,fallback:l.a.createElement(T,null)},l.a.createElement(U,{sectionid:"method",background:n.methodBackground},l.a.createElement(t.Suspense,{fallback:l.a.createElement(T,null)},l.a.createElement(ae,{btn:n.methodButton,content:[{heading:n.methodHead},{btn:null},{text:n.methodSphere1.sphereStep,href:"#"},{text:n.methodSphere2.sphereStep,href:"#"},{text:n.methodSphere3.sphereStep,href:"#"},{text:n.methodSphere4.sphereStep,href:"#"}]})))):"Home_S_ServicesBlock"===n.__typename?l.a.createElement(t.Suspense,{key:r,fallback:l.a.createElement(T,null)},l.a.createElement(U,{sectionid:"quotes",background:n.servicesBackground},l.a.createElement(t.Suspense,{fallback:l.a.createElement(T,null)},l.a.createElement(ee,{content:n.servicesServices.map(function(e,n){return{title:e.value.service_head,text:e.value.service_content}}),btn:n.servicesButton})))):"Home_S_ReviewsBlock"===n.__typename?l.a.createElement(t.Suspense,{key:r,fallback:l.a.createElement(T,null)},l.a.createElement(U,{sectionid:"reviews",background:n.reviewsBackground},l.a.createElement(t.Suspense,{fallback:l.a.createElement(T,null)},l.a.createElement(ne,{showHead:n.reviewsDisplayhead,token:e.props.token,heading:n.reviewsHead,users:n.reviewsReviews.map(function(e,n){return{name:e.value.review_name,img:e.value.review_image,quote:e.value.review_quote,info:e.value.review_info}})})))):"Home_S_FeaturesBlock"===n.__typename?l.a.createElement(t.Suspense,{key:r,fallback:l.a.createElement(T,null)},l.a.createElement(U,{sectionid:"features",background:n.featuresBackground},l.a.createElement(t.Suspense,{fallback:l.a.createElement(T,null)},l.a.createElement(ce,{showHead:n.featuresDisplayhead,btn:n.featuresButton,title:n.featuresHead,lead:n.featuresSubhead,items:n.featuresFeatures.map(function(e,n){return{icon:e.value.feature_icon,head:e.value.feature_head,text:e.value.feature_paragraph}})})))):"Home_S_StepsBlock"===n.__typename?l.a.createElement(t.Suspense,{key:r,fallback:l.a.createElement(T,null)},l.a.createElement(U,{sectionid:"steps",background:n.stepsBackground},l.a.createElement(t.Suspense,{fallback:l.a.createElement(T,null)},l.a.createElement(oe,{simple:n.stepsUseSimpleDesign,showHead:n.stepsDisplayhead,btn:n.stepsButton,title:n.stepsHead,lead:n.stepsSubhead,token:e.props.token,items:n.stepsSteps.map(function(e,n){return{icon:e.value.step_icon,head:e.value.step_head,text:e.value.step_paragraph,img:e.value.step_image}})})))):"Home_S_PricingBlock"===n.__typename?l.a.createElement(t.Suspense,{key:r,fallback:l.a.createElement(T,null)},l.a.createElement(U,{sectionid:"pricing",background:n.pricingBackground},l.a.createElement(t.Suspense,{fallback:l.a.createElement(T,null)},l.a.createElement(te,{showHead:n.pricingDisplayhead,heading:n.pricingHead,cards:n.pricingPricingcards.map(function(e,n){return{index:n,title:e.value.pricingcard_title,description:e.value.pricingcard_description,price:e.value.pricingcard_price,bg:e.value.pricingcard_background}})}))),n.pricingPricingcards.map(function(e,n){return l.a.createElement(t.Suspense,{key:n,fallback:l.a.createElement("div",null)},l.a.createElement(Q,{index:n,amount:e.value.pricingcard_price,success_msg:e.value.pricingcard_sucessmsg,wa_num:a.whatsappTelephone}))})):"Home_S_AboutBlock"===n.__typename?l.a.createElement(t.Suspense,{key:r,fallback:l.a.createElement(T,null)},l.a.createElement(U,{sectionid:"about",background:n.aboutBackground},l.a.createElement(t.Suspense,{fallback:l.a.createElement(T,null)},l.a.createElement(le,{showHead:n.aboutDisplayhead,content:[{heading:n.aboutHead},{img:be+n.aboutImage.urlLink},{paragraph:n.aboutParagraph}]})))):"Home_S_ManifestBlock"===n.__typename?l.a.createElement(t.Suspense,{key:r,fallback:l.a.createElement(T,null)},l.a.createElement(U,{sectionid:"manifest",background:n.manifestBackground},l.a.createElement(t.Suspense,{fallback:l.a.createElement(T,null)},l.a.createElement(se,{title:n.manifestHead,paragraph:n.manifestParagraph,img:n.manifestImage.urlLink})))):"Home_S_InstagramBlock"===n.__typename?l.a.createElement(t.Suspense,{key:r,fallback:l.a.createElement(T,null)},l.a.createElement(U,{sectionid:"gallery",background:n.instagramBackground},l.a.createElement(t.Suspense,{fallback:l.a.createElement(T,null)},l.a.createElement(re,{showHead:n.instagramDisplayhead,title:n.instagramHead,captions:n.instagramCaptions,urls:n.instagramUrls.map(function(e,n){return{url:e.value.instagram_url}})})))):"Home_S_FacebookBlock"===n.__typename?l.a.createElement(t.Suspense,{key:r,fallback:l.a.createElement(T,null)},l.a.createElement(U,{sectionid:"facebook",background:n.facebookBackground},l.a.createElement(t.Suspense,{fallback:l.a.createElement(T,null)},l.a.createElement(ie,{showHead:n.facebookDisplayhead,title:n.facebookHead,urls:n.facebookUrls.map(function(e,n){return{url:e.value.facebook_url}})})))):"StringBlock"===n.__typename&&l.a.createElement("div",{key:r,dangerouslySetInnerHTML:{__html:n.code}})}),l.a.createElement("div",null,l.a.createElement(t.Suspense,{fallback:l.a.createElement(T,null)},l.a.createElement(q,{background:"#ffffff",sociallinks:a.sociallinks,companyinfo:[{zip:a.zipCode,address:a.address,city:a.city,phone:a.telephone,email:a.email,copyrightholder:a.copyrightholder}],logo:j[0].dark,wa_text:a.whatsappContactline,wa_num:a.whatsappTelephone}))),this.getUnique(c).map(function(n,a){return l.a.createElement(t.Suspense,{key:a,fallback:l.a.createElement("div",null)},l.a.createElement(J,{pixel:e.props.pixel,token:e.props.token}))}),l.a.createElement("div",null,l.a.createElement(t.Suspense,{fallback:l.a.createElement("div",null)},l.a.createElement(V,null))),l.a.createElement("div",null,l.a.createElement(t.Suspense,{fallback:l.a.createElement("div",null)},l.a.createElement(W,{modaldata:[{modalId:"aboutModal",modalTitle:"Impressum",modalLabel:"Impressum"}]},l.a.createElement($,{text:a.about})))),l.a.createElement("div",null,l.a.createElement(t.Suspense,{fallback:l.a.createElement("div",null)},l.a.createElement(W,{modaldata:[{modalId:"privacyModal",modalTitle:"Datenschutzerkl\xe4rung",modalLabel:"Datenschutz"}]},l.a.createElement(G,{text:a.privacy}))))):l.a.createElement("main",{className:"Homepage"},l.a.createElement("div",{className:"h-100"},l.a.createElement("div",{className:"flex-center flex-column"},l.a.createElement("h1",{className:"animated fadeIn mb-4 red-text"},l.a.createElement("i",{className:"fas fa-exclamation-triangle"})),l.a.createElement("h5",{className:"animated fadeIn mb-3"},"Not authorized."),l.a.createElement("p",{className:"animated fadeIn text-muted"},"Please proceed with token."))))}return l.a.createElement("div",{className:"h-100"},l.a.createElement("div",{className:"flex-center flex-column"},l.a.createElement(_.RingLoader,{sizeUnit:"px",size:50,color:"#9dbdd6"}),l.a.createElement("span",{className:"mt-3"},"Loading your experience...")))}},{key:"render",value:function(){return this.renderContent()}}]),n}(t.Component);function me(){var e=Object(y.a)(['\n    mutation tokenAuth{\n        tokenAuth(username:"cisco",password:"ciscocisco"){\n            token\n        }\n    }\n']);return me=function(){return e},e}var de=Object(S.a)(me()),pe=function(e){function n(e){var a;return Object(c.a)(this,n),(a=Object(s.a)(this,Object(u.a)(n).call(this,e))).login=Object(E.a)(v.a.mark(function e(){return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.props.mutate().then(function(e){e.loading;var n=e.data;null!==n&&null!==n.tokenAuth&&void 0!==n.tokenAuth.token&&""!==n.tokenAuth.token?a.setState({token:n.tokenAuth.token}):a.setState({token:!1})}).catch(function(e,n){console.warn("there was an error sending the query",n)});case 2:case"end":return e.stop()}},e)})),a.state={token:!1},a}return Object(m.a)(n,e),Object(o.a)(n,[{key:"componentDidMount",value:function(){this.login()}},{key:"render",value:function(){var e=this;return!1!==this.state.token?l.a.createElement(f.c,{query:I,variables:{token:this.state.token}},function(n){var a=n.loading,t=n.error,r=n.data;return a?null:t?null:l.a.createElement(ue,{pixel:e.props.pixel,data:r,token:e.state.token})}):l.a.createElement("div",{className:"h-100 w-100 d-flex justify-content-center"},l.a.createElement("div",{className:"flex-center flex-column"},l.a.createElement(_.RingLoader,{sizeUnit:"px",size:50,color:"#9dbdd6"}),l.a.createElement("span",{className:"mt-3"},"Loading your experience...")))}}]),n}(t.Component),he=Object(f.e)(de)(pe),be="https://pharmaziegasse.at",ge=new g.b({introspectionQueryResultData:{__schema:{types:[]}}}),fe=new g.a({fragmentMatcher:ge}),ke=be+"/api/graphiql",ve=new h.a({cache:fe,link:new b.a({uri:ke})}),Ee={autoConfig:!0,debug:!1},ye=localStorage.getItem("f_e");if(void 0!==ye&&null!==ye){var _e={em:ye};p.a.init("398871454084167",_e,Ee)}else p.a.init("398871454084167",Ee);p.a.pageView();var Se=function(e){function n(){return Object(c.a)(this,n),Object(s.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(m.a)(n,e),Object(o.a)(n,[{key:"render",value:function(){return l.a.createElement(f.b,{client:ve},l.a.createElement(he,{pixel:p.a}))}}]),n}(t.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(238),a(133);"/shop"===window.location.pathname&&window.location.replace("https://pharmaziegasse.weeblysite.com"),i.a.render(l.a.createElement(Se,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},38:function(e,n,a){"use strict";var t=a(23),l=a(24),r=a(26),i=a(25),c=a(27),o=a(0),s=function(e){function n(){var e,a;Object(t.a)(this,n);for(var l=arguments.length,c=new Array(l),o=0;o<l;o++)c[o]=arguments[o];return(a=Object(r.a)(this,(e=Object(i.a)(n)).call.apply(e,[this].concat(c)))).getItem=function(e){var n=/(?:^|\W)#(\w+)(?!\w)/g,a=n.exec(e),t=e;if(null!==a)switch(a[1]){case"firstname":t=e.replace(n," "+localStorage.getItem("f_n"));break;case"lastname":t=e.replace(n," "+localStorage.getItem("f_l"));break;case"email":t=e.replace(n," "+localStorage.getItem("f_e"));break;case"phone":t=e.replace(n," "+localStorage.getItem("f_p"));break;default:t=e}return t},a.getSegment=function(e){var n=/\{(.*?)\}/g.exec(e);return null!==n&&n[1]},a.getPureText=function(e){return e.replace(/\{(.*?)\}/,"")},a.printText=function(){var e=a.props.value;if(null!==e&&void 0!==e){if(localStorage.getItem("f_n")&&localStorage.getItem("f_l")&&localStorage.getItem("f_e")&&localStorage.getItem("f_p")){var n=a.getSegment(e);n&&(e=a.getItem(n))}else e=a.getPureText(e);return e}return null},a}return Object(c.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return this.printText()}}]),n}(a.n(o).a.Component);n.a=s}},[[158,1,3]]]);
//# sourceMappingURL=main.c2a11aaf.chunk.js.map