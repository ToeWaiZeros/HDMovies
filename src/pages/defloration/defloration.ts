import { Component, Injector } from '@angular/core';
import { IonicPage} from 'ionic-angular';

import { VideosProvider as Videos } from '../../providers/videos/videos'
import { BasePage } from '../base/base';
@IonicPage()
@Component({
  selector: 'page-defloration',
  templateUrl: 'defloration.html',
})
export class DeflorationPage extends BasePage {
  videos : Videos[];
  constructor(injector: Injector) {
    super(injector);
    this.videos=[];
  }

  ionViewWillEnter() {
    this.onLoad('Defloration')
    .then(data=>this.videos=this.videos.concat(data));
  }
  
}
