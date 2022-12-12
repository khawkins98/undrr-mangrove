"use strict";(self.webpackChunk_khawkins_undrr_mangrove=self.webpackChunk_khawkins_undrr_mangrove||[]).push([[5457,9927,1433,6322],{"./stories/Atom/Typography/Heading/Heading.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{X:()=>Heading});__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./stories/assets/scss/_typography.scss");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js"),Heading=function Heading(_ref){var type=_ref.type,label=_ref.label,className=_ref.className,tabIndex=_ref.tabIndex,dataViewport=_ref.dataViewport,HeadingTag="h"+type;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(HeadingTag,{className,tabIndex,"data-viewport":dataViewport,children:label})};Heading.displayName="Heading"},"./stories/assets/js/resize.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Q:()=>windowResize});__webpack_require__("./node_modules/core-js/modules/web.timers.js");var timeoutId,isStart=!0,resizeEventsTrigger=function resizeEventsTrigger(el){isStart?function triggerResizeStart(el){el.trigger("resizestart"),isStart=!isStart}(el):function triggerResizeEnd(el){clearTimeout(timeoutId),timeoutId=setTimeout((function(){el.trigger("resizeend"),isStart=!isStart}),200)}(el)};function windowResize(elem,fn){elem.resize((function(){resizeEventsTrigger(elem)})),elem.on("resizeend",fn)}},"./stories/Molecules/Text/HeadingBig/HeadingBig.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__,getCaptionForLocale:()=>getCaptionForLocale,headingBigBlock:()=>headingBigBlock});__webpack_require__("./node_modules/react/index.js");var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js"),_HeadingBig__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./stories/Molecules/Text/HeadingBig/HeadingBig.jsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const getCaptionForLocale=locale=>{switch(locale){case"english":return{header:["Our",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("br",null),"Mission"],description:"UNDP works in 170 countries and territories to eradicate poverty while protecting the planet. We help countries develop strong policies, skills, partnerships and institutions so they can sustain their progress."};case"arabic":return{header:["علامة",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("br",null),"المحتو"],description:"يعمل برنامج الأمم المتحدة الإنمائي في 170 دولة وإقليم للقضاء على الفقر مع حماية كوكب الأرض. نحن نساعد البلدان على تطوير سياسات ومهارات وشراكات ومؤسسات قوية حتى تتمكن من الحفاظ على تقدمها."};case"burmese":return{header:["အကြောင်",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("br",null),"အကြောင်"],description:"UNDP သည်ကမ္ဘာနှင့်နယ်မြေ ၁၇၀ တွင်ဆင်းရဲနွမ်းပါးမှုပပျောက်ရန်ကမ္ဘာကိုကာကွယ်နေသည်။ သူတို့ရဲ့တိုးတက်မှုတွေကိုဆက်ထိန်းထားနိုင်အောင်ခိုင်မာတဲ့မူဝါဒတွေ၊ ကျွမ်းကျင်မှုတွေ၊ မိတ်ဖက်တွေ၊ အဖွဲ့အစည်းတွေတည်ဆောက်ဖို့ငါတို့ကကူညီပေးတယ်။"};case"japanese":return{header:["コンテン",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("br",null),"ツタグ"],description:"UNDPは、地球を保護しながら貧困を根絶するために170の国と地域で活動しています。私たちは、各国が進歩を維持できるように、強力な政策、スキル、パートナーシップ、制度を開発するのを支援します。"};default:return{header:["Our",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("br",null),"Mission"],description:"UNDP works in 170 countries and territories to eradicate poverty while protecting the planet. We help countries develop strong policies, skills, partnerships and institutions so they can sustain their progress."}}},layoutProps={getCaptionForLocale};function MDXContent({components,...props}){return(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("wrapper",_extends({},layoutProps,props,{components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.h_,{title:"Components/UI components/Text/Heading big block",component:_HeadingBig__WEBPACK_IMPORTED_MODULE_3__.b,argTypes:{Emphasize:{options:["true","false"],control:{type:"inline-radio"},defaultValue:"true"}},mdxType:"Meta"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h1",{id:"heading-big-block"},"Heading Big Block"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("p",null,"The Heading Block defines a section of information data with some items - Header title, Description. ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("inlineCode",{parentName:"p"},"H2")," ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("inlineCode",{parentName:"p"},"H4")," atoms tags are used for creating this section."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.Xz,{style:{background:"gray"},mdxType:"Canvas"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.oG,{name:"Heading big block",mdxType:"Story"},((args,{globals:{locale}})=>{const caption=getCaptionForLocale(locale);return(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_HeadingBig__WEBPACK_IMPORTED_MODULE_3__.b,_extends({headerText:caption.header,descriptionText:caption.description,listData:caption.listData,dataViewport:"true"},args,{mdxType:"HeadingBig"}))}))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h3",{id:""}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h3",{id:"usage"},"Usage"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("li",{parentName:"ul"},"Take HTML from the HTML tab in canvas whichever (select variant you like)"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("li",{parentName:"ul"},"Include CSS and JS from the 'CSS and JS References' section")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h3",{id:"css-and-js-references"},"CSS and JS References"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h4",{id:"css"},"CSS:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("p",null,"Add the base style only, located at ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("strong",{parentName:"p"},"dist/css/base-minimal.min.css")," along with following:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("a",{parentName:"li",href:"https://undp.github.io/design-system/css/components/headingbig.min.css",target:"_blank",rel:"nofollow noopener noreferrer"},"https://undp.github.io/design-system/css/components/headingbig.min.css"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h4",{id:"js"},"JS:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("a",{parentName:"li",href:"https://undp.github.io/design-system/js/viewport.min.js",target:"_blank",rel:"nofollow noopener noreferrer"},"https://undp.github.io/design-system/js/viewport.min.js")," (optional for viewport animation)")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h3",{id:"changelog"},"Changelog"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("p",null,"1.0 — Released component"))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;const headingBigBlock=(args,{globals:{locale}})=>{const caption=getCaptionForLocale(locale);return(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_HeadingBig__WEBPACK_IMPORTED_MODULE_3__.b,_extends({headerText:caption.header,descriptionText:caption.description,listData:caption.listData,dataViewport:"true"},args))};headingBigBlock.displayName="headingBigBlock",headingBigBlock.storyName="Heading big block",headingBigBlock.parameters={storySource:{source:'(args, {\n  globals: {\n    locale\n  }\n}) => {\n  const caption = getCaptionForLocale(locale);\n  return <HeadingBig headerText={caption.header} descriptionText={caption.description} listData={caption.listData} dataViewport="true" {...args}></HeadingBig>;\n}'}};const componentMeta={title:"Components/UI components/Text/Heading big block",component:_HeadingBig__WEBPACK_IMPORTED_MODULE_3__.b,argTypes:{Emphasize:{options:["true","false"],control:{type:"inline-radio"},defaultValue:"true"}},includeStories:["headingBigBlock"]},mdxStoryNameToKey={"Heading big block":"headingBigBlock"};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.aT,{mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(MDXContent,null))};const __WEBPACK_DEFAULT_EXPORT__=componentMeta,__namedExportsOrder=["getCaptionForLocale","headingBigBlock"]}}]);