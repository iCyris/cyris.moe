(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,a,t){},12:function(e,a,t){"use strict";t.r(a);var l=t(3),n=t(0),r=t.n(n),c=t(2),i=t.n(c),m=t(4),s={dataState:"init",chapter:{name:"Prologue",description:"\u300e \u7eff\u751f\u7684\u5e7b\u60f3\u4e61 \u300f"}},d=function(e,a){switch(a.type){case"switch":return{dataState:"close"===e.dataState||"init"===e.dataState?"open":"close",chapter:Object(m.a)({},e.chapter)};case"changeChapter":return{dataState:e.dataState,chapter:{name:a.payload.name,description:a.payload.description}};default:return e}},E=r.a.createContext(),u={Prologue:"\u300e \u7eff\u751f\u7684\u5e7b\u60f3\u4e61 \u300f",Chapter_1:"\u53ef\u7231\u304f\u306a\u308a\u305f\u3044",Chapter_2:"\u732b\u3068\u6708",Chapter_3:"\u590f\u591c\u306e\u30de\u30b8\u30c3\u30af",LastChapter:"Main Land"},v=function(e){return{name:e,description:u[e]}};function o(){var e=Object(n.useContext)(E).dispatch,a=v("Chapter_1"),t={name:"LastChapter",description:"Main Land"};return r.a.createElement("div",{id:"prologue"},r.a.createElement("div",{className:"prologue-bg"},r.a.createElement("div",null),r.a.createElement("div",null)),r.a.createElement("div",{className:"prologue-frame"},r.a.createElement("div",null,r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null)),r.a.createElement("div",null,r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null))),r.a.createElement("div",{className:"prologue-stage"},r.a.createElement("div",{className:"prologue-stage-curtain"},r.a.createElement("div",null),r.a.createElement("div",null)),r.a.createElement("div",{className:"prologue-stage-title"},r.a.createElement("div",null),r.a.createElement("div",null))),r.a.createElement("div",{className:"prologue-cover"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)),r.a.createElement("div",{className:"prologue-wave"}),r.a.createElement("div",{className:"prologue-logo"}),r.a.createElement("div",{className:"prologue-out"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",{onAnimationEnd:function(){return e({type:"changeChapter",payload:a})}})),r.a.createElement("div",{className:"prologue-skip",onClick:function(){return e({type:"changeChapter",payload:t})}}))}function p(e){return r.a.createElement("div",{className:"open-chapter"},r.a.createElement("div",{className:"chapter-bg"}),r.a.createElement("div",{className:"chapter-title"},r.a.createElement("div",{className:"chapter-description"},e.chapter.description),r.a.createElement("div",{className:"chapter-name"},e.chapter.name.toUpperCase())))}function h(){var e=Object(n.useContext)(E),a=e.store,t=e.dispatch,l=v("Chapter_2");return r.a.createElement("div",{id:"chapter1"},r.a.createElement(p,{chapter:a.chapter}),r.a.createElement("div",{className:"chapter1-open"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)),r.a.createElement("div",{className:"chapter1-effects"},r.a.createElement("div",{className:"chapter1-effects-outside"},r.a.createElement("div",{className:"lines"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)),r.a.createElement("div",{className:"points"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))),r.a.createElement("div",{className:"chapter1-effects-inside"},r.a.createElement("div",null),r.a.createElement("div",null))),r.a.createElement("div",{className:"chapter1-radio"},r.a.createElement("div",{className:"chapter1-radio-start"})),r.a.createElement("div",{className:"chapter1-night"},r.a.createElement("div",null)),r.a.createElement("div",{className:"chapter1-cards"},r.a.createElement("div",{className:"group-1"},r.a.createElement("div",null)),r.a.createElement("div",{className:"group-2"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)),r.a.createElement("div",{className:"group-3"},r.a.createElement("div",{className:"part-1"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)),r.a.createElement("div",{className:"part-2"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))),r.a.createElement("div",{className:"group-4"},r.a.createElement("div",null),r.a.createElement("div",null))),r.a.createElement("div",{className:"chapter1-kurukuru"},r.a.createElement("div",{className:"line-wrapper"},r.a.createElement("div",{className:"line"})),r.a.createElement("div",{className:"line-wrapper"},r.a.createElement("div",{className:"line"})),r.a.createElement("div",{className:"line-wrapper"},r.a.createElement("div",{className:"line"})),r.a.createElement("div",{className:"line-wrapper"},r.a.createElement("div",{className:"line"})),r.a.createElement("div",{className:"line-wrapper"},r.a.createElement("div",{className:"line"})),r.a.createElement("div",{className:"line-wrapper"},r.a.createElement("div",{className:"line"})),r.a.createElement("div",{className:"line-wrapper"},r.a.createElement("div",{className:"line"})),r.a.createElement("div",{className:"line-wrapper"},r.a.createElement("div",{className:"line"}))),r.a.createElement("div",{className:"chapter1-close"},r.a.createElement("div",null),r.a.createElement("div",{onAnimationEnd:function(){return t({type:"changeChapter",payload:l})}})))}function N(){var e=Object(n.useContext)(E),a=e.store,t=e.dispatch,l=v("Chapter_3");return r.a.createElement("div",{id:"chapter2"},r.a.createElement(p,{chapter:a.chapter}),r.a.createElement("div",{className:"chapter2-open"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)),r.a.createElement("div",{className:"chapter2-claws"},r.a.createElement("div",{className:"left"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)),r.a.createElement("div",{className:"right"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))),r.a.createElement("div",{className:"chapter2-night-fall"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)),r.a.createElement("div",{className:"chapter2-stage"},r.a.createElement("div",{className:"corners corner-1"},r.a.createElement("div",{className:"inside-bg"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)),r.a.createElement("div",{className:"inside-squ"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))),r.a.createElement("div",{className:"corners corner-2"},r.a.createElement("div",{className:"inside-bg"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)),r.a.createElement("div",{className:"inside-squ"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))),r.a.createElement("div",{className:"corners corner-3"},r.a.createElement("div",{className:"inside-bg"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)),r.a.createElement("div",{className:"inside-squ"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))),r.a.createElement("div",{className:"corners corner-4"},r.a.createElement("div",{className:"inside-bg"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)),r.a.createElement("div",{className:"inside-squ"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))),r.a.createElement("div",{className:"lines"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)),r.a.createElement("div",{className:"center"}),r.a.createElement("div",{className:"actress"})),r.a.createElement("div",{className:"chapter2-close"},r.a.createElement("div",{className:"groups group-1"},r.a.createElement("div",null),r.a.createElement("div",null)),r.a.createElement("div",{className:"groups group-2"},r.a.createElement("div",null),r.a.createElement("div",null)),r.a.createElement("div",{className:"groups group-3"},r.a.createElement("div",null),r.a.createElement("div",{onAnimationEnd:function(){return t({type:"changeChapter",payload:l})}}))))}function g(){var e=Object(n.useContext)(E),a=e.store,t=e.dispatch,l=v("LastChapter");return r.a.createElement("div",{id:"chapter3",onAnimationEnd:function(e){e&&e.target&&e.target.id&&"chapter3"===e.target.id&&t({type:"changeChapter",payload:l})}},r.a.createElement(p,{chapter:a.chapter}),r.a.createElement("div",{className:"chapter3-sunny"},r.a.createElement("div",{className:"chapter3-sunny__in"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)),r.a.createElement("div",{className:"chapter3-sunny__cards"},r.a.createElement("section",{className:"part-1"},r.a.createElement("div",null),r.a.createElement("div",null)),r.a.createElement("section",{className:"part-2"},r.a.createElement("span",null),r.a.createElement("div",null),r.a.createElement("div",null)),r.a.createElement("section",{className:"part-3"},r.a.createElement("div",null),r.a.createElement("div",null))),r.a.createElement("div",{className:"chapter3-sunny__lights"},r.a.createElement("section",{className:"part-1"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)),r.a.createElement("section",{className:"part-2"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)))),r.a.createElement("div",{className:"chapter3-shiny-wrap"},r.a.createElement("div",{className:"chapter3-shiny-box"},r.a.createElement("div",{className:"chapter3-shiny-item"}))))}function b(){var e=Object(n.useContext)(E),a=e.store,t=e.dispatch;return r.a.createElement("div",{id:"index-page"},r.a.createElement("div",{className:"index-bg"},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null)),r.a.createElement("div",{className:"index-logo"}),r.a.createElement("div",{id:"index-button","data-state":a.dataState,onClick:function(){return t({type:"switch"})}},r.a.createElement("div",{className:"btn-bg"}),r.a.createElement("div",{className:"btn-main"},r.a.createElement("div",{className:"short-id short-id-1"},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null)),r.a.createElement("div",{className:"short-id short-id-2"},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null)))),r.a.createElement("div",{className:"index-sns"},r.a.createElement("div",{className:"inner"},r.a.createElement("a",{target:"_blank",href:"https://sound.cyris.moe",title:"Blog",rel:"noopener noreferrer"},r.a.createElement("i",{className:"czs-pen-write"})),r.a.createElement("a",{target:"_blank",href:"https://sound.cyris.moe/friends",title:"Friends",rel:"noopener noreferrer"},r.a.createElement("i",{className:"czs-pokemon-ball"})),r.a.createElement("a",{target:"_blank",href:"https://github.com/iCyris",title:"GitHub",rel:"noopener noreferrer"},r.a.createElement("i",{className:"czs-github-logo"})),r.a.createElement("a",{target:"_blank",href:"https://twitter.com/yuki_cyris",title:"Twitter",rel:"noopener noreferrer"},r.a.createElement("i",{className:"czs-twitter"})),r.a.createElement("a",{target:"_blank",href:"https://space.bilibili.com/33665543",title:"Bilibili",rel:"noopener noreferrer"},r.a.createElement("i",{className:"czs-bilibili"})))))}function f(){var e=Object(n.useContext)(E).store;return r.a.createElement("div",{id:"profile-switch","data-state":e.dataState},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null))}var y=[{id:1,title:"KiwiFruit",intro:"My CSS Animation works. Love Kiwi!",thumb:"/images/project/kiwi-fruit.png",link:"https://kiwi-fruit.cyris.moe",time:"2019.1.7"},{id:2,title:"Hugo Theme Yuki",intro:"She is as pure as the snow.",thumb:"/images/project/hugo-theme-yuki.png",link:"https://github.com/iCyris/hugo-theme-yuki",time:"2019.1.28"},{id:3,title:"Ume",intro:"An elegant theme for saber.js.",thumb:"/images/project/Ume.png",link:"https://github.com/iCyris/Ume",time:"2019.3.25"},{id:4,title:"Vidar Website",intro:"Vidar-Team official site.",thumb:"/images/project/vidar-site.png",link:"https://github.com/iCyris/Vidar-Website",time:"2019.6.5"}];function C(){var e=Object(n.useContext)(E).store,a=y.map(function(e){return r.a.createElement("a",{href:e.link,key:e.id,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:e.thumb,alt:e.title}),r.a.createElement("h4",null,e.title),r.a.createElement("p",null,e.intro),r.a.createElement("time",null,e.time))});return r.a.createElement("div",{id:"profile-page","data-state":e.dataState},r.a.createElement("section",{className:"header-box"},r.a.createElement("div",{className:"header"})),r.a.createElement("section",{className:"description-box"},r.a.createElement("div",{className:"avatar"}),r.a.createElement("div",{className:"author"},"Cyris"),r.a.createElement("div",{className:"description"},"\xa0","\xa0","\u65b0\u51fa\u7684\u82bd\u7528\u5b83\u7684\u6e29\u67d4\u878d\u5316\u4e86\u5c11\u5e74\u5fc3\u4e2d\u7684\u5899\u5835\u7bad\u5f71\uff0c\u300c\u7eff\u751f\u300d\u7531\u6b64\u800c\u751f\u3002\u6211\u5e0c\u671b\u901a\u8fc7 Web \u7684\u65b9\u5f0f\u6765\u8868\u73b0\u81ea\u5df1\u7684\u5185\u5fc3\u4e16\u754c\uff0c\u56e0\u4e0d\u7518\u5e73\u5eb8\u800c\u594b\u8d77\uff0c\u56e0\u4e0d\u8fbe\u76ee\u6807\u800c\u4e0d\u61c8\u3002")),r.a.createElement("section",{className:"information-box"},r.a.createElement("div",{className:"title"},"Information"),r.a.createElement("div",{className:"information"},r.a.createElement("div",{className:"inner"},r.a.createElement("p",null,"ID\uff1aCyris\uff0f\u7eff\u751f"),r.a.createElement("p",null,"\u5174\u8da3\uff1aWeb\u3001RPG\u3001ACG"),r.a.createElement("p",null,"\u559c\u6b22\u7684\u6280\u672f\uff1aAnimation\u3001WebGL\u3001illustrator"),r.a.createElement("p",null,"\u559c\u6b22\u7684\u98df\u7269\uff1a\u897f\u897f\u505a\u7684\u996d\u3001\u9762\u6761\u3001\u6c34\u679c\u4eec"),r.a.createElement("p",null,"\u76ee\u524d\uff1aAliyun"),r.a.createElement("p",null,"\u90ae\u7bb1\uff1ai#cyris.moe (# -> @)")))),r.a.createElement("section",{className:"project-box"},r.a.createElement("div",{className:"title"},"Project"),r.a.createElement("div",{className:"project"},a)),r.a.createElement("section",{className:"afterwords-box"},r.a.createElement("div",{className:"title"},"Afterwords"),r.a.createElement("div",{className:"paragraph"},"\xa0","\xa0","\u611f\u8c22 yui540 \u521b\u4f5c\u7684\u5404\u79cd\u4f5c\u54c1\uff0c\u65e0\u8bba\u662f\u6280\u672f\u5c42\u9762\u8fd8\u662f\u8bbe\u8ba1\u5c42\u9762\u6211\u90fd\u6536\u83b7\u4e86\u5f88\u591a\u3002\u4e5f\u611f\u8c22\u4e00\u76f4\u966a\u4f34\u5728\u6211\u8eab\u8fb9\u7684\u4eba\uff0c\u6211\u7684\u6bcf\u4e00\u6bb5\u65e5\u5e38\u90fd\u662f\u6211\u7684\u7075\u611f\u6765\u6e90\u3002",r.a.createElement("br",null),r.a.createElement("br",null),'"\u63a2\u6c42\u771f\u7406\u8005\u4e0d\u53ef\u5fc3\u5b58\u50b2\u6162\u3002"')),r.a.createElement("section",{className:"footer-box"},r.a.createElement("div",{className:"footer"},r.a.createElement("span",null,"\xa9",(new Date).getFullYear()," Cyris. All rights reserved."))))}function w(){return r.a.createElement("div",{id:"gensokyo"},r.a.createElement(b,null),r.a.createElement(f,null),r.a.createElement(C,null))}function k(){var e=Object(n.useContext)(E).store;switch("Prologue"===e.chapter.name&&(console.log("> \u300e \u7eff\u751f\u7684\u5e7b\u60f3\u4e61 \u300f"),console.log(">  Cyris's design portfolio v2.")),e.chapter.name){case"Prologue":return r.a.createElement(o,null);case"Chapter_1":return r.a.createElement(h,null);case"Chapter_2":return r.a.createElement(N,null);case"Chapter_3":return r.a.createElement(g,null);case"LastChapter":default:return r.a.createElement(w,null)}}i.a.render(r.a.createElement(function(){var e=Object(n.useReducer)(d,s),a=Object(l.a)(e,2),t=a[0],c=a[1];return r.a.createElement(E.Provider,{value:{store:t,dispatch:c}},r.a.createElement(k,null))},null),document.getElementById("root"));t(11)},5:function(e,a,t){e.exports=t(12)}},[[5,1,2]]]);
//# sourceMappingURL=main.d137dc62.chunk.js.map