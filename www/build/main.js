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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__identity1_identity1__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__recover_recover__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_alldata_alldata__ = __webpack_require__(32);
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
    function HelloIonicPage(toastCtrl, loadingCtrl, navCtrl, navParams, alldataProvider) {
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alldataProvider = alldataProvider;
        this.loginFlag = false;
        this.items = [];
    }
    HelloIonicPage.prototype.ngOnInit = function () {
    };
    HelloIonicPage.prototype.signup = function (event) {
        this.requestWallet();
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
        this.presentLoading();
        this.requestWallet();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__identity1_identity1__["a" /* Identity1Page */], {});
    };
    HelloIonicPage.prototype.presentLoading = function () {
        this.loader = this.loadingCtrl.create({
            content: "Please wait...",
        });
        this.loader.present();
    };
    HelloIonicPage.prototype.requestWallet = function () {
        var _this = this;
        this.alldataProvider
            .createWallet()
            .then(function (result) {
            _this.loader.dismiss();
            console.log("success", result);
            _this.items = result;
            _this.alldataProvider.setvarkey(result.verkey, result.did);
        })
            .catch(function (error) {
            console.log("error", error);
            _this.loader.dismiss();
        });
    };
    HelloIonicPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-hello-ionic',template:/*ion-inline-start:"/Users/mostafasakr/Ionic Applications/BlockChaingersHackathon2018/BlockChaingersHackathon2018/src/pages/hello-ionic/hello-ionic.html"*/'<!--ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Hello Ionic</ion-title>\n  </ion-navbar>\n</ion-header-->\n\n\n<ion-content style="overflow-y: scroll;">\n  <!--div class="center">\n    <img src="assets/imgs/phone1.png" border="0" width="160%" height= 160% alt="" class="img_ad">\n  <p class="descreption">This is an Universal Beneficiary Identity.\n    Add Your Identity to ensure that you are up to date with all of your objective.\n    You can do this.\n  </p>\n  </div>\n  \n    <p style="color:white;" class="_center signin">Already Signed up ? <span style="color:white;" (click)="Login($event)"> Login</span> </p>\n    <button ion-button full  large class="createId signin">Create Identity</button-->    \n      <ion-grid style="width:100%  ;padding: 0;height:100%;overflow-y: scroll;    height: 100vh;">\n        <ion-row responsive-sm style="width:100% ; height:15vh">\n        </ion-row>\n        <ion-row style="width:100% ;height: 11vh; background-color: white;" >\n            <ion-col col-3>\n              </ion-col>\n          <ion-col col-5 class="center">\n            <img  src="assets/imgs/510logo.png" border="0" alt="" class="img_ad">\n          </ion-col>\n          <ion-col col-3>\n          </ion-col>\n        </ion-row>\n        <ion-row style="width:100% ; height:35vh;  padding-top: 6%;">\n            <ion-col col-1>\n              </ion-col>\n          <ion-col col-10>\n              <p *ngIf="!loginFlag" class="descreption">This app contains your Universal Beneficiary Identity. \n                </p>   \n                <p *ngIf="!loginFlag" class="descreption"> \n                    You can use it to receive aid from various humanitarian organisations\n                  </p>       \n              \n                <ion-list *ngIf="loginFlag">\n\n                  <!--ion-item class="loginInput">\n                    <ion-label fixed>Username</ion-label>\n                    <ion-input type="text" value="" placeholder="Enter your username"></ion-input>\n                  </ion-item>\n                \n                  <ion-item class="loginInput" >\n                    <ion-label fixed>Password</ion-label>\n                    <ion-input type="password" placeholder="Enter the password"></ion-input>\n                  </ion-item-->\n                  <div class="mnText"><span>Username</span></div>\n                <ion-item class="borders loginInput">\n                  <ion-input type="text" placeholder="Enter your username" ></ion-input>\n                </ion-item> \n                <div class="mnText"><span>Password</span></div>\n                <ion-item class="borders loginInput">\n                  <ion-input type="password" placeholder="Enter the password" ></ion-input>\n                </ion-item> \n                \n                </ion-list> \n          </ion-col>\n          <ion-col col-1>\n          </ion-col>\n        </ion-row>\n       \n        \n        <ion-row style="width:100% ; height:25vh">\n              <!--p *ngIf="!loginFlag" style="color:white; margin-bottom: 0px;" class="_center signin">Already Signed up ? <span style="color:white;" (click)="signup($event)"> Login</span> </p-->\n              <p style="color:#205666; margin-bottom: 0px;" class="_center signin" (click)="recover()">Or Recover your Id? </p>\n              <button *ngIf="!loginFlag" ion-button full  button-full large class="createId signin" (click)="createIdinity($event)">Create Identity</button>                    \n              <p style="color:gray; margin-bottom: 0px;    font-size: 14px;" class="_center signin" >powered by <span style="color:#488aff;">tykn.tech </span></p>\n              <!--p *ngIf="loginFlag" style="color:white; margin-bottom: 0px;" class="_center signin">Not Signed up  Yet? <span style="color:white;" (click)="Login($event)"> Sign Up</span> </p>\n              <button *ngIf="loginFlag" ion-button full  button-full large class="createId signin">Login</button-->                    \n            </ion-row>\n      </ion-grid>      \n    </ion-content>\n\n'/*ion-inline-end:"/Users/mostafasakr/Ionic Applications/BlockChaingersHackathon2018/BlockChaingersHackathon2018/src/pages/hello-ionic/hello-ionic.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_alldata_alldata__["a" /* AlldataProvider */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__identity2_identity2__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_alldata_alldata__ = __webpack_require__(32);
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
    function Identity1Page(navCtrl, navParams, viewCtrl, alldataProvider, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.alldataProvider = alldataProvider;
        this.toastCtrl = toastCtrl;
        this.name = '';
        this.dob = '';
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
        console.log("name", this.name, this.dob);
        this.alldataProvider.setName(this.name, this.dob);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__identity2_identity2__["a" /* Identity2Page */], {});
    };
    Identity1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-identity1',template:/*ion-inline-start:"/Users/mostafasakr/Ionic Applications/BlockChaingersHackathon2018/BlockChaingersHackathon2018/src/pages/identity1/identity1.html"*/'<!--\n  Generated template for the Identity1Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <!--ion-title style="color: #1C65E9 !important">Welcome Screen</ion-title-->\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n  <ion-grid style="width:100% ; height:100vh  ;padding: 0;">\n    <ion-row style="width:100% ; height:15vh">\n    </ion-row>\n    <ion-row style="width:100% ; height:13vh">\n        <ion-col col-3>\n        </ion-col>\n        <ion-col col-6 class="" style="text-align: -webkit-center;">\n          <div class="takephoto">\n          <ion-icon class="cicon" ios="ios-camera" md="md-camera"></ion-icon>\n          <div style="margin-bottom: 13px;"> <span style="color:red">take a photo</span></div>\n          </div>\n        </ion-col>\n      <ion-col col-3>\n      </ion-col>\n    </ion-row>\n    <ion-row style="width:100% ; height:7vh">\n    </ion-row>\n    <ion-row style="width:100% ; height:14vh">\n        <ion-col col-1>\n          </ion-col>\n      <ion-col col-10 class="">\n          <ion-list>\n              <div class="mnText"><span class="cspan">Name</span></div>\n              <ion-item class="borders">\n                <ion-input type="text" [(ngModel)]="name" class="phoneInput" placeholder="Enter your full name"></ion-input>\n              </ion-item>    \n              <div class="mnText2 mnText"><span class="cspan">Date Of Birth</span></div>\n              <ion-item class="borders">\n                <ion-input type="text" [(ngModel)]="dob" class="phoneInput" placeholder="Enter your date of birth"></ion-input>\n              </ion-item>                     \n            </ion-list>      \n      </ion-col>\n      <ion-col col-1>\n        </ion-col>\n    </ion-row>\n    <ion-row style="width:100% ; height:11vh;">\n   \n    </ion-row>\n   \n    \n    <ion-row style="width:100% ; height:25vh">\n          <p style="color:grey; margin-bottom: 0px;" class="_center">Your info is stored only on this device</p>\n          <button ion-button full  button-full large class="next" (click)="gotoIdentity2($event)">Next</button>    \n          <p style="color:gray; margin-bottom: 0px;    font-size: 14px;" class="_center signin" >powered by <span style="color:#488aff;">tykn.tech </span></p>                                \n        </ion-row>\n  </ion-grid>   \n</ion-content>\n'/*ion-inline-end:"/Users/mostafasakr/Ionic Applications/BlockChaingersHackathon2018/BlockChaingersHackathon2018/src/pages/identity1/identity1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_alldata_alldata__["a" /* AlldataProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__backup2_backup2__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_alldata_alldata__ = __webpack_require__(32);
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
    function Identity2Page(navCtrl, loadingCtrl, navParams, toastCtrl, alldataProvider) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.alldataProvider = alldataProvider;
    }
    Identity2Page.prototype.presentLoading = function () {
        this.loader = this.loadingCtrl.create({
            content: "Please wait...",
        });
        this.loader.present();
    };
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
        this.presentLoading();
        this.sharding();
    };
    Identity2Page.prototype.sharding = function () {
        var _this = this;
        this.alldataProvider
            .requestSharding()
            .then(function (result) {
            _this.loader.dismiss();
            console.log("success", result);
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__backup2_backup2__["a" /* Backup2Page */], {
                param1: result.shards
            });
        })
            .catch(function (error) {
            console.log("error", error);
            _this.loader.dismiss();
        });
    };
    Identity2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-identity2',template:/*ion-inline-start:"/Users/mostafasakr/Ionic Applications/BlockChaingersHackathon2018/BlockChaingersHackathon2018/src/pages/identity2/identity2.html"*/'<!--\n  Generated template for the Identity1Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n      <!--ion-title style="color: #1C65E9 !important">Welcome Screen</ion-title-->\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content >\n    <ion-grid style="width:100% ; height:100vh  ;padding: 0;">\n      <ion-row style="width:100% ; height:11vh">\n      </ion-row>\n      <ion-row style="width:100% ; height:13vh">\n          <ion-col col-1>\n          </ion-col>\n        <ion-col col-10 class="center">\n        <h3 style="color:#205666;font-weight: bold;">Backup your Red Cross ID</h3>\n        </ion-col>\n        <ion-col col-1>\n        </ion-col>\n      </ion-row>\n      <ion-row style="width:100% ; height:2vh">\n      </ion-row>\n      <ion-row style="width:100% ; height:14vh">\n          <ion-col col-1>\n            </ion-col>\n        <ion-col col-10 class="">\n                  <div><p class="mycolor">Your ID backup consists of three recovery codes. Save one your self and share the other two with people you trust.</p></div>\n        </ion-col>\n        <ion-col col-1>\n          </ion-col>\n      </ion-row>\n      <ion-row style="width:100% ; height:14vh">\n          <ion-col col-1>\n            </ion-col>\n        <ion-col col-10 class="">\n                  <div><p class="mycolor">If you lose your phone you can recover your ID by bringing back the codes.</p>  </div>         \n        </ion-col>\n        <ion-col col-1>\n          </ion-col>\n      </ion-row>\n      <ion-row style="width:100% ; height:5vh;">\n     \n      </ion-row>\n     \n      \n      <ion-row style="width:100% ; height:25vh">\n            <p style="color:grey; margin-bottom: 0px;" class="_center">Skip for now</p>\n            <button ion-button full  button-full large class="next" (click)="gotoBackup2($event)">Start</button>    \n            <p style="color:gray; margin-bottom: 0px;    font-size: 14px;" class="_center signin" >powered by <span style="color:#488aff;">tykn.tech </span></p>                                \n          </ion-row>\n    </ion-grid>   \n  </ion-content>\n  '/*ion-inline-end:"/Users/mostafasakr/Ionic Applications/BlockChaingersHackathon2018/BlockChaingersHackathon2018/src/pages/identity2/identity2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__providers_alldata_alldata__["a" /* AlldataProvider */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__avatar_avatar__ = __webpack_require__(99);
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
        this.parameter1 = [];
        this.mydata = [];
        this.parameter1 = navParams.get('param1');
        console.log("my param", this.parameter1);
        this.mydata = [
            { text: "Do you want to share a part of your recovery key with the Red Cross ", index: "", id: 1, code: "" },
            { text: "Save the SECOND recovery code of your ID", index: "", id: 2, code: this.parameter1[1] },
            { text: "Save the THIRD recovery code of your ID", index: "", id: 3, code: this.parameter1[2] }
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Slides */])
    ], Backup2Page.prototype, "slides", void 0);
    Backup2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-backup2',template:/*ion-inline-start:"/Users/mostafasakr/Ionic Applications/BlockChaingersHackathon2018/BlockChaingersHackathon2018/src/pages/backup2/backup2.html"*/'<!--\n  Generated template for the BackupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n    </ion-navbar>\n  </ion-header>\n  \n  \n  <ion-content padding>\n      <ion-slides>\n          <ion-slide *ngFor="let data of mydata">\n\n              <ion-grid style="width:100% ; height:100vh  ;padding: 0;">\n                  <ion-row style="margin-top: 41px;width: 100%;height: 11vh;font-size: 17px;margin-bottom: -20px;">\n                      <ion-col col-3>\n                        </ion-col>\n                        <ion-col col-6> \n                            <ion-icon [ngClass]="{\'red\':data.id == 1 }" ios="ios-radio-button-on" md="md-radio-button-on"></ion-icon>\n                            <ion-icon [ngClass]="{\'red\':data.id == 2 }" ios="ios-radio-button-on" md="md-radio-button-on"></ion-icon>\n                            <ion-icon [ngClass]="{\'red\':data.id == 3}"  ios="ios-radio-button-on" md="md-radio-button-on"></ion-icon>\n                        </ion-col>\n                        <ion-col col-3>\n                        </ion-col> \n                  </ion-row>\n                  <ion-row style="width:100% ; height:13vh">\n                      <ion-col col-1>\n                      </ion-col>\n                    <ion-col col-10 class="center">\n                    <h3 style="color:#205666;font-weight: bold;">{{data.text}}</h3>\n                    </ion-col>\n                    <ion-col col-1>\n                    </ion-col>\n                  </ion-row>\n                  <ion-row style="width:100% ; height:2vh">\n                  </ion-row>\n                  <ion-row style="width:100% ; height:14vh">\n                      <ion-col col-1>\n                        </ion-col>\n                    <ion-col  *ngIf= "data.id !=1"  col-10 class="">\n                              <div><p class="mycolor">Safely store the below code somewhere <span style="font-weight:bold"> {{data.id}}/3</span></p></div>\n                    </ion-col>\n                    <ion-col col-10 class=""  *ngIf= "data.id ==1" >\n                        <div><p class="mycolor"> The Red Cross takes care of safekeeping of your part <span style="font-weight:bold"> {{data.id}}/3</span></p></div>\n                    </ion-col>\n                    <ion-col col-1>\n                      </ion-col>\n                  </ion-row>\n                  <ion-row style="width:100% ; height:7vh">\n                      <ion-col col-1>\n                        </ion-col>\n                    <ion-col col-10 class="">\n                              <div><p style="color:red;font-size: 12px;">{{data.code}}</p>  </div>         \n                    </ion-col>\n                    <ion-col col-1>\n                      </ion-col>\n                  </ion-row>\n                 \n                  <ion-row  style="width:100% ;height: 20vh;" >\n                      <ion-col col-3>\n                        </ion-col>\n                    <ion-col *ngIf= "data.id !=1"   col-5 class="center">\n                        <qrcode [qrdata]= "data.code" [size]="256" [level]="\'M\'"></qrcode >                    \n                        </ion-col>\n                    <ion-col col-3>\n                    </ion-col>\n                  </ion-row> \n                  <ion-row style="width:100% ; height:7vh">\n                      <ion-col col-4 class=""></ion-col>\n                      <ion-col *ngIf= "data.id !=1" col-4 class=""><span style="color:gray; font-size: 14px;" >share now</span></ion-col>\n                      <ion-col col-4 class=""></ion-col>\n                    </ion-row>              \n                  <ion-row *ngIf= "data.id==1" style="width:100% ; height:15vh">\n            \n                      <ion-col col-12 class="">\n                          <button ion-button full  button-full large  icon-right  large class="next" (click)="goToSlide()">\n                              yes                                     \n                            </button>\n                            <p style="color:grey; margin-bottom: 0px;font-size: 14px;" class="_center">No</p>\n\n                      </ion-col>\n                     \n                      </ion-row>\n                   <ion-row *ngIf= "data.id==2" style="width:100% ; height:15vh; ">\n                      <ion-col col-6 class="">\n                          <button ion-button full  button-full icon-left large class="next" (click)="goToBack()">\n                              <ion-icon   name="rewind"></ion-icon>\n                              Back\n                            </button>\n                      </ion-col>\n                   \n                      <ion-col col-6 class="">\n                          <button ion-button full  button-full icon-right  large class="next" (click)="goToSlide()">\n                              next\n                              <ion-icon  name="fastforward"></ion-icon>                         \n                            </button>\n                        </ion-col>\n                      </ion-row>\n\n                  <ion-row *ngIf= "data.id==3" style="width:100% ; height:15vh;  ">\n                      <ion-col col-6 class="">\n                          <button ion-button full  button-full icon-left large class="next" (click)="goToBack()">\n                              <ion-icon   name="rewind"></ion-icon>\n                              Back\n                            </button>\n                      </ion-col>\n \n                      <ion-col col-6 class="">\n                          <button ion-button full  button-full icon-right  large class="next" (click)="Backup()">\n                              BackUp                       \n                            </button>\n                        </ion-col>\n                     \n                      </ion-row>\n                      <ion-row style="width:100% ; height:5vh;">\n                          <p style="color:gray; margin-bottom: 0px;    font-size: 14px;" class="_center signin" >powered by <span style="color:#488aff;">tykn.tech </span></p>                                \n                        </ion-row>\n                </ion-grid> \n          </ion-slide>\n        \n        </ion-slides>\n  </ion-content>\n  '/*ion-inline-end:"/Users/mostafasakr/Ionic Applications/BlockChaingersHackathon2018/BlockChaingersHackathon2018/src/pages/backup2/backup2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], Backup2Page);
    return Backup2Page;
}());

