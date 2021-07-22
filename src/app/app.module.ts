import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {storeProvider} from './redux/app.store'
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [storeProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
