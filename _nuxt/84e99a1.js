(window.webpackJsonp=window.webpackJsonp||[]).push([[13,12],{533:function(e,t,n){var map={"./project-1.jpg":534,"./project-10.jpg":535,"./project-2.jpg":536,"./project-3.jpg":537,"./project-4.jpg":538,"./project-5.jpg":539,"./project-6.jpg":540,"./project-7.jpg":541,"./project-8.jpg":542,"./project-9.jpg":543};function o(e){var t=r(e);return n(t)}function r(e){if(!n.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}o.keys=function(){return Object.keys(map)},o.resolve=r,e.exports=o,o.id=533},534:function(e,t,n){e.exports=n.p+"img/project-1.cef981c.jpg"},535:function(e,t,n){e.exports=n.p+"img/project-10.8afe492.jpg"},536:function(e,t,n){e.exports=n.p+"img/project-2.090a360.jpg"},537:function(e,t,n){e.exports=n.p+"img/project-3.b9b7c2c.jpg"},538:function(e,t,n){e.exports=n.p+"img/project-4.1623d28.jpg"},539:function(e,t,n){e.exports=n.p+"img/project-5.9e50807.jpg"},540:function(e,t,n){e.exports=n.p+"img/project-6.dfe909f.jpg"},541:function(e,t,n){e.exports=n.p+"img/project-7.5cfd049.jpg"},542:function(e,t,n){e.exports=n.p+"img/project-8.e0c8499.jpg"},543:function(e,t,n){e.exports=n.p+"img/project-9.8b656c9.jpg"},548:function(e,t,n){"use strict";n.r(t);n(29),n(77);var o={name:"ReadTime",props:{content:{type:String,default:function(){return""}}},computed:{readTime:function(){var e=JSON.stringify(this.content).split(" ").length;return Math.ceil(e/200)}}},r=n(9),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("span",[e._v(e._s(e.readTime)+" min read")])}),[],!1,null,null,null);t.default=component.exports},551:function(e,t,n){var content=n(564);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(15).default)("3e4997bb",content,!0,{sourceMap:!1})},561:function(e,t){var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"getPost"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"id"}},type:{kind:"NamedType",name:{kind:"Name",value:"ID"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"items"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"blog"},arguments:[{kind:"Argument",name:{kind:"Name",value:"filter"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"id"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"_eq"},value:{kind:"Variable",name:{kind:"Name",value:"id"}}}]}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"content"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"date_created"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"date_updated"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"logo"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"filename_disk"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"author"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"first_name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"last_name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"status"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"email"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"avatar"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"filename_disk"},arguments:[],directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"status"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"categories"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"category_id"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]}]}}]}}]}}]}}]}}],loc:{start:0,end:511}};n.loc.source={body:"query getPost ($id: ID) {\n  items {\n    blog(filter:{id:{_eq:$id}}){\n      id,\n      slug\n      content\n      date_created,\n      date_updated,\n      logo {\n        id  \n        filename_disk      \n      }\n      author{\n        first_name\n        last_name\n        description\n        title\n        status\n        email\n        avatar{\n          id\n          filename_disk\n        }\n      }\n      status\n      categories{\n        id\n        category_id{\n          id\n          name\n        }\n      }\n    }\n  }\n}",name:"GraphQL request",locationOffset:{line:1,column:1}};function o(e,t){if("FragmentSpread"===e.kind)t.add(e.name.value);else if("VariableDefinition"===e.kind){var n=e.type;"NamedType"===n.kind&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){o(e,t)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){o(e,t)})),e.definitions&&e.definitions.forEach((function(e){o(e,t)}))}var r={};function d(e,t){for(var i=0;i<e.definitions.length;i++){var element=e.definitions[i];if(element.name&&element.name.value==t)return element}}n.definitions.forEach((function(e){if(e.name){var t=new Set;o(e,t),r[e.name.value]=t}})),e.exports=n,e.exports.getPost=function(e,t){var n={kind:e.kind,definitions:[d(e,t)]};e.hasOwnProperty("loc")&&(n.loc=e.loc);var o=r[t]||new Set,c=new Set,l=new Set;for(o.forEach((function(e){l.add(e)}));l.size>0;){var m=l;l=new Set,m.forEach((function(e){c.has(e)||(c.add(e),(r[e]||new Set).forEach((function(e){l.add(e)})))}))}return c.forEach((function(t){var o=d(e,t);o&&n.definitions.push(o)})),n}(n,"getPost")},562:function(e,t,n){e.exports=n.p+"img/user.7b760c8.png"},563:function(e,t,n){"use strict";n(551)},564:function(e,t,n){var o=n(14)(!1);o.push([e.i,".blog-list-link{text-decoration:none;color:#000!important}.blog-list-link:hover{color:#5c94fc!important}.blog-title{font-size:48px;font-weight:400}@media only screen and (max-width:600px){.blog-title{font-size:36px}}.blog-description{font-weight:400;font-style:italic}.blog-details{margin-top:30px;margin-bottom:40px}.blog-time{font-size:15px;font-weight:300}.nuxt-content h2{font-weight:500;font-size:30px;padding-bottom:.3rem;border-bottom:1px solid #eaecef;margin-bottom:1rem}.nuxt-content h3{font-weight:400;font-size:22px}.nuxt-content p{font-size:16px;margin-bottom:30px;word-spacing:2px;line-height:32px}.nuxt-content h2 code,.nuxt-content h3 code,.nuxt-content p code{color:#476582;padding:.25rem .5rem;margin:0;font-size:.85em;background-color:rgba(27,31,35,.05);border-radius:3px;font-family:Consolas,Roboto Mono,monospace}[dir=ltr] .nuxt-content ul{margin-left:0}[dir=ltr] .nuxt-content ul,[dir=rtl] .nuxt-content ul{margin-right:0}[dir=rtl] .nuxt-content ul{margin-left:0}[dir=ltr] .nuxt-content ul{padding-left:40px}[dir=rtl] .nuxt-content ul{padding-right:40px}.nuxt-content ul{font-size:16px;word-spacing:2px;line-height:32px;display:block;list-style-type:disc;margin-top:1em;margin-bottom:1em}.v-application code{all:initial;all:unset}.v-application a{text-decoration:none}.nuxt-content-highlight{font-family:Consolas;font-size:16px;position:relative;z-index:1;border-radius:6px}.nuxt-content-highlight>.filename{font-family:Roboto;right:0;top:0;position:absolute;margin-right:.8rem;font-size:.8rem;color:#cbd5e0;font-weight:300;z-index:10;margin-top:.5rem}.nuxt-content pre{position:static;border-radius:6px;font-family:Consolas;font-size:16px;padding:20px}code[class*=language-],pre[class*=language-]{font-size:16px;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;color:#c3cee3;font-family:Consolas,Roboto Mono,monospace;font-size:1em;line-height:1.5em;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;-ms-hyphens:none;hyphens:none;margin-bottom:15px}",""]),e.exports=o},635:function(e,t,n){"use strict";n.r(t);n(323),n(324),n(20),n(90);var o=n(26),r=n(560),d=n.n(r),c=n(548),l=n(561),m=n.n(l),f=n(224),h={name:"PageSlug",components:{ReadTime:c.default},asyncData:function(e){return Object(o.a)(regeneratorRuntime.mark((function t(){var n,o,r,d,c,l,f;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.app,o=e.route,r=e.redirect,t.prev=1,d=n.apolloProvider.defaultClient,t.next=5,d.query({query:m.a,variables:{id:o.params.slug}});case 5:return c=t.sent,l=c.data.items.blog,f=l&&l.length?l[0]:{},t.abrupt("return",{post:f});case 11:t.prev=11,t.t0=t.catch(1),r("/");case 14:case"end":return t.stop()}}),t,null,[[1,11]])})))()},data:function(){return{urls:f.a}},head:function(){return{title:this.post.title,titleTemplate:"%s - Mohsin Amjad",meta:[{hid:"description",name:"description",content:this.post.description},{hid:"og:title",property:"og:title",content:this.post.title},{hid:"og:description",property:"og:description",content:this.post.description},{hid:"og:type",property:"og:type",content:"article"},{hid:"twitter:title",name:"twitter:title",content:this.post.title},{hid:"twitter:description",name:"twitter:description",content:this.post.description},{hid:"og:image",property:"og:image",content:"https://mohsinamjad.github.io/"+this.post.img},{hid:"og:image:secure_url",property:"og:image:secure_url",content:"https://mohsinamjad.github.io/"+this.post.img},{hid:"og:image:alt",property:"og:image:alt",content:this.post.slug},{hid:"twitter:image",name:"twitter:image",content:"https://mohsinamjad.github.io/"+this.post.img}]}},computed:{userImg:function(){return this.post&&this.post.author&&this.post.author.avatar?"https://mohsinsite.s3.amazonaws.com/".concat(this.post.author.avatar.filename_disk):n(562)},postImg:function(){return this.post&&this.post.logo&&this.post.logo.filename_disk?"https://mohsinsite.s3.amazonaws.com/".concat(this.post.logo.filename_disk):n(533)("./project-".concat(Math.floor(9*Math.random())+1,".jpg"))}},watch:{"$vuetify.theme.dark":{immediate:!0,handler:function(e){return e?n.e(22).then(n.t.bind(null,630,7)):n.e(21).then(n.t.bind(null,631,7))}}},mounted:function(){d.a.highlightAll()},methods:{formatDate:function(e){return new Date(e).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})},tweet:function(){var e="https://twitter.com/intent/tweet?text="+document.title+"&url="+location.href;window.open(e)},linkedInPost:function(){var e="https://www.linkedin.com/shareArticle/?mini=true&url="+location.href;this.PopupCenter(e,500,500)},facebookPost:function(){var e="https://www.facebook.com/sharer/sharer.php?u="+location.href+"&display=page";window.open(e)},PopupCenter:function(e,t,n){var o=void 0!==window.screenLeft?window.screenLeft:screen.left,r=void 0!==window.screenTop?window.screenTop:screen.top,d=(window.innerWidth?window.innerWidth:document.documentElement.clientWidth?document.documentElement.clientWidth:screen.width)/2-t/2+o,c=(window.innerHeight?window.innerHeight:document.documentElement.clientHeight?document.documentElement.clientHeight:screen.height)/2-n/2+r,l=window.open(e,"_blank","scrollbars=yes, width="+t+", height="+n+", top="+c+", left="+d);window.focus&&l.focus()}}},v=(n(563),n(9)),k=n(12),w=n.n(k),x=n(525),_=n(124),j=n(206),y=n(520),N=n(521),S=n(205),F=n(524),z=n(518),component=Object(v.a)(h,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{staticClass:"mb-15"},[e.post&&e.post.author&&e.post.author.first_name?n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{xl:"5",lg:"7",md:"10",sm:"10"}},[n("div",{staticClass:"mb-5"},[n("base-btn",{staticClass:"pa-1",attrs:{to:"/blogs",ripple:!1,height:"auto",text:""}},[n("v-icon",[e._v("mdi-arrow-left")]),e._v("    Go back\n        ")],1)],1),e._v(" "),n("h1",{staticClass:"blog-title"},[e._v("\n        "+e._s(e.post.slug)+"\n      ")]),e._v(" "),n("h4",{staticClass:"blog-description"},[e._v("\n        "+e._s(e.post.description||"")+"\n      ")]),e._v(" "),n("div",{staticClass:"d-flex flex-wrap blog-details"},[n("v-avatar",{staticClass:"elevation-10",attrs:{size:"55"}},[n("img",{attrs:{src:e.userImg,alt:"User"}})]),e._v(" "),n("div",{staticClass:"ml-3 mt-3"},[n("div",{staticClass:"blog-time"},[n("span",[e._v(e._s(e.formatDate(e.post.date_created)))]),e._v(" •\n            "),n("ReadTime",{attrs:{content:e.post.content}})],1)]),e._v(" "),n("v-spacer"),e._v(" "),n("div",{staticClass:"ml-16 mt-3"},e._l(Object.values(e.urls),(function(t){return n("v-btn",{key:t.name,attrs:{icon:"",color:"#757575",target:"_blank",href:t.url}},[n("v-icon",[e._v(e._s(t.icon))])],1)})),1)],1),e._v(" "),n("v-card",{staticClass:"mb-10",attrs:{elevation:"3"}},[n("img",{staticClass:"v-responsive__content",attrs:{src:e.postImg}})]),e._v(" "),n("span",{domProps:{innerHTML:e._s(e.post.content)}})],1)],1):e._e()],1)}),[],!1,null,null,null);t.default=component.exports;w()(component,{BaseBtn:n(167).default,ReadTime:n(548).default}),w()(component,{VAvatar:x.a,VBtn:_.a,VCard:j.a,VCol:y.a,VContainer:N.a,VIcon:S.a,VRow:F.a,VSpacer:z.a})}}]);