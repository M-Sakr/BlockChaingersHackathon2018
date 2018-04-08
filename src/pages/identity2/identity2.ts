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
    let shar = ["1-624ad90d8c67b43f0086b164b706174d66c7af57d2d07fca060886ccef1f4f25",
 "2-c495b21b18c02024fb04a914b8088e2aed60a77aaa623c8891005b5a8c1b1b76",
  "3-26e08b28a5188c0af582a0c4b90b050873f99f9d81f3f9471bf82fe82916e69e"];
    this.alldataProvider
          .requestSharding()
          .then(result => {
            this.loader.dismiss();
            console.log("success",result);
            this.navCtrl.push(Backup2Page, { 
              param1: shar  
            });
              
           })
          .catch(error => {
            console.log("error",error);
            this.loader.dismiss();   
            this.navCtrl.push(Backup2Page, { 
              param1: shar  
            });       
          }
          );
              
  }

}
