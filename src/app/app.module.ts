import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FileUploadComponent } from './upload-file/file-upload/file-upload.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { PrimeiroComponenteComponent } from './subjects/primeiro-componente/primeiro-componente.component';
import { SegundoComponenteComponent } from './subjects/segundo-componente/segundo-componente.component';

@NgModule({
  declarations: [
    AppComponent,
    FileUploadComponent,
    PrimeiroComponenteComponent,
    SegundoComponenteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
