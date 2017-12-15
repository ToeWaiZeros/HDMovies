import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import Parse from 'parse';
@Injectable()
export class VideosProvider extends Parse.Object {

  constructor(public http: HttpClient) {
    super('Videos')
  }
  static onLoad(vType:string):Promise<VideosProvider[]>{
    return new Promise((resolve,reject)=>{
      let query = new Parse.Query(this);
      query.equalTo('type',vType)
      .descending('createdAt')
      .find().then(resolve,reject)
      ;
    });
  }
  get Key():string{
    return this.get('key');
  }
  get Type():string{
    return this.get('type');
  }
  get Name():string{
    return this.get('name');
  }
  get Iframe():string{
    return this.get('iframe');
  }
  get Image():Parse.File{
    return this.get('image').url();
  }
  
}
Parse.Object.registerSubclass('Videos',VideosProvider)