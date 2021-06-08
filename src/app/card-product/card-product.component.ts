import { Component, OnInit } from '@angular/core';
import {Product} from './card-product.model';
import {ProductsService} from './card-product.service';
import {CartService} from '../cart/cart.service'
import {default as NProgress} from 'nprogress'
@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductComponent implements OnInit {

  products : Array<Product[]>;
  total: number;
  p: number;
  nome: String;
  constructor(private productsService: ProductsService, private cartService: CartService) { }
  //constructor() { }

  ngOnInit() {
   
   
    this.productsService.getProdutoList().subscribe(data => {
      this.productsService = data.content;
      this.total = data.totalElements;
    });
  
  
  }

  addCart(Product){
    NProgress.start()
    this.cartService.addItem(Product)
    NProgress.done()
  }

  carregarPagina(pagina) {


    if (this.nome !== '') {
      this.productsService.consultarProdutoPoPage(this.nome, (pagina - 1)).subscribe(data => {
        this.products = data.content;
        this.total = data.totalElements;
      });
    }
    else {
      this.productsService.getProdutoListPage(pagina - 1).subscribe(data => {
        this.products = data.content;
        this.total = data.totalElements;
      });
    }

  }




  
}
