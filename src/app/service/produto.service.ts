import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConstants } from '../app-constants';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) {
  }

  getProdutoList(): Observable<any> {
    return this.http.get<any>(AppConstants.baseUrlprod);
  }

  

  getProdutoListPage(pagina): Observable<any> {
    return this.http.get<any>(AppConstants.baseUrlprod + 'page/' + pagina);
  }


  getProduto(id): Observable<any> {
    return this.http.get<any>(AppConstants.baseUrlprod + id);
  }


  deletarProduto(id: Number): Observable<any> {
    return this.http.delete(AppConstants.baseUrl + id, { responseType: 'text' });
  }


  //http://localhost:8080/cursospringrestapi/usuario/usuarioPorNome/alex
  consultarProduto(nome: String): Observable<any> {
    return this.http.get(AppConstants.baseUrlprod + "produtoPorNome/" + nome);

  }


  consultarProdutoPoPage(nome: String, page: Number): Observable<any> {
    return this.http.get(AppConstants.baseUrlprod + "produtoPorNome/" + nome + "/page/" + page);

  }



  salvarProduto(produto): Observable<any> {
    return this.http.post<any>(AppConstants.baseUrlprod, produto);
  }

  updateProduto(produto): Observable<any> {
    return this.http.put<any>(AppConstants.baseUrlprod, produto);
  }



  removerTelefonte(id): Observable<any> {
    return this.http.delete(AppConstants.baseUrlprod + "removerTelefone/" + id, { responseType: 'text' });
  }

  userAutenticado() {

    if (localStorage.getItem('token') !== null &&
      localStorage.getItem('token').toString().trim() !== null) {
      return true;
    } else {
      return false;
    }
  }


  downloadPdfRelatorio() {
    return this.http.get(AppConstants.baseUrl + 'relatorio', { responseType: 'text' }).subscribe(data => {
      document.querySelector('iframe').src = data;
    });
  }



    /*downloadPdfRelatorioParam(userreport : ProdutoReport) {

     return this.http.post(AppConstants.baseUrl + 'relatorio/', userreport , { responseType: 'text' }).subscribe(data => {
       document.querySelector('iframe').src = data;
     });
  }*/


  carregarGrafico() : Observable<any> {
    return this.http.get(AppConstants.baseUrl + 'grafico');
  }


 
}
