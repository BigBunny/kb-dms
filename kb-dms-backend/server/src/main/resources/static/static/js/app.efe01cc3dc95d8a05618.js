webpackJsonp([10],{"+nwc":function(t,e){},ALvQ:function(t,e,n){"use strict";n.d(e,"b",function(){return c}),n.d(e,"c",function(){return u});var i=n("GGV6"),o=n("GsBR"),s=n("C67K"),r=n("nMzE"),a=(n.n(r),this);var c=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2e3;a.__vm.add("notifies",{timeout:e,render:function(e,n){return e("div",{staticClass:"bg-grey-2 pp-border-5 pp-radius-3 shadow-1 flex items-center"},[e("q-icon",{staticClass:"font-20 text-negative q-ml-xs",style:{width:"20px",height:"20px"},props:{name:"error"}}),e("div",{staticClass:"text-dark font-14 ellipsis q-ml-xs q-mr-md col-grow text-center",style:{lineHeight:"30px",minWidth:"10px",maxWidth:"80vw"}},["function"==typeof t?t(e,n):t])])}})},l=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4e3;a.__vm.add("notifies",{timeout:e,render:function(e,n){return e("div",{staticClass:"bg-grey-2 pp-border-5 pp-radius-3 shadow-1 flex items-center"},[e("q-icon",{staticClass:"font-20 text-orange q-ml-xs",style:{width:"20px",height:"20px"},props:{name:"warning"}}),e("div",{staticClass:"text-dark font-14 ellipsis q-ml-xs q-mr-md col-grow text-center",style:{lineHeight:"30px",minWidth:"10px",maxWidth:"80vw"}},["function"==typeof t?t(e,n):t])])}})},u=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1200;a.__vm.add("notifies",{timeout:e,render:function(e,n){return e("div",{staticClass:"bg-grey-2 pp-border-5 pp-radius-3 shadow-1 flex items-center"},[e("q-icon",{staticClass:"font-14 text-white bg-secondary q-ml-xs",style:{width:"16px",height:"16px",borderRadius:"50%"},props:{name:"check"}}),e("div",{staticClass:"text-dark font-14 ellipsis q-ml-xs q-mr-sm col-grow",style:{lineHeight:"30px",minWidth:"10px",maxWidth:"80vw"}},["function"==typeof t?t(e,n):t])])}})};e.a=function(t){var e=t.Vue;(function t(e){var n=this;if(document.body){var r=document.createElement("div");document.body.appendChild(r),this.__vm=new e({name:"pp-QNotifications",el:r,data:{queue:{notifies:[],messages:[]}},methods:{add:function(t,e){var n=this;if(!e)return!1;var i=Object(o.a)({__uid:Object(s.a)(),timeout:5e3},e),r=function(){return n.remove(i,t)};i.close=r,i.__timeout=setTimeout(r,i.timeout),this.queue[t].unshift(i)},remove:function(t,e){t.__timeout&&clearTimeout(t.__timeout);var n=this.queue[e].indexOf(t);if(-1!==n){var i=this.$refs["notif_"+t.__uid];if(i&&i.$el){var o=i.$el;o.style.left=o.offsetLeft+"px",o.style.width=getComputedStyle(o).width}this.queue[e].splice(n,1),"function"==typeof t.onDismiss&&t.onDismiss()}}},render:function(t){return t("div",{staticClass:"q-notifications"},[t("transition-group",{staticClass:"q-notification-list q-notification-list-top fixed column items-end ",style:{paddingTop:"41px"},props:{tag:"div",name:"pp-notification-top-right",mode:"out-in"}},this.queue.messages.map(function(e){return t("div",{ref:"notif_"+e.__uid,key:e.__uid,staticClass:"q-notification"},[e.render?e.render(t,e.close):null])})),t("transition-group",{staticClass:"q-notification-list q-notification-list-top fixed column items-center ",props:{tag:"div",name:"pp-notification-top",mode:"out-in"}},this.queue.notifies.map(function(e){return t("div",{ref:"notif_"+e.__uid,key:e.__uid,staticClass:"q-notification"},[e.render?e.render(t,e.close):null])}))])}})}else Object(i.b)(function(){t.call(n,e)})}).call(a,e),e.prototype.$q.ppNotify=a.__vm.add.bind(a,"notifies"),e.prototype.$q.err=c,e.prototype.$q.warning=l,e.prototype.$q.ok=u,e.prototype.$q.notify=function(t){var e=t.type,n=t.message;e&&"negative"===e&&c(n),e&&"warning"===e&&l(n),e&&"positive"===e&&u(n)},e.prototype.$q.ppMessage=a.__vm.add.bind(a,"messages"),e.prototype.$q.message=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e4;a.__vm.add("messages",{timeout:n,render:function(n,i){return n("div",{staticClass:"bg-grey-2 pp-radius-4 shadow-1",style:{border:"1px solid var(--q-color-teal)",width:"350px",minHeight:"100px",maxHeight:"50vh"}},[n("div",{staticClass:"full-width bg-teal text-white font-14 q-pl-xs q-pr-xs relative-position",style:{height:"30px",lineHeight:"30px",borderTopLeftRadius:"3px",borderTopRightRadius:"3px",overflow:"visible"}},[n("q-icon",{staticClass:"font-18 bg-teal text-white cursor-pointer absolute-top-right",style:{width:"18px",height:"18px",transform:"translate(40%, -40%)",borderRadius:"50%"},props:{name:"cancel"},nativeOn:{click:i}}),n("div",{staticClass:"full-width ellipsis"},[t?"function"==typeof t?t(n):t:null])]),n("div",{staticClass:"text-dark font-13 q-pa-sm"},[e?"function"==typeof e?e(n):e:null])])}})}}},Chgd:function(t,e){},En7h:function(t,e){},Ezjm:function(t,e){},IcnI:function(t,e,n){"use strict";var i={};n.d(i,"getUserInfo",function(){return v}),n.d(i,"refreshUserInfo",function(){return b}),n.d(i,"clearLoginState",function(){return q}),n.d(i,"login",function(){return y}),n.d(i,"logout",function(){return w});var o=n("7+uW"),s=n("NYxO"),r=n("stYp"),a=n("StD2"),c=n("Y6x7"),l={namespaced:!0,state:{show_menu:!1},getters:r,mutations:a,actions:c},u=n("sRpY"),p=n("UY6v"),d=n("//Fk"),f=n.n(d),h=n("Kkag");var m=n("uoZE"),g=n("ALvQ"),x=n("YaEn"),_=n("ui1U"),v=function(t){var e=t.state;return new f.a(function(t,n){e.is_login?t():Object(m.a)().then(function(n){1===n.status?(e.account=n.data.account,e.name=n.data.name,e.is_login=!0,e.is_admin=n.data.is_admin,t()):(_.a.set("isLogin",!1),x.a.push({path:"/login"}))}).catch(function(t){_.a.set("isLogin",!1),x.a.push({path:"/login"})})})},b=function(t){var e=t.state;return new f.a(function(t,n){Object(m.a)().then(function(n){1===n.status?(e.account=n.data.account,e.name=n.data.name,e.is_login=!0,e.is_admin=n.data.is_admin,t()):_.a.set("isLogin",!1)}).catch(function(t){_.a.set("isLogin",!1),x.a.push({path:"/login"})})})},q=function(t){var e=t.state;return new f.a(function(t,n){e.is_login=!1,t(),x.a.push({name:"Login"})})},y=function(t,e){return new f.a(function(n,i){(function(t){return Object(h.a)({url:"/api/user/login",method:"post",data:t})})(e).then(function(e){1===e.status?(_.a.set("isLogin",!0),v(t).then(function(){var e,i;n(),Object(g.c)((e=t.state.name,(i=(new Date).getHours())<9?"劳模你好早！":i<11?"早上好！"+e:i<12?"你好 "+e:i<19?"下午好！"+e:i<22?"晚上好！":"劳模注意身体啊！")),x.a.push({path:"/"})}).catch(i)):(_.a.set("isLogin",!1),Object(g.b)(e.message))}).catch(i)})},w=function(t){return new f.a(function(e,n){Object(h.a)({url:"/api/user/logout",method:"get"}).then(function(){Object(g.c)("已登出系统"),_.a.set("isLogin",!1),q(t).then(e).catch(n),x.a.push({path:"/login"})}).catch(n)})},C={namespaced:!0,state:{account:null,name:null,is_login:!1,is_admin:!1},getters:u,mutations:p,actions:i},k=n("Ezjm"),S=n("vg/4"),$=n("O9WA"),z={namespaced:!0,state:{exe_success:!1,ddl_save_check:!1},getters:k,mutations:S,actions:$};o.a.use(s.a);var O=new s.a.Store({modules:{main:l,user:C,home:z}});e.a=O},JsEP:function(t,e){},Kkag:function(t,e,n){"use strict";n.d(e,"a",function(){return l});var i=n("//Fk"),o=n.n(i),s=n("mtWM"),r=n.n(s),a=n("7109"),c=n("YaEn"),l=r.a.create({timeout:6e4});l.interceptors.request.use(function(t){return a.Loading.show({spinner:a.QSpinnerBars,delay:200,customClass:"grey-1",spinnerColor:"white",spinnerSize:70}),t},function(t){return o.a.reject(t)}),l.interceptors.response.use(function(t){a.Loading.hide();var e=t.data;return 1001===e.status||1002===e.status?(c.a.push({path:"/login"}),o.a.reject("error")):t.data},function(t){return a.Loading.hide(),o.a.reject(t)})},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),o={name:"App",mounted:function(){window.onkeydown=function(){112===window.event.keyCode&&(event.returnValue=!1,window.open("","_blank"))}}},s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var r=n("VU/8")(o,s,!1,function(t){n("En7h")},null,null).exports,a=n("YaEn"),c=n("Dd8w"),l=n.n(c),u=n("7109"),p=(n("u6au"),n("hAPP"),n("59Iv"),{sm:{fontSize:"14px",minWidth:"16px",height:"16px",width:"16px"},md:{fontSize:"18px",minWidth:"20px",height:"20px",width:"20px"},lg:{fontSize:"20px",minWidth:"22px",height:"22px",width:"22px"}}),d={name:"iconButton",props:{disable:Boolean,size:{type:String,required:!1,default:"md"},color:{type:String,default:"primary"},select_color:{type:String,default:"primary"},reverse:Boolean,flat:Boolean,round:Boolean},render:function(t){var e=this,n="";return n=this.disable?"cursor-not-allowed text-light":this.reverse?"cursor-pointer text-white bg-"+this.color+" pp-selectable-bg-"+this.select_color:this.flat?"cursor-pointer text-"+this.color+" pp-selectable-color-"+this.select_color:"cursor-pointer text-"+this.color+" pp-selectable-color-white pp-selectable-bg-"+this.select_color,this.round?n+=" pp-radius-round":n+=" pp-radius",t("i",{staticClass:"material-icons non-selectable",class:n,style:l()({padding:"1px"},p[this.size]),on:this.disable?{}:{click:function(){return e.$emit("click")}}},[this.$slots.default])}},f={xs:{fontSize:"12px",minWidth:"14px",height:"14px",width:"14px"},sm:{fontSize:"14px",minWidth:"16px",height:"16px",width:"16px"},md:{fontSize:"18px",minWidth:"20px",height:"20px",width:"20px"},lg:{fontSize:"20px",minWidth:"22px",height:"22px",width:"22px"}},h={name:"clear-btn",props:{disable:Boolean,hide:Boolean,size:{type:String,required:!1,default:"xs"}},render:function(t){var e=this;if(this.hide)return null;var n=this.disable?{class:"cursor-not-allowed"}:{class:"cursor-pointer pp-selectable-bg-grey-6",on:{click:function(t){return e.$emit("click",t)}}};return t("i",l()({staticClass:"material-icons bg-grey-5 text-white pp-radius-round",style:l()({padding:"1px"},f[this.size])},n),"clear")}},m=(u.filter,u.date,n("ESwS")),g=n.n(m),x=(n("gVu1"),n("Chgd"),n("pTlp"),n("X/hd"),n("IcnI")),_=n("//Fk"),v=n.n(_),b=n("ALvQ"),q=n("wvfG"),y=n.n(q),w=n("I0MY"),C=n.n(w);n.d(e,"vm",function(){return S}),i.a.config.productionTip=!1;var k={el:"#app",router:a.a,store:x.a,components:{App:r},template:"<App/>"};[function(t){var e=t.Vue;e.component("pp-icon-btn",d),e.component("pp-clear",h),e.use(u.default,{components:l()({},u),directives:u,plugins:u}),e.prototype.$q.err=function(t,n){e.prototype.$q.notify({message:t,timeout:1e3,type:"negative",position:"top"})},e.prototype.$q.ok=function(t){e.prototype.$q.notify({message:t,timeout:1e3,type:"positive",color:"secondary",position:"top"})},e.prototype.$q.icon.input.dropdown="keyboard_arrow_down"},function(t){t.Vue.use(g.a)},function(t){t.Vue},function(t){var e=t.Vue,n=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{noBackdropDismiss:!0,noEscDismiss:!0},i=document.createElement("div");document.body.appendChild(i),new e({el:i,methods:{close:function(){var t=this;this.$refs.modal.hide(),setTimeout(function(){return t.$destroy()},1e3)}},render:function(e){return e(u.QModal,{ref:"modal",props:l()({contentCss:{minWidth:"300px",maxWidth:"90vw",minHeight:"100px",maxHeight:"90vh"},contentClasses:"column no-wrap font-14 text-dark"},n)},[t?t(e,this):null])},mounted:function(){this.$refs.modal.show()}})};e.prototype.$q.ppDialogBase=n,e.prototype.$q.ppDialog=function(t,e,i,o){return n(function(n,s){return[n("div",{staticClass:"bg-grey-3",style:{height:"40px",borderBottom:"1px solid var(--q-color-grey-5)",borderTopLeftRadius:"5px",borderTopRightRadius:"5px"}},[n("div",{staticClass:"font-16 text-dark flex no-wrap items-center",style:{textAlign:"start",padding:"12px 16px",width:"450px"}},[t?t(n,s):null])]),n("div",{staticClass:"col-grow",style:{overflow:"auto"}},[e?e(n,s):null]),n("div",{staticClass:"row reverse",style:{height:"40px",minHeight:"40px"}},[n("q-btn",{staticClass:"text-faded q-pt-none q-mt-xs q-pb-none q-mb-xs q-mr-sm",style:{minHeight:"32px",height:"32px",fontSize:"13px"},props:{label:"取消",flat:!0,size:"md"},on:{click:function(){o&&o(function(){return s.close()})}}}),n("q-btn",{staticClass:"text-primary q-pt-none q-mt-xs q-pb-none q-mb-xs q-mr-sm",style:{minHeight:"32px",height:"32px",fontSize:"13px"},props:{label:"确定",flat:!0,size:"md"},on:{click:function(){i&&i(function(){return s.close()})}}})])]})},e.prototype.$q.ppAlert=function(t,e,i){return n(function(n,o){return[n("div",{staticClass:"col-grow flex no-wrap scroll",style:{padding:"24px"}},[n("q-icon",{staticClass:"text-amber q-mr-sm ",style:{fontSize:"34px"},props:{name:"error"}}),n("div",{staticClass:"flex no-wrap items-center"},[t?"function"==typeof t?t(n,o):"string"==typeof t?n("div",t):t:null])]),n("div",{staticClass:"pp-separator-5-h"}),n("div",{staticClass:"row reverse",style:{height:"40px",minHeight:"40px"}},[n("q-btn",{staticClass:"text-faded q-pt-none q-mt-xs q-pb-none q-mb-xs q-mr-sm",style:{minHeight:"32px",height:"32px",fontSize:"13px"},props:{label:"取消",flat:!0},on:{click:function(){i&&i(function(){return o.close()})}}}),n("q-btn",{staticClass:"text-primary q-pt-none q-mt-xs q-pb-none q-mb-xs q-mr-sm",style:{minHeight:"32px",height:"32px",fontSize:"13px"},props:{label:"确定",flat:!0},on:{click:function(){e&&e(function(){return o.close()})}}})])]})},e.prototype.$q.ppAlertWithComment=function(t,e,i){return n(function(n,o){var s="";return[n("div",{staticClass:"col-grow flex no-wrap scroll",style:{padding:"24px"}},[n("q-icon",{staticClass:"text-amber q-mr-sm ",style:{fontSize:"34px"},props:{name:"error"}}),n("div",{staticClass:"flex no-wrap items-center"},[t?"function"==typeof t?t(n,o):"string"==typeof t?n("div",t):t:null])]),n("q-input",{staticClass:"text-dark shadow-0 pp-radius-3 pp-border-4 exclude_selectable",style:{minWidth:"400px",margin:"0 32px 32px 32px"},props:{color:"white",type:"textarea",inverted:!0,maxHeight:50,value:s,placeholder:"备注"},on:{input:function(t){return s=t}}}),n("div",{staticClass:"pp-separator-5-h"}),n("div",{staticClass:"row reverse",style:{height:"40px",minHeight:"40px"}},[n("q-btn",{staticClass:"text-faded q-pt-none q-mt-xs q-pb-none q-mb-xs q-mr-sm",style:{minHeight:"32px",height:"32px",fontSize:"13px"},props:{label:"取消",flat:!0},on:{click:function(){i&&i(function(){return o.close()})}}}),n("q-btn",{staticClass:"text-primary q-pt-none q-mt-xs q-pb-none q-mb-xs q-mr-sm",style:{minHeight:"32px",height:"32px",fontSize:"13px"},props:{label:"确定",flat:!0},on:{click:function(){e&&e(function(){o.close(),s=""},s)}}})])]})},e.prototype.$q.ppAlertPromise=function(t,e){return new v.a(function(i,o){return n(function(n,s){return[n("div",{staticClass:"col-grow flex no-wrap scroll",style:{padding:"24px"}},[n("q-icon",{staticClass:"text-amber q-mr-lg ",style:{fontSize:"34px"},props:{name:"error"}}),n("div",{staticClass:"flex no-wrap items-center"},[t?"function"==typeof t?t(n,s):"string"==typeof t?n("div",t):t:null])]),n("div",{staticClass:"row reverse",style:{height:"40px",minHeight:"40px",borderTop:"1px solid var(--q-color-grey-4)"}},[n("q-btn",{staticClass:"text-faded q-pt-none q-mt-xs q-pb-none q-mb-xs q-mr-sm",style:{minHeight:"32px",height:"32px",fontSize:"13px"},props:{label:"取消",flat:!0},on:{click:function(){s.close(),o()}}}),n("q-btn",{staticClass:"text-primary q-pt-none q-mt-xs q-pb-none q-mb-xs q-mr-sm",style:{minHeight:"32px",height:"32px",fontSize:"13px"},props:{label:"确定",flat:!0},on:{click:function(){return e?e().then(function(){return i(s.close)}).catch(function(t){return t&&s.$q.warning(t,3e3)}):i(s.close)}}})])]})})}},b.a,function(t){t.Vue.use(y.a)},function(t){t.Vue.use(C.a)}].forEach(function(t){return t({app:k,router:a.a,store:x.a,Vue:i.a})});var S=new i.a(k)},NMxl:function(t,e){},O9WA:function(t,e){},Oi9O:function(t,e){},StD2:function(t,e){},UY6v:function(t,e){},"X/hd":function(t,e){},Y6x7:function(t,e){},YaEn:function(t,e,n){"use strict";var i=n("7+uW"),o=n("/ocq"),s=[{label:"终端",to:"/index",icon:"mdi-console"},{label:"历史",to:"/history",icon:"history"},{label:"统计",to:"/statistics",icon:"bar_chart"}],r={name:"left-menu-item",components:{},props:{to:String,icon:String,label:String,sublabel:String}},a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-item",{attrs:{to:t.to}},[n("q-item-side",{attrs:{icon:t.icon}},[n("q-tooltip",{staticClass:"font-md q-pa-sm",attrs:{self:"center left",anchor:"center right",offset:[18,0]}},[t._v("\n      "+t._s(t.label)+"\n    ")])],1),t._v(" "),n("q-item-main",{attrs:{label:t.label,sublabel:t.sublabel}})],1)},staticRenderFns:[]},c=n("VU/8")(r,a,!1,null,null,null).exports,l={name:"left-menu",components:{QToolbarTitle:n("aCQV").a,LeftMenuItem:c},data:function(){return{left_menu_data:s}},computed:{menu_data:function(){try{return s}catch(t){return s}}}},u={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-list",{staticClass:"no-scroll pp-qlist",attrs:{"no-border":"",highlight:""}},t._l(t.menu_data,function(e){return n(e.children&&e.children.length>0?"q-collapsible":"left-menu-item",t._b({key:e.label,tag:"component",attrs:{indent:"",unread:""}},"component",e,!1),[e.children&&e.children.length>0?n("q-list",{attrs:{"no-border":""}},t._l(e.children,function(e){return n("left-menu-item",t._b({key:e.label},"left-menu-item",e,!1))}),1):t._e()],1)}),1)},staticRenderFns:[]};var p=n("VU/8")(l,u,!1,function(t){n("q6+Q")},"data-v-1ffe2b8e",null).exports,d={},f={name:"header-menu",mixins:[{components:{},computed:{routeComp:function(){return d[this.$route.path]}}}],components:{},props:{defaultMiniMenu:!1},data:function(){return{icoUrl:"../../static/superman.ico"}},computed:{showMenu:function(){return this.$store.state.main.show_menu},userName:function(){return this.$store.state.user.name},isAdmin:function(){return this.$store.state.user.is_admin}},methods:{clickShowMenu:function(){this.$store.state.main.show_menu=!this.showMenu},user_info_btn_click:function(){this.userName||this.$router.push({path:"/login"})},user_info_btn_tip:function(){return this.userName?"欢迎，"+this.userName:"登录"},logOut:function(){this.$store.dispatch("user/logout").then().catch()},navigate_to_csdn:function(){window.open("https://blog.csdn.net/a787373009/category_9717949.html","_blank")}}},h={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("q-toolbar",{staticStyle:{"max-height":"50px"}},[n("q-icon",{attrs:{size:"30px",name:"mdi-medium"}}),t._v(" "),n("span",{staticClass:"q-ml-md q-mr-md text-weight-bold"},[t._v("数据库在线管理平台")]),t._v(" "),t._l(t.routeComp,function(e,i){return t.routeComp?n(e.is,t._g(t._b({key:i,tag:"component",class:e.class,style:e.style},"component",e.vBind,!1),e.vOn)):t._e()}),t._v(" "),n("div",{staticClass:"absolute-right"},[n("q-btn",{staticClass:"full-height shadow-0",staticStyle:{padding:"4px"},attrs:{size:"24px",icon:"account_circle"},nativeOn:{click:function(e){return t.user_info_btn_click(e)}}},[n("q-tooltip",{attrs:{offset:[5,5]}},[t._v(t._s(t.user_info_btn_tip()))])],1),t._v(" "),n("q-btn",{staticClass:"shadow-0 full-height",staticStyle:{padding:"4px"},attrs:{icon:"settings",size:"14px"},nativeOn:{click:function(e){return t.$router.push("/config/system_config")}}},[n("q-tooltip",{attrs:{offset:[5,5]}},[t._v("配置")])],1),t._v(" "),n("q-btn",{staticClass:"full-height",staticStyle:{padding:"4px"},attrs:{icon:"help_outline",flat:"",size:"14px"},on:{click:t.navigate_to_csdn}},[n("q-tooltip",{attrs:{offset:[5,5]}},[t._v("使用手册(或按F1查看)")])],1),t._v(" "),n("q-btn",{staticClass:"full-height",staticStyle:{padding:"4px"},attrs:{size:"14px",flat:"",icon:"exit_to_app"},on:{click:t.logOut}},[n("q-tooltip",{attrs:{offset:[5,5]}},[t._v("退出")])],1)],1)],2)],1)},staticRenderFns:[]};var m=n("VU/8")(f,h,!1,function(t){n("NMxl")},"data-v-3040824e",null).exports,g={render:function(){var t=this.$createElement;return(this._self._c||t)("div")},staticRenderFns:[]};var x=n("VU/8")({name:"footer-menu"},g,!1,function(t){n("a8Ei")},"data-v-33099884",null).exports,_={name:"header-menu",mixins:[],components:{},props:{defaultMiniMenu:!1},data:function(){return{}},computed:{showMenu:function(){return this.$store.state.main.show_menu},userName:function(){return this.$store.state.user.name},isAdmin:function(){return this.$store.state.user.is_admin}},methods:{clickShowMenu:function(){this.$store.state.main.show_menu=!this.showMenu},user_info_btn_click:function(){this.userName||this.$router.push({path:"/login"})},user_info_btn_tip:function(){return this.userName?"欢迎，"+this.userName:"登录"},logOut:function(){this.$store.dispatch("user/logout").then().catch()},back:function(){this.$router.back()},navigate_to_csdn:function(){window.open("https://blog.csdn.net/a787373009/category_9717949.html","_blank")}}},v={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("q-toolbar",{staticStyle:{"max-height":"50px"}},[n("q-icon",{attrs:{size:"30px",name:"track_changes"}}),t._v(" "),n("span",{staticClass:"q-ml-md"},[t._v("系统配置管理")]),t._v(" "),n("div",{staticClass:"absolute-right"},[n("q-btn",{staticClass:"no-shadow full-height",staticStyle:{padding:"4px"},attrs:{size:"14px",icon:"reply"},nativeOn:{click:function(e){return t.back(e)}}},[n("q-tooltip",{attrs:{offset:[5,5]}},[t._v("返回")])],1),t._v(" "),n("q-btn",{staticClass:"full-height shadow-0",attrs:{size:"24px",icon:"account_circle"},nativeOn:{click:function(e){return t.user_info_btn_click(e)}}},[n("q-tooltip",{attrs:{offset:[5,5]}},[t._v(t._s(t.user_info_btn_tip()))])],1),t._v(" "),n("q-btn",{staticClass:"full-height",staticStyle:{padding:"4px"},attrs:{icon:"help_outline",flat:"",size:"14px"},on:{click:t.navigate_to_csdn}},[n("q-tooltip",{attrs:{offset:[5,5]}},[t._v("使用手册(或按F1查看)")])],1),t._v(" "),n("q-btn",{staticClass:"full-height",staticStyle:{padding:"4px"},attrs:{size:"14px",flat:"",icon:"exit_to_app"},on:{click:t.logOut}},[n("q-tooltip",{attrs:{offset:[5,5]}},[t._v("退出")])],1)],1)],1)],1)},staticRenderFns:[]};var b=[{path:"",component:function(){return n.e(6).then(n.bind(null,"rASM"))},children:[{path:"/",components:{left:p,header:m,footer:x,page:function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"pqMM"))}},meta:{title:"DMS-给你一个权限可控、记录可追踪的WEB版数据库管理平台！"}},{path:"/index",components:{left:p,header:m,footer:x,page:function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"pqMM"))}},meta:{title:"DMS-给你一个权限可控、记录可追踪的WEB版数据库管理平台！"}},{path:"/history",components:{left:p,header:m,footer:x,page:function(){return Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"XXMX"))}},meta:{title:"DMS-历史记录！"}},{path:"/statistics",components:{left:p,header:m,footer:x,page:function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"0AGx"))}},meta:{title:"DMS-统计信息！"}}]},{path:"/login",component:function(){return n.e(8).then(n.bind(null,"usuo"))},meta:{title:"DMS-登录页面！"}},{path:"/register",component:function(){return n.e(7).then(n.bind(null,"l8NP"))},meta:{title:"DMS-注册页面！"}},{path:"",component:function(){return n.e(5).then(n.bind(null,"K+KP"))},children:[{path:"/config/system_config",components:{header:n("VU/8")(_,v,!1,function(t){n("Oi9O")},"data-v-1ce2621f",null).exports,footer:x,page:function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"Fi8O"))}},meta:{title:"DMS-配置管理！"}}]}],q=n("GsBR"),y=n("ui1U");i.a.use(o.a);var w=new o.a({mode:"hash",base:"/",routes:b});w.beforeEach(function(t,e,n){if(t.meta.title&&(document.title=t.meta.title),y.a.get("isLogin")){if(C.path&&"/login"===e.path){var i=Object(q.a)(!0,{},C);C.path=C.query=C.params=null,"/login"!==i.path&&"/register"!==t.path?n(i):n()}}else!function(t,e,n){y.a.get("isLogin")||"/login"===t.path||"/register"===t.path||(C.path=C.path||t.path,C.query=C.query||t.query,C.params=C.params||t.params,n("/login"))}(t,0,n);n()});e.a=w;var C={}},a8Ei:function(t,e){},gVu1:function(t,e){},nMzE:function(t,e){},pTlp:function(t,e){},"q6+Q":function(t,e){},sRpY:function(t,e){},stYp:function(t,e){},u6au:function(t,e){},ui1U:function(t,e,n){"use strict";var i=n("mvHQ"),o=n.n(i);e.a={get:function(t){var e=window.localStorage.getItem(t);return e?function(t){var e,n;if(t.length<9)return t;switch(e=t.substr(0,8),n=t.substring(9),e){case"__q_date":return new Date(n);case"__q_expr":return new RegExp(n);case"__q_numb":return Number(n);case"__q_bool":return Boolean("1"===n);case"__q_strn":return""+n;case"__q_objt":return JSON.parse(n);default:return t}}(e):null},set:function(t,e){window.localStorage.setItem(t,function(t){return"[object Date]"===Object.prototype.toString.call(t)?"__q_date|"+t.toUTCString():"[object RegExp]"===Object.prototype.toString.call(t)?"__q_expr|"+t.source:"number"==typeof t?"__q_numb|"+t:"boolean"==typeof t?"__q_bool|"+(t?"1":"0"):"string"==typeof t?"__q_strn|"+t:"function"==typeof t?"__q_strn|"+t.toString():t===Object(t)?"__q_objt|"+o()(t):t}(e))},remove:function(t){window.localStorage.removeItem(t)}}},uoZE:function(t,e,n){"use strict";e.a=function(){return Object(i.a)({url:"/api/user/info",method:"get"})},e.b=function(t){var e={kw:t};return Object(i.a)({url:"/api/user/_search",method:"get",params:e})};var i=n("Kkag")},"vg/4":function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.efe01cc3dc95d8a05618.js.map