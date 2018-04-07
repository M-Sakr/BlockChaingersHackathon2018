webpackJsonp([0],{

/***/ 111:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 153:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 153;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelloIonicPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__identity1_identity1__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__recover_recover__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HelloIonicPage = (function () {
    function HelloIonicPage(toastCtrl, navCtrl, navParams) {
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loginFlag = false;
    }
    HelloIonicPage.prototype.signup = function (event) {
        this.loginFlag = true;
        console.log(event, this.loginFlag);
        var toast = this.toastCtrl.create({
            message: 'you clicked login button.',
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    ;
    HelloIonicPage.prototype.Login = function (event) {
        this.loginFlag = false;
    };
    ;
    HelloIonicPage.prototype.recover = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__recover_recover__["a" /* RecoverPage */], {});
    };
    HelloIonicPage.prototype.createIdinity = function (event) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__identity1_identity1__["a" /* Identity1Page */], {});
    };
    HelloIonicPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-hello-ionic',template:/*ion-inline-start:"/Users/mostafasakr/Ionic Applications/BlockChaingersHackathon2018/BlockChaingersHackathon2018/src/pages/hello-ionic/hello-ionic.html"*/'<!--ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Hello Ionic</ion-title>\n  </ion-navbar>\n</ion-header-->\n\n\n<ion-content style="overflow-y: scroll;">\n  <!--div class="center">\n    <img src="assets/imgs/phone1.png" border="0" width="160%" height= 160% alt="" class="img_ad">\n  <p class="descreption">This is an Universal Beneficiary Identity.\n    Add Your Identity to ensure that you are up to date with all of your objective.\n    You can do this.\n  </p>\n  </div>\n  \n    <p style="color:white;" class="_center signin">Already Signed up ? <span style="color:white;" (click)="Login($event)"> Login</span> </p>\n    <button ion-button full  large class="createId signin">Create Identity</button-->    \n      <ion-grid style="width:100%  ;padding: 0;height:100%;overflow-y: scroll;    height: 100vh;">\n        <ion-row responsive-sm style="width:100% ; height:15vh">\n        </ion-row>\n        <ion-row style="width:100% ;height: 11vh; background-color: white;" >\n            <ion-col col-3>\n              </ion-col>\n          <ion-col col-5 class="center">\n            <img  src="assets/imgs/510logo.png" border="0" alt="" class="img_ad">\n          </ion-col>\n          <ion-col col-3>\n          </ion-col>\n        </ion-row>\n        <ion-row style="width:100% ; height:35vh;  padding-top: 6%;">\n            <ion-col col-1>\n              </ion-col>\n          <ion-col col-10>\n              <p *ngIf="!loginFlag" class="descreption">This app contains your Universal Beneficiary Identity. \n                </p>   \n                <p *ngIf="!loginFlag" class="descreption"> \n                    You can use it to receive aid from various humanitarian organisations\n                  </p>       \n              \n                <ion-list *ngIf="loginFlag">\n\n                  <!--ion-item class="loginInput">\n                    <ion-label fixed>Username</ion-label>\n                    <ion-input type="text" value="" placeholder="Enter your username"></ion-input>\n                  </ion-item>\n                \n                  <ion-item class="loginInput" >\n                    <ion-label fixed>Password</ion-label>\n                    <ion-input type="password" placeholder="Enter the password"></ion-input>\n                  </ion-item-->\n                  <div class="mnText"><span>Username</span></div>\n                <ion-item class="borders loginInput">\n                  <ion-input type="text" placeholder="Enter your username" ></ion-input>\n                </ion-item> \n                <div class="mnText"><span>Password</span></div>\n                <ion-item class="borders loginInput">\n                  <ion-input type="password" placeholder="Enter the password" ></ion-input>\n                </ion-item> \n                \n                </ion-list> \n          </ion-col>\n          <ion-col col-1>\n          </ion-col>\n        </ion-row>\n       \n        \n        <ion-row style="width:100% ; height:25vh">\n              <!--p *ngIf="!loginFlag" style="color:white; margin-bottom: 0px;" class="_center signin">Already Signed up ? <span style="color:white;" (click)="signup($event)"> Login</span> </p-->\n              <p style="color:#205666; margin-bottom: 0px;" class="_center signin" (click)="recover()">Or Recover your Id? </p>\n              <button *ngIf="!loginFlag" ion-button full  button-full large class="createId signin" (click)="createIdinity($event)">Create Identity</button>                    \n              <p style="color:gray; margin-bottom: 0px;    font-size: 14px;" class="_center signin" >powered by <span style="color:#488aff;">tykn.tech </span></p>\n              <!--p *ngIf="loginFlag" style="color:white; margin-bottom: 0px;" class="_center signin">Not Signed up  Yet? <span style="color:white;" (click)="Login($event)"> Sign Up</span> </p>\n              <button *ngIf="loginFlag" ion-button full  button-full large class="createId signin">Login</button-->                    \n            </ion-row>\n      </ion-grid>      \n    </ion-content>\n\n'/*ion-inline-end:"/Users/mostafasakr/Ionic Applications/BlockChaingersHackathon2018/BlockChaingersHackathon2018/src/pages/hello-ionic/hello-ionic.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], HelloIonicPage);
    return HelloIonicPage;
}());

//# sourceMappingURL=hello-ionic.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Identity1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__identity2_identity2__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the Identity1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

var Identity1Page = (function () {
    function Identity1Page(navCtrl, navParams, viewCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
    }
    Identity1Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Identity1Page');
        this.viewCtrl.setBackButtonText('Welcome Screen');
    };
    Identity1Page.prototype.login = function (event) {
        var toast = this.toastCtrl.create({
            message: 'you clicked login button.',
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    ;
    Identity1Page.prototype.gotoIdentity2 = function (event) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__identity2_identity2__["a" /* Identity2Page */], {});
    };
    Identity1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-identity1',template:/*ion-inline-start:"/Users/mostafasakr/Ionic Applications/BlockChaingersHackathon2018/BlockChaingersHackathon2018/src/pages/identity1/identity1.html"*/'<!--\n  Generated template for the Identity1Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <!--ion-title style="color: #1C65E9 !important">Welcome Screen</ion-title-->\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n  <ion-grid style="width:100% ; height:100vh  ;padding: 0;">\n    <ion-row style="width:100% ; height:15vh">\n    </ion-row>\n    <ion-row style="width:100% ; height:13vh">\n        <ion-col col-3>\n        </ion-col>\n      <ion-col col-6 class="center takephoto">\n      <ion-icon class="cicon" ios="ios-camera" md="md-camera"></ion-icon>\n      <div style="margin-bottom: 13px;"> <span style="color:red">take a photo</span></div>\n      </ion-col>\n      <ion-col col-3>\n      </ion-col>\n    </ion-row>\n    <ion-row style="width:100% ; height:7vh">\n    </ion-row>\n    <ion-row style="width:100% ; height:14vh">\n        <ion-col col-1>\n          </ion-col>\n      <ion-col col-10 class="">\n          <ion-list>\n              <div class="mnText"><span class="cspan">Name</span></div>\n              <ion-item class="borders">\n                <ion-input type="text" class="phoneInput" placeholder="Enter your full name"></ion-input>\n              </ion-item>    \n              <div class="mnText2 mnText"><span class="cspan">Date Of Birth</span></div>\n              <ion-item class="borders">\n                <ion-input type="text" class="phoneInput" placeholder="Enter your date of birth"></ion-input>\n              </ion-item>                     \n            </ion-list>      \n      </ion-col>\n      <ion-col col-1>\n        </ion-col>\n    </ion-row>\n    <ion-row style="width:100% ; height:11vh;">\n   \n    </ion-row>\n   \n    \n    <ion-row style="width:100% ; height:25vh">\n          <p style="color:grey; margin-bottom: 0px;" class="_center">Your info is stored only on this device</p>\n          <button ion-button full  button-full large class="next" (click)="gotoIdentity2($event)">Next</button>    \n          <p style="color:gray; margin-bottom: 0px;    font-size: 14px;" class="_center signin" >powered by <span style="color:#488aff;">tykn.tech </span></p>                                \n        </ion-row>\n  </ion-grid>   \n</ion-content>\n'/*ion-inline-end:"/Users/mostafasakr/Ionic Applications/BlockChaingersHackathon2018/BlockChaingersHackathon2018/src/pages/identity1/identity1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], Identity1Page);
    return Identity1Page;
}());

//# sourceMappingURL=identity1.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Identity2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__backup2_backup2__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the Identity2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Identity2Page = (function () {
    function Identity2Page(navCtrl, navParams, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
    }
    Identity2Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Identity2Page');
    };
    Identity2Page.prototype.login = function (event) {
        var toast = this.toastCtrl.create({
            message: 'you clicked login button.',
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    ;
    Identity2Page.prototype.gotoBackup2 = function (event) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__backup2_backup2__["a" /* Backup2Page */], {});
    };
    Identity2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-identity2',template:/*ion-inline-start:"/Users/mostafasakr/Ionic Applications/BlockChaingersHackathon2018/BlockChaingersHackathon2018/src/pages/identity2/identity2.html"*/'<!--\n  Generated template for the Identity1Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n      <!--ion-title style="color: #1C65E9 !important">Welcome Screen</ion-title-->\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content >\n    <ion-grid style="width:100% ; height:100vh  ;padding: 0;">\n      <ion-row style="width:100% ; height:11vh">\n      </ion-row>\n      <ion-row style="width:100% ; height:13vh">\n          <ion-col col-1>\n          </ion-col>\n        <ion-col col-10 class="center">\n        <h3 style="color:#205666;font-weight: bold;">Backup your Red Cross ID</h3>\n        </ion-col>\n        <ion-col col-1>\n        </ion-col>\n      </ion-row>\n      <ion-row style="width:100% ; height:2vh">\n      </ion-row>\n      <ion-row style="width:100% ; height:14vh">\n          <ion-col col-1>\n            </ion-col>\n        <ion-col col-10 class="">\n                  <div><p class="mycolor">Your ID backup consists of three recovery codes. Save one your self and share the other two with people you trust.</p></div>\n        </ion-col>\n        <ion-col col-1>\n          </ion-col>\n      </ion-row>\n      <ion-row style="width:100% ; height:14vh">\n          <ion-col col-1>\n            </ion-col>\n        <ion-col col-10 class="">\n                  <div><p class="mycolor">If you lose your phone you can recover your ID by bringing back the codes.</p>  </div>         \n        </ion-col>\n        <ion-col col-1>\n          </ion-col>\n      </ion-row>\n      <ion-row style="width:100% ; height:5vh;">\n     \n      </ion-row>\n     \n      \n      <ion-row style="width:100% ; height:25vh">\n            <p style="color:grey; margin-bottom: 0px;" class="_center">Skip for now</p>\n            <button ion-button full  button-full large class="next" (click)="gotoBackup2($event)">Start</button>    \n            <p style="color:gray; margin-bottom: 0px;    font-size: 14px;" class="_center signin" >powered by <span style="color:#488aff;">tykn.tech </span></p>                                \n          </ion-row>\n    </ion-grid>   \n  </ion-content>\n  '/*ion-inline-end:"/Users/mostafasakr/Ionic Applications/BlockChaingersHackathon2018/BlockChaingersHackathon2018/src/pages/identity2/identity2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], Identity2Page);
    return Identity2Page;
}());

