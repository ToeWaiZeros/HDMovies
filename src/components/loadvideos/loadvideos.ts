import { Component,Input } from '@angular/core';


@Component({
  selector: 'loadvideos',
  templateUrl: 'loadvideos.html'
})
export class LoadvideosComponent {
  text: string;
  @Input('videos') videos;
  constructor() {
    console.log('Hello LoadvideosComponent Component');
  }

}
