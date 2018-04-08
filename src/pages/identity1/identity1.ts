import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import { Identity2Page } from '../identity2/identity2';
import { AlldataProvider } from '../../providers/alldata/alldata';
import { NgModel } from '@angular/forms';
/**
 * Generated class for the Identity1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
import { ToastController } from 'ionic-angular';
@Component({
  selector: 'page-identity1',
  templateUrl: 'identity1.html',
})
export class Identity1Page {
  name: string = '';
  dob: string = '';

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, public viewCtrl :ViewController,
    private alldataProvider: AlldataProvider,
    public toastCtrl : ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Identity1Page');
    this.viewCtrl.setBackButtonText('Welcome Screen');
  }
  login(event) {
    let toast = this.toastCtrl.create({
      message: 'you clicked login button.',
      duration: 3000,
      position: 'top'
    });
    toast.present();
  };
  gotoIdentity2(event){
    console.log("name", this.name, this.dob);
    this.alldataProvider.setName(this.name,this.dob);
    this.navCtrl.push(Identity2Page, {      
    });
  }

}
