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
  
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }
  mydata =[
    {text:"Save the FIRST recovery code of your ID",index:"",id:1,code:"30t48890r509wf09dfj"}
    ,{text:"Save the SECOND recovery code of your ID",index:"",id:2,code:"234uas8f7q342troiuuqrti"},
    {text:"Save the THIRD recovery code of your ID",index:"",id:3,code:"390458dfijqsdfij34ropusf"}
  ];
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
