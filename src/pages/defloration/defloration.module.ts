import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DeflorationPage } from './defloration';
@NgModule({
  declarations: [
    DeflorationPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(DeflorationPage),
  ],
})
export class DeflorationPageModule {}
