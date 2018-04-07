import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { Backup2Page } from '../backup2/backup2';


/**
 * Generated class for the Identity2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-identity2',
  templateUrl: 'identity2.html',
})
export class Identity2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl : ToastController) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Identity2Page');
  }
  login(event) {
    let toast = this.toastCtrl.create({
      message: 'you clicked login button.',
      duration: 3000,
      position: 'top'
    });
    toast.present();
  };
  gotoBackup2(event){
    this.navCtrl.push(Backup2Page, {      
    });
  }

}
