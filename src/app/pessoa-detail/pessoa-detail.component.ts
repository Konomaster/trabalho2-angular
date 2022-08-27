import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pessoa } from '../Pessoa';
import { PessoaService } from '../services/pessoa.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-pessoa-detail',
  templateUrl: './pessoa-detail.component.html',
  styleUrls: ['./pessoa-detail.component.css']
})
export class PessoaDetailComponent implements OnInit {

  pessoa?: Pessoa

  constructor(private pService: PessoaService,private activatedRoute: ActivatedRoute,
    private location: Location) { }

  ngOnInit(): void {
    const id=Number(this.activatedRoute.snapshot.paramMap.get('id'))
    this.pService.getPessoa(id).subscribe((pessoa)=>{this.pessoa=pessoa})
  }

  atualizarPessoa(): void{
    if(this.pessoa){
      this.pService.atualizarPessoa(this.pessoa).subscribe(()=>{this.voltar()})
    }
  }

  voltar(): void{
    this.location.back()
  }

}