//# sourceMappingURL=backup2.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], RecoverPage);
    return RecoverPage;
}());

//# sourceMappingURL=recover.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerkeyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_alldata_alldata__ = __webpack_require__(32);
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
 * Generated class for the VerkeyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VerkeyPage = (function () {
    function VerkeyPage(navCtrl, navParams, alldataProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alldataProvider = alldataProvider;
        this.didkey = alldataProvider.gettdidkey();
        console.log("get did ", this.didkey);
    }
    VerkeyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VerkeyPage');
    };
    VerkeyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-verkey',template:/*ion-inline-start:"/Users/mostafasakr/Ionic Applications/BlockChaingersHackathon2018/BlockChaingersHackathon2018/src/pages/verkey/verkey.html"*/'<!--\n  Generated template for the VerkeyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>verification</ion-title>\n    <ion-buttons end>\n        <button ion-button menuToggle icon-only >\n          <ion-icon name="options"></ion-icon>\n        </button>\n      </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n    <ion-grid style="width:100% ; height:100vh  ;padding: 0;">\n        <ion-row style="width:100% ; height:23vh"></ion-row>\n        <ion-row style="width:100% ; height:43vh">\n            <ion-col col-2>\n              </ion-col>\n          <ion-col col-8 class="center">\n            <div style="    margin-bottom: 21px;\n            text-align: center;\n            margin-top: 10px;\n            font-size: 18px;">\n            <span>verification key</span></div>\n              <qrcode [qrdata]= "didkey" [size]="256" [level]="\'M\'"></qrcode >                    \n              </ion-col>\n          <ion-col col-2>\n          </ion-col>\n        </ion-row>\n        <ion-row style="width:100% ; height:33vh"></ion-row>\n\n    </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/Users/mostafasakr/Ionic Applications/BlockChaingersHackathon2018/BlockChaingersHackathon2018/src/pages/verkey/verkey.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_alldata_alldata__["a" /* AlldataProvider */]])
    ], VerkeyPage);
    return VerkeyPage;
}());

