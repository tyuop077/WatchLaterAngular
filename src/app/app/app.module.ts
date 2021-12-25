import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { HeaderComponent } from '../components/header/header.component';
import { HeaderButtonComponent } from '../components/header-button/header-button.component';
import { ToggleGroupComponent } from '../components/toggle-group/toggle-group.component';
import { ImageUploaderComponent } from '../components/image-uploader/image-uploader.component';
import { FormButtonComponent } from '../components/form-button/form-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderButtonComponent,
    ToggleGroupComponent,
    ImageUploaderComponent,
    FormButtonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
