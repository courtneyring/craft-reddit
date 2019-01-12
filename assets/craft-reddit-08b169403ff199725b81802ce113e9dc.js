"use strict"
define("craft-reddit/app",["exports","craft-reddit/resolver","ember-load-initializers","craft-reddit/config/environment"],function(e,t,r,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var i=Ember.Application.extend({modulePrefix:a.default.modulePrefix,podModulePrefix:a.default.podModulePrefix,Resolver:t.default});(0,r.default)(i,a.default.modulePrefix)
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
e.default=t}),define("craft-reddit/helpers/app-version",["exports","craft-reddit/config/environment","ember-cli-app-version/utils/regexp"],function(e,t,r){function a(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=t.default.APP.version,d=a.versionOnly||a.hideSha,o=a.shaOnly||a.hideVersion,l=null
return d&&(a.showExtended&&(l=i.match(r.versionExtendedRegExp)),l||(l=i.match(r.versionRegExp))),o&&(l=i.match(r.shaRegExp)),l?l[0]:i}Object.defineProperty(e,"__esModule",{value:!0}),e.appVersion=a,e.default=void 0
var i=Ember.Helper.helper(a)
e.default=i}),define("craft-reddit/helpers/is-equal",["exports"],function(e){var t
Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.isEqual=void 0,e.isEqual=t,e.isEqual=t=function(e){return e[0]===e[1]}
var r=Ember.Helper.extend({compute:t})
e.default=r}),define("craft-reddit/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=t.default
e.default=r}),define("craft-reddit/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=t.default
e.default=r}),define("craft-reddit/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","craft-reddit/config/environment"],function(e,t,r){var a,i
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,r.default.APP&&(a=r.default.APP.name,i=r.default.APP.version)
var d={name:"App Version",initialize:(0,t.default)(a,i)}
e.default=d}),define("craft-reddit/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}
e.default=r}),define("craft-reddit/initializers/ember-data",["exports","ember-data/setup-container","ember-data"],function(e,t,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var a={name:"ember-data",initialize:t.default}
e.default=a}),define("craft-reddit/initializers/export-application-global",["exports","craft-reddit/config/environment"],function(e,t){function r(){var e=arguments[1]||arguments[0]
if(!1!==t.default.exportApplicationGlobal){var r
if("undefined"!=typeof window)r=window
else if("undefined"!=typeof global)r=global
else{if("undefined"==typeof self)return
r=self}var a,i=t.default.exportApplicationGlobal
a="string"==typeof i?i:Ember.String.classify(t.default.modulePrefix),r[a]||(r[a]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete r[a]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=r,e.default=void 0
var a={name:"export-application-global",initialize:r}
e.default=a}),define("craft-reddit/instance-initializers/ember-data",["exports","ember-data/initialize-store-service"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r={name:"ember-data",initialize:t.default}
e.default=r}),define("craft-reddit/resolver",["exports","ember-resolver"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=t.default
e.default=r}),define("craft-reddit/router",["exports","craft-reddit/config/environment"],function(e,t){var r
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,(r=Ember.Router.extend({location:t.default.locationType,rootURL:t.default.rootURL})).map(function(){return this.route("subreddit",{path:"/r/:subreddit_id"},function(){return this.route("index",{path:"/"},this.route("favorites",{path:"/favorites"}))})})
var a=r
e.default=a}),define("craft-reddit/routes/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Route.extend({})
e.default=t}),define("craft-reddit/routes/subreddit",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Route.extend({model:function(e){var t
return t="https://www.reddit.com/r/"+e.subreddit_id+"/.json",Ember.$.getJSON(t).then(function(t){var r,a,i,d,o
for((t=t.data.children.getEach("data")).shift(),d=[],console.log(t),a=0,i=t.length;a<i;a++)o=(r=t[a]).preview?r.preview.images[0].source.url.replace("&amp;","&"):"",d.push({title:r.title,author:r.author,imageUrl:o,score:r.score,created:r.created_utc,isFavorite:!1})
return{id:e.subreddit_id,data:d}})}})
e.default=t}),define("craft-reddit/routes/subreddit/favorites",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Route.extend({})
e.default=t}),define("craft-reddit/routes/subreddit/index",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Route.extend({})
e.default=t}),define("craft-reddit/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("craft-reddit/templates/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"01zkOJTh",block:'{"symbols":["menubarLink"],"statements":[[7,"div"],[11,"class","menubar"],[9],[4,"each",[[23,["menubarLinks"]]],null,{"statements":[[4,"link-to",[[22,1,["route"]],[22,1,["params"]]],[["class"],["menubar__link"]],{"statements":[[7,"i"],[12,"class",[28,["fa fa-",[22,1,["icon"]]]]],[11,"aria-hidden","true"],[9],[10],[1,[22,1,["label"]],false]],"parameters":[]},null]],"parameters":[1]},null],[10],[1,[21,"outlet"],false]],"hasEval":false}',meta:{moduleName:"craft-reddit/templates/application.hbs"}})
e.default=t}),define("craft-reddit/templates/components/post-card",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"dAC+eTAa",block:'{"symbols":[],"statements":[[4,"if",[[27,"is-equal",[[23,["theme"]],"favorite"],null]],null,{"statements":[[7,"div"],[11,"class","post-card__remove"],[9],[7,"i"],[11,"class","fa fa-trash"],[11,"aria-hidden","true"],[9],[10],[3,"action",[[22,0,[]],"toggleFavorite"]],[10]],"parameters":[]},{"statements":[[7,"div"],[12,"class",[28,["post-card__favorite ",[27,"if",[[23,["postData","isFavorite"]],"applied","unapplied"],null]]]],[9],[7,"i"],[11,"class","fa fa-heart"],[11,"aria-hidden","true"],[9],[10],[3,"action",[[22,0,[]],"toggleFavorite"]],[10]],"parameters":[]}],[7,"div"],[11,"class","post-card__body"],[9],[7,"div"],[11,"class","post-card__image__container"],[9],[7,"div"],[12,"style",[21,"style"]],[11,"class","post-card__image"],[9],[10],[10],[7,"div"],[11,"class","post-card__title"],[9],[1,[23,["postData","title"]],false],[10],[10],[7,"div"],[11,"class","post-card__footer"],[9],[7,"i"],[11,"class","fa fa-user"],[11,"aria-hidden","true"],[9],[10],[1,[23,["postData","author"]],false],[0," •"],[7,"i"],[11,"class","fa fa-clock-o"],[11,"aria-hidden","true"],[9],[10],[1,[21,"timeFromCreated"],false],[0," •"],[7,"i"],[11,"class","fa fa-bolt"],[11,"aria-hidden","true"],[9],[10],[1,[23,["postData","score"]],false],[10]],"hasEval":false}',meta:{moduleName:"craft-reddit/templates/components/post-card.hbs"}})
e.default=t}),define("craft-reddit/templates/subreddit",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"lRqg+tzS",block:'{"symbols":[],"statements":[[1,[21,"outlet"],false]],"hasEval":false}',meta:{moduleName:"craft-reddit/templates/subreddit.hbs"}})
e.default=t}),define("craft-reddit/templates/subreddit/favorites",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"di+3lW0r",block:'{"symbols":["post"],"statements":[[7,"div"],[11,"class","subreddit"],[9],[4,"each",[[23,["favorites"]]],null,{"statements":[[1,[27,"post-card",null,[["postData","theme"],[[22,1,[]],"favorite"]]],false]],"parameters":[1]},null],[10]],"hasEval":false}',meta:{moduleName:"craft-reddit/templates/subreddit/favorites.hbs"}})
e.default=t}),define("craft-reddit/templates/subreddit/index",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"azWXZ2Ez",block:'{"symbols":["post"],"statements":[[7,"div"],[11,"class","subreddit"],[9],[4,"each",[[23,["posts"]]],null,{"statements":[[1,[27,"post-card",null,[["postData"],[[22,1,[]]]]],false]],"parameters":[1]},null],[10]],"hasEval":false}',meta:{moduleName:"craft-reddit/templates/subreddit/index.hbs"}})
e.default=t}),define("craft-reddit/config/environment",[],function(){try{var e="craft-reddit/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),r={default:JSON.parse(unescape(t))}
return Object.defineProperty(r,"__esModule",{value:!0}),r}catch(a){throw new Error('Could not read config from meta tag with name "'+e+'".')}}),runningTests||require("craft-reddit/app").default.create({name:"craft-reddit",version:"0.0.0+f8200132"})