//# sourceMappingURL=identity2.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Backup2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__avatar_avatar__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the Backup2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Backup2Page = (function () {
    function Backup2Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.mydata = [
            { text: "Save the FIRST recovery code of your ID", index: "", id: 1, code: "30t48890r509wf09dfj" },
            { text: "Save the SECOND recovery code of your ID", index: "", id: 2, code: "234uas8f7q342troiuuqrti" },
            { text: "Save the THIRD recovery code of your ID", index: "", id: 3, code: "390458dfijqsdfij34ropusf" }
        ];
    }
    Backup2Page.prototype.goToSlide = function () {
        this.slides.slideNext();
    };
    Backup2Page.prototype.goToBack = function () {
        this.slides.slidePrev();
    };
    Backup2Page.prototype.Backup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__avatar_avatar__["a" /* AvatarPage */], {});
    };
    Backup2Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Backup2Page');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Slides */])
    ], Backup2Page.prototype, "slides", void 0);
    Backup2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-backup2',template:/*ion-inline-start:"/Users/mostafasakr/Ionic Applications/BlockChaingersHackathon2018/BlockChaingersHackathon2018/src/pages/backup2/backup2.html"*/'<!--\n  Generated template for the BackupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n    </ion-navbar>\n  </ion-header>\n  \n  \n  <ion-content padding>\n      <ion-slides>\n          <ion-slide *ngFor="let data of mydata">\n\n              <ion-grid style="width:100% ; height:100vh  ;padding: 0;">\n                  <ion-row style="margin-top: 41px;width: 100%;height: 11vh;font-size: 17px;margin-bottom: -20px;">\n                      <ion-col col-3>\n                        </ion-col>\n                        <ion-col col-6> \n                            <ion-icon [ngClass]="{\'red\':data.id == 1 }" ios="ios-radio-button-on" md="md-radio-button-on"></ion-icon>\n                            <ion-icon [ngClass]="{\'red\':data.id == 2 }" ios="ios-radio-button-on" md="md-radio-button-on"></ion-icon>\n                            <ion-icon [ngClass]="{\'red\':data.id == 3}"  ios="ios-radio-button-on" md="md-radio-button-on"></ion-icon>\n                        </ion-col>\n                        <ion-col col-3>\n                        </ion-col> \n                  </ion-row>\n                  <ion-row style="width:100% ; height:13vh">\n                      <ion-col col-1>\n                      </ion-col>\n                    <ion-col col-10 class="center">\n                    <h3 style="color:#205666;font-weight: bold;">{{data.text}}</h3>\n                    </ion-col>\n                    <ion-col col-1>\n                    </ion-col>\n                  </ion-row>\n                  <ion-row style="width:100% ; height:2vh">\n                  </ion-row>\n                  <ion-row style="width:100% ; height:14vh">\n                      <ion-col col-1>\n                        </ion-col>\n                    <ion-col col-10 class="">\n                              <div><p class="mycolor">Safely store the below code somewhere <span style="font-weight:bold"> {{data.id}}/3</span></p></div>\n                    </ion-col>\n                    <ion-col col-1>\n                      </ion-col>\n                  </ion-row>\n                  <ion-row style="width:100% ; height:7vh">\n                      <ion-col col-1>\n                        </ion-col>\n                    <ion-col col-10 class="">\n                              <div><p style="color:red">{{data.code}}</p>  </div>         \n                    </ion-col>\n                    <ion-col col-1>\n                      </ion-col>\n                  </ion-row>\n                 \n                  <ion-row style="width:100% ;height: 15vh;" >\n                      <ion-col col-3>\n                        </ion-col>\n                    <ion-col col-5 class="center">\n                      <img  style="width: 74%;" src="assets/imgs/qr-code.png" border="0" alt="" class="img_ad">\n                    </ion-col>\n                    <ion-col col-3>\n                    </ion-col>\n                  </ion-row> \n                  <ion-row style="width:100% ; height:7vh">\n                      <ion-col col-4 class=""></ion-col>\n                      <ion-col col-4 class=""><span style="color:gray; font-size: 14px;" >share now</span></ion-col>\n                      <ion-col col-4 class=""></ion-col>\n                    </ion-row>              \n                  <ion-row *ngIf= "data.id==1" style="width:100% ; height:15vh">\n            \n                      <ion-col col-12 class="">\n                          <button ion-button full  button-full large  icon-right  large class="next" (click)="goToSlide()">\n                              next\n                              <ion-icon  name="fastforward"></ion-icon>                         \n                            </button>\n                      </ion-col>\n                     \n                      </ion-row>\n                   <ion-row *ngIf= "data.id==2" style="width:100% ; height:15vh; ">\n                      <ion-col col-6 class="">\n                          <button ion-button full  button-full icon-left large class="next" (click)="goToBack()">\n                              <ion-icon   name="rewind"></ion-icon>\n                              Back\n                            </button>\n                      </ion-col>\n                   \n                      <ion-col col-6 class="">\n                          <button ion-button full  button-full icon-right  large class="next" (click)="goToSlide()">\n                              next\n                              <ion-icon  name="fastforward"></ion-icon>                         \n                            </button>\n                        </ion-col>\n                      </ion-row>\n\n                  <ion-row *ngIf= "data.id==3" style="width:100% ; height:15vh;  ">\n                      <ion-col col-6 class="">\n                          <button ion-button full  button-full icon-left large class="next" (click)="goToBack()">\n                              <ion-icon   name="rewind"></ion-icon>\n                              Back\n                            </button>\n                      </ion-col>\n \n                      <ion-col col-6 class="">\n                          <button ion-button full  button-full icon-right  large class="next" (click)="Backup()">\n                              BackUp                       \n                            </button>\n                        </ion-col>\n                     \n                      </ion-row>\n                      <ion-row style="width:100% ; height:5vh;">\n                          <p style="color:gray; margin-bottom: 0px;    font-size: 14px;" class="_center signin" >powered by <span style="color:#488aff;">tykn.tech </span></p>                                \n                        </ion-row>\n                </ion-grid> \n          </ion-slide>\n        \n        </ion-slides>\n  </ion-content>\n  '/*ion-inline-end:"/Users/mostafasakr/Ionic Applications/BlockChaingersHackathon2018/BlockChaingersHackathon2018/src/pages/backup2/backup2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], Backup2Page);
    return Backup2Page;
}());

