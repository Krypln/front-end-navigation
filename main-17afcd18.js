(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[function(t,e,n){"use strict";var s,o={},a=function(){return void 0===s&&(s=Boolean(window&&document&&document.all&&!window.atob)),s},r=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}();function l(t,e){for(var n=[],s={},o=0;o<t.length;o++){var a=t[o],r=e.base?a[0]+e.base:a[0],l={css:a[1],media:a[2],sourceMap:a[3]};s[r]?s[r].parts.push(l):n.push(s[r]={id:r,parts:[l]})}return n}function i(t,e){for(var n=0;n<t.length;n++){var s=t[n],a=o[s.id],r=0;if(a){for(a.refs++;r<a.parts.length;r++)a.parts[r](s.parts[r]);for(;r<s.parts.length;r++)a.parts.push(w(s.parts[r],e))}else{for(var l=[];r<s.parts.length;r++)l.push(w(s.parts[r],e));o[s.id]={id:s.id,refs:1,parts:l}}}}function c(t){var e=document.createElement("style");if(void 0===t.attributes.nonce){var s=n.nc;s&&(t.attributes.nonce=s)}if(Object.keys(t.attributes).forEach((function(n){e.setAttribute(n,t.attributes[n])})),"function"==typeof t.insert)t.insert(e);else{var o=r(t.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}return e}var u,p=(u=[],function(t,e){return u[t]=e,u.filter(Boolean).join("\n")});function h(t,e,n,s){var o=n?"":s.css;if(t.styleSheet)t.styleSheet.cssText=p(e,o);else{var a=document.createTextNode(o),r=t.childNodes;r[e]&&t.removeChild(r[e]),r.length?t.insertBefore(a,r[e]):t.appendChild(a)}}function m(t,e,n){var s=n.css,o=n.media,a=n.sourceMap;if(o&&t.setAttribute("media",o),a&&btoa&&(s+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleSheet)t.styleSheet.cssText=s;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(s))}}var f=null,d=0;function w(t,e){var n,s,o;if(e.singleton){var a=d++;n=f||(f=c(e)),s=h.bind(null,n,a,!1),o=h.bind(null,n,a,!0)}else n=c(e),s=m.bind(null,n,e),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return s(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;s(t=e)}else o()}}t.exports=function(t,e){(e=e||{}).attributes="object"==typeof e.attributes?e.attributes:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a());var n=l(t,e);return i(n,e),function(t){for(var s=[],a=0;a<n.length;a++){var r=n[a],c=o[r.id];c&&(c.refs--,s.push(c))}t&&i(l(t,e),e);for(var u=0;u<s.length;u++){var p=s[u];if(0===p.refs){for(var h=0;h<p.parts.length;h++)p.parts[h]();delete o[p.id]}}}}},function(t,e,n){var s=n(10);"string"==typeof s&&(s=[[t.i,s,""]]);var o={insert:"head",singleton:!1};n(0)(s,o);s.locals&&(t.exports=s.locals)},function(t,e,n){var s=n(13);"string"==typeof s&&(s=[[t.i,s,""]]);var o={insert:"head",singleton:!1};n(0)(s,o);s.locals&&(t.exports=s.locals)},function(t,e,n){var s=n(16);"string"==typeof s&&(s=[[t.i,s,""]]);var o={insert:"head",singleton:!1};n(0)(s,o);s.locals&&(t.exports=s.locals)},function(t,e,n){var s=n(18);"string"==typeof s&&(s=[[t.i,s,""]]);var o={insert:"head",singleton:!1};n(0)(s,o);s.locals&&(t.exports=s.locals)},function(t,e,n){var s=n(20);"string"==typeof s&&(s=[[t.i,s,""]]);var o={insert:"head",singleton:!1};n(0)(s,o);s.locals&&(t.exports=s.locals)},function(t,e,n){var s=n(22);"string"==typeof s&&(s=[[t.i,s,""]]);var o={insert:"head",singleton:!1};n(0)(s,o);s.locals&&(t.exports=s.locals)},function(t,e){t.exports=Vue},function(t,e){t.exports=ELEMENT},function(t,e,n){"use strict";var s=n(1);n.n(s).a},function(t,e,n){},function(t,e,n){t.exports=n.p+"qianduandaohang-da419e12.png"},function(t,e,n){"use strict";var s=n(2);n.n(s).a},function(t,e,n){},function(t,e,n){t.exports=n.p+"github-093b53a5.png"},function(t,e,n){"use strict";var s=n(3);n.n(s).a},function(t,e,n){},function(t,e,n){"use strict";var s=n(4);n.n(s).a},function(t,e,n){},function(t,e,n){"use strict";var s=n(5);n.n(s).a},function(t,e,n){},function(t,e,n){"use strict";var s=n(6);n.n(s).a},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var s=n(7),o=n.n(s),a=n(8),r=n.n(a),l=[{label:"Google",value:0,url:"https://www.google.com/search?q="},{label:"百度",value:1,url:"https://www.baidu.com/s?wd="},{label:"Bing",value:2,url:"https://cn.bing.com/search?q="},{label:"NPM Package",value:3,url:"https://www.npmjs.com/search?q="}],i={title:"常用网址",list:[{name:"掘金",url:"https://juejin.im"},{name:"知乎",url:"https://www.zhihu.com"},{name:"Github",url:"https://www.github.com"},{name:"GithubTrending",url:"https://www.github.com/trending"},{name:"Leetcode中文",url:"https://leetcode-cn.com/"},{name:"CNode",url:"https://cnodejs.org"},{name:"Twitter",url:"https://twitter.com/"},{name:"V2EX",url:"https://www.v2ex.com"},{name:"Stackoverflow",url:"https://stackoverflow.com/"},{name:"Segmentfault",url:"https://segmentfault.com"},{name:"微信公众平台",url:"https://mp.weixin.qq.com/"},{name:"Linux 命令查询",url:"https://wangchujiang.com/linux-command/"},{name:"Awesomes",url:"https://www.awesomes.cn/"},{name:"豆瓣读书",url:"https://book.douban.com/"},{name:"InfoQ",url:"https://www.infoq.cn/"},{name:"极客教程",url:"https://www.geekjc.com/"}]},c={title:"热门技术",list:[{name:"React",url:"https://reactjs.org/"},{name:"React生命周期",url:"http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/"},{name:"Vue",url:"https://cn.vuejs.org/"},{name:"Angular",url:"https://angular.io/"},{name:"Webpack",url:"https://webpack.js.org/"},{name:"Node",url:"https://nodejs.org/en/"},{name:"TypeScript",url:"https://www.tslang.cn/"},{name:"GraphQL",url:"http://graphql.cn/"},{name:"Babel",url:"https://www.babeljs.cn/"},{name:"Docker",url:"https://docs.docker.com/"}]},u={title:"参考规范",list:[{name:"ES5 规范",url:"http://es5.github.io/"},{name:"Licenses 规范",url:"https://choosealicense.com/licenses/"},{name:"版本号规范",url:"https://semver.org/lang/zh-CN/"},{name:"变量命名规范",url:"https://unbug.github.io/codelf"},{name:"JSON 规范",url:"https://www.json.org/json-zh.html"}]},p={title:"工具大全",list:[{name:"阿里云",url:"https://www.aliyun.com/"},{name:"七牛云",url:"https://www.qiniu.com/"},{name:"坚果云",url:"https://www.jianguoyun.com"},{name:"印象笔记",url:"https://www.yinxiang.com/"},{name:"Vultr",url:"https://www.vultr.com/"},{name:"Google Analysis",url:"https://analytics.google.com"},{name:"BootCDN",url:"https://www.bootcdn.cn/"},{name:"CodeSandbox",url:"https://codesandbox.io"},{name:"百度翻译",url:"https://fanyi.baidu.com/"},{name:"FEHelper",url:"https://www.baidufe.com/fehelper"},{name:"Can I use",url:"https://caniuse.com/"},{name:"网站性能检测",url:"https://web.dev/"},{name:"图标下载",url:"https://www.easyicon.net/"},{name:"UserAgentString",url:"http://useragentstring.com/"},{name:"爬虫商城",url:"https://www.shenjian.io/"},{name:"印记中国",url:"https://www.docschina.org/"},{name:"前端报错监控",url:"https://www.fundebug.com/"},{name:"流程图制作",url:"https://www.processon.com/"},{name:"移动端调试",url:"https://github.com/wuchangming/spy-debugger"},{name:"Mock 数据",url:"https://www.easy-mock.com/"},{name:"文件内容比较",url:"https://www.scootersoftware.com"},{name:"静态网页 Netlify",url:"https://www.netlify.com/"},{name:"NPM 包大小检查",url:"https://bundlephobia.com/"},{name:"石墨文档",url:"https://shimo.im/welcome"},{name:"腾讯云开发者手册",url:"https://cloud.tencent.com/developer/devdocs"},{name:"正则大全",url:"https://any86.github.io/any-rule/"},{name:"彩云小译",url:"https://fanyi.caiyunapp.com/#/web"}]},h={title:"经典博客",list:[{name:"阮一峰",url:"http://www.ruanyifeng.com/blog/"},{name:"冴羽",url:"https://github.com/mqyqingfeng/Blog"},{name:"张鑫旭",url:"https://www.zhangxinxu.com/wordpress/"},{name:"大漠",url:"https://www.w3cplus.com/"},{name:"前端路上",url:"https://refined-x.com/"}]},m={title:"学习中心",list:[{name:"腾讯课堂",url:"https://ke.qq.com/"},{name:"慕课网",url:"https://www.imooc.com/"},{name:"极客时间",url:"https://www.geekbang.org/"},{name:"力扣",url:"https://leetcode-cn.com/"},{name:"牛客网",url:"https://www.nowcoder.com/"},{name:"跬步客",url:"https://www.kuibuke.com"},{name:"极客教程",url:"https://www.geekjc.com/"}]},f={data:function(){return{searchText:"",oldSearchText:"",searchType:0,searchOptions:l}},methods:{startSearch:function(){return this.oldSearchText===this.searchText&&(window.open(this.searchOptions[this.searchType].url+this.searchText),!0)},modifyValue:function(){this.oldSearchText=this.searchText}}};n(9);function d(t,e,n,s,o,a,r,l){var i,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),s&&(c.functional=!0),a&&(c._scopeId="data-v-"+a),r?(i=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},c._ssrRegister=i):o&&(i=l?function(){o.call(this,this.$root.$options.shadowRoot)}:o),i)if(c.functional){c._injectStyles=i;var u=c.render;c.render=function(t,e){return i.call(e),u(t,e)}}else{var p=c.beforeCreate;c.beforeCreate=p?[].concat(p,i):[i]}return{exports:t,options:c}}var w=d(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search",on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.startSearch(e)}}},[n("el-input",{staticClass:"input-with-select",attrs:{placeholder:"请输入内容"},on:{change:t.modifyValue},model:{value:t.searchText,callback:function(e){t.searchText=e},expression:"searchText"}},[n("el-select",{attrs:{slot:"prepend",placeholder:"请选择"},slot:"prepend",model:{value:t.searchType,callback:function(e){t.searchType=e},expression:"searchType"}},t._l(t.searchOptions,(function(t){return n("el-option",{key:t.label,attrs:{label:t.label,value:t.value}})})),1),t._v(" "),n("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:t.startSearch},slot:"append"})],1)],1)}),[],!1,null,null,null).exports,g=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"banner animated bounce"},[e("img",{staticClass:"banner-image",attrs:{src:n(11),alt:"banner"}})])}],v=(n(12),d({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),g,!1,null,null,null).exports),b={methods:{}},y=(n(15),d(b,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("el-row",[e("el-col",{staticClass:"navigation-github",attrs:{span:1,offset:23,xs:{span:1,offset:22}}},[e("a",{staticClass:"github",attrs:{href:"https://github.com/yhlben/front-end-navigation",target:"_blank"}},[e("img",{attrs:{src:n(14),alt:"github"}})])])],1)],1)}),[],!1,null,"21662406",null).exports),_={props:["data","type"],computed:{titleStyle:function(){return this.type},itemHoverStyle:function(){return"".concat(this.type,"-hover")}}},x=(n(17),d(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-row",[n("el-col",{staticClass:"common-panel",attrs:{span:24}},[n("el-row",{staticClass:"common-panel-title",class:t.titleStyle},[t._v(t._s(t.data.title))]),t._v(" "),n("el-row",{staticClass:"common-panel-container",attrs:{gutter:10}},t._l(t.data.list,(function(e){return n("el-col",{key:e.name,staticClass:"common-panel-item",attrs:{xs:24,sm:12,md:8,lg:6}},[n("a",{staticClass:"common-panel-item-a",attrs:{href:e.url,target:"_blank"}},[n("el-card",{class:t.itemHoverStyle,attrs:{shadow:"always"}},[t._v("\n              "+t._s(e.name)+"\n            ")])],1)])})),1)],1)],1)],1)}),[],!1,null,null,null)),T=d({components:{Block:x.exports},data:function(){return{commonList:i,toolList:p,blogList:h,studyList:m,hotTechnologyList:c,standardList:u}}},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("block",{attrs:{data:t.commonList,type:"commonList"}}),t._v(" "),n("block",{attrs:{data:t.hotTechnologyList,type:"hotTechnologyList"}}),t._v(" "),n("block",{attrs:{data:t.standardList,type:"standardList"}}),t._v(" "),n("block",{attrs:{data:t.toolList,type:"toolList"}}),t._v(" "),n("block",{attrs:{data:t.blogList,type:"blogList"}}),t._v(" "),n("block",{attrs:{data:t.studyList,type:"studyList"}})],1)}),[],!1,null,null,null).exports,k={props:["scrollElement"],data:function(){return{timer:"",scrolling:!1}},mounted:function(){this.scrollElement.style["scroll-behavior"]="smooth",this.scrollElement.addEventListener("scroll",this.scrollToTop)},methods:{scrollToTop:function(){var t=this.$refs.topBtn,e=this.scrollElement.pageYOffset||this.scrollElement.scrollTop||this.scrollElement.scrollTop,n=this.scrollElement.offsetHeight-80;t.style.visibility=e>n?"visible":"hidden"},gotoTop:function(){this.scrollElement.scrollTop=0}},beforeDestroy:function(){this.scrollElement.removeEventListener("scroll",this.scrollToTop)}},C=(n(19),{components:{Search:w,Banner:v,MainContainer:T,ScrollToTop:d(k,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("section",{ref:"topBtn",staticClass:"gotoTop",attrs:{id:"scroll-to-top"},on:{click:function(e){return t.gotoTop()}}},[n("i",{staticClass:"el-icon-caret-top"})])])}),[],!1,null,"0fe9772c",null).exports,Navigation:y},data:function(){return{search:"",select:"",scrollElement:""}},mounted:function(){this.scrollElement=this.$refs.main.$el}}),E=(n(21),d(C,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"body"}},[n("el-container",[n("el-header",[n("Navigation")],1),t._v(" "),n("el-main",{ref:"main"},[n("el-row",[n("el-col",{attrs:{lg:{span:16,offset:4},md:{span:18,offset:3},sm:{span:20,offset:2},xs:{span:20,offset:2}}},[n("Banner")],1),t._v(" "),n("el-col",{attrs:{lg:{span:16,offset:4},md:{span:18,offset:3},sm:{span:20,offset:2},xs:{span:0}}},[n("Search")],1)],1),t._v(" "),n("div",{staticClass:"white-line"}),t._v(" "),n("el-row",[n("el-col",{attrs:{lg:{span:16,offset:4},md:{span:18,offset:3},sm:{span:20,offset:2},xs:{span:22,offset:1}}},[n("MainContainer")],1)],1)],1),t._v(" "),n("el-footer",{attrs:{height:"35px"}},[t._v("created by\n      "),n("a",{attrs:{target:"_blank",href:"https://github.com/yhlben"}},[t._v("@yhlben")])])],1),t._v(" "),t.scrollElement?n("scroll-to-top",{attrs:{scrollElement:t.scrollElement}}):t._e()],1)}),[],!1,null,null,null).exports);o.a.use(r.a),new o.a({render:function(t){return t(E)}}).$mount("#root")}],[[23,1]]]);