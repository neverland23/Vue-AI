(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-42206464"],{"147b":function(e,t,a){"use strict";a("2b49")},"153b":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"d-flex"},[e.hideSave?e._e():s("b-button",{staticClass:"d-flex align-items-center mr-4 py-2",attrs:{disabled:e.saving,variant:"outline-primary"},on:{click:e.save}},[s("span",{staticClass:"material-icons-outlined mr-1"},[e._v(" save ")]),e._v(" Save ")]),s("b-button",{staticClass:"d-flex align-items-center mr-4 py-2",attrs:{variant:"outline-primary"},on:{click:e.copy}},[s("img",{attrs:{src:a("372e")}}),e._v(" "+e._s(e.copied?"Copied":"Copy")+" "),e.copied?s("span",{staticClass:"material-icons-outlined ml-1 text-success"},[e._v(" done ")]):e._e()]),e.hideNote?e._e():s("b-button",{staticClass:"d-flex align-items-center mr-4 py-2",attrs:{disabled:e.adding,variant:"outline-primary"},on:{click:e.add}},[s("img",{attrs:{src:a("7a34")}}),e._v(" "+e._s(e.added?"Saved":"Save to Notes")+" "),e.added?s("span",{staticClass:"material-icons-outlined ml-1 text-success"},[e._v(" done ")]):e._e()]),s("b-button",{staticClass:"d-flex align-items-center mr-4 py-2",attrs:{variant:"outline-primary"},on:{click:e.generate_similar}},[e.loading?s("b-spinner",{staticClass:"mr-2",attrs:{small:"",label:"Spinning"}}):s("img",{staticStyle:{"margin-right":"8px"},attrs:{src:a("467d")}}),e._v(" Similar ")],1),s("b-button",{staticClass:"d-flex align-items-center mr-2 py-2",attrs:{disabled:e.deleting,variant:"outline-primary"},on:{click:e.remove}},[s("img",{attrs:{src:a("44ee")}}),e._v(" Remove ")])],1)},i=[],n={name:"GeneratorTools",props:{adding:{type:Boolean,default:!1},added:{type:Boolean,default:!1},copied:{type:Boolean,default:!1},hideSave:{type:Boolean,default:!0},hideNote:{type:Boolean,default:!1},saving:{type:Boolean,default:!1},deleting:{type:Boolean,default:!1},loading:{type:Boolean,default:!1}},methods:{add(){this.$emit("add")},save(){this.$emit("save")},copy(){this.$emit("copy")},remove(){this.$bvModal.msgBoxConfirm("Do you want to delete this item?",{title:"Please Confirm",size:"sm",buttonSize:"sm",okVariant:"danger",okTitle:"YES",cancelTitle:"NO",cancelVariant:"primary",footerClass:"p-2",hideHeaderClose:!1,centered:!0}).then(e=>{e&&this.$emit("remove")}).catch(e=>{})},generate_similar(){console.log(this.loading),this.$emit("generate_similar")}}},o=n,r=(a("147b"),a("2877")),A=Object(r["a"])(o,s,i,!1,null,"832d99da",null);t["a"]=A.exports},"2b49":function(e,t,a){},"467d":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAUCAMAAACK2/weAAAAolBMVEUAAAAAAAAAAABAAEAkACQgACAcABwuAC4rACspCikkCSQpCCkoBygrBSsqCSonCCcpByknBycpBikpCCkoCCgnBycpBykpBykoBygpByknBycnBicoBigoBygoBygnBycnBycoBigpCCkoBygnBycoBygoBygoBygoBigoBygoBygoBygoBygoBygoBygoBygoBygoBygoBygoBygoByj///8qjhcOAAAANHRSTlMAAQMEBwgJCwwZHB8mMDdBSk5QXWVpamtscXV8fouSlZyeqq2vtLrEx9DU6Onq9vf6+/z9RHwUowAAAAFiS0dENd622WsAAACYSURBVBgZRcGJFkJAAAXQRygVKm32pmVQifL+/9tyynAvlOnexMiQdDDQz2xMKJrgq8QgYfQ8QYmZLrhD70ihbejiz28vOgLeQxud9VsagLXN+bmt4NXFDD/LjBUqZkv8zIraw+r2Yb61AEO+1+jY4Z0B9Evr48/lRhM8onfgPGEERTxiphiULwoNitnwOsHAoTQwMvdT9L6NCQ6Z8HM6LAAAAABJRU5ErkJggg=="},5389:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"explorer-container"},[a("h3",[e._v("Saved Messages")]),a("b-form-group",[a("b-input-group",[a("b-form-input",{attrs:{placeholder:"Search Saved Drafts"},model:{value:e.query,callback:function(t){e.query=t},expression:"query"}}),a("b-input-group-append",[a("span",{staticClass:"material-icons-outlined"},[e._v(" search ")])])],1)],1),e.loading?a("div",{staticClass:"d-flex p-5 justify-content-center"},[a("b-spinner",{attrs:{variant:"primary",label:"Spinning"}})],1):e._e(),e.loading?e._e():a("div",e._l(e.filteredData,(function(t,s){return a("div",{key:s,staticClass:"item-info"},[t.baseData.type?a("div",{staticClass:"item-title"},[a("strong",[e._v("Category:")]),e._v(" "+e._s(e.messageTypes[t.baseData.type])+" ")]):e._e(),a("div",{staticClass:"position-relative"},[a("div",{staticClass:"item-content",class:{truncated:t.truncated},domProps:{innerHTML:e._s(e.$func.formattedContentString(t.text))},on:{click:function(e){t.truncated=!t.truncated}}}),a("span",{staticClass:"material-icons expand",class:{expanded:!t.truncated}},[e._v(" expand_more ")])]),a("div",{staticClass:"item-property"},[a("span",{staticClass:"label"},[e._v("Base Data: ")]),e._v(" "+e._s(t.baseData.description)+" ")]),a("div",{staticClass:"item-property"},[a("span",{staticClass:"label"},[e._v("Created At: ")]),e._v(e._s(e.$func.formattedDateTime(t.updatedAt))+" ")]),a("generator-tools",{staticClass:"mt-2",attrs:{hideNote:"",hideSave:""},on:{copy:function(a){return e.copyToClipboard(t)},remove:function(a){return e.removeItem(t)}}})],1)})),0)],1)},i=[],n=a("153b"),o=a("b642"),r=a("c0dc"),A=a("cf45"),l={components:{GeneratorTools:n["a"]},name:"ExplorerMessages",data(){return{query:"",results:[],loading:!1,filteredData:[],messageTypes:o["b"]}},mounted(){this.loadData()},methods:{filterData(){this.filteredData=this.results.filter(e=>JSON.stringify(e).toLowerCase().includes(this.query.toLowerCase()))},async loadData(){this.loading=!0;try{const{data:{messages:e}}=await Object(r["a"])().get("/messages");this.results=e.map(e=>({...e,truncated:!0})),this.filterData()}catch(e){}this.loading=!1},copyToClipboard(e){Object(A["a"])(e.text)},async removeItem(e){try{await Object(r["a"])().delete("message/"+e._id),this.loadData()}catch(t){}}},watch:{query:function(){this.filterData()}}},c=l,d=a("2877"),g=Object(d["a"])(c,s,i,!1,null,null,null);t["default"]=g.exports},"7a34":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADsSURBVHgB7ZTRCcJADIaTQ1F86gjni7RvukHdQDfRCXQDdQLdwBHEDXzzfNIR+qYFbfyvIkjFttIKPvSH444k9yUEEqJ/FycNbtPVFNEk66OwBMy8MBdzerXX3iNpycRd+4FSK2EtkWg8h+nAR/adCU2fUuQ23A0qdJJ2RSWrAlbAXwExjn48kkWB2tGO1/DmGMcNztGre7MscO2To9PqDNRZzYRE48wVcouSEcADQKe4v6rQVze1BiigG/mH8DDeh/sxNkI79gqtWLibC2ghCA5wjwDqmavZPn12VWFptAGeUl7ZHtnelRVXWHd3k1F5YJ1l6AAAAABJRU5ErkJggg=="},b642:function(e,t,a){"use strict";a.d(t,"a",(function(){return E})),a.d(t,"b",(function(){return v})),a.d(t,"c",(function(){return B}));const s="key-messages",i="talking-points",n="media-statement",o="positioning-statement",r="crisis-response",A="brand-story",l="marketing-angle",c="mission-statement",d="apology",g="value-proposition",m="brand-essence",p="vision-statement",C="press-release",u="elevator-pitch",S="news-hook",y="profile-summary",E={KEY_MESSAGES:s,TALKING_POINTS:i,MEDIA_STATEMENT:n,POSITIONING_STATEMENT:o,BRAND_STORY:A,MARKETING_ANGLE:l,CRISIS_RESPONSE:r,APOLOGY:d,MISSION_STATEMENT:c,VALUE_PROPOSITION:g,BRAND_ESSENCE:m,VISION_STATEMENT:p,PRESS_RELEASE:C,ELEVATOR_PITCH:u,NEWS_HOOK:S,PROFILE_SUMMARY:y},v={[m]:"Brand Essence",[o]:"Brand Positioning",[A]:"Brand Story",[r]:"Crisis Response",[u]:"Elevator Pitch",[s]:"Key Messages",[l]:"Marketing Angle",[n]:"Media Statement",[c]:"Mission Statement",[S]:"News Hook",[y]:"Personal Bio",[C]:"Press Release",[d]:"Public Apology",[i]:"Talking Points",[g]:"Value Proposition",[p]:"Vision Statement"},B={[s]:"Give me key messages for {e.g. AN A.I COPYWRITING AND BRAINSTORMING COMPANY}",[i]:"Give me talking points for {e.g. A NEW POLICY ON 4-DAY WORK SCHEDULES}",[n]:"Give me a media statement for {e.g. A COMPANY CELEBRATING ITS 1M CUSTOMERS}",[o]:"Give me a brand positioning statement for {e.g. A NEW BRAND OF INVISIBLE CLOAKS}",[r]:"Give me a crisis response for {e.g. A COMPANY FACING A CLASS ACTION LAWSUIT}",[A]:"Give me a brand story for {e.g. A COMPANY THAT CLEANS UP THE OCEAN WITH ROBOTS}",[l]:"Give me a marketing angle for {e.g. A COMPANY THAT CLEANS UP THE OCEAN WITH ROBOTS}",[d]:"Give me an apology to {e.g. A CUSTOMER WHO IS NOT SATISFIED WITH A PRODUCT}",[c]:"Give me a mission statement for {e.g. A COMMERCIAL SPACE TRAVEL COMPANY}",[g]:"Give me a value proposition for {e.g. A SOFTWARE THAT ENABLES COMPANIES TO BE MORE EFFICIENT}",[m]:"Give me the brand essence for {e.g. A NEW BRAND OF LUXURY CLOTHING}",[p]:"Give me a vision statement for {e.g. A COMPANY THAT SELLS INVISIBLE CLOAKS}",[C]:"Give me a press release {e.g. ANNOUNCING THE LAUNCH OF A NEW BRAND OF INVISIBLE CLOAKS}",[u]:"Give me an elevator pitch for {e.g. A COMPANY THAT SELLS INVISIBLE CLOAKS}",[S]:"Give me a hook for {e.g. A STORY ABOUT A COMPANY THAT SELLS INVISIBLE CLOAKS}",[y]:"Give me a personal bio for {e.g. THE CEO OF A COMPANY THAT SELLS INVISIBLE CLOAKS}"}}}]);
//# sourceMappingURL=chunk-42206464.f43ff76d.js.map