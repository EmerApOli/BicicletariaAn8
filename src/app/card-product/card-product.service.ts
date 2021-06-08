import {Injectable} from '@angular/core'
//import {Http} from '@angular/http'
import { HttpClient, HttpParams } from '@angular/common/http';
//import {Observable} from 'rxjs/Observable'
//import 'rxjs/add/operator/map'
//import 'rxjs/add/operator/catch'

import {Product} from './card-product.model'

//import {ErrorHandler} from '../app.error-handler'
import { AppConstants } from '../app-constants'
import { Observable } from 'rxjs';
import { Produto } from '../model/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

    constructor(private http: HttpClient){}

    getProdutoList(): Observable<any> {
      return this.http.get<any>(AppConstants.baseUrlprod);
    }


    getProdutoListPage(pagina): Observable<any> {
      return this.http.get<any>(AppConstants.baseUrlprod + 'page/' + pagina);
    }


    consultarProdutoPoPage(nome: String, page: Number): Observable<any> {
      return this.http.get(AppConstants.baseUrlprod + "produtoPorNome/" + nome + "/page/" + page);
  
    }
    getProduto(id): Observable<any> {
      return this.http.get<any>(AppConstants.baseUrlprod + id);
    }
  

   }

    //getProdutoList(): Observable<Product> {
     // return this.http.get<Product>(AppConstants.baseUrlprod)
      //.map(response => response.json())
      //  .catch(ErrorHandler.handleError)
    


