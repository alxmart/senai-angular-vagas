import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TesteluizComponent } from './testeluiz/testeluiz.component';
import { Teste2Component } from './teste2/teste2.component';
import { MuralVagasComponent } from './mural-vagas/mural-vagas.component';

@NgModule({
  declarations: [
    AppComponent,
    MuralVagasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
