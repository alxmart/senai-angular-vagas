import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TesteluizComponent } from './testeluiz/testeluiz.component';
import { Teste2Component } from './teste2/teste2.component';

@NgModule({
  declarations: [
    AppComponent,
    TesteluizComponent,
    Teste2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
