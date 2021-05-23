import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Fornecedor } from 'src/app/model/Fornecedor';
import { Produto } from 'src/app/model/Produto';
import { ProdutoService } from 'src/app/service/produto.service';
import { async } from '@angular/core/testing';
import { element } from 'protractor';
import { environment } from '../../../../environments/environment.prod';

@Component({
  selector: 'app-produto-add',
  templateUrl: './produto-add.component.html',
  styleUrls: ['./produto-add.component.css']
})
export class ProdutoAddComponent implements OnInit {
  produto = new Produto();

  fornecedores : Array<Fornecedor>;
 

  constructor(private routeActive: ActivatedRoute, private produtoService: ProdutoService) {
  }


  ngOnInit() {
    
    this.produtoService.getFornecedorList().subscribe(data => {
      this.fornecedores = data.content;
    });
     

    let id = this.routeActive.snapshot.paramMap.get('id');

    if (id != null) {
      this.produtoService.getProduto(id).subscribe(data => {
        this.produto = data;
        console.log(this.produto);
      });

    }

  }


  salvarProduto() {


    if (this.produto.id != null && this.produto.id.toString().trim() != null) { /* Atualizando ou Editando*/
      this.produtoService.updateProduto(this.produto).subscribe(data => {
       
        console.info("Fornecedor Atualizado: " + data);
      });
    } else {
      this.produtoService.salvarProduto(this.produto).subscribe(data => { /*Salvando um novo User */
       
        console.info("Gravou User: " + data);
      });
    }
  }


 /* deletarTelefone(id, i) {

    if (id == null) {
      this.fornecedor.telefones.splice(i, 1);
      return;
    }


    if (id !== null && confirm("Deseja remover?")) {

      this.fornecedorService.removerTelefonte(id).subscribe(data => {

        this.fornecedor.telefones.splice(i, 1);

      });
    }
  }


  addFone() {

    if (this.fornecedor.telefones === undefined) {
      this.fornecedor.telefones = new Array<Telefone>();
    }

    this.fornecedor.telefones.push(this.telefone);
    this.telefone = new Telefone();

  }

  novo() {
    
    this.telefone = new Telefone();
  }*/

}
