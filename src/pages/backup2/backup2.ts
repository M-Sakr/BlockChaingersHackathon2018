import { Component,ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Slides } from 'ionic-angular';
import { AvatarPage } from '../avatar/avatar';

/**
 * Generated class for the Backup2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-backup2',
  templateUrl: 'backup2.html',
})

export class Backup2Page {

  @ViewChild(Slides) slides: Slides;
  parameter1 =[];
  mydata=[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.parameter1 = navParams.get('param1'); 
    console.log("my param",this.parameter1);
    this.mydata= [
      {text:"Do you want to share a part of your recovery key with the Red Cross ",index:"",id:1,code:""}
      ,{text:"Save the SECOND recovery code of your ID",index:"",id:2,code:this.parameter1[1]},
      {text:"Save the THIRD recovery code of your ID",index:"",id:3,code:this.parameter1[2]}
    ];
  }
 

  goToSlide() {
    this.slides.slideNext();
  }
  goToBack(){
    this.slides.slidePrev();
  }
  Backup(){
    this.navCtrl.push(AvatarPage, {      
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Backup2Page');
  }

}
