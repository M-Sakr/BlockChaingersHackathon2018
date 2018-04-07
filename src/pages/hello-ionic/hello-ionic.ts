import { Component } from '@angular/core';
import { ToastController } from 'ionic-angular';
import { NavController, NavParams } from 'ionic-angular';

import { ListPage } from '../list/list';
import { Identity1Page } from '../identity1/identity1';
import { RecoverPage } from '../recover/recover';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
   loginFlag = false;
  constructor(public toastCtrl: ToastController,public navCtrl: NavController, public navParams: NavParams) { 
    
  }
  signup(event) {
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
    this.navCtrl.push(Identity1Page, {
      
    });
  }
  

}
