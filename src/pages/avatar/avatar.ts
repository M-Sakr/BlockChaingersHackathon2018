import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlldataProvider } from '../../providers/alldata/alldata';
/**
 * Generated class for the AvatarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-avatar',
  templateUrl: 'avatar.html',
})
export class AvatarPage {
  verkey:string;
  name: string = '';
  dob: string = '';
  verFlag: string = 'unverified';
  constructor(public navCtrl: NavController, public navParams: NavParams,public alldataProvider:AlldataProvider) {
    this.verkey=this.alldataProvider.gettvarkey();
    console.log("get from provider",this.verkey);
    this.setName();
  }
setName(){
  this.name = this.alldataProvider.getname();
  this.dob = this.alldataProvider.getdob();
  this.verFlag = this.alldataProvider.setVerFlag();
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad AvatarPage');
  }

}
