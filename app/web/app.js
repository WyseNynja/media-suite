System.registerDynamic("app/components/about/index.js",["app/components/about/about.component.js"],!0,function($__require,exports,module){"use strict";function __export(m){for(var p in m)exports.hasOwnProperty(p)||(exports[p]=m[p])}this||self;return __export($__require("app/components/about/about.component.js")),module.exports}),System.registerDynamic("app/components/home/index.js",["app/components/home/home.component.js"],!0,function($__require,exports,module){"use strict";function __export(m){for(var p in m)exports.hasOwnProperty(p)||(exports[p]=m[p])}this||self;return __export($__require("app/components/home/home.component.js")),module.exports}),System.registerDynamic("app/app.routing.js",["@angular/router","app/components/about/index.js","app/components/home/index.js"],!0,function($__require,exports,module){"use strict";var router_1=(this||self,$__require("@angular/router")),index_1=$__require("app/components/about/index.js"),index_2=$__require("app/components/home/index.js");return exports.ROUTES=[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",component:index_2.HomeComponent},{path:"about",component:index_1.AboutComponent}],exports.ROUTING=router_1.RouterModule.forRoot(exports.ROUTES),module.exports}),System.registerDynamic("app/app.component.js",["@angular/core","@angular/router"],!0,function($__require,exports,module){"use strict";var __decorate=(this||self,this&&this.__decorate||function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r}),__metadata=this&&this.__metadata||function(k,v){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(k,v)},core_1=$__require("@angular/core"),router_1=$__require("@angular/router"),AppComponent=function(){function AppComponent(router){this.router=router}return AppComponent=__decorate([core_1.Component({moduleId:module.id,selector:"my-app",styles:["\n    .clr-icon.clr-clarity-logo{background-image:url(../images/clarity_logo.svg)}\n  "],template:'\n    <!--\n      ~ Copyright (c) 2016 VMware, Inc. All Rights Reserved.\n      ~ This software is released under MIT license.\n      ~ The full license information can be found in LICENSE in the root directory of this project.\n      -->\n    <clr-main-container>\n        <clr-header>\n          <div class="branding">\n            <a href="#" class="nav-link">\n              <span class="clr-icon clr-clarity-logo"></span>\n              <span class="title">Clarity</span>\n            </a>\n          </div>\n          <form class="search">\n              <label for="search_input">\n                  <input id="search_input" type="text" placeholder="Search for Components...">\n              </label>\n          </form>\n          <div class="header-actions">\n          </div>\n        </clr-header>\n        <nav class="sub-nav" [clr-nav-level]="1">\n          <ul class="nav">\n            <li class="nav-item">\n              <a class="nav-link" href="#" [routerLink]="[\'/home\']"\n                 [class.active]="router.url===\'/home\' || router.url===\'/\'">Home</a>\n            </li>\n            <li class="nav-item">\n              <a class="nav-link" href="#" [routerLink]="[\'/about\']" [class.active]="router.url===\'/about\'">About</a>\n            </li>\n          </ul>\n        </nav>\n        <div class="content-container">\n          <div class="content-area">\n            <router-outlet></router-outlet>\n          </div>\n        </div>\n    </clr-main-container>\n  '}),__metadata("design:paramtypes",[router_1.Router])],AppComponent)}();return exports.AppComponent=AppComponent,module.exports}),System.registerDynamic("app/components/about/about.component.js",["@angular/core"],!0,function($__require,exports,module){"use strict";var __decorate=(this||self,this&&this.__decorate||function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r}),__metadata=this&&this.__metadata||function(k,v){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(k,v)},core_1=$__require("@angular/core"),AboutComponent=function(){function AboutComponent(){}return AboutComponent=__decorate([core_1.Component({moduleId:module.id,styles:["\n\n  "],template:'\n    <!--\n      ~ Copyright (c) 2016 VMware, Inc. All Rights Reserved.\n      ~ This software is released under MIT license.\n      ~ The full license information can be found in LICENSE in the root directory of this project.\n      -->\n    <p>This is a page to help demonstrate routing.</p>\n    <button class="btn btn-primary" (click)="open = true">Show modal</button>\n    <clr-modal [(clrModalOpen)]="open">\n      <h3 class="modal-title">I have a nice title</h3>\n      <div class="modal-body">\n        <p>But not much to say...</p>\n      </div>\n      <div class="modal-footer">\n        <button type="button" class="btn btn-outline" (click)="open = false">Cancel</button>\n        <button type="button" class="btn btn-primary" (click)="open = false">Ok</button>\n      </div>\n    </clr-modal>\n  '}),__metadata("design:paramtypes",[])],AboutComponent)}();return exports.AboutComponent=AboutComponent,module.exports}),System.registerDynamic("app/components/home/home.component.js",["@angular/core"],!0,function($__require,exports,module){"use strict";var __decorate=(this||self,this&&this.__decorate||function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r}),__metadata=this&&this.__metadata||function(k,v){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(k,v)},core_1=$__require("@angular/core"),HomeComponent=function(){function HomeComponent(){}return HomeComponent=__decorate([core_1.Component({moduleId:module.id,styles:["\n\n  "],template:'\n    <h2>Players</h2>\n    <ul>\n      <li><a href="/booksonic/">Audiobooks (Booksonic)</a></li>\n      <!-- todo: send to /plex/ instead of depending on the Internet -->\n      <li><a href="https://app.plex.tv/web/app">Movies and TV (Plex)</a></li>\n      <li><a href="/beets/">Music Manager (Beets)</a></li>\n    </ul>\n\n\n    <h2>Manual Search</h2>\n    <ul>\n      <li><a href="/hydra/">Usenet Search (NZB Hydra)</a></li>\n      <li><a href="/jackett/">Torrent Search (Jackett)</a></li>\n    </ul>\n\n\n    <h2>Automated Search</h2>\n    <ul>\n      <li><a href="/lazylibrarian/">Books (Lazy Librarian)</a></li>\n      <li><a href="/mylar/">Comics (Mylar)</a></li>\n      <li><a href="/couchpotato/">Movies (CouchPotato)</a></li>\n      <li><a href="/headphones/">Music (Headphones)</a></li>\n      <li><a href="/sonarr/">TV (Sonarr)</a></li>\n    </ul>\n\n\n    <h2>Downloaders</h2>\n    <ul>\n      <li><a href="/deluge/">Torrents (Deluge)</a></li>\n      <li><a href="/sabnzbd/">Usenet Downloader (SABnzbd)</a></li>\n    </ul>\n\n\n    <h2>Miscellaneous</h2>\n    <ul>\n      <li><a href="http://localhost:32400/web/index.html">Plex Direct</a></li>\n      <li><a href="/plexpy/">Plex Statistics (plexpy)</a></li>\n    </ul>\n  '}),__metadata("design:paramtypes",[])],HomeComponent)}();return exports.HomeComponent=HomeComponent,module.exports}),System.registerDynamic("app/app.module.js",["@angular/core","@angular/platform-browser","clarity-angular","app/app.routing.js","app/app.component.js","app/components/about/about.component.js","app/components/home/home.component.js"],!0,function($__require,exports,module){"use strict";var __decorate=(this||self,this&&this.__decorate||function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r}),__metadata=this&&this.__metadata||function(k,v){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(k,v)},core_1=$__require("@angular/core"),platform_browser_1=$__require("@angular/platform-browser"),clarity_angular_1=$__require("clarity-angular"),app_routing_1=$__require("app/app.routing.js"),app_component_1=$__require("app/app.component.js"),about_component_1=$__require("app/components/about/about.component.js"),home_component_1=$__require("app/components/home/home.component.js"),AppModule=function(){function AppModule(){}return AppModule=__decorate([core_1.NgModule({imports:[platform_browser_1.BrowserModule,clarity_angular_1.ClarityModule,app_routing_1.ROUTING],declarations:[app_component_1.AppComponent,about_component_1.AboutComponent,home_component_1.HomeComponent],bootstrap:[app_component_1.AppComponent]}),__metadata("design:paramtypes",[])],AppModule)}();return exports.AppModule=AppModule,module.exports}),System.registerDynamic("app/main.js",["@angular/platform-browser-dynamic","app/app.module.js"],!0,function($__require,exports,module){"use strict";var platform_browser_dynamic_1=(this||self,$__require("@angular/platform-browser-dynamic")),app_module_1=$__require("app/app.module.js");return platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule),module.exports});