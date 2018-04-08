import { Component } from '@angular/core';
import { ToastController } from 'ionic-angular';
import { NavController, NavParams } from 'ionic-angular';

import { ListPage } from '../list/list';
import { Identity1Page } from '../identity1/identity1';
import { RecoverPage } from '../recover/recover';
import { AlldataProvider } from '../../providers/alldata/alldata';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
   loginFlag = false;
   loader : any;
   items:any;
  constructor(public toastCtrl: ToastController,public loadingCtrl:LoadingController,
    public navCtrl: NavController, public navParams: NavParams,private alldataProvider: AlldataProvider) { 
      this.items =[];
  }
  ngOnInit() {
    

  }
  signup(event) {
    this.requestWallet();
    this.loginFlag = true;
    console.log(event, this.loginFlag );
    let toast = this.toastCtrl.create({
      message: 'you clicked login button.',
      duration: 3000,
      position: 'top'
    });
    toast.present();
  };
  Login(event) {
    this.loginFlag = false;
  };
  recover(){
    this.navCtrl.push(RecoverPage, {
      
    });
  }
  createIdinity(event) {
    this.presentLoading();
    this.requestWallet();
    this.navCtrl.push(Identity1Page, {
      
    });
  }
  presentLoading() {
    this.loader = this.loadingCtrl.create({
       content: "Please wait...",
      // duration: 3000
     });
     this.loader.present();    
   }
   requestWallet(){


    this.alldataProvider
          .createWallet()
          .then(result => {
            this.loader.dismiss();
            console.log("success",result);
            this.items = result;
            this.alldataProvider.setvarkey(result.verkey,result.did);       
           })
          .catch(error => {
            console.log("error",error);
            this.loader.dismiss();          
          }
          );
              
  }
}
