import {Injector } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import { VideosProvider as Videos } from '../../providers/videos/videos';
export class BasePage {
  navCtrl: NavController
  navParams: NavParams
  modalCtrl:ModalController
  constructor(injector: Injector) {
    this.navCtrl = injector.get(NavController);
    this.navParams = injector.get(NavParams);
    this.modalCtrl = injector.get(ModalController);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BasePage');
  }
  openModal(page:string,data:any){
    let playVideo = this.modalCtrl.create(page,data);
    playVideo.present();
  }
  onLoad(type:string):Promise<any[]>{
    return new Promise((resolve,reject)=>{
      Videos.onLoad(type)
      .then(data=>resolve(data));
    })
    
  }
}
