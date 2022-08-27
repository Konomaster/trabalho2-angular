import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.component.html',
  styleUrls: ['./pagina2.component.css']
})
export class Pagina2Component implements OnInit {

  imagens:string[]=[]

  constructor() { }

  ngOnInit(): void {
  }

  addImage(imgName: string): void{
    imgName=imgName.trim()
    if (imgName){
    this.imagens.push("./assets/"+imgName)
    }
  }

  deleteImage(imgName:string):void{
    imgName=imgName.trim()
    if(imgName){
    for (let i = 0 ; i<this.imagens.length; i++){
      if (this.imagens[i]=="./assets/"+imgName){
        console.log("index: "+i)
        this.imagens.splice(i,1)
        break
      }
    }
  }
}
}
