import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pagina2Component } from './pagina2/pagina2.component';
import { Pagina3Component } from './pagina3/pagina3.component';
import { PessoaDetailComponent } from './pessoa-detail/pessoa-detail.component';
const routes: Routes=[
  {path: 'imagens', component: Pagina2Component},
  {path: 'pessoas',component:Pagina3Component},
  {path: 'detail/:id', component:PessoaDetailComponent}
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
