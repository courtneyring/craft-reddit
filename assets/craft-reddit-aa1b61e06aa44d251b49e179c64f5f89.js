"use strict"
define("craft-reddit/app",["exports","craft-reddit/resolver","ember-load-initializers","craft-reddit/config/environment"],function(e,t,a,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var i=Ember.Application.extend({modulePrefix:r.default.modulePrefix,podModulePrefix:r.default.podModulePrefix,Resolver:t.default});(0,a.default)(i,r.default.modulePrefix)
var d=i
e.default=d}),define("craft-reddit/components/post-card",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Component.extend({classNames:["post-card"],style:function(){return Ember.String.htmlSafe("background-image: url("+this.get("postData.imageUrl")+")")}.property("postData.imageUrl"),timeFromCreated:function(){return moment.unix(this.get("postData.created")).fromNow()}.property("postData.created"),actions:{toggleFavorite:function(){return this.toggleProperty("postData.isFavorite")}}})
e.default=t}),define("craft-reddit/controllers/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Controller.extend({menubarLinks:function(){return[{route:"subreddit.index",params:this.get("subredditId"),label:"/r/"+this.get("subredditId"),icon:"reddit-alien"},{route:"subreddit.favorites",params:this.get("subredditId"),label:"favorites ("+this.get("favoriteCount")+")",icon:"heart"}]}.property("favoriteCount","subredditId"),subreddit:Ember.inject.controller(),favoriteCount:Ember.computed.alias("subreddit.favoriteCount"),subredditId:Ember.computed.alias("subreddit.subredditId")})
e.default=t}),define("craft-reddit/controllers/subreddit",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Controller.extend({favoriteCount:function(){var e
return null!=(e=this.get("model.data"))?e.filterBy("isFavorite").length:void 0}.property("model.data.@each.isFavorite"),subredditId:Ember.computed.alias("model.id")})
e.default=t}),define("craft-reddit/controllers/subreddit/favorites",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Controller.extend({posts:Ember.computed.alias("model.data"),favorites:function(){return this.get("posts").filterBy("isFavorite")}.property("posts.@each.isFavorite")})
e.default=t}),define("craft-reddit/controllers/subreddit/index",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Controller.extend({posts:Ember.computed.alias("model.data")})
e.default=t}),define("craft-reddit/helpers/app-version",["exports","craft-reddit/config/environment","ember-cli-app-version/utils/regexp"],function(e,t,a){function r(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=t.default.APP.version,d=r.versionOnly||r.hideSha,o=r.shaOnly||r.hideVersion,n=null
return d&&(r.showExtended&&(n=i.match(a.versionExtendedRegExp)),n||(n=i.match(a.versionRegExp))),o&&(n=i.match(a.shaRegExp)),n?n[0]:i}Object.defineProperty(e,"__esModule",{value:!0}),e.appVersion=r,e.default=void 0
var i=Ember.Helper.helper(r)
e.default=i}),define("craft-reddit/helpers/is-equal",["exports"],function(e){var t
Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.isEqual=void 0,e.isEqual=t,e.isEqual=t=function(e){return e[0]===e[1]}
var a=Ember.Helper.extend({compute:t})
e.default=a}),define("craft-reddit/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var a=t.default
e.default=a}),define("craft-reddit/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var a=t.default
e.default=a}),define("craft-reddit/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","craft-reddit/config/environment"],function(e,t,a){var r,i
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a.default.APP&&(r=a.default.APP.name,i=a.default.APP.version)
var d={name:"App Version",initialize:(0,t.default)(r,i)}
e.default=d}),define("craft-reddit/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var a={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}
e.default=a}),define("craft-reddit/initializers/ember-data",["exports","ember-data/setup-container","ember-data"],function(e,t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r={name:"ember-data",initialize:t.default}
e.default=r}),define("craft-reddit/initializers/export-application-global",["exports","craft-reddit/config/environment"],function(e,t){function a(){var e=arguments[1]||arguments[0]
if(!1!==t.default.exportApplicationGlobal){var a
if("undefined"!=typeof window)a=window
else if("undefined"!=typeof global)a=global
else{if("undefined"==typeof self)return
a=self}var r,i=t.default.exportApplicationGlobal
r="string"==typeof i?i:Ember.String.classify(t.default.modulePrefix),a[r]||(a[r]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete a[r]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=a,e.default=void 0
var r={name:"export-application-global",initialize:a}
e.default=r}),define("craft-reddit/instance-initializers/ember-data",["exports","ember-data/initialize-store-service"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var a={name:"ember-data",initialize:t.default}
e.default=a}),define("craft-reddit/resolver",["exports","ember-resolver"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var a=t.default
e.default=a}),define("craft-reddit/router",["exports","craft-reddit/config/environment"],function(e,t){var a
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,(a=Ember.Router.extend({location:t.default.locationType,rootURL:t.default.rootURL})).map(function(){return this.route("subreddit",{path:"/r/:subreddit_id"},function(){return this.route("index",{path:"/"},this.route("favorites",{path:"/favorites"}))})})
var r=a
e.default=r}),define("craft-reddit/routes/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Route.extend({})
e.default=t}),define("craft-reddit/routes/subreddit",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Route.extend({model:function(e){var t,a,r
return t={id:e.subreddit_id},a="https://www.reddit.com/r/"+e.subreddit_id+"/.json",this._getData(a).then((r=this,function(e){var a
return a=r._formatData(e.data.children.getEach("data")),t.data=a,t}))},_getData:function(e){return new Promise(function(t,a){var r
return(r=new XMLHttpRequest).open("GET",e,!0),r.onload=function(){var e
if(r.status>=200&&r.status<400)return e=JSON.parse(r.responseText),t(e)},r.send()})},_formatData:function(e){var t,a,r,i,d
for(i=[],a=0,r=e.length;a<r;a++)d=(t=e[a]).preview?t.preview.images[0].source.url.replace("&amp;","&"):"",i.push({title:t.title,author:t.author,imageUrl:d,score:t.score,created:t.created_utc,isFavorite:!1})
return i}})
e.default=t}),define("craft-reddit/routes/subreddit/favorites",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Route.extend({})
e.default=t}),define("craft-reddit/routes/subreddit/index",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Route.extend({})
e.default=t}),define("craft-reddit/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("craft-reddit/templates/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"01zkOJTh",block:'{"symbols":["menubarLink"],"statements":[[7,"div"],[11,"class","menubar"],[9],[4,"each",[[23,["menubarLinks"]]],null,{"statements":[[4,"link-to",[[22,1,["route"]],[22,1,["params"]]],[["class"],["menubar__link"]],{"statements":[[7,"i"],[12,"class",[28,["fa fa-",[22,1,["icon"]]]]],[11,"aria-hidden","true"],[9],[10],[1,[22,1,["label"]],false]],"parameters":[]},null]],"parameters":[1]},null],[10],[1,[21,"outlet"],false]],"hasEval":false}',meta:{moduleName:"craft-reddit/templates/application.hbs"}})
e.default=t}),define("craft-reddit/templates/components/post-card",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"ZOtGHla2",block:'{"symbols":[],"statements":[[4,"if",[[27,"is-equal",[[23,["theme"]],"favorite"],null]],null,{"statements":[[7,"div"],[11,"class","post-card__remove"],[9],[7,"i"],[11,"class","fa fa-trash"],[11,"aria-hidden","true"],[9],[10],[3,"action",[[22,0,[]],"toggleFavorite"]],[10]],"parameters":[]},{"statements":[[7,"div"],[12,"class",[28,["post-card__favorite ",[27,"if",[[23,["postData","isFavorite"]],"applied","unapplied"],null]]]],[9],[7,"i"],[11,"class","fa fa-heart"],[11,"aria-hidden","true"],[9],[10],[3,"action",[[22,0,[]],"toggleFavorite"]],[10]],"parameters":[]}],[7,"div"],[11,"class","post-card__body"],[9],[4,"if",[[23,["postData","imageUrl"]]],null,{"statements":[[7,"div"],[11,"class","post-card__image__container"],[9],[7,"div"],[12,"style",[21,"style"]],[11,"class","post-card__image"],[9],[10],[10]],"parameters":[]},null],[7,"div"],[11,"class","post-card__title"],[9],[1,[23,["postData","title"]],false],[10],[10],[7,"div"],[11,"class","post-card__footer"],[9],[7,"i"],[11,"class","fa fa-user"],[11,"aria-hidden","true"],[9],[10],[1,[23,["postData","author"]],false],[0," •"],[7,"i"],[11,"class","fa fa-clock-o"],[11,"aria-hidden","true"],[9],[10],[1,[21,"timeFromCreated"],false],[0," •"],[7,"i"],[11,"class","fa fa-bolt"],[11,"aria-hidden","true"],[9],[10],[1,[23,["postData","score"]],false],[10]],"hasEval":false}',meta:{moduleName:"craft-reddit/templates/components/post-card.hbs"}})
e.default=t}),define("craft-reddit/templates/subreddit",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"lRqg+tzS",block:'{"symbols":[],"statements":[[1,[21,"outlet"],false]],"hasEval":false}',meta:{moduleName:"craft-reddit/templates/subreddit.hbs"}})
e.default=t}),define("craft-reddit/templates/subreddit/favorites",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"di+3lW0r",block:'{"symbols":["post"],"statements":[[7,"div"],[11,"class","subreddit"],[9],[4,"each",[[23,["favorites"]]],null,{"statements":[[1,[27,"post-card",null,[["postData","theme"],[[22,1,[]],"favorite"]]],false]],"parameters":[1]},null],[10]],"hasEval":false}',meta:{moduleName:"craft-reddit/templates/subreddit/favorites.hbs"}})
e.default=t}),define("craft-reddit/templates/subreddit/index",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"azWXZ2Ez",block:'{"symbols":["post"],"statements":[[7,"div"],[11,"class","subreddit"],[9],[4,"each",[[23,["posts"]]],null,{"statements":[[1,[27,"post-card",null,[["postData"],[[22,1,[]]]]],false]],"parameters":[1]},null],[10]],"hasEval":false}',meta:{moduleName:"craft-reddit/templates/subreddit/index.hbs"}})
e.default=t}),define("craft-reddit/config/environment",[],function(){try{var e="craft-reddit/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),a={default:JSON.parse(unescape(t))}
return Object.defineProperty(a,"__esModule",{value:!0}),a}catch(r){throw new Error('Could not read config from meta tag with name "'+e+'".')}}),runningTests||require("craft-reddit/app").default.create({name:"craft-reddit",version:"0.0.0+08ea3239"})
