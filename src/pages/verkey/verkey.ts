import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlldataProvider } from '../../providers/alldata/alldata';


/**
 * Generated class for the VerkeyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-verkey',
  templateUrl: 'verkey.html',
})
export class VerkeyPage {
  didkey:string;

  constructor(public navCtrl: NavController, public navParams: NavParams,public alldataProvider:AlldataProvider) {
    this.didkey=alldataProvider.gettdidkey();
    console.log("get did ",this.didkey);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VerkeyPage');
  }

}
