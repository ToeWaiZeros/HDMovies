import { BasePage } from './../base/base';
import { Component, Injector } from '@angular/core';
import { IonicPage} from 'ionic-angular';

import { VideosProvider as Videos } from '../../providers/videos/videos'
@IonicPage()
@Component({
  selector: 'page-public-agent',
  templateUrl: 'public-agent.html',
})
export class PublicAgentPage extends BasePage {
  videos : Videos[];
  constructor(injector:Injector) {
    super(injector);
    this.videos =[];
  }
  ionViewWillEnter() {
    this.onLoad('Public Agent')
    .then(data=>this.videos=this.videos.concat(data));
  }
  
}
