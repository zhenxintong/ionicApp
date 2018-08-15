import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WealthPage } from './wealth';

@NgModule({
  declarations: [
    WealthPage,
  ],
  imports: [
    IonicPageModule.forChild(WealthPage),
  ],
})
export class WealthPageModule {}
