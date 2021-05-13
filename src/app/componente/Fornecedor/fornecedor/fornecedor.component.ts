import { Component, OnInit } from '@angular/core';
import { Fornecedor } from 'src/app/model/Fornecedor';
import { FornecedorService } from 'src/app/service/fornecedor.service';
@Component({
  selector: 'app-fornecedor',
  templateUrl: './fornecedor.component.html',
  styleUrls: ['./fornecedor.component.css']
})
export class FornecedorComponent implements OnInit {
  fornecedores: Array<Fornecedor[]>;
  total: number;
  p: number;
  nome: String;
  constructor(private fornecedorService: FornecedorService) { }
  
  ngOnInit() {

    this.fornecedorService.getFornecedorList().subscribe(data => {
      this.fornecedores = data.content;
      this.total = data.totalElements;
    });

  }
  
  deleteFornecedor(id: Number, index) {

    if (confirm('Deseja mesmo remover?')) {

      this.fornecedorService.deleteFornecedor(id).subscribe(data => {
        //console.log("Retorno do método delete : " + data);

        this.fornecedores.splice(index, 1); /*Remover da tela*/

        // this.usuarioService.getStudentList().subscribe(data => {
        //  this.students = data;
        // });

      });
    }
  }

  consultarFornecedor() {

    if (this.nome === '') {
      this.fornecedorService.getFornecedorList().subscribe(data => {
        this.fornecedores = data.content;
        this.total = data.totalElements;
      });
    } else {

      this.fornecedorService.consultarFornecedor(this.nome).subscribe(data => {
        this.fornecedores = data.content;
        this.total = data.totalElements;
      });
    }
  }




  carregarPagina(pagina) {


    if (this.nome !== '') {
      this.fornecedorService.consultarFornecedorPoPage(this.nome, (pagina - 1)).subscribe(data => {
        this.fornecedores = data.content;
        this.total = data.totalElements;
      });
    }
    else {
      this.fornecedorService.getFornecedorListPage(pagina - 1).subscribe(data => {
        this.fornecedores = data.content;
        this.total = data.totalElements;
      });
    }

  }


  imprimeRelatorio() {
    return this.fornecedorService.downloadPdfRelatorio();
  }






}