//# sourceMappingURL=verkey.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ItemDetailsPage);
    return ItemDetailsPage;
}());

//# sourceMappingURL=item-details.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(230);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_hello_ionic_hello_ionic__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_item_details_item_details__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_identity1_identity1__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_identity2_identity2__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_backup2_backup2__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_avatar_avatar__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_recover_recover__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_verkey_verkey__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_alldata_alldata__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularx_qrcode__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_http__ = __webpack_require__(197);
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
                __WEBPACK_IMPORTED_MODULE_10__pages_avatar_avatar__["a" /* AvatarPage */], __WEBPACK_IMPORTED_MODULE_11__pages_recover_recover__["a" /* RecoverPage */], __WEBPACK_IMPORTED_MODULE_12__pages_verkey_verkey__["a" /* VerkeyPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_17__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_16_angularx_qrcode__["a" /* QRCodeModule */],
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
                __WEBPACK_IMPORTED_MODULE_10__pages_avatar_avatar__["a" /* AvatarPage */], __WEBPACK_IMPORTED_MODULE_11__pages_recover_recover__["a" /* RecoverPage */], __WEBPACK_IMPORTED_MODULE_12__pages_verkey_verkey__["a" /* VerkeyPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_15__providers_alldata_alldata__["a" /* AlldataProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_hello_ionic_hello_ionic__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_avatar_avatar__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_verkey_verkey__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(203);
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
            { title: 'Home Page', component: __WEBPACK_IMPORTED_MODULE_3__pages_avatar_avatar__["a" /* AvatarPage */] },
            { title: 'Backup your ID', component: __WEBPACK_IMPORTED_MODULE_2__pages_hello_ionic_hello_ionic__["a" /* HelloIonicPage */] },
            { title: 'Verfication key', component: __WEBPACK_IMPORTED_MODULE_4__pages_verkey_verkey__["a" /* VerkeyPage */] }
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/mostafasakr/Ionic Applications/BlockChaingersHackathon2018/BlockChaingersHackathon2018/src/app/app.html"*/'<ion-menu [content]="content" side="right">\n\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Pages</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/Users/mostafasakr/Ionic Applications/BlockChaingersHackathon2018/BlockChaingersHackathon2018/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__item_details_item_details__ = __webpack_require__(204);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlldataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
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
        this.url = 'http://149.210.250.124:9000/';
        console.log('Hello AlldataProvider Provider');
    }
    AlldataProvider.prototype.createWallet = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http
            .post(this.url + "create_identity", {}, options)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    AlldataProvider.prototype.requestSharding = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var data = JSON.stringify({
            seed: "!]{4Df9j`umwg7GOcZBc4QJ[YeUMYD!I"
        });
        return this.http
            .post(this.url + "secret_sharding", data, options)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    AlldataProvider.prototype.recoverKey = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var data = JSON.stringify({
            shards: ["1-ccb20402f19e2dd476ba1441c55c7f4dac43a28ed6307019a650a57b86f434c9",
                "2-99640805e32d134fe76b6eced4b55e2b78588de8b1221d27d19098b7bbc4e595"]
        });
        return this.http
            .post(this.url + "secret_recovery", data, options)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    AlldataProvider.prototype.test = function () {
        return this.http
            .get('https://tsh-app.firebaseio.com/events.json')
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    AlldataProvider.prototype.extractData = function (res) {
        var events = res.json();
        return events || {};
    };
    AlldataProvider.prototype.setvarkey = function (verkey, did) {
        this.verkey = verkey;
        this.did = did;
        console.log('set value from provider', this.verkey, this.did);
        this.verFlag = "unverfied";
    };
    AlldataProvider.prototype.setName = function (name, dob) {
        this.name = name;
        this.dob = dob;
        console.log('set value from provider', this.verkey, this.did);
    };
    AlldataProvider.prototype.gettvarkey = function () {
        return (this.verkey);
    };
    AlldataProvider.prototype.gettdidkey = function () {
        this.verFlag = "verified";
        return (this.did);
    };
    AlldataProvider.prototype.getname = function () {
        return (this.name);
    };
    AlldataProvider.prototype.getVerfication = function () {
        return (this.name);
    };
    AlldataProvider.prototype.setVerFlag = function () {
        return (this.verFlag);
    };
    AlldataProvider.prototype.getdob = function () {
        return (this.dob);
    };
    AlldataProvider.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    AlldataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]])
    ], AlldataProvider);
    return AlldataProvider;
}());

