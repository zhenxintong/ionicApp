import {Component} from '@angular/core';
import {DashboardPage} from "../dashboard/dashboard";
import {WealthPage} from "../wealth/wealth";
import {MouthWordPage} from "../mouth-word/mouth-word";
import {FriendsPage} from "../friends/friends";
import {MinePage} from "../mine/mine";


@Component({
  templateUrl: 'tabs.html',
  selector: 'tabs'
})
export class TabsPage {
  //首页
  dashboardRoot = DashboardPage;
  //财富
  wealthRoot = WealthPage;
  //口碑
  mouthWordRoot = MouthWordPage;
  //朋友
  friendsRoot = FriendsPage;
  //我的
  mineRoot = MinePage;

  constructor() {

  }
}
