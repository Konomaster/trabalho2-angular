import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AppRoutingModule } from './app-routing.module';
import { Pagina2Component } from './pagina2/pagina2.component';

import { HttpClientModule } from '@angular/common/http';
import { Pagina3Component } from './pagina3/pagina3.component';
import { PessoaDetailComponent } from './pessoa-detail/pessoa-detail.component'

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    Pagina2Component,
    Pagina3Component,
    PessoaDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
