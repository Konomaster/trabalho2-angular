import { Injectable } from '@angular/core';
import { Pessoa } from '../Pessoa';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PessoaService {
  private apiUrl="http://localhost:3000/pessoas"

  httpOptions={
    headers: new HttpHeaders({'Content-Type':'application/json'})
  }
  constructor(private http: HttpClient) { }

  getPessoas(): Observable<Pessoa[]>{
    return this.http.get<Pessoa[]>(this.apiUrl).pipe(
      catchError(this.handleError<Pessoa[]>('getPessoas',[]))
    );
  }

  getPessoa(id: number): Observable<Pessoa>{
    return this.http.get<Pessoa>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError<Pessoa>(`getPessoa id=${id}`))
    );

  }

  addPessoa(pessoa: Pessoa): Observable<Pessoa>{
    return this.http.post<Pessoa>(this.apiUrl,pessoa,this.httpOptions).pipe(
      catchError(this.handleError<Pessoa>('addPessoa'))
    );
  }

  deletarPessoa(id: Number): Observable<Pessoa>{
    return this.http.delete<Pessoa>(`${this.apiUrl}/${id}`,this.httpOptions).pipe(
      catchError(this.handleError<Pessoa>('deletarPessoa'))
    );
  }

  atualizarPessoa(pessoa: Pessoa): Observable<any>{
    return this.http.put(`${this.apiUrl}/${pessoa.id}`,pessoa,this.httpOptions).
    pipe(
      catchError(this.handleError<any>(`atualizarPessoa id=${pessoa.id}`))
    )
  }

  private handleError<T>(operation='operation',result?:T){
    return (error: any): Observable<T> =>{
      console.log(error);

      //this.log
      return of (result as T);
    };
  }
}
