import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/model/Pedido';
import { Telefone } from 'src/app/model/Telefone';
import { PedidoService } from 'src/app/service/pedido.service';
import { ItemPedido } from '../../../model/ItemPedido';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-pedido',
  templateUrl: './add-pedido.component.html',
  styleUrls: ['./add-pedido.component.css']
})
export class PedidoAdd implements OnInit {
  pedido = new Pedido();

  //telefone = new Telefone();

  ItemPedido = new ItemPedido();

  constructor(private routeActive: ActivatedRoute, private pedidoService: PedidoService) {
  }


  ngOnInit() {
  
   

    let id = this.routeActive.snapshot.paramMap.get('id');

    if (id != null) {
      this.pedidoService.getPedido(id).subscribe(data => {
        this.pedido = data;
        console.log(this.pedido);
      });

    }

  }


  salvarUser() {


    if (this.pedido.id != null && this.pedido.id.toString().trim() != null) { /* Atualizando ou Editando*/
      this.pedidoService.updatePedido(this.pedido).subscribe(data => {
        this.novo();
        console.info("User Atualizado: " + data);
      });
    } else {
      this.pedidoService.salvarPedido(this.pedido).subscribe(data => { /*Salvando um novo User */
        this.novo();
        console.info("Gravou User: " + data);
      });
    }
  }


  deletarTelefone(id, i) {

    if (id == null) {
      this.pedido.ItemPedidos.splice(i, 1);
      return;
    }


    if (id !== null && confirm("Deseja remover?")) {

      this.pedidoService.removerItemPedido(id).subscribe(data => {

        this.pedido.ItemPedidos.splice(i, 1);

      });
    }
  }


  addItem() {

    if (this.pedido.ItemPedidos === undefined) {
      this.pedido.ItemPedidos = new Array<ItemPedido>();
    }

    this.pedido.ItemPedidos.push(this.ItemPedido);
    this.pedido = new Pedido();

  }

  novo() {
    this.pedido = new Pedido();
    this.ItemPedido = new ItemPedido();
  }

}


