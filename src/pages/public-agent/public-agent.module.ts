import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PublicAgentPage } from './public-agent';

@NgModule({
  declarations: [
    PublicAgentPage,
  ],
  imports: [
    IonicPageModule.forChild(PublicAgentPage),
  ],
})
export class PublicAgentPageModule {}
