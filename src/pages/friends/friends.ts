/*
 2018/8/14 孙
 */
import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-friends',
  templateUrl: 'friends.html',
})
export class FriendsPage {
  friendsList = [
    {src:"assets/imgs/friend1.png",title:"服务提醒(含支付助手)",content:"你有运动奖励待领取啦",date:"07:56",square:true},
    {src:"assets/imgs/friend2.png",title:"优酷VIP会员",content:"《一出好戏》《爱情公寓》近期上映高票房国产剧值得期待",date:"昨天",square:false},
    {src:"assets/imgs/friend3.png",title:"芝麻信用",content:"七夕，我们帮你把试衣间搬回家",date:"8月17日",square:true},
    {src:"assets/imgs/friend4.png",title:"TA",content:"你有新的朋友推荐",date:"8月3日",square:true},
    {src:"assets/imgs/friend5.png",title:"吱声团队",content:"",date:"2015年12月24日",square:false},
  ];

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

}
