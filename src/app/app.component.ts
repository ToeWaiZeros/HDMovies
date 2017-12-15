import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import Parse from 'parse';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: string = 'DeflorationPage';

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    Parse.initialize('jq7Bjwz5It12WyTQU8TAr2iTphnfmybmf4f78cQo','t2Di8iUKDtes3hZ7ky0d2ABCU5lpkjv9XhbmvcUp');
    Parse.serverURL ='https://parseapi.back4app.com/';
  
    this.initializeApp();

    this.pages = [
      { title: 'Defloration', component: 'DeflorationPage' },
      { title: 'Public Agent', component: 'PublicAgentPage' }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
