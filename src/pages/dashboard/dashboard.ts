/*
 2018/8/14 孙
 */
import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, Slides} from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})

export class DashboardPage {
  @ViewChild(Slides) slides: Slides;
  searchContent:string;
  bannerList = [];
  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.searchContent = "蚂蚁森林";
    this.bannerList.push({src:"assets/imgs/banner1.png"});
    this.bannerList.push({src:"assets/imgs/banner2.png"});
    this.bannerList.push({src:"assets/imgs/banner4.png"});
  }
  doRefresh(refresher) {
    setTimeout(() => {
      refresher.complete();
    }, 2000);
  }
}
