import {Injectable} from '@angular/core'

//import {Observable} from 'rxjs/Observable'
//import 'rxjs/add/operator/map'
//import 'rxjs/add/operator/catch'
import { map } from 'rxjs/operators'

import {Product} from '../card-product/card-product.model'
import { Produto } from '../model/Produto';
import { from } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class CartService {

    constructor(){}

    items: Produto[] = []

    addItem(item:Produto){
        this.items.push(item)
        sessionStorage.setItem("cart",JSON.stringify(this.items))
    }

    removeItem(Produto){
        this.items.splice(this.items.indexOf(Produto), 1)
        //salva na sessão
        sessionStorage.setItem("cart",JSON.stringify(this.items))   
    }
    
    total() :number{
        return this.items
        .map(item => item.valor.value)
        .reduce((prev, value)=> prev+value, 0)
    }
    totalIns():number{
         return this.items
        .map(item => item.valor.installmentValue)
        .reduce((prev, value)=> prev+value, 0)   
    }
    installment():number{
        return Math.max.apply(
            Math,this.items
            .map(function(prod){
            return prod.valor.installments;
        }))
    }
}