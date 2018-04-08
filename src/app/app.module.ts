import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { Identity1Page } from '../pages/identity1/identity1';
import { Identity2Page } from '../pages/identity2/identity2';
import { Backup2Page } from '../pages/backup2/backup2';
import { AvatarPage } from '../pages/avatar/avatar';
import { RecoverPage } from '../pages/recover/recover';
import { VerkeyPage } from '../pages/verkey/verkey';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AlldataProvider } from '../providers/alldata/alldata';
import { QRCodeModule } from 'angularx-qrcode';
import { HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    Identity1Page,
    Identity2Page,
    Backup2Page,
    AvatarPage,RecoverPage,VerkeyPage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    QRCodeModule,
    IonicModule.forRoot(MyApp, {
      scrollAssist: true,
      autoFocusAssist: true
      })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    Identity1Page,
    Identity2Page,
    Backup2Page,
    AvatarPage,RecoverPage,VerkeyPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AlldataProvider
  ]
})
export class AppModule {}
