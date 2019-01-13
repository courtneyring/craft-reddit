"use strict"
define("craft-reddit/app",["exports","craft-reddit/resolver","ember-load-initializers","craft-reddit/config/environment"],function(e,t,a,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var i=Ember.Application.extend({modulePrefix:r.default.modulePrefix,podModulePrefix:r.default.podModulePrefix,Resolver:t.default});(0,a.default)(i,r.default.modulePrefix)
var s=i
e.default=s}),define("craft-reddit/components/post-card",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Component.extend({classNames:["post-card"],classNameBindings:["type"],style:function(){return Ember.String.htmlSafe("background-image: url("+this.get("postData.imageUrl")+")")}.property("postData.imageUrl"),timeFromCreated:function(){return moment.unix(this.get("postData.created")).fromNow()}.property("postData.created"),actions:{toggleFavorite:function(){return this.toggleProperty("postData.isFavorite")}}})
e.default=t}),define("craft-reddit/components/search-bar",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Component.extend({classNames:["search-bar"],focusedOptionIdx:-1,arrowDownKeyAction:function(e){var t,a
if(this.get("searchOptions.length"))return t=this.get("focusedOptionIdx"),a=this.get("searchOptions.length")-1,-1===t?this.set("focusedOptionIdx",0):t!==a?this.set("focusedOptionIdx",this.get("focusedOptionIdx")+1):void 0},arrowUpKeyAction:function(e){var t,a
if(this.get("searchOptions.length"))return t=this.get("focusedOptionIdx"),a=this.get("searchOptions.length")-1,-1===t?this.set("focusedOptionIdx",a):0!==t?this.set("focusedOptionIdx",this.get("focusedOptionIdx")-1):void 0},enterKeyAction:function(e){var t,a
return a=-1!==(t=this.get("focusedOptionIdx"))?this.get("searchOptions").objectAt(t):this.get("searchValue"),this.selectAction(a),this.resetSearch()},keyDown:function(e){switch(e.key){case"ArrowUp":return this.arrowUpKeyAction(e)
case"ArrowDown":return this.arrowDownKeyAction(e)
case"Enter":return this.enterKeyAction(e)}},resetSearch:function(){return this.setProperties({searchOptions:[],searchValue:[],focusedOptionIdx:-1})},actions:{getDataList:function(){var e,t,a,r,i
if(this.get("searchValue")){for(r=[],e=0,t=(i=this.get("options")).length;e<t;e++)(a=i[e]).toLowerCase().startsWith(this.get("searchValue").toLowerCase())&&r.push(a)
return this.set("searchOptions",r.slice(0,3))}},select:function(e){return this.selectAction(e),this.resetSearch()}}})
e.default=t}),define("craft-reddit/controllers/application",["exports","craft-reddit/mixins/data-request-mixin"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var a=Ember.Controller.extend(t.default,{subreddit:Ember.inject.controller(),favoriteCount:Ember.computed.alias("subreddit.favoriteCount"),subredditId:Ember.computed.alias("subreddit.subredditId"),init:function(){var e
return"https://www.reddit.com/reddits.json",this.getData("https://www.reddit.com/reddits.json",function(){return resolve()}).then((e=this,function(t){var a
return a=e.formatData(t.data.children.getEach("data")),e.set("subredditList",a)}))},menubarLinks:function(){return[{route:"subreddit.index",params:this.get("subredditId"),label:"/r/"+this.get("subredditId"),icon:"reddit-alien"},{route:"subreddit.favorites",params:this.get("subredditId"),label:"favorites ("+this.get("favoriteCount")+")",icon:"heart"}]}.property("favoriteCount","subredditId"),formatData:function(e){var t,a,r,i
for(i=[],a=0,r=e.length;a<r;a++)t=e[a],i.push(t.display_name)
return i},actions:{transitionToLink:function(e){return this.transitionToRoute("subreddit.index",e)}}})
e.default=a}),define("craft-reddit/controllers/subreddit",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Controller.extend({subredditId:Ember.computed.alias("model.id"),view:"card",favoriteCount:function(){var e
return null!=(e=this.get("model.data"))?e.filterBy("isFavorite").length:void 0}.property("model.data.@each.isFavorite"),actions:{setView:function(e){return this.set("view",e)}}})
e.default=t}),define("craft-reddit/controllers/subreddit/favorites",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Controller.extend({posts:Ember.computed.alias("model.data"),subreddit:Ember.inject.controller(),view:Ember.computed.alias("subreddit.view"),favorites:Ember.computed.filterBy("posts","isFavorite")})
e.default=t}),define("craft-reddit/controllers/subreddit/index",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Controller.extend({posts:Ember.computed.alias("model.data"),subreddit:Ember.inject.controller(),view:Ember.computed.alias("subreddit.view")})
e.default=t}),define("craft-reddit/helpers/app-version",["exports","craft-reddit/config/environment","ember-cli-app-version/utils/regexp"],function(e,t,a){function r(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=t.default.APP.version,s=r.versionOnly||r.hideSha,d=r.shaOnly||r.hideVersion,n=null
return s&&(r.showExtended&&(n=i.match(a.versionExtendedRegExp)),n||(n=i.match(a.versionRegExp))),d&&(n=i.match(a.shaRegExp)),n?n[0]:i}Object.defineProperty(e,"__esModule",{value:!0}),e.appVersion=r,e.default=void 0
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
var s={name:"App Version",initialize:(0,t.default)(r,i)}
e.default=s}),define("craft-reddit/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
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
e.default=a}),define("craft-reddit/mixins/data-request-mixin",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Mixin.create({getData:function(e,t){return new Promise(function(a,r){var i
return(i=new XMLHttpRequest).open("GET",e,!0),i.onreadystatechange=function(){var e
if(4===i.readyState)return 200===i.status?(e=JSON.parse(i.responseText),a(e)):t()},i.send()})}})
e.default=t}),define("craft-reddit/resolver",["exports","ember-resolver"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var a=t.default
e.default=a}),define("craft-reddit/router",["exports","craft-reddit/config/environment"],function(e,t){var a
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,(a=Ember.Router.extend({location:t.default.locationType,rootURL:t.default.rootURL})).map(function(){return this.route("subreddit",{path:"/r/:subreddit_id",resetNamespace:!0},function(){return this.route("index",{path:"/"},this.route("favorites",{path:"/favorites"}))})})
var r=a
e.default=r}),define("craft-reddit/routes/subreddit",["exports","craft-reddit/mixins/data-request-mixin","craft-reddit/config/environment"],function(e,t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=Ember.Route.extend(t.default,{model:function(e){var t,r,i
return t={id:e.subreddit_id},r="https://www.reddit.com/r/"+e.subreddit_id+"/.json",this.getData(r,function(){return window.location.href=a.default.rootURL}).then((i=this,function(e){var a
return a=i._formatData(e.data.children.getEach("data")),t.data=a,t}))},_formatData:function(e){var t,a,r,i,s
for(i=[],a=0,r=e.length;a<r;a++)s=(t=e[a]).preview?t.preview.images[0].source.url.replace(/&amp;/g,"&"):"",i.push({title:t.title,author:t.author,imageUrl:s,score:t.score,created:t.created_utc,isFavorite:!1})
return i}})
e.default=r}),define("craft-reddit/routes/subreddit/favorites",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Route.extend({})
e.default=t}),define("craft-reddit/routes/subreddit/index",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Route.extend({})
e.default=t}),define("craft-reddit/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("craft-reddit/templates/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"rZmjEu9t",block:'{"symbols":["subreddit","menubarLink"],"statements":[[7,"div"],[11,"class","menubar"],[9],[7,"div"],[11,"class","menubar__links"],[9],[4,"if",[[23,["subredditId"]]],null,{"statements":[[4,"each",[[23,["menubarLinks"]]],null,{"statements":[[4,"link-to",[[22,2,["route"]],[22,2,["params"]]],[["class"],["menubar__link"]],{"statements":[[7,"i"],[12,"class",[28,["fa fa-",[22,2,["icon"]]]]],[11,"aria-hidden","true"],[9],[10],[1,[22,2,["label"]],false]],"parameters":[]},null]],"parameters":[2]},null]],"parameters":[]},null],[10],[1,[27,"search-bar",null,[["options","selectAction"],[[23,["subredditList"]],[27,"action",[[22,0,[]],"transitionToLink"],null]]]],false],[10],[4,"if",[[23,["subredditId"]]],null,{"statements":[[1,[21,"outlet"],false]],"parameters":[]},{"statements":[[7,"div"],[11,"class","index"],[9],[7,"div"],[11,"class","index__header"],[9],[0,"Explore subreddits"],[10],[7,"div"],[11,"class","index__list"],[9],[4,"each",[[23,["subredditList"]]],null,{"statements":[[4,"link-to",["subreddit.index",[22,1,[]]],[["class"],["index__link"]],{"statements":[[1,[22,1,[]],false]],"parameters":[]},null]],"parameters":[1]},null],[10],[10]],"parameters":[]}]],"hasEval":false}',meta:{moduleName:"craft-reddit/templates/application.hbs"}})
e.default=t}),define("craft-reddit/templates/components/post-card",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"ZrBaWZo9",block:'{"symbols":[],"statements":[[4,"if",[[27,"is-equal",[[23,["theme"]],"favorite"],null]],null,{"statements":[[7,"div"],[11,"class","post-card__remove"],[9],[7,"i"],[11,"class","fa fa-trash"],[11,"aria-hidden","true"],[9],[10],[3,"action",[[22,0,[]],"toggleFavorite"]],[10]],"parameters":[]},{"statements":[[7,"div"],[12,"class",[28,["post-card__favorite ",[27,"if",[[23,["postData","isFavorite"]],"applied","unapplied"],null]]]],[9],[7,"i"],[11,"class","fa fa-heart"],[11,"aria-hidden","true"],[9],[10],[3,"action",[[22,0,[]],"toggleFavorite"]],[10]],"parameters":[]}],[7,"div"],[11,"class","post-card__body"],[9],[4,"if",[[23,["postData","imageUrl"]]],null,{"statements":[[7,"div"],[12,"style",[21,"style"]],[11,"class","post-card__image"],[9],[10]],"parameters":[]},null],[7,"div"],[11,"class","post-card__title"],[9],[1,[23,["postData","title"]],false],[10],[10],[7,"div"],[11,"class","post-card__footer"],[9],[7,"i"],[11,"class","fa fa-user"],[11,"aria-hidden","true"],[9],[10],[0,"/u/"],[1,[23,["postData","author"]],false],[0," •"],[7,"i"],[11,"class","fa fa-clock-o"],[11,"aria-hidden","true"],[9],[10],[1,[21,"timeFromCreated"],false],[0," •"],[7,"i"],[11,"class","fa fa-bolt"],[11,"aria-hidden","true"],[9],[10],[1,[23,["postData","score"]],false],[10]],"hasEval":false}',meta:{moduleName:"craft-reddit/templates/components/post-card.hbs"}})
e.default=t}),define("craft-reddit/templates/components/search-bar",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"prUuoN0h",block:'{"symbols":["searchOption","idx"],"statements":[[7,"div"],[11,"class","search-bar__input-container"],[9],[1,[27,"input",null,[["value","class","placeholder","key-up"],[[23,["searchValue"]],"search-bar__input","Search subreddits...",[27,"action",[[22,0,[]],"getDataList"],null]]]],false],[7,"i"],[11,"class","fa fa-search"],[11,"aria-hidden","true"],[9],[10],[10],[4,"if",[[23,["searchOptions","length"]]],null,{"statements":[[7,"div"],[11,"class","search-bar__options"],[9],[4,"each",[[23,["searchOptions"]]],null,{"statements":[[7,"div"],[12,"class",[28,["search-bar__option ",[27,"if",[[27,"is-equal",[[23,["focusedOptionIdx"]],[22,2,[]]],null],"active"],null]]]],[9],[1,[22,1,[]],false],[3,"action",[[22,0,[]],"select",[22,1,[]]]],[10]],"parameters":[1,2]},null],[10]],"parameters":[]},null]],"hasEval":false}',meta:{moduleName:"craft-reddit/templates/components/search-bar.hbs"}})
e.default=t}),define("craft-reddit/templates/subreddit",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"eOtGNi03",block:'{"symbols":[],"statements":[[7,"div"],[11,"class","subreddit"],[9],[7,"div"],[11,"class","action-bar"],[9],[7,"div"],[12,"class",[28,["action-bar__container ",[27,"if",[[27,"is-equal",[[23,["view"]],"card"],null],"card","row"],null]]]],[9],[7,"div"],[11,"class","action-bar__section"],[9],[7,"div"],[11,"class","action-bar__label"],[9],[0,"view:"],[10],[7,"div"],[12,"class",[28,["action-bar__icon ",[27,"if",[[27,"is-equal",[[23,["view"]],"card"],null],"active"],null]]]],[9],[7,"i"],[11,"class","fa fa-square"],[11,"aria-hidden","true"],[9],[10],[3,"action",[[22,0,[]],"setView","card"]],[10],[7,"div"],[12,"class",[28,["action-bar__icon ",[27,"if",[[27,"is-equal",[[23,["view"]],"row"],null],"active"],null]]]],[9],[7,"i"],[11,"class","fa fa-bars"],[11,"aria-hidden","true"],[9],[10],[3,"action",[[22,0,[]],"setView","row"]],[10],[10],[10],[10],[7,"div"],[11,"class","subreddit__posts"],[9],[1,[21,"outlet"],false],[10],[10]],"hasEval":false}',meta:{moduleName:"craft-reddit/templates/subreddit.hbs"}})
e.default=t}),define("craft-reddit/templates/subreddit/favorites",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"py0JGovG",block:'{"symbols":["post"],"statements":[[4,"each",[[23,["favorites"]]],null,{"statements":[[1,[27,"post-card",null,[["postData","theme","type"],[[22,1,[]],"favorite",[23,["view"]]]]],false]],"parameters":[1]},{"statements":[[7,"div"],[11,"class","subreddit__warning"],[9],[0,"No favorites yet."],[10]],"parameters":[]}]],"hasEval":false}',meta:{moduleName:"craft-reddit/templates/subreddit/favorites.hbs"}})
e.default=t}),define("craft-reddit/templates/subreddit/index",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"4XA01lrW",block:'{"symbols":["post"],"statements":[[4,"each",[[23,["posts"]]],null,{"statements":[[1,[27,"post-card",null,[["postData","type"],[[22,1,[]],[23,["view"]]]]],false]],"parameters":[1]},null]],"hasEval":false}',meta:{moduleName:"craft-reddit/templates/subreddit/index.hbs"}})
e.default=t}),define("craft-reddit/config/environment",[],function(){try{var e="craft-reddit/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),a={default:JSON.parse(unescape(t))}
return Object.defineProperty(a,"__esModule",{value:!0}),a}catch(r){throw new Error('Could not read config from meta tag with name "'+e+'".')}})
runningTests||require("craft-reddit/app").default.create({name:"craft-reddit",version:"0.0.0+313a17de"})
