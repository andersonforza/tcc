import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WebcamModule } from 'ngx-webcam';

import { AppComponent } from './app.component';
import { CameraComponent } from './views/camera/camera.component';
import { ResultComponent } from './views/result/result.component';
import { UploadComponent } from './views/upload/upload.component';


@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    CameraComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    WebcamModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
