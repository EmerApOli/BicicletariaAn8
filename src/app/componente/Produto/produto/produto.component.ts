import { Component, OnInit } from '@angular/core';

import { Produto } from '../../../model/Produto';
import { ProdutoService } from '../../../service/produto.service';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  produtos: Produto[] = [];
  produtocar: Produto[] = [];
   nome: String;
  total: number;
  p: number;

  constructor(private produtoService: ProdutoService) { }

  ngOnInit() {

    this.produtoService.getProdutoList().subscribe(data => {
      this.produtos = data.content;
      this.total = data.totalElements;
    });
 }


 /*addCart(produtos: Produto){
  onprogress.async()
  this.cartService.addItem(produtos)
 onprogress.toString();
}

addToCart(produtos: Produto) {

  console.log(this.produtos);
  this.cartService.addItem(this.produtos)
  
  }*/

 



  deleteProduto(id: Number, index) {

    if (confirm('Deseja mesmo remover?')) {

      this.produtoService.deletarProduto(id).subscribe(data => {
        //console.log("Retorno do método delete : " + data);

        this.produtos.splice(index, 1); /*Remover da tela*/

        // this.usuarioService.getStudentList().subscribe(data => {
        //  this.students = data;
        // });

      });
    }
  }

  consultarProduto() {

    if (this.nome === '') {
      this.produtoService.getProdutoList().subscribe(data => {
        this.produtos = data.content;
        this.total = data.totalElements;
      });
    } else {

      this.produtoService.consultarProduto(this.nome).subscribe(data => {
        this.produtos = data.content;
        this.total = data.totalElements;
      });
    }
  }




  carregarPagina(pagina) {


    if (this.nome !== '') {
      this.produtoService.consultarProdutoPoPage(this.nome, (pagina - 1)).subscribe(data => {
        this.produtos = data.content;
        this.total = data.totalElements;
      });
    }
    else {
      this.produtoService.getProdutoListPage(pagina - 1).subscribe(data => {
        this.produtos = data.content;
        this.total = data.totalElements;
      });
    }

  }


  imprimeRelatorio() {
    return this.produtoService.downloadPdfRelatorio();
  }

}
