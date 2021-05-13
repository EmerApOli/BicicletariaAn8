import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AppConstants } from '../app-constants';
import { Observable } from 'rxjs';

import { UserReport } from '../model/UserReport';
import { Fornecedor } from '../model/Fornecedor';

@Injectable({
  providedIn: 'root'
})
export class FornecedorService {


  constructor(private http: HttpClient) {
  }

  getFornecedorList(): Observable<any> {
    return this.http.get<any>(AppConstants.baseUrlfor);
  }

  


  getFornecedorListPage(pagina): Observable<any> {
    return this.http.get<any>(AppConstants.baseUrlfor + 'page/' + pagina);
  }


  getFornecedor(id): Observable<any> {
    return this.http.get<any>(AppConstants.baseUrlfor + id);
  }


  deleteFornecedor(id: Number): Observable<any> {
    return this.http.delete(AppConstants.baseUrlfor + id, { responseType: 'text' });
  }


  //http://localhost:8080/cursospringrestapi/usuario/usuarioPorNome/alex
  consultarFornecedor(nome: String): Observable<any> {
    return this.http.get(AppConstants.baseUrlfor + "fornecedorPorNome/" + nome);

  }


  consultarFornecedorPoPage(nome: String, page: Number): Observable<any> {
    return this.http.get(AppConstants.baseUrlfor + "fornecedorPorNome/" + nome + "/page/" + page);

  }



  salvarFornecedor(fornecedor): Observable<any> {
    return this.http.post<any>(AppConstants.baseUrlfor, fornecedor);
  }

  updateFornecedor(fornecedor): Observable<any> {
    return this.http.put<any>(AppConstants.baseUrlfor, fornecedor);
  }

  //updateUsuario(user): Observable<any> {
  //  return this.http.put<any>(AppConstants.baseUrl, user);
  //}


  removerTelefonte(id): Observable<any> {
    return this.http.delete(AppConstants.baseUrlfor + "removerTelefone/" + id, { responseType: 'text' });
  }

  /*userAutenticado() {

    if (localStorage.getItem('token') !== null &&
      localStorage.getItem('token').toString().trim() !== null) {
      return true;
    } else {
      return false;
    }
  }*/


  downloadPdfRelatorio() {
    return this.http.get(AppConstants.baseUrlfor + 'relatorio', { responseType: 'text' }).subscribe(data => {
      document.querySelector('iframe').src = data;
    });
  }



    downloadPdfRelatorioParam(userreport : UserReport) {

     return this.http.post(AppConstants.baseUrlfor + 'relatorio/', userreport , { responseType: 'text' }).subscribe(data => {
       document.querySelector('iframe').src = data;
     });
  }


  carregarGrafico() : Observable<any> {
    return this.http.get(AppConstants.baseUrlfor + 'grafico');
  }


 

}
