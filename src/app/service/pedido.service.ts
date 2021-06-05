import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AppConstants } from '../app-constants';
import { Observable } from 'rxjs';
import { User } from '../model/User';
import { UserReport } from '../model/UserReport';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {


  constructor(private http: HttpClient) {
  }

  getPedidoList(): Observable<any> {
    return this.http.get<any>(AppConstants.baseUrlped);
  }


  getStudentListPage(pagina): Observable<any> {
    return this.http.get<any>(AppConstants.baseUrlped + 'page/' + pagina);
  }

  getPedido(id): Observable<any> {
    return this.http.get<any>(AppConstants.baseUrlped + id);
  }
 


  deletarPedido(id: Number): Observable<any> {
    return this.http.delete(AppConstants.baseUrlped + id, { responseType: 'text' });
  }


  //http://localhost:8080/cursospringrestapi/usuario/usuarioPorNome/alex
  consultarPedido(nome: String): Observable<any> {
    return this.http.get(AppConstants.baseUrlped + "usuarioPorNome/" + nome);

  }


  consultarUserPoPage(nome: String, page: Number): Observable<any> {
    return this.http.get(AppConstants.baseUrlped + "usuarioPorNome/" + nome + "/page/" + page);

  }



  salvarPedido(pedido): Observable<any> {
    return this.http.post<any>(AppConstants.baseUrlped, pedido);
  }

  updatePedido(pedido): Observable<any> {
    return this.http.put<any>(AppConstants.baseUrlped, pedido);
  }



  removerItemPedido(id): Observable<any> {
    return this.http.delete(AppConstants.baseUrlped + "removerItempedido/" + id, { responseType: 'text' });
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
    return this.http.get(AppConstants.baseUrlped + 'relatorio', { responseType: 'text' }).subscribe(data => {
      document.querySelector('iframe').src = data;
    });
  }



    downloadPdfRelatorioParam(userreport : UserReport) {

     return this.http.post(AppConstants.baseUrlped + 'relatorio/', userreport , { responseType: 'text' }).subscribe(data => {
       document.querySelector('iframe').src = data;
     });
  }


  carregarGrafico() : Observable<any> {
    return this.http.get(AppConstants.baseUrlped + 'grafico');
  }


 

}
