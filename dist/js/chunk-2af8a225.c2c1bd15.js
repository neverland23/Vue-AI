(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2af8a225"],{"0880":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid"},[a("writing-toolbar",{ref:"writing_toolbar",attrs:{baseData:t.baseData,answers:t.summaries,past_answers:t.past_summaries,tool_type:t.tool_type},on:{download_results:t.download_results}}),a("div",{staticClass:"pad-eq30"},[a("div",{staticClass:"row"},[a("div",{staticClass:"centertoolsbox mb-4"},[a("summary-form",{attrs:{base_data:t.baseData},on:{generated:t.generateSummary}})],1)]),a("div",{staticClass:"row"},[a("div",{staticClass:"answers-container"},[t._l(t.past_summaries,(function(e,s){return a("div",{key:"past"+s,staticClass:"mb-4 newboxed-notes card"},[a("div",{staticClass:"answer-item"},[a("div",{staticClass:"item-title mb-3"},[a("resizable-editor",{model:{value:e.text,callback:function(a){t.$set(e,"text",a)},expression:"item.text"}})],1),a("generator-tools",{attrs:{adding:e.adding,copied:e.copied,added:e.added,saving:e.saving,loading:e.loading},on:{add:function(a){return t.addToNotes(e)},save:function(a){return t.saveAnswer(e)},copy:function(a){return t.copyAnswer(e)},remove:function(e){return t.removeItem_past(s)},generate_similar:function(a){return t.generate_similar(e)}}})],1)])})),t._l(t.summaries,(function(e,s){return a("div",{key:s,staticClass:"mb-4 newboxed-notes card"},[a("div",{staticClass:"summary-item"},[a("div",{staticClass:"item-title mb-3"},[a("resizable-editor",{model:{value:e.text,callback:function(a){t.$set(e,"text",a)},expression:"item.text"}})],1),a("generator-tools",{attrs:{adding:e.adding,copied:e.copied,added:e.added,saving:e.saving,loading:e.loading},on:{add:function(a){return t.addToNotes(e)},save:function(a){return t.saveSummary(e)},copy:function(a){return t.copySummary(e)},remove:function(e){return t.removeItem(s)},generate_similar:function(a){return t.generate_similar(e)}}})],1)])}))],2)]),t.summaries.length>0?a("div",{staticClass:"row"},[a("div",{staticClass:"fluidbtns mt-3"},[a("b-button",{attrs:{pill:"",variant:"outline-danger",disabled:t.loading},on:{click:function(e){return t.refreshSummary()}}},[t.loading?a("b-spinner",{staticClass:"mr-2",attrs:{small:"",label:"Spinning"}}):t._e(),t._v(" GIVE ME MORE ")],1)],1)]):t._e()])],1)},i=[],o=a("153b"),n=a("4c1c"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-form",[a("div",{staticClass:"row quote-form"},[a("div",{staticClass:"col-1 text-center pl-0"},[a("span",{staticClass:"formcount-no"},[t._v("1")])]),a("div",{staticClass:"col-11"},[a("b-form-group",{attrs:{label:"Select a Tool"}},[a("span",{staticClass:"toolavail"},[t._v("Available tools: 17")]),a("b-form-select",{staticClass:"form-control",attrs:{options:t.summaryTypes},model:{value:t.form.type,callback:function(e){t.$set(t.form,"type",e)},expression:"form.type"}})],1)],1),a("div",{staticClass:"col-1 text-center pl-0"},[a("span",{staticClass:"formcount-no"},[t._v("2")])]),a("div",{staticClass:"col-11"},[a("b-form-group",{attrs:{label:"Describe what you want:"}},[a("b-form-textarea",{attrs:{placeholder:t.placeholders[t.form.type],rows:"6"},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}}),a("div",{staticClass:"text-right"},[a("small",{class:{"text-danger":t.form.description.length>=t.limit}},[t._v(t._s(t.form.description.length)+"/"+t._s(t.limit)+" characters")])])],1)],1)]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-1"}),a("div",{staticClass:"col-11"},[a("div",{staticClass:"d-flex align-items-center flex-column fluuidd-btn"},[a("b-button",{staticClass:"mt-3",attrs:{pill:"",size:"lg",variant:"danger",disabled:t.loading||!t.form.type||!t.form.description},on:{click:t.onSubmit}},[t.loading?a("b-spinner",{staticClass:"mr-2",attrs:{small:"",label:"Spinning"}}):t._e(),t._v(" GENERATE")],1),t.loading?a("div",{staticClass:"text-small mt-2 text-helper"},[t._v(" Making Magic✨ ")]):t._e()],1)])])])},l=[],c=a("48f7"),u=a("c0dc"),d={name:"SummaryForm",props:["base_data"],data(){return{form:{type:c["a"].BLOG_INTRO,description:""},SUMMARY_TYPES:c["b"],summaryTypes:Object.keys(c["b"]).map(t=>({text:c["b"][t],value:t})),placeholders:c["c"],loading:!1,limit:1e3}},methods:{async onSubmit(){this.loading=!0,this.form["source_lang"]=this.$store.state.input_language,this.form["target_lang"]=this.$store.state.output_language;try{const{data:{results:t}}=await Object(u["a"])().post("/doc/generate-summary",this.form);this.$emit("generated",{results:t,baseData:{...this.form}})}catch(t){}this.loading=!1},onReset(){this.form.companyName="",this.form.description="",this.show=!1,this.$nextTick(()=>{this.show=!0})}},watch:{"form.description"(t,e){t.length>this.limit&&this.$nextTick(()=>{this.form.description=e})}},beforeMount(){this.base_data&&(this.form=this.base_data)}},A=d,m=(a("fe04"),a("2877")),g=Object(m["a"])(A,r,l,!1,null,"521da833",null),p=g.exports,h=a("4be5"),f=a("cf45"),b=a("6ca3"),_=a("5acc"),v={name:"Summary",data(){return{summaries:[],baseData:null,selectedSummaryIdx:0,loading:!1,project_id:null,selected_folder:"",file:null,past_summaries:[],tool_type:_["e"].SUMMARY}},components:{SummaryForm:p,ResizableEditor:n["a"],GeneratorTools:o["a"],WritingToolbar:b["a"]},beforeMount(){this.$route.params&&(this.project_id=this.$route.params.project_id?this.$route.params.project_id:null,this.selected_folder=this.$route.params.selected_folder?this.$route.params.selected_folder:"",this.file=this.$route.params.file?this.$route.params.file:null),this.file&&(this.project_id=this.file.project_id,this.past_summaries=this.file.contents,this.baseData=this.file.base_data,this.save_flag="update")},methods:{async addToNotes(t){t.adding=!0,t.added=!1;try{const{data:{note:e}}=await h["a"].addNote({slug:this.baseData.description,baseData:this.baseData,category:"Summary",text:t.text,authors:"",url:"",year:"",publishedAt:(new Date).toLocaleDateString()});this.$root.$emit("generatedNote",e),t.added=!0}catch{}t.adding=!1},async refreshSummary(t){if(!this.loading){this.loading=!0;try{const{data:{results:e}}=await Object(u["a"])().post("/doc/generate-summary",{...this.baseData,new_model:t?t.answer:void 0});t&&(t.loading=!1),this.summaries=[...this.summaries,...e.map(t=>({...t,saved:!1,copied:!1,added:!1,saving:!1,adding:!1}))]}catch(e){}this.loading=!1}},generateSummary({results:t,baseData:e}){this.summaries=t.map(t=>({...t,saved:!1,copied:!1,added:!1,saving:!1,adding:!1})),this.baseData=e},removeItem(t){this.summaries.splice(t,1)},removeItem_past(t){this.past_summaries.splice(t,1)},generate_similar(t){t.loading=!0,this.refreshSummary(t)},downloadSummary(t){Object(f["c"])(t,"Generated Summary")},async saveSummary(t){t.saving=!0;try{await Object(u["a"])().post("/summary",{text:t.text,baseData:this.baseData}),t.saved=!0}catch(e){}t.saving=!1},copySummary(t){Object(f["a"])(t.text),t.copied=!0},download_results(){let t=[...this.past_summaries,...this.summaries];t=t.map(t=>t["text"]?'"'+t["text"]+'"\n':"");let e=this.tool_type+"_"+this.$refs.writing_toolbar.file_name;Object(f["d"])(t,e)}}},y=v,E=(a("ce0e"),Object(m["a"])(y,s,i,!1,null,"e6d7d3aa",null));e["default"]=E.exports},"0dcc":function(t,e,a){},"147b":function(t,e,a){"use strict";a("2b49")},"153b":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"d-flex"},[t.hideSave?t._e():s("b-button",{staticClass:"d-flex align-items-center mr-4 py-2",attrs:{disabled:t.saving,variant:"outline-primary"},on:{click:t.save}},[s("span",{staticClass:"material-icons-outlined mr-1"},[t._v(" save ")]),t._v(" Save ")]),s("b-button",{staticClass:"d-flex align-items-center mr-4 py-2",attrs:{variant:"outline-primary"},on:{click:t.copy}},[s("img",{attrs:{src:a("372e")}}),t._v(" "+t._s(t.copied?"Copied":"Copy")+" "),t.copied?s("span",{staticClass:"material-icons-outlined ml-1 text-success"},[t._v(" done ")]):t._e()]),t.hideNote?t._e():s("b-button",{staticClass:"d-flex align-items-center mr-4 py-2",attrs:{disabled:t.adding,variant:"outline-primary"},on:{click:t.add}},[s("img",{attrs:{src:a("7a34")}}),t._v(" "+t._s(t.added?"Saved":"Save to Notes")+" "),t.added?s("span",{staticClass:"material-icons-outlined ml-1 text-success"},[t._v(" done ")]):t._e()]),s("b-button",{staticClass:"d-flex align-items-center mr-4 py-2",attrs:{variant:"outline-primary"},on:{click:t.generate_similar}},[t.loading?s("b-spinner",{staticClass:"mr-2",attrs:{small:"",label:"Spinning"}}):s("img",{staticStyle:{"margin-right":"8px"},attrs:{src:a("467d")}}),t._v(" Similar ")],1),s("b-button",{staticClass:"d-flex align-items-center mr-2 py-2",attrs:{disabled:t.deleting,variant:"outline-primary"},on:{click:t.remove}},[s("img",{attrs:{src:a("44ee")}}),t._v(" Remove ")])],1)},i=[],o={name:"GeneratorTools",props:{adding:{type:Boolean,default:!1},added:{type:Boolean,default:!1},copied:{type:Boolean,default:!1},hideSave:{type:Boolean,default:!0},hideNote:{type:Boolean,default:!1},saving:{type:Boolean,default:!1},deleting:{type:Boolean,default:!1},loading:{type:Boolean,default:!1}},methods:{add(){this.$emit("add")},save(){this.$emit("save")},copy(){this.$emit("copy")},remove(){this.$bvModal.msgBoxConfirm("Do you want to delete this item?",{title:"Please Confirm",size:"sm",buttonSize:"sm",okVariant:"danger",okTitle:"YES",cancelTitle:"NO",cancelVariant:"primary",footerClass:"p-2",hideHeaderClose:!1,centered:!0}).then(t=>{t&&this.$emit("remove")}).catch(t=>{})},generate_similar(){console.log(this.loading),this.$emit("generate_similar")}}},n=o,r=(a("147b"),a("2877")),l=Object(r["a"])(n,s,i,!1,null,"832d99da",null);e["a"]=l.exports},"2b49":function(t,e,a){},"467d":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAUCAMAAACK2/weAAAAolBMVEUAAAAAAAAAAABAAEAkACQgACAcABwuAC4rACspCikkCSQpCCkoBygrBSsqCSonCCcpByknBycpBikpCCkoCCgnBycpBykpBykoBygpByknBycnBicoBigoBygoBygnBycnBycoBigpCCkoBygnBycoBygoBygoBygoBigoBygoBygoBygoBygoBygoBygoBygoBygoBygoBygoBygoByj///8qjhcOAAAANHRSTlMAAQMEBwgJCwwZHB8mMDdBSk5QXWVpamtscXV8fouSlZyeqq2vtLrEx9DU6Onq9vf6+/z9RHwUowAAAAFiS0dENd622WsAAACYSURBVBgZRcGJFkJAAAXQRygVKm32pmVQifL+/9tyynAvlOnexMiQdDDQz2xMKJrgq8QgYfQ8QYmZLrhD70ihbejiz28vOgLeQxud9VsagLXN+bmt4NXFDD/LjBUqZkv8zIraw+r2Yb61AEO+1+jY4Z0B9Evr48/lRhM8onfgPGEERTxiphiULwoNitnwOsHAoTQwMvdT9L6NCQ6Z8HM6LAAAAABJRU5ErkJggg=="},"48f7":function(t,e,a){"use strict";a.d(e,"a",(function(){return v})),a.d(e,"b",(function(){return y})),a.d(e,"c",(function(){return E}));const s="proposal-intro",i="proposal-summary",o="creative-rationale",n="simplify",r="speech-intro",l="blog-intro",c="blog-outline",u="essay-intro",d="essay-outline",A="logline",m="blurb",g="conclusion",p="plot-summary",h="character-sketch",f="freestyle",b="reframer",_="bullet-point",v={SPEECH_INTRO:r,PROPOSAL_INTRO:s,PROPOSAL_SUMMARY:i,CREATIVE_RATIONALE:o,SIMPLIFY:n,BLOG_INTRO:l,BLOG_OUTLINE:c,ESSAY_INTRO:u,ESSAY_OUTLINE:d,LOGLINE:A,BLURB:m,CONCLUSION:g,PLOT_SUMMARY:p,CHARACTER_SKETCH:h,FREESTYLE:f,REFRAMER:b,BULLET_POINT:_},y={[c]:"Outline",[l]:"Introduction",[_]:"Bullet Points",[f]:"Paragraph",[g]:"Conclusion",[m]:"Blurb",[h]:"Character Sketch",[o]:"Creative Rationale",[g]:"Conclusion",[u]:"Essay Intro",[d]:"Essay Outline",[A]:"Logline",[p]:"Plot Summary",[s]:"Proposal Intro",[i]:"Proposal Summary",[n]:"Simplify",[r]:"Speech Intro",[b]:"Reframe"},E={[c]:"Give me an outline for {e.g AN ARTICLE ABOUT THE IMPORTANCE OF DREAMING BIG}",[l]:"Give me an introduction for {e.g. AN ARTICLE ABOUT DREAMING BIG}. The tone should be {e.g. POSITIVE}",[f]:"Give me a paragraph about {e.g. THE BENEFITS OF DREAMING BIG}",[g]:"Give me a conclusion for {e.g. AN ARTICLE ABOUT DREAMING BIG}",[r]:"Give me a speech about {e.g HOW TO ACTIVATE YOUR DREAMS}",[s]:"Give me a intro for a proposal about {e.g. COMMERCIALIZING THE IDEA OF DREAMING BIG}",[i]:"Give me a proposal summary outlining {e.g. A BETTER WAY TO DREAM BIG}",[o]:"Give me a creative rationale for { e.g A CAMPAIGN ABOUT DREAMING BIG}",[h]:"Give me a character in a story about {e.g. A DREAM DEFERRED}",[n]:"Give me a simple way to explain {e.g. NUCLEAR FISSION SO THAT A 5-YEAR OLD WILL UNDERSTAND}",[u]:'Give me an essay intro about {e.g. THE PLAY "A RAISIN IN THE SUN"}',[d]:'Give me an outline for an essay about { e.g. THE PLAY "A RAISIN IN THE SUN"}',[A]:"Give me a logline for a film about {e.g. THE GIRL WHO DARED TO DREAM BIG} ",[m]:"Give me a blurb for a book about {e.g. DREAMING BIG}",[p]:"Give me a plot for a story about {e.g. A DREAM DEFERRED}",[b]:"Give me a way to reframe {e.g. AN ARGUMENT AGAINST THE IMPORTANCE OF DREAMING BIG}",[_]:"Give me bullet points for {e.g. A PRESENTATION ABOUT THE IMPORTANCE OF DREAMING BIG}"}},"54f0":function(t,e,a){"use strict";a.d(e,"a",(function(){return r})),a.d(e,"b",(function(){return l}));const s="none",i="In-Progress",o="For-Review",n="Completed",r={NONE:s,INPROGRESS:i,FORREVIEW:o,COMPLETED:n},l={[s]:"Assign Status",[i]:"In Progress",[o]:"For Review",[n]:"Completed"}},"5d00":function(t,e,a){},"6ca3":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row"},[s("div",{staticClass:"\n                d-flex\n                justify-content-between\n                w-100\n                pad-30\n                bg-white\n                fix-sticky\n            "},[s("div",{staticClass:"left-tools-info"},[s("img",{staticStyle:{point:"cusor"},attrs:{src:a("6eba")},on:{click:t.back_clicked}}),s("h4",[t._v(t._s(t.tool_type))]),s("select",{directives:[{name:"model",rawName:"v-model",value:t.status,expression:"status"}],staticClass:"custom-select",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.status=e.target.multiple?a:a[0]}}},t._l(t.statusList,(function(e,a){return s("option",{key:a,domProps:{value:e}},[t._v(" "+t._s(t.statusLabelList[e])+" ")])})),0),s("select",{directives:[{name:"model",rawName:"v-model",value:t.assigned_user,expression:"assigned_user"}],staticClass:"custom-select",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.assigned_user=e.target.multiple?a:a[0]}}},[s("option",{attrs:{value:"none"}},[t._v("Assign to")]),t._l(t.team_members,(function(e,a){return s("option",{key:a,domProps:{value:e.user._id}},[t._v(" "+t._s(e.user.username)+" ")])}))],2)]),s("div",{staticClass:"center-input"},[s("b-form-input",{attrs:{placeholder:"Save File As",size:"lg"},model:{value:t.file_name,callback:function(e){t.file_name=e},expression:"file_name"}})],1),s("div",{staticClass:"right-tools-info"},[s("div",{staticClass:"tutorial-tool",staticStyle:{cursor:"pointer"},on:{click:t.view_tutorialModal}},[s("img",{attrs:{src:a("7105")}}),t._v(" Tutorial ")]),s("button",{staticClass:"btn icon-bttn btn-outline-secondary",attrs:{type:"button"},on:{click:t.download_results}},[s("img",{attrs:{src:a("d710")}})]),s("button",{staticClass:"btn icon-bttn btn-outline-secondary",attrs:{type:"button"},on:{click:t.share_output}},[s("img",{attrs:{src:a("b3b1")}})])])]),s("language-setting-modal"),s("b-modal",{ref:"tutorialModal",attrs:{id:"tutorialModal","hide-footer":"",title:"Tutorial"}},[s("b-embed",{attrs:{type:"iframe",aspect:"16by9",src:t.tutorial_url,allowfullscreen:""}}),s("a",{staticClass:"tutorial-tool mb-3 mt-3 w-100 text-center",staticStyle:{cursor:"pointer"},attrs:{target:"_blank",href:"https://www.helloscribe.ai/home/helloscribe-help-tutorials"}},[s("img",{attrs:{src:a("7105")}}),t._v(" See All Tutorials ")])],1)],1)},i=[],o=a("54f0"),n=a("c0dc"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-modal",{ref:"LanguageSettingModal",attrs:{id:"LanguageSettingModal","hide-footer":"","hide-header":"",title:"Language Settings",size:"lg"}},[a("b-form",{on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.set_language.apply(null,arguments)}}},[a("div",{staticClass:"tab-content-body"},[a("h3",{staticClass:"mb-5"},[t._v("Language Settings")]),a("b-form-group",{attrs:{label:"Input language (Description)"}},[a("b-form-select",{attrs:{options:t.language_options},model:{value:t.input_language,callback:function(e){t.input_language=e},expression:"input_language"}})],1),a("b-form-group",{attrs:{label:"Output language (Results)"}},[a("b-form-select",{attrs:{options:t.language_options},model:{value:t.output_language,callback:function(e){t.output_language=e},expression:"output_language"}})],1),a("div",{staticClass:"d-flex justify-content-between my-2 float-right"},[a("b-button",{staticClass:"min-w-150px",attrs:{pill:"",type:"submit",variant:"primary"}},[t._v(" Save ")])],1)],1)])],1)},l=[];const c="BG",u="CS",d="DA",A="DE",m="EL",g="EN-GB",p="EN-US",h="ES",f="ET",b="FI",_="FR",v="HU",y="IT",E="JA",C="LT",B="LV",S="NL",R="PL",w="PT-BR",N="PT",I="RO",T="RU",O="SK",k="SL",D="SV",x="ZH",M="HI",j="AF",L="AR",U={BG:c,CS:u,DA:d,DE:A,EL:m,EN_GB:g,EN_US:p,ES:h,ET:f,FI:b,FR:_,HU:v,IT:y,JA:E,LT:C,LV:B,NL:S,PL:R,PT_BR:w,PT:N,RO:I,RU:T,SK:O,SL:k,SV:D,ZH:x,HI:M,AF:j,AR:L},G={[c]:"Bulgarian",[u]:"Czech",[d]:"Danish",[A]:"German",[m]:"Greek",[g]:"English (British)",[p]:"English (American)",[h]:"Spanish",[f]:"Estonian",[b]:"Finnish",[_]:"French",[v]:"Hungarian",[y]:"Italian",[E]:"Japanese",[C]:"Lithuanian",[B]:"Latvian",[S]:"Dutch",[R]:"Polish",[w]:"Portuguese (Brazilian)",[N]:"Portuguese",[I]:"Romanian",[T]:"Russian",[O]:"Slovak",[k]:"Slovenian",[D]:"Swedish",[x]:"Chinese",[M]:"Hindi",[j]:"Afrikaans",[L]:"Arabic"};var P={name:"LanguageSettingModal",props:{project:Object},data(){return{input_language:this.$store.state.input_language?this.$store.state.input_language:U.EN_US,output_language:this.$store.state.output_language?this.$store.state.output_language:U.EN_US,language_options:Object.values(U).map(t=>({value:t,text:G[t]}))}},methods:{set_language(){localStorage.setItem("input_language",this.input_language),localStorage.setItem("output_language",this.output_language),this.$store.commit("updateLanguage"),this.$bvModal.hide("LanguageSettingModal")}},mounted(){}},Q=P,H=(a("ffdb"),a("2877")),V=Object(H["a"])(Q,r,l,!1,null,"0bd6d3e4",null),Y=V.exports,J=a("5acc"),F={components:{LanguageSettingModal:Y},name:"WritingToolbar",props:["baseData","answers","past_answers","tool_type"],data(){return{statusList:Object.values(o["a"]),statusLabelList:o["b"],file_name:"untitled",status:o["a"].NONE,assigned_user:"none",save_flag:"add",file:null,project_id:null,selected_folder:"",createFlag:!1,tutorial_url:J["c"][this.tool_type],team_members:[]}},beforeMount(){this.$route.params&&(this.project_id=this.$route.params.project_id?this.$route.params.project_id:null,this.selected_folder=this.$route.params.selected_folder?this.$route.params.selected_folder:"",this.file=this.$route.params.file?this.$route.params.file:null),this.file&&(this.project_id=this.file.project_id,this.save_flag="update",this.file_name=this.file.name,this.status=this.file.status,this.assigned_user=this.file.assigned_user),Object(n["a"])().get("/members").then(function(t){t&&(this.team_members=t.data.membersOfAccount||[]),this.loadingTable=!1}.bind(this)).catch((function(t){console.log(t)})),this.$root.$on("createdProject",this.createdProject)},beforeDestroy(){this.$root.$off("createdProject",this.createdProject)},methods:{back_clicked(){"update"===this.save_flag?this.update_task():"add"===this.save_flag&&(this.baseData&&this.answers.length?this.project_id?this.add_task():this.create_task():this.back_to_project())},async update_task(){try{await Object(n["a"])().put("file/"+this.file._id,{name:this.file_name,tool_type:this.tool_type,assigned_user:this.assigned_user,status:this.status,contents:[...this.answers,...this.past_answers],base_data:this.baseData}).then(t=>{this.back_to_project()})}catch(t){console.log(t)}},async add_task(){try{await Object(n["a"])().post("file",{type:"file",name:this.file_name,tool_type:this.tool_type,assigned_user:this.assigned_user,status:this.status,project_id:this.project_id,contents:this.answers,base_data:this.baseData,folder:this.selected_folder?this.selected_folder._id:""}).then(t=>{this.back_to_project()})}catch(t){console.log(t)}},showCreateProjectModal(){this.$bvModal.show("CreateProjectModal")},async create_task(){this.showCreateProjectModal()},createdProject(t){this.$bvModal.hide("CreateProjectModal"),this.project_id=t.project._id,this.add_task()},back_to_project(){this.project_id?this.$router.push({path:"/project-overview/"+this.project_id,query:{selected_folder:this.selected_folder}}):this.$router.push("/saved-drafts/projects/")},download_results(){this.$emit("download_results")},viewLanguageSettingModal(){this.$bvModal.show("LanguageSettingModal")},async share_output(){if(!this.createFlag&&(0!==this.answers.length||0!==this.past_answers.length)){if("add"===this.save_flag){this.createFlag=!0;try{await Object(n["a"])().post("file",{type:"file",name:this.file_name,tool_type:this.tool_type,assigned_user:this.assigned_user,status:this.status,project_id:this.project_id,contents:this.answers,base_data:this.baseData,folder:this.selected_folder?this.selected_folder._id:""}).then(t=>{this.file=t.data.file,this.save_flag="update",this.createFlag=!1})}catch(t){console.log(t)}}window.open("/share/"+this.file._id)}},view_tutorialModal(){this.$bvModal.show("tutorialModal")}}},$=F,X=Object(H["a"])($,s,i,!1,null,null,null);e["a"]=X.exports},"6eba":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACuSURBVHgB7ZSxDcIwEEV/SAIMcENcxwoZJZs4bAYbQJeW/gagSDB2KigiO/ZJafwkSz7J+t/S3X2gEKBGInzmnhq6yCRPaOPEBz6x9Sf09oCNeHFYmKWwGKDJ78/5yAaaFPFdxHsN8fUxnf+qComsbrJ85EEt+Wvn5DuqqZJZbtAyWEwmueeaBLMo1yQq7HJMotM01WRTXGv0JAq3IyY2rhskML7HK7f8gg/sQi5fQCNgLSacpgQAAAAASUVORK5CYII="},7105:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEDSURBVHgBpVJLcsIwDJWU7suKGRbQcIK2J0iP0CNQ2kWXHCEHgQGOwAkIN8gRDBvCLksGYgkZhiF8EmDyxrZkWc96IxugAjC/WbX+QgB5u0OI6ovB2Pl0DCatbg9FAgSONCHW0PfB5whE3PD3FuDryKHTjfiOwmF9MRxbshNVkDrfTQaYIYJxNq+CoAJeyg6X/r/PdvsBTuxzZKwRb6ceSk2AjF4QX2aUyJaUmDt2w58gHGsz04cqN8zIqGnnQj9uWTa7nQcr38dZZUbqJc3fsChZn8tXE90ku656noRQgmwt85tk/Vkms9guZHpkGknfXJFZZEaIgTYhKOJKJq952ZWwA9QjYnXBE1PmAAAAAElFTkSuQmCC"},"7a34":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADsSURBVHgB7ZTRCcJADIaTQ1F86gjni7RvukHdQDfRCXQDdQLdwBHEDXzzfNIR+qYFbfyvIkjFttIKPvSH444k9yUEEqJ/FycNbtPVFNEk66OwBMy8MBdzerXX3iNpycRd+4FSK2EtkWg8h+nAR/adCU2fUuQ23A0qdJJ2RSWrAlbAXwExjn48kkWB2tGO1/DmGMcNztGre7MscO2To9PqDNRZzYRE48wVcouSEcADQKe4v6rQVze1BiigG/mH8DDeh/sxNkI79gqtWLibC2ghCA5wjwDqmavZPn12VWFptAGeUl7ZHtnelRVXWHd3k1F5YJ1l6AAAAABJRU5ErkJggg=="},ac99:function(t,e,a){},b3b1:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHlSURBVHgBtVS7TutAEJ1d56V7i5sL7gkFyqZLSUfo6OAP8B8QviChokR8AeQPQkcXSjpCg4woCF0KQKbCIiTDmU1smYfARnCkZJ3J7Nmzc2ZM9MNQWZJNyVSYeUuR2sDPAXYf+qHfSeY4lAGu455p1st4PAZZHas3n5t/uBvfnVJWQJ1nioarhep6HCuaHj7XyTxNaTGhBVkuny6P4hjTCb4r3yJUSpWtqoJpzxRXcG1Pseq/ynu7cSm/VHfYKfvP/km8kekAjw0SI6AIJEFMwGr1YnTRf0c429hLXEFc7CDWEgK42/RHfsfkjYf4CisOoHofLg8+VBgVFy42Jzz5j2K0LDnTYfgn3B4Eg4DSAuoa4iBO34xitUJtQ2JSAsoAa8rYGdvT9UTHKlizNQH1/EcZYBv7fnQ/dHOuB5I1N+8Gc3puEdOwi7/KUhTEzm+fb1Nd+VNTQNpl4iZNDWrLmEmDoye/NiVBvKLH+iFqheRBIO/jkDrN2gfOBzBw9Wp01aesqBVre9a4gmlFB0lnyPgl81JPiqiR1X/yd+wqV0VL0bThsxNi841VljONKIQaTl9jCeQoJUp/S93wMWyhL3pVXe3KbKOmdRjkJfNSvw+H4TBE+xxBaVkrbRAKQdaWcaTfxAssbsPfDMXkpAAAAABJRU5ErkJggg=="},ce0e:function(t,e,a){"use strict";a("0dcc")},d710:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADqSURBVHgB5VM7DoJAEJ1BjNBt+CQcATpKSjwB4QRewdZb2VrRakdpyQEg2U5IdNehExOWJRpi4is22c17b3f2zQD8OlY6pGgT7V3TTZpHc57iGqABCTJDwEyHq2U4B39oqEy5T9dZOQEiJv3eW3voo7+rRX0a05gqwz5dA40UJXIBAijpVBiiVGmUJVu2lZNJKVEyeiWjC8rO7rYqDcIEYhaz7tYVZMZbu80rXnFYEoNQ5ozYGH/wh3NGbIz/9T40327ktKThJix0xNROMWmOr2eDP/TX/oVIAWXPQANU7pVqPNT3etnkP8ITim9LPEa9j+0AAAAASUVORK5CYII="},fe04:function(t,e,a){"use strict";a("ac99")},ffdb:function(t,e,a){"use strict";a("5d00")}}]);
//# sourceMappingURL=chunk-2af8a225.c2c1bd15.js.map