//# sourceMappingURL=backup2.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AvatarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AvatarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AvatarPage = (function () {
    function AvatarPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AvatarPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AvatarPage');
    };
    AvatarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-avatar',template:/*ion-inline-start:"/Users/mostafasakr/Ionic Applications/BlockChaingersHackathon2018/BlockChaingersHackathon2018/src/pages/avatar/avatar.html"*/'<!--\n  Generated template for the AvatarPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-grid style="width:100% ; height:100vh  ;padding: 0;">\n        <ion-row style="margin-top: 41px;width: 100%;height: 6vh;font-size: 17px;margin-bottom: -20px;">\n            <ion-col col-3>\n              </ion-col>\n              <ion-col col-6> \n                  <span style="margin-left: 20px;">status : verified</span>\n                  <ion-icon [ngClass]="{\'green\':1 == 1}"  ios="ios-radio-button-on" md="md-radio-button-on"></ion-icon>\n              </ion-col>\n              <ion-col col-3>\n              </ion-col> \n        </ion-row>\n        <ion-row style="width:100% ; height:18vh">\n            <ion-col col-2>\n            </ion-col>\n          <ion-col col-8 class="center">\n          <div>\n              <img src="assets/imgs/profile.jpg" class="mavatar">\n          </div>\n          \n          </ion-col>\n          <ion-col col-2>\n          </ion-col>\n        </ion-row>\n        <ion-row style="width:100% ; height:2vh;">\n        </ion-row>\n        <ion-row style="width:100% ; height:5vh;border-bottom: 2px solid #205666;margin-bottom: 24px;">\n            <ion-col col-4>\n              <span>Name:</span>\n              </ion-col>\n              <ion-col col-2>           \n              </ion-col>\n          <ion-col col-6 class="">\n            <span>Maria Ana</span>\n          </ion-col>         \n        </ion-row>\n        <ion-row style="width:100% ; height:5vh;border-bottom: 2px solid #205666;margin-bottom: 24px;">\n            <ion-row style="width:100% ; height:14vh">\n                <ion-col col-4>\n                  <span>Date of Birth::</span>\n                  </ion-col>\n                  <ion-col col-2>           \n                  </ion-col>\n              <ion-col col-6 class="">\n                <span>30-04-1990</span>\n              </ion-col>         \n            </ion-row>\n        </ion-row>\n       \n        <ion-row style="width:100% ;height: 35vh;" >\n            <ion-col col-3>\n              </ion-col>\n          <ion-col col-5 class="center">\n            <img  style="width: 100%;" src="assets/imgs/qr-code.png" border="0" alt="" class="img_ad">\n          </ion-col>\n          <ion-col col-3>\n          </ion-col>\n        </ion-row> \n                     \n       \n \n            <ion-row style="width:100% ; height:5vh;">\n                <p style="color:gray; margin-bottom: 0px;    font-size: 14px;" class="_center signin" >powered by <span style="color:#488aff;">tykn.tech </span></p>                                \n              </ion-row>\n      </ion-grid> \n</ion-content>\n'/*ion-inline-end:"/Users/mostafasakr/Ionic Applications/BlockChaingersHackathon2018/BlockChaingersHackathon2018/src/pages/avatar/avatar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], AvatarPage);
    return AvatarPage;
}());

