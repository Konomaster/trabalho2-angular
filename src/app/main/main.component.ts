import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  isShowing: Boolean = false
  h2:string='Você está na página principal'
  constructor(private router: Router,private location: Location) { }
  
  ngOnInit(): void {
    //aqui tambem vai ser onde muda propriedade que fala qual tela ta
    this.router.events.subscribe(() => {    
      if (this.location.path()===''){
      this.isShowing=true
      this.h2='Você está na página principal'
    }else{
      this.isShowing=false
    }
    if (this.location.path()==='/imagens'){
      this.h2='Você está na página de imagens'
    }
    else if(this.location.path()==='/pessoas'){
      this.h2='Você está na página de listagem de pessoas'
    }
    else if (this.location.path().includes('/detail')){
      this.h2='Você está na página de detalhes'
    }
  })

    
  }

}