//# sourceMappingURL=alldata.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AvatarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_alldata_alldata__ = __webpack_require__(32);
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
    function AvatarPage(navCtrl, navParams, alldataProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alldataProvider = alldataProvider;
        this.name = '';
        this.dob = '';
        this.verFlag = 'unverified';
        this.verkey = this.alldataProvider.gettvarkey();
        console.log("get from provider", this.verkey);
        this.setName();
    }
    AvatarPage.prototype.setName = function () {
        this.name = this.alldataProvider.getname();
        this.dob = this.alldataProvider.getdob();
        this.verFlag = this.alldataProvider.setVerFlag();
    };
    AvatarPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AvatarPage');
    };
    AvatarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-avatar',template:/*ion-inline-start:"/Users/mostafasakr/Ionic Applications/BlockChaingersHackathon2018/BlockChaingersHackathon2018/src/pages/avatar/avatar.html"*/'<!--\n  Generated template for the AvatarPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n      <ion-title>verification</ion-title>\n      <ion-buttons end>\n          <button ion-button menuToggle icon-only >\n            <ion-icon name="options"></ion-icon>\n          </button>\n        </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n  \n\n\n<ion-content padding>\n\n    <ion-grid style="width:100% ; height:100vh  ;padding: 0;">\n        <ion-row style="margin-top: 41px;width: 100%;height: 6vh;font-size: 17px;margin-bottom: -20px;">\n            <ion-col col-2>\n              </ion-col>\n              <ion-col col-7> \n                  <span style="margin-left: 20px;">status: {{verFlag}}</span>\n                  <ion-icon [ngClass]="{\'red\':verFlag!=\'verified\', \'green\':verFlag==\'verified\'}"  ios="ios-radio-button-on" md="md-radio-button-on"></ion-icon>\n              </ion-col>\n              <ion-col col-3>\n              </ion-col> \n        </ion-row>\n        <ion-row style="width:100% ; height:18vh">\n            <ion-col col-2>\n            </ion-col>\n          <ion-col col-8 class="center">\n          <div>\n              <img src="assets/imgs/profile.jpg" class="mavatar">\n          </div>\n          \n          </ion-col>\n          <ion-col col-2>\n          </ion-col>\n        </ion-row>\n        <ion-row style="width:100% ; height:2vh;">\n        </ion-row>\n        <ion-row style="width:100% ; height:5vh;border-bottom: 2px solid #205666;margin-bottom: 24px;">\n            <ion-col col-4>\n              <span>Name:</span>\n              </ion-col>\n              <ion-col col-2>           \n              </ion-col>\n          <ion-col col-6 class="">\n            <span>{{name}}</span>\n          </ion-col>         \n        </ion-row>\n        <ion-row style="width:100% ; height:5vh;border-bottom: 2px solid #205666;margin-bottom: 24px;">\n            <ion-row style="width:100% ; height:14vh">\n                <ion-col col-4>\n                  <span>Date of Birth::</span>\n                  </ion-col>\n                  <ion-col col-2>           \n                  </ion-col>\n              <ion-col col-6 class="">\n                <span>{{dob}}</span>\n              </ion-col>         \n            </ion-row>\n        </ion-row>\n       \n        <ion-row style="width:100% ;height: 35vh;" >\n            <ion-col col-3>\n              </ion-col>\n          <ion-col col-5 class="center">\n            <qrcode [qrdata]= "verkey" [size]="256"  [level]="\'M\'"></qrcode >                    \n          </ion-col>\n          <ion-col col-3>\n          </ion-col>\n        </ion-row> \n                     \n       \n \n            <ion-row style="width:100% ; height:5vh;">\n                <p style="color:gray; margin-bottom: 0px;    font-size: 14px;" class="_center signin" >powered by <span style="color:#488aff;">tykn.tech </span></p>                                \n              </ion-row>\n      </ion-grid> \n</ion-content>\n'/*ion-inline-end:"/Users/mostafasakr/Ionic Applications/BlockChaingersHackathon2018/BlockChaingersHackathon2018/src/pages/avatar/avatar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_alldata_alldata__["a" /* AlldataProvider */]])
    ], AvatarPage);
    return AvatarPage;
}());

//# sourceMappingURL=avatar.js.map

/***/ })

},[206]);
//# sourceMappingURL=main.js.map