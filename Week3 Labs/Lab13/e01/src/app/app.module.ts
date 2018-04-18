import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UpperDirective } from './upper.directive';
import { MyvisibilityDirective } from './myvisibility.directive';


@NgModule({
  declarations: [
    AppComponent,
    UpperDirective,
    MyvisibilityDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