//# sourceMappingURL=avatar.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the RecoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RecoverPage = (function () {
    function RecoverPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RecoverPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RecoverPage');
    };
    RecoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-recover',template:/*ion-inline-start:"/Users/mostafasakr/Ionic Applications/BlockChaingersHackathon2018/BlockChaingersHackathon2018/src/pages/recover/recover.html"*/'<!--\n  Generated template for the Identity1Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n      <!--ion-title style="color: #1C65E9 !important">Welcome Screen</ion-title-->\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content >\n    <ion-grid style="width:100% ; height:100vh  ;padding: 0;">\n      <ion-row style="width:100% ; height:11vh">\n      </ion-row>\n      <ion-row style="width:100% ; height:10vh">\n          <ion-col col-1>\n          </ion-col>\n        <ion-col col-10 class="center">\n        <h3 style="color:#205666;font-weight: bold;">Enter the recovery codes</h3>\n        </ion-col>\n        <ion-col col-1>\n        </ion-col>\n      </ion-row>\n      <ion-row style="width:100% ; height:2vh">\n      </ion-row>\n      <ion-row style="width:100% ; height:10vh">\n          <ion-col col-1>\n            </ion-col>\n        <ion-col col-10 class="">\n                  <div><p class="mycolor">Only two out of the trhee recovery codes are needed to recover your ID</p></div>\n        </ion-col>\n        <ion-col col-1>\n          </ion-col>\n      </ion-row>\n      <ion-row style="width:100% ; height:30vh">\n          <ion-col col-1>\n            </ion-col>\n        <ion-col col-10 class="">\n            <ion-list>\n                <div class="mnText"><span class="cspan">Recovery code 1</span></div>\n                <ion-item class="borders">\n                  <ion-input type="text" class="phoneInput" placeholder="Enter code or scan"></ion-input>\n                  <ion-icon name="ios-qr-scanner" item-end></ion-icon>\n                </ion-item>    \n                <div class="mnText2 mnText"><span class="cspan">Recovery code 2</span></div>\n                <ion-item class="borders">\n                  <ion-input type="text" class="phoneInput" placeholder="Enter code or scan"></ion-input>\n                  <ion-icon name="ios-qr-scanner" item-end></ion-icon>\n                </ion-item>                     \n              </ion-list>      \n        </ion-col>\n        <ion-col col-1>\n          </ion-col>\n      </ion-row>\n      <ion-row style="width:100% ; height:5vh;">\n     \n      </ion-row>\n     \n      \n      <ion-row style="width:100% ; height:25vh">\n            <button ion-button full  button-full large class="next" (click)="gotoBackup2($event)">Recover</button>    \n            <p style="color:gray; margin-bottom: 0px;    font-size: 14px;" class="_center signin" >powered by <span style="color:#488aff;">tykn.tech </span></p>                                \n          </ion-row>\n    </ion-grid>   \n  </ion-content>\n  '/*ion-inline-end:"/Users/mostafasakr/Ionic Applications/BlockChaingersHackathon2018/BlockChaingersHackathon2018/src/pages/recover/recover.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], RecoverPage);
    return RecoverPage;
}());

