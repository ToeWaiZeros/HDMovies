import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PublicAgentPage } from './public-agent';

@NgModule({
  declarations: [
    PublicAgentPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(PublicAgentPage),
  ],
})
export class PublicAgentPageModule {}
