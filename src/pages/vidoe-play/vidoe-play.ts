import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VideosProvider as Videos } from '../../providers/videos/videos'
import { DomSanitizer } from '@angular/platform-browser';
@IonicPage()
@Component({
  selector: 'page-vidoe-play',
  templateUrl: 'vidoe-play.html',
})
export class VidoePlayPage {
  videos:Videos;
  iframe:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,private sanitized: DomSanitizer) {
    this.videos = this.navParams.get('video');
    
  }
  getUrl(){
    return this.sanitized.bypassSecurityTrustResourceUrl(this.videos.Iframe);
  }

}