//# sourceMappingURL=recover.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__item_details_item_details__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListPage = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage.prototype.itemTapped = function (event, item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__item_details_item_details__["a" /* ItemDetailsPage */], {
            item: item
        });
    };
    ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/Users/mostafasakr/Ionic Applications/BlockChaingersHackathon2018/BlockChaingersHackathon2018/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>My First List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon name="{{item.icon}}" item-left></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-right>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/mostafasakr/Ionic Applications/BlockChaingersHackathon2018/BlockChaingersHackathon2018/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ItemDetailsPage = (function () {
    function ItemDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
    }
    ItemDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-item-details',template:/*ion-inline-start:"/Users/mostafasakr/Ionic Applications/BlockChaingersHackathon2018/BlockChaingersHackathon2018/src/pages/item-details/item-details.html"*/'<ion-header>\n  <ion-navbar>\n    <button menuToggle *ngIf="!selectedItem">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Item Details</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <h3 text-center *ngIf="selectedItem">\n    {{selectedItem.title}}\n    <ion-icon [name]="selectedItem.icon"></ion-icon>\n  </h3>\n  <h4 text-center *ngIf="selectedItem">\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </h4>\n</ion-content>\n'/*ion-inline-end:"/Users/mostafasakr/Ionic Applications/BlockChaingersHackathon2018/BlockChaingersHackathon2018/src/pages/item-details/item-details.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ItemDetailsPage);
    return ItemDetailsPage;
}());

