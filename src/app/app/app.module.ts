import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { HeaderComponent } from '../components/header/header.component';
import { HeaderButtonComponent } from '../components/header-button/header-button.component';
import { ToggleGroupComponent } from '../components/toggle-group/toggle-group.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderButtonComponent,
    ToggleGroupComponent
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
