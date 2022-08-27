import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../Pessoa';
import { PessoaService } from '../services/pessoa.service';
@Component({
  selector: 'app-pagina3',
  templateUrl: './pagina3.component.html',
  styleUrls: ['./pagina3.component.css']
})
export class Pagina3Component implements OnInit {
  pessoas:Pessoa[]=[]

  constructor(private pService: PessoaService) { }

  ngOnInit(): void {
    this.getPessoas()
  }

  getPessoas():void{
    this.pService.getPessoas().subscribe((pessoas)=>this.pessoas=pessoas)
  }

  addPessoa(nome: string):void{
    nome=nome.trim()
    if (nome){
      this.pService.addPessoa({nome} as Pessoa).subscribe(pessoa =>
        {
          if (pessoa.id>0){
            this.pessoas.push(pessoa)
          }
          else{
            console.log("add falhou")
          }
        })
    }

  }

  deletarPessoa(pessoa: Pessoa){
    this.pService.deletarPessoa(pessoa.id).subscribe(() => {
      this.pessoas=this.pessoas.filter(p => p !== pessoa)
    })
  }
}