//# sourceMappingURL=item-details.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(227);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_hello_ionic_hello_ionic__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_item_details_item_details__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_identity1_identity1__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_identity2_identity2__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_backup2_backup2__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_avatar_avatar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_recover_recover__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_alldata_alldata__ = __webpack_require__(278);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_hello_ionic_hello_ionic__["a" /* HelloIonicPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_item_details_item_details__["a" /* ItemDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_identity1_identity1__["a" /* Identity1Page */],
                __WEBPACK_IMPORTED_MODULE_8__pages_identity2_identity2__["a" /* Identity2Page */],
                __WEBPACK_IMPORTED_MODULE_9__pages_backup2_backup2__["a" /* Backup2Page */],
                __WEBPACK_IMPORTED_MODULE_10__pages_avatar_avatar__["a" /* AvatarPage */], __WEBPACK_IMPORTED_MODULE_11__pages_recover_recover__["a" /* RecoverPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {
                    scrollAssist: true,
                    autoFocusAssist: true
                }, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_hello_ionic_hello_ionic__["a" /* HelloIonicPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_item_details_item_details__["a" /* ItemDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_identity1_identity1__["a" /* Identity1Page */],
                __WEBPACK_IMPORTED_MODULE_8__pages_identity2_identity2__["a" /* Identity2Page */],
                __WEBPACK_IMPORTED_MODULE_9__pages_backup2_backup2__["a" /* Backup2Page */],
                __WEBPACK_IMPORTED_MODULE_10__pages_avatar_avatar__["a" /* AvatarPage */], __WEBPACK_IMPORTED_MODULE_11__pages_recover_recover__["a" /* RecoverPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_14__providers_alldata_alldata__["a" /* AlldataProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_hello_ionic_hello_ionic__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_list_list__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(platform, menu, statusBar, splashScreen) {
        this.platform = platform;
        this.menu = menu;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        // make HelloIonicPage the root (or first) page
        this.rootPage = __WEBPACK_IMPORTED_MODULE_2__pages_hello_ionic_hello_ionic__["a" /* HelloIonicPage */];
        this.initializeApp();
        // set our app's pages
        this.pages = [
            { title: 'Hello Ionic', component: __WEBPACK_IMPORTED_MODULE_2__pages_hello_ionic_hello_ionic__["a" /* HelloIonicPage */] },
            { title: 'My First List', component: __WEBPACK_IMPORTED_MODULE_3__pages_list_list__["a" /* ListPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // close the menu when clicking a link from the menu
        this.menu.close();
        // navigate to the new page if it is not the current page
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/mostafasakr/Ionic Applications/BlockChaingersHackathon2018/BlockChaingersHackathon2018/src/app/app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Pages</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/Users/mostafasakr/Ionic Applications/BlockChaingersHackathon2018/BlockChaingersHackathon2018/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlldataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the AlldataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AlldataProvider = (function () {
    function AlldataProvider(http) {
        this.http = http;
        console.log('Hello AlldataProvider Provider');
    }
    AlldataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], AlldataProvider);
    return AlldataProvider;
}());

//# sourceMappingURL=alldata.js.map

/***/ })

},[205]);
//# sourceMappingURL=main.js.map