/*
 2018/8/14 孙
 */
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-mouth-word',
  templateUrl: 'mouth-word.html',
})
export class MouthWordPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MouthWordPage');
  }

}
