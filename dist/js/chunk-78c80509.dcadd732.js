(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-78c80509"],{"106e":function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[e.subscribed?s("p",{staticClass:"alert-profile-tag pt-5 pb-5"}):s("p",{staticClass:"alert-profile-tag pt-5 pb-5"},[e._v(" Your free trial has expired. Need more? "),s("a",{staticStyle:{color:"#E91E63","text-decoration":"underline",cursor:"pointer"},on:{click:e.onUpgrade}},[e._v("Upgrade now!")])])])},i=[],r={name:"Header",data(){return{subscribed:this.$store.state.subscribed}},methods:{onUpgrade(){this.$router.push({name:this.$routerItems.UPGRADE})}}},l=r,n=s("2877"),o=Object(n["a"])(l,a,i,!1,null,null,null);t["a"]=o.exports},"2e10":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("section",{staticClass:"profile mb-4"},[s("Header"),s("div",{staticClass:"profilecenterbox"},[s("div",{staticClass:"profilemenutabs text-center"},[s("Breadcrumb")],1),s("div",{staticClass:"grid-margin stretch-card mb-0"},[s("div",{staticClass:"card border-0"},[s("div",{staticClass:"card-body pl-0 pr-0 pb-0"},[s("form",{staticClass:"forms-sample",attrs:{enctype:"multipart/form-data"},on:{submit:function(t){return t.preventDefault(),e.onSubmit.apply(null,arguments)}}},[s("div",{staticClass:"image-profile mb-4"},[s("img",{staticClass:"\n                              rounded-circle\n                              z-depth-1-half\n                              avatar-pic\n                              mb-2\n                            ",attrs:{src:e.profileImgPath(),alt:"example placeholder avatar",width:"80px"}}),s("b-form-file",{staticClass:"btn btn-mdb-color btn-rounded p-0 mb-4",attrs:{type:"file"},on:{change:e.onFileChange},model:{value:e.selectedFile,callback:function(t){e.selectedFile=t},expression:"selectedFile"}})],1),s("b-form-group",{attrs:{label:"Name","label-for":"input5"}},[s("b-form-input",{class:{"is-invalid":e.submitted&&e.$v.username.$error},attrs:{type:"text",id:"input5",placeholder:"Name"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}})],1),s("b-form-group",{attrs:{label:"Email address","label-for":"input6"}},[s("b-form-input",{attrs:{disabled:!0,type:"email",id:"input6",placeholder:"Email"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),s("button",{staticClass:"btn btn-primary btn-icon-text",attrs:{type:"submit"}},[e._v(" Save ")]),s("div",[e.errorMessage?s("span",{staticClass:"text-danger"},[e._v(e._s(e.errorMessage))]):e._e()])],1)])])])])],1)])},i=[],r=s("aef1"),l=s("c0dc"),n=s("b012"),o=s("b5ae"),c=s("2f62"),u=s("106e"),d={name:"account",components:{Breadcrumb:r["a"],Header:u["a"]},data(){return{imgProfile:"",selectedFile:null,selectedFileUrl:null,username:"",email:"",errorMessage:null,infoMessage:null,submitted:!1}},validations:{username:{minLength:Object(o["maxLength"])(15),required:o["required"]}},methods:{onSubmit:async function(){if(this.submitted=!0,this.$v.$touch(),this.$v.$invalid)return;let e=new FormData;const t=this.selectedFile;if(t){const s=["image/jpeg","image/png","image/gif"],a=2e5,i=t.size>a;if(!s.includes(t.type)||i)return void(this.errorMessage=i?`Too large. Max size is ${a/1e3}kb`:"Only images are allowed");this.selectedFile=t,this.errorMessage=null,e.append("file",t,t.name),e.append("username",this.username),e.append("email",this.email)}else e.append("username",this.username),e.append("email",this.email);const s=this.userInfo.accountId;await Object(l["a"])().put("/user/"+s,e).then(function(e){e&&(n["p"](e.data.user),this.$swal.fire({position:"top-end",icon:"success",title:e.data.message,showConfirmButton:!1,timer:2e3}))}.bind(this)).catch(function(e){e.response&&(this.errorMessage=e.response.data.message,this.$swal.fire({position:"top-end",icon:"error",title:e.response.data.message,showConfirmButton:!1,timer:2e3}))}.bind(this))},onFileChange(e){const t=e.target.files[0];this.selectedFile=t,this.selectedFileUrl=URL.createObjectURL(t)},profileImgPath:function(){return this.imgProfile?this.imgProfile:s("bf53")}},mounted(){this.imgProfile=this.userInfo.imgProfile,this.email=this.userInfo.email,this.username=this.userInfo.username},computed:{...Object(c["c"])({userInfo:"getCurrentUser"})}},m=d,p=s("2877"),f=Object(p["a"])(m,a,i,!1,null,null,null);t["default"]=f.exports},aef1:function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"iq-card"},[s("div",{staticClass:"iq-card-body p-0"},[s("div",{staticClass:"iq-edit-list"},[s("ul",{staticClass:"iq-edit-profile d-flex nav nav-pills"},[s("li",{staticClass:"col-md-3 p-0"},[s("router-link",{staticClass:"nav-link",attrs:{to:{name:e.$routerItems.ACCOUNT},"exact-active-class":"exact-active"}},[e._v(" Personal Info. ")])],1),s("li",{staticClass:"col-md-3 p-0"},[s("router-link",{staticClass:"nav-link",attrs:{to:{name:e.$routerItems.PASSWORD},"exact-active-class":"exact-active"}},[e._v("Password")])],1),s("li",{staticClass:"col-md-3 p-0"},[s("router-link",{staticClass:"nav-link",attrs:{to:{name:e.$routerItems.TEAM},"exact-active-class":"exact-active"}},[e._v("Team")])],1),s("li",{staticClass:"col-md-3 p-0"},[s("router-link",{staticClass:"nav-link",attrs:{to:{name:e.$routerItems.BILLING},"exact-active-class":"exact-active"}},[e._v("Billing")])],1)])])])])])},i=[],r={name:"breadcrumb",data(){return{role:this.$store.state.role}},methods:{},components:{}},l=r,n=s("2877"),o=Object(n["a"])(l,a,i,!1,null,null,null);t["a"]=o.exports}}]);
//# sourceMappingURL=chunk-78c80509.dcadd732.js.map