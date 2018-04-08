import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { Backup2Page } from '../backup2/backup2';
import { AlldataProvider } from '../../providers/alldata/alldata';
import { LoadingController } from 'ionic-angular';


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
  loader : any;
  mydata:any;
  constructor(public navCtrl: NavController, public loadingCtrl:LoadingController,public navParams: NavParams, public toastCtrl : ToastController, private alldataProvider: AlldataProvider) {
    
  }
  presentLoading() {
    this.loader = this.loadingCtrl.create({
       content: "Please wait...",
      // duration: 3000
     });
     this.loader.present();    
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
    this.presentLoading();
    this.sharding();
  }

  sharding(){
    this.alldataProvider
          .requestSharding()
          .then(result => {
            this.loader.dismiss();
            console.log("success",result);
            this.navCtrl.push(Backup2Page, { 
              param1: result.shards   
            });
              
           })
          .catch(error => {
            console.log("error",error);
            this.loader.dismiss();          
          }
          );
              
  }

}
