"use strict";(self.webpackChunk_khawkins_undrr_mangrove=self.webpackChunk_khawkins_undrr_mangrove||[]).push([[1042],{"./stories/Organism/Blocks/ContentCardWithAndWithoutImage/ContentCardWithAndWithoutImage.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>ContentCardWithAndWithoutImage});__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.array.join.js"),__webpack_require__("./node_modules/core-js/modules/es.array.map.js"),__webpack_require__("./node_modules/core-js/modules/es.string.link.js"),__webpack_require__("./node_modules/react/index.js");var Heading=__webpack_require__("./stories/Atom/Typography/Heading/Heading.jsx"),CtaLink=__webpack_require__("./stories/Components/UIcomponents/Buttons/CtaLink/CtaLink.jsx"),Paragraph=__webpack_require__("./stories/Atom/BaseTypography/Paragraph/Paragraph.jsx"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),content_card_with_and_without_image=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./stories/Organism/Blocks/ContentCardWithAndWithoutImage/content-card-with-and-without-image.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(content_card_with_and_without_image.Z,options);content_card_with_and_without_image.Z&&content_card_with_and_without_image.Z.locals&&content_card_with_and_without_image.Z.locals;__webpack_require__("./stories/assets/scss/_grid.scss");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["data","storyBtn","dataViewport"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var cls=function cls(){for(var _len=arguments.length,classes=new Array(_len),_key=0;_key<_len;_key++)classes[_key]=arguments[_key];return classes.filter(Boolean).length>0?classes.filter(Boolean).join(" "):null};function ContentCardWithAndWithoutImage(_ref){var data=_ref.data,dataViewport=(_ref.storyBtn,_ref.dataViewport);_objectWithoutProperties(_ref,_excluded);return(0,jsx_runtime.jsx)("div",{className:"grid-x grid-margin-x content-data","data-viewport":dataViewport,children:data.map((function(item,index){return(0,jsx_runtime.jsxs)("div",{className:cls("cell",""+item.scale),children:["image"===item.type?(0,jsx_runtime.jsx)("div",{className:cls("content-card",""+item.Hovercolors),children:(0,jsx_runtime.jsxs)("a",{href:item.link,children:[(0,jsx_runtime.jsx)(Heading.X,{type:"6",label:item.contenttile}),(0,jsx_runtime.jsx)("div",{className:"image",children:(0,jsx_runtime.jsx)("img",{src:item.imgback,alt:item.imgback})}),(0,jsx_runtime.jsxs)("div",{className:"content-caption",children:[(0,jsx_runtime.jsx)(Heading.X,{type:"5",label:item.contentname}),(0,jsx_runtime.jsx)(CtaLink.E,{label:item.button,button_option:"span"})]})]})}):(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{}),"color"===item.type?(0,jsx_runtime.jsx)("div",{className:cls("content-card",""+item.BackgroundColor,""+item.Hovercolors),children:(0,jsx_runtime.jsxs)("a",{href:item.link,children:[(0,jsx_runtime.jsx)(Heading.X,{type:"6",label:item.contenttile}),(0,jsx_runtime.jsxs)("div",{className:"content-caption",children:["true"===item.Emphasize?(0,jsx_runtime.jsx)(Heading.X,{type:"4",label:item.contentnametwo}):(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{}),"false"===item.Emphasize?(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Heading.X,{type:"5",label:item.contentname}),(0,jsx_runtime.jsx)(Paragraph.P,{label:item.paragraph})]}):(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{}),(0,jsx_runtime.jsx)(CtaLink.E,{label:item.button,button_option:"span"})]})]})}):(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{})]},index)}))})}ContentCardWithAndWithoutImage.displayName="ContentCardWithAndWithoutImage",ContentCardWithAndWithoutImage.defaultProps={Emphasize:"true",Hovercolors:"green"}},"./stories/Organism/Blocks/ContentCardWithAndWithoutImage/ContentCardWithAndWithoutImage.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,contentCardsWithAndWithoutImage:()=>contentCardsWithAndWithoutImage,default:()=>__WEBPACK_DEFAULT_EXPORT__,getCaptionForLocale:()=>getCaptionForLocale});__webpack_require__("./node_modules/react/index.js");var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js"),_ContentCardWithAndWithoutImage__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./stories/Organism/Blocks/ContentCardWithAndWithoutImage/ContentCardWithAndWithoutImage.jsx"),_assets_images_card2_jpg__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./stories/assets/images/card2.jpg");__webpack_require__("./stories/assets/images/donate.png"),__webpack_require__("./stories/assets/images/explore.png");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const getCaptionForLocale=locale=>{switch(locale){case"english":return{contentdata:[{contenttile:"CONTENT TAG",contentname:"In Costa Rica, rural women grow their own businesses.",button:"READ MORE",link:"#",imgback:_assets_images_card2_jpg__WEBPACK_IMPORTED_MODULE_4__,scale:"medium-3",btnType:"Arrow",Emphasize:"false",Hovercolors:"green",type:"image"},{contenttile:"CONTENT TAG",contentname:"“We are a forgotten population.” ",contentnametwo:"“We are a forgotten population.”",paragraph:"Using social media to help marginalized groups get HIV services during COVID-19",button:"READ MORE",link:"#",imgback:_assets_images_card2_jpg__WEBPACK_IMPORTED_MODULE_4__,scale:"medium-3",btnType:"Arrow",Emphasize:"false",Hovercolors:"gray",type:"color",BackgroundColor:"card"},{contenttile:"PUBLICATION",contentname:"UN calls for comprehensive debt standstill in all developing countries.",contentnametwo:"UN calls for comprehensive debt standstill in all developing countries.",paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis pharetra ex, a laoreet purus vulputate eget.",button:"READ MORE",link:"#",imgback:_assets_images_card2_jpg__WEBPACK_IMPORTED_MODULE_4__,scale:"medium-3",btnType:"Arrow",Emphasize:"true",Hovercolors:"green",type:"color",BackgroundColor:"card-emphasize"},{contenttile:"CONTENT TAG",contentname:"“I cry for no apparent reason.”",contentnametwo:"“I cry for no apparent reason.”",paragraph:"More than nine years of war have left 11.7 million Syrians in need of assistance and 6.2 million are internally displaced, some many times over.",button:"READ MORE",link:"#",imgback:_assets_images_card2_jpg__WEBPACK_IMPORTED_MODULE_4__,scale:"medium-3",btnType:"Arrow",Emphasize:"false",Hovercolors:"gray",type:"color",BackgroundColor:"card"}],storyBtn:"SEE ALL STORIES"};case"arabic":return{contentdata:[{contenttile:"علامة المحتوى",contentname:"في كوستاريكا ، تقوم النساء الريفيات بتنمية أعمالهن الخاصة.",button:"اقرأ أكث",link:"#",imgback:_assets_images_card2_jpg__WEBPACK_IMPORTED_MODULE_4__,scale:"medium-3",btnType:"Arrow",Emphasize:"false",Hovercolors:"green",type:"image"},{contenttile:"علامة المحتوى",contentname:' "نحن شعب منسي."',contentnametwo:'"نحن شعب منسي."',paragraph:"استخدام وسائل التواصل الاجتماعي لمساعدة الفئات المهمشة في الحصول على خدمات فيروس نقص المناعة البشرية خلال COVID-19",button:"اقرأ أكث",link:"#",imgback:_assets_images_card2_jpg__WEBPACK_IMPORTED_MODULE_4__,scale:"medium-3",btnType:"Arrow",Emphasize:"false",Hovercolors:"",type:"color",BackgroundColor:"card"},{contenttile:"النشر",contentname:" الأمم المتحدة تدعو إلى تجميد الديون الشامل في جميع البلدان النامية.",contentnametwo:" الأمم المتحدة تدعو إلى تجميد الديون الشامل في جميع البلدان النامية.",paragraph:"الألم بحد ذاته يسبب الكثير من الألم ، لكن التركيز الأساسي ينصب على العميل. من جعبة اليخت الناعمة ، عدد كبير من اللحم البقري النقي",button:"اقرأ أكث",link:"#",imgback:_assets_images_card2_jpg__WEBPACK_IMPORTED_MODULE_4__,scale:"medium-3",btnType:"Arrow",Emphasize:"true",Hovercolors:"green",type:"color",BackgroundColor:"card-emphasize"},{contenttile:"علامة المحتوى",contentname:'"أبكي بدون سبب واضح."',contentnametwo:'"أبكي بدون سبب واضح."',paragraph:"خلفت أكثر من تسع سنوات من الحرب 11.7 مليون سوري بحاجة إلى المساعدة و 6.2 مليون نازح داخليًا ، عدة مرات أكثر.",button:"اقرأ أكث",link:"#",imgback:_assets_images_card2_jpg__WEBPACK_IMPORTED_MODULE_4__,scale:"medium-3",btnType:"Arrow",Emphasize:"false",Hovercolors:"",type:"color",BackgroundColor:"card"}],storyBtn:"شاهد كل القصص"};case"burmese":return{contentdata:[{contenttile:"အကြောင်းအရာ TAG",contentname:"ကော်စတာရီကာတွင် ကျေးလက်နေ အမျိုးသမီးများသည် ၎င်းတို့၏ ကိုယ်ပိုင်စီးပွားရေးများကို တိုးချဲ့လုပ်ကိုင်ကြသည်။",button:"ပိုပြီးဖတ်ပါ",link:"#",imgback:_assets_images_card2_jpg__WEBPACK_IMPORTED_MODULE_4__,scale:"medium-3",btnType:"Arrow",Emphasize:"false",Hovercolors:"green",type:"image"},{contenttile:"အကြောင်းအရာ TAG",contentname:'"ကျွန်ုပ်တို့သည် မေ့လျော့နေသော လူဦးရေများ"',contentnametwo:'"ကျွန်ုပ်တို့သည် မေ့လျော့နေသော လူဦးရေများ"',paragraph:"COVID-19 ကာလအတွင်း ဘေးဖယ်ခံထားရသော အုပ်စုများအား HIV ဝန်ဆောင်မှုများ ရရှိနိုင်ရန် လူမှုမီဒီယာကို အသုံးပြုခြင်း။",button:"ပိုပြီးဖတ်ပါ",link:"#",imgback:_assets_images_card2_jpg__WEBPACK_IMPORTED_MODULE_4__,scale:"medium-3",btnType:"Arrow",Emphasize:"false",Hovercolors:"",type:"color",BackgroundColor:"card"},{contenttile:"စာအုပ်ထုတ်ဝေရေး",contentname:"ဖွံ့ဖြိုးဆဲနိုင်ငံအားလုံးတွင် ကျယ်ကျယ်ပြန့်ပြန့် ကြွေးမြီများ ရပ်တန့်ရန် ကုလသမဂ္ဂက တောင်းဆိုထားသည်။",contentnametwo:"ဖွံ့ဖြိုးဆဲနိုင်ငံအားလုံးတွင် ကျယ်ကျယ်ပြန့်ပြန့် ကြွေးမြီများ ရပ်တန့်ရန် ကုလသမဂ္ဂက တောင်းဆိုထားသည်။",paragraph:"နာကျင်မှုသည်ကိုယ်တိုင်နာကျင်မှုများစွာရှိသော်လည်းအဓိကအာရုံစိုက်သူမှာ ၀ ယ်သူဖြစ်သည်။ ရွက်လှေ၏နူးညံ့သောကျည်တောက်မှအမဲသားစစ်စစ်ကိုလိုသည်ထက်ပိုစားသည်",button:"ပိုပြီးဖတ်ပါ",link:"#",imgback:_assets_images_card2_jpg__WEBPACK_IMPORTED_MODULE_4__,scale:"medium-3",btnType:"Arrow",Emphasize:"true",Hovercolors:"green",type:"color",BackgroundColor:"card-emphasize"},{contenttile:"အကြောင်းအရာ TAG",contentname:'"ကျွန်တော် အကြောင်းပြချက်မရှိဘဲ ငိုတယ်။"',contentnametwo:'"ကျွန်တော် အကြောင်းပြချက်မရှိဘဲ ငိုတယ်။"',paragraph:"စစ်ပွဲ ကိုးနှစ်ကျော်ကြာ ဖြစ်ပွားခဲ့သော ဆီးရီးယားနိုင်ငံသား ၁၁.၇ သန်းသည် အကူအညီများ လိုအပ်နေပြီး ၆.၂ သန်းမှာ ပြည်တွင်း အိုးအိမ်စွန့်ခွာ ထွက်ပြေးခဲ့ရပြီး အချို့မှာ အကြိမ်များစွာ ပြီးဆုံးသွားခဲ့သည်။",button:"ပိုပြီးဖတ်ပါ",link:"#",imgback:_assets_images_card2_jpg__WEBPACK_IMPORTED_MODULE_4__,scale:"medium-3",btnType:"Arrow",Emphasize:"false",Hovercolors:"",type:"color",BackgroundColor:"card"}],storyBtn:"ဇာတ်လမ်းများအားလုံးကို ကြည့်ပါ။"};case"japanese":return{contentdata:[{contenttile:"コンテンツタグ",contentname:"コスタリカでは、地方の女性が自分たちのビジネスを成長させています。",button:"続きを読む",link:"#",imgback:_assets_images_card2_jpg__WEBPACK_IMPORTED_MODULE_4__,scale:"medium-3",btnType:"Arrow",Emphasize:"false",Hovercolors:"green",type:"image"},{contenttile:"コンテンツタグ",contentname:"「私たちは忘れられた人口です。」",contentnametwo:"「私たちは忘れられた人口です。」",paragraph:"社会的に疎外されたグループがCOVID-19中にHIVサービスを受けるのを助けるためにソーシャルメディアを使用する",button:"続きを読む",link:"#",imgback:_assets_images_card2_jpg__WEBPACK_IMPORTED_MODULE_4__,scale:"medium-3",btnType:"Arrow",Emphasize:"false",Hovercolors:"",type:"color",BackgroundColor:"card"},{contenttile:"出版物",contentname:"国連は、すべての開発途上国で包括的な債務停止を求めています",contentnametwo:"国連は、すべての開発途上国で包括的な債務停止を求めています",paragraph:"痛み自体は多くの痛みですが、主な焦点は顧客にあります。 ヨットのやわらかい矢筒から、たっぷりの純粋な牛肉",button:"続きを読む",link:"#",imgback:_assets_images_card2_jpg__WEBPACK_IMPORTED_MODULE_4__,scale:"medium-3",btnType:"Arrow",Emphasize:"true",Hovercolors:"green",type:"color",BackgroundColor:"card-emphasize"},{contenttile:"コンテンツタグ",contentname:"「私は明白な理由もなく泣きます。」",contentnametwo:"「私は明白な理由もなく泣きます。」",paragraph:"9年以上の戦争により、1170万人のシリア人が支援を必要としており、620万人が国内避難民であり、何回も繰り返されています。",button:"続きを読む",link:"#",imgback:_assets_images_card2_jpg__WEBPACK_IMPORTED_MODULE_4__,scale:"medium-3",btnType:"Arrow",Emphasize:"false",Hovercolors:"",type:"color",BackgroundColor:"card"}],storyBtn:"すべてのストーリーを見る"};default:return{contentdata:[{contenttile:"CONTENT TAG",contentname:"In Costa Rica, rural women grow their own businesses.",button:"READ MORE",link:"#",imgback:_assets_images_card2_jpg__WEBPACK_IMPORTED_MODULE_4__,scale:"medium-3",btnType:"Arrow",Emphasize:"false",Hovercolors:"green",type:"image"},{contenttile:"CONTENT TAG",contentname:"“We are a forgotten population.” ",contentnametwo:"“We are a forgotten population.”",paragraph:"Using social media to help marginalized groups get HIV services during COVID-19",button:"READ MORE",link:"#",imgback:_assets_images_card2_jpg__WEBPACK_IMPORTED_MODULE_4__,scale:"medium-3",btnType:"Arrow",Emphasize:"false",Hovercolors:"",type:"color",BackgroundColor:"card"},{contenttile:"PUBLICATION",contentname:"UN calls for comprehensive debt standstill in all developing countries.",contentnametwo:"UN calls for comprehensive debt standstill in all developing countries.",paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis pharetra ex, a laoreet purus vulputate eget.",button:"READ MORE",link:"#",imgback:_assets_images_card2_jpg__WEBPACK_IMPORTED_MODULE_4__,scale:"medium-3",btnType:"Arrow",Emphasize:"true",Hovercolors:"green",type:"color",BackgroundColor:"card-emphasize"},{contenttile:"CONTENT TAG",contentname:"“I cry for no apparent reason.”",contentnametwo:"“I cry for no apparent reason.”",paragraph:"More than nine years of war have left 11.7 million Syrians in need of assistance and 6.2 million are internally displaced, some many times over.",button:"READ MORE",link:"#",imgback:_assets_images_card2_jpg__WEBPACK_IMPORTED_MODULE_4__,scale:"medium-3",btnType:"Arrow",Emphasize:"false",Hovercolors:"",type:"color",BackgroundColor:"card"}],storyBtn:"SEE ALL STORIES"}}},layoutProps={getCaptionForLocale};function MDXContent({components,...props}){return(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("wrapper",_extends({},layoutProps,props,{components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.h_,{title:"Patterns/Card grids/Content cards with and without image",mdxType:"Meta"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h1",{id:"content-card-with-and-without-image"},"Content Card With and Without Image"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("p",null,"This is just collection of the following components:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("a",{parentName:"li",href:"/docs/components-ui-components-cards-content-card-with-image--with-image"},"Content card")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("a",{parentName:"li",href:"/docs/components-ui-components-cards-content-card-without-image--without-emphasize"},"Content card without Emphasize")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("a",{parentName:"li",href:"/story/components-ui-components-cards-content-card-without-image--with-emphasize"},"Content card without Emphasize"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.Xz,{mdxType:"Canvas"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.oG,{name:"Content cards with and without image",mdxType:"Story"},((args,{globals:{locale}})=>{const caption=getCaptionForLocale(locale);return(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_ContentCardWithAndWithoutImage__WEBPACK_IMPORTED_MODULE_3__.I,_extends({data:caption.contentdata,storyBtn:caption.storyBtn,dataViewport:"false"},args,{mdxType:"ContentCardWithAndWithoutImage"}))}))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h3",{id:""}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h3",{id:"usage"},"Usage"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("li",{parentName:"ul"},"Copy the HTML from the canvas"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("li",{parentName:"ul"},"Include the CSS and JS resource defined in the ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("inlineCode",{parentName:"li"},"Content card"))))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;const contentCardsWithAndWithoutImage=(args,{globals:{locale}})=>{const caption=getCaptionForLocale(locale);return(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_ContentCardWithAndWithoutImage__WEBPACK_IMPORTED_MODULE_3__.I,_extends({data:caption.contentdata,storyBtn:caption.storyBtn,dataViewport:"false"},args))};contentCardsWithAndWithoutImage.displayName="contentCardsWithAndWithoutImage",contentCardsWithAndWithoutImage.storyName="Content cards with and without image",contentCardsWithAndWithoutImage.parameters={storySource:{source:'(args, {\n  globals: {\n    locale\n  }\n}) => {\n  const caption = getCaptionForLocale(locale);\n  return <ContentCardWithAndWithoutImage data={caption.contentdata} storyBtn={caption.storyBtn} dataViewport="false" {...args}></ContentCardWithAndWithoutImage>;\n}'}};const componentMeta={title:"Patterns/Card grids/Content cards with and without image",includeStories:["contentCardsWithAndWithoutImage"]},mdxStoryNameToKey={"Content cards with and without image":"contentCardsWithAndWithoutImage"};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.aT,{mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(MDXContent,null))};const __WEBPACK_DEFAULT_EXPORT__=componentMeta,__namedExportsOrder=["getCaptionForLocale","contentCardsWithAndWithoutImage"]},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./stories/Organism/Blocks/ContentCardWithAndWithoutImage/content-card-with-and-without-image.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".content-data>div{margin-bottom:2rem}.content-data .cta-container{margin-top:5.75rem}","",{version:3,sources:["webpack://./stories/Organism/Blocks/ContentCardWithAndWithoutImage/content-card-with-and-without-image.scss","webpack://./stories/assets/scss/_variables.scss"],names:[],mappings:"AAKE,kBACE,kBC0DS,CDvDX,6BACE,kBAAA",sourcesContent:["@import '../../../assets/scss/variables';\n@import '../../../assets/scss/mixins';\n@import '../../../assets/scss/breakpoints';\n\n.content-data {\n  > div {\n    margin-bottom: $spacing-07;\n  }\n\n  .cta-container {\n    margin-top: 5.75rem;\n  }\n}\n","// image variables\n$img-path: '../../../assets/images';\n$img-path-Icon: '../../../assets/icons';\n$img-path-Iconback: '../../assets/icons';\n$img-path-Iconfourback: '../../../../assets/icons';\n\n// COLORS\n$color-black: #000;\n$color-white: #fff;\n$color-blue-100: #b5d5f5;\n$color-blue-200: #94c4f5;\n$color-blue-300: #6babeb;\n$color-blue-400: #4f95dd;\n$color-blue-500: #3288ce;\n$color-blue-600: #006eb5;\n$color-blue-700: #1f5a95;\n$color-blue-800: #0468b1;\n$color-gray-100: #fafafa;\n$color-gray-200: #f7f7f7;\n$color-gray-300: #edeff0;\n$color-gray-400: #d4d6d8;\n$color-gray-500: #a9b1b7;\n$color-gray-600: #55606e;\n$color-gray-700: #232e3d;\n$color-light-yellow: #ffe17e;\n$color-yellow: #ffeb00;\n$color-dark-yellow: #fbc412;\n$color-light-red: #ffbcb7;\n$color-red: #ee402d;\n$color-dark-red: #d12800;\n$color-light-green: #b8ecb6;\n$color-green: #6de354;\n$color-dark-green: #59ba47;\n$color-light-azure: #a2daf3;\n$color-azure: #60d4f2;\n$color-dark-azure: #00c1ff;\n$color-light-pink: #ffb4ae;\n$color-silvery-moonlight: #ced0d3;\n$color-shuttle-gray: #55606f;\n$color-ebony-clay: #232e3e;\n\n// FONT SIZE\n$font-size-12: 0.75rem;\n$font-size-14: 0.875rem;\n$font-size-16: 1rem;\n$font-size-20: 1.25rem;\n$font-size-24: 1.5rem;\n$font-size-25: 1.563rem;\n$font-size-26: 1.625rem;\n$font-size-32: 2rem;\n$font-size-35: 2.188rem;\n\n// FONTS FAMLIY\n$Font-Family-ProximaNova: 'ProximaNova', sans-serif;\n$Font-Family-SohneBreit: 'SohneBreit', $Font-Family-ProximaNova;\n$Font-Family-NotoSans: 'NotoSans', sans-serif;\n\n// SPACING variables\n$spacing-01: 0.125rem;\n$spacing-02: 0.25rem;\n$spacing-03: 0.5rem;\n$spacing-04: 0.75rem;\n$spacing-05: 1rem;\n$spacing-06: 1.5rem;\n$spacing-07: 2rem;\n$spacing-08: 2.5rem;\n$spacing-09: 3rem;\n$spacing-10: 4rem;\n$spacing-11: 5rem;\n$spacing-12: 6rem;\n$spacing-13: 10rem;\n$spacing-36: 2.25rem;\n$spacing-44: 2.75rem;\n$spacing-50: 3.125rem;\n$spacing-60: 3.75rem;\n$spacing-70: 4.375rem;\n$spacing-76: 4.75rem;\n$spacing-90: 5.625rem;\n$spacing-100: 6.25rem;\n$spacing-136: 8.5rem;\n$spacing-330: 20.625rem;\n$spacing-320: 20rem;\n$spacing-400: 25rem;\n\n// Width variables\n$width-150: 9.375rem;\n$width-180: 11.25rem;\n$width-600: 37.5rem;\n$width-705: 44.0625rem;\n$width-840: 52.5rem;\n$width-900: 56.25rem;\n$width-1096: 68.5rem;\n$width-1440: 90rem;\n\n// Header height\n$header-height-xlarge: 115px;\n$header-height-medium: 75px;\n\n// GRADIENT COLOR LIST\n$yellow-gradient: $color-yellow 30%, rgba(255, 235, 0, 0) 110%;\n$red-gradient: $color-red 30%, rgb(240, 49, 49, 0) 110%;\n$green-gradient: $color-green 30%, rgba(0, 0, 0, 0) 110%;\n$blue-gradient: $color-azure 30%, rgb(101, 204, 244, 0) 110%;\n\n//SDG color\n$sdg-red: #e5243b;\n$sdg-mustard: #dda63a;\n$sdg-kelly-green: #4c9f38;\n$sdg-dark-red: #c5192d;\n$sdg-red-orange: #ff3a21;\n$sdg-bright-blue: #26bde2;\n$sdg-yellow: #fcc30b;\n$sdg-burgundy-red: #a21942;\n$sdg-orange: #fd6925;\n$sdg-magenta: #dd1367;\n$sdg-golden-yellow: #fd9d24;\n$sdg-dark-mustard: #bf8b2e;\n$sdg-dark-green: #3f7e44;\n$sdg-blue: #0a97d9;\n$sdg-lime-green: #56c02b;\n$sdg-royal-blue: #00689d;\n$sdg-navy-blue: #19486a;\n\n//SDG hover color\n$sdg-hover-red: #dc9099;\n$sdg-hover-mustard: #d3bb8a;\n$sdg-hover-kelly-green: #9fd092;\n$sdg-hover-dark-red: #ce8f97;\n$sdg-hover-red-orange: #ce9890;\n$sdg-hover-bright-blue: #9ac8d3;\n$sdg-hover-yellow: #d3c79d;\n$sdg-hover-burgundy-red: #ce94a6;\n$sdg-hover-orange: #d2aa98;\n$sdg-hover-magenta: #c994aa;\n$sdg-hover-golden-yellow: #c7b094;\n$sdg-hover-dark-mustard: #ceba98;\n$sdg-hover-dark-green: #a2d7a6;\n$sdg-hover-blue: #a1c6d7;\n$sdg-hover-lime-green: #abce9e;\n$sdg-hover-royal-blue: #748f9d;\n$sdg-hover-navy-blue: #a2c2d8;\n\n$author-image-radius: 50%;\n\n// language selectors\n$cyrillic: \":lang(bg),:lang(be),:lang(kk),:lang(ky),:lang(mk),:lang(mn),:lang(ru),:lang(sr),:lang(uk)\";\n\n/* variables end */\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./stories/assets/images/donate.png":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/donate.345e5f0b.png"},"./stories/assets/images/explore.png":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/explore.8f91b539.png"}}]);