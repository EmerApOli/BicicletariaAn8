import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/model/Pedido';
import { PedidoService } from 'src/app/service/pedido.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

   
  pedidos: Array<Pedido[]>;
  nome: String;
  total: number;
  p: number;

  constructor(private pedidoService: PedidoService) { }

  ngOnInit() {

    this.pedidoService.getPedidoList().subscribe(data => {
      this.pedidos = data.content;
      this.total = data.totalElements;
    });

  }


  deletePedido(id: Number, index) {

    if (confirm('Deseja mesmo remover?')) {

      this.pedidoService.deletarPedido(id).subscribe(data => {
        //console.log("Retorno do método delete : " + data);

        this.pedidos.splice(index, 1); /*Remover da tela*/

        // this.usuarioService.getStudentList().subscribe(data => {
        //  this.students = data;
        // });

      });
    }
  }

  consultarPedido() {

    if (this.nome === '') {
      this.pedidoService.getPedidoList().subscribe(data => {
        this.pedidos = data.content;
        this.total = data.totalElements;
      });
    } else {

      this.pedidoService.consultarPedido(this.nome).subscribe(data => {
        this.pedidos = data.content;
        this.total = data.totalElements;
      });
    }
  }




  carregarPagina(pagina) {


    if (this.nome !== '') {
      this.pedidoService.consultarUserPoPage(this.nome, (pagina - 1)).subscribe(data => {
        this.pedidos = data.content;
        this.total = data.totalElements;
      });
    }
    else {
      this.pedidoService.getStudentListPage(pagina - 1).subscribe(data => {
        this.pedidos = data.content;
        this.total = data.totalElements;
      });
    }

  }


  imprimeRelatorio() {
    return this.pedidoService.downloadPdfRelatorio();
  }


}
