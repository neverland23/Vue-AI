(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3a0dbb0a"],{5213:function(t,e,s){t.exports=s.p+"img/logo-mini.d12730fc.png"},cc42:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"login"},[s("div",{staticClass:"container-scroller"},[s("div",{staticClass:"container-fluid page-body-wrapper full-page-wrapper"},[s("div",{staticClass:"content-wrapper d-flex align-items-center auth"},[s("div",{staticClass:"row w-100 flex-grow"},[s("div",{staticClass:"col-xl-4 col-lg-6 mx-auto dashb-container"},[s("div",{staticClass:"auth-form-light text-left p-5"},[t._m(0),t.processing?s("div",{staticClass:"text-center"},[s("b-spinner",{attrs:{variant:"primary",label:"Text Centered"}})],1):t._e(),t.processing?t._e():s("div",{staticClass:"dashb-fix"},[s("h4",[t._v("Email Confirmation...")]),t.infoMessage?s("p",{staticClass:"lead"},[t._v(" "+t._s(t.infoMessage)+" ")]):t._e(),t.errorMessage?s("p",{staticClass:"lead text-danger"},[t._v(" "+t._s(t.errorMessage)+" ")]):t._e(),s("hr",{staticClass:"my-4"}),s("p",[t._v("Continue to your projects.")]),s("router-link",{staticClass:"btn btn-block btn-HelloScribe btn-lg font-weight-medium auth-form-btn btn-danger",attrs:{to:{name:t.$routerItems.EXPLORER_PROJECTS}}},[t._v(" Projects ")])],1)])])])])])])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"brand-logo"},[a("img",{attrs:{src:s("5213")}})])}],n=s("aaee"),r=s("b012"),o=s("c0dc"),c={name:"emailconfirmation",data(){return{processing:!0,infoMessage:"",errorMessage:""}},methods:{init(){const t=r["i"](),e=this.$route.params.token;t?(console.log("not loggedin"),this.$router.push({name:n["a"].DASHBOARD})):Object(o["a"])().get("/auth/email/confirm/"+e).then(function(t){t&&(this.processing=!1,this.infoMessage=t.data.message,r["o"](t.data.user),this.$store.dispatch("authenticate"))}.bind(this)).catch(function(t){t.response&&(this.processing=!1,this.errorMessage=t.response.data.message)}.bind(this))}},mounted(){this.init()}},l=c,d=s("2877"),g=Object(d["a"])(l,a,i,!1,null,null,null);e["default"]=g.exports}}]);
//# sourceMappingURL=chunk-3a0dbb0a.5db4d3c7.js.map