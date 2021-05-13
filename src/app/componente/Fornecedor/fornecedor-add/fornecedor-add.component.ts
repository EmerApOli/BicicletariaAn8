import { Component, OnInit, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/model/User';
import { UsuarioService } from 'src/app/service/usuario.service';
import { Telefone } from 'src/app/model/Telefone';
import { NgbDateParserFormatter, NgbDateStruct, NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';
import { Profissao } from 'src/app/model/Profissao';
import { Fornecedor } from '../../../model/Fornecedor';
import { FornecedorService } from '../../../service/fornecedor.service';


@Injectable()
export class FormatDateAdapter extends NgbDateAdapter<string> {

  readonly DELIMITER = '/';

  fromModel(value: string | null): NgbDateStruct | null {
    if (value) {
      let date = value.split(this.DELIMITER);
      return {
        day: parseInt(date[0], 10),
        month: parseInt(date[1], 10),
        year: parseInt(date[2], 10)
      };
    }
    return null;
  }


  toModel(date: NgbDateStruct | null): string | null {
    return date ? date.day + this.DELIMITER + date.month + this.DELIMITER + date.year : null;
  }


}


@Injectable()
export class FormataData extends NgbDateParserFormatter {

  readonly DELIMITER = '/'; // 18/10/1987



  parse(value: string): NgbDateStruct | null {

    if (value) {
      let date = value.split(this.DELIMITER);
      return {
        day: parseInt(date[0], 10),
        month: parseInt(date[1], 10),
        year: parseInt(date[2], 10)
      };
    }
    return null;
  }

  format(date: NgbDateStruct): string | null {

    return date ? validarDia(date.day) + this.DELIMITER + validarDia(date.month) + this.DELIMITER + date.year : '';
  }

  toModel(date: NgbDateStruct | null): string | null {
    return date ? date.day + this.DELIMITER + date.month + this.DELIMITER + date.year : null;
  }

}


function validarDia(valor) {
  if (valor.toString !== '' && parseInt(valor) <= 9) {
    return '0' + valor;
  } else {
    return valor;
  }
}


@Component({
  selector: 'app-root',
  templateUrl: './fornecedor-add.component.html',
  styleUrls: ['./fornecedor-add.component.css'],
  providers: [{ provide: NgbDateParserFormatter, useClass: FormataData },
  { provide: NgbDateAdapter, useClass: FormatDateAdapter }]
})
export class FornecedorAddComponent implements OnInit {

  fornecedor = new Fornecedor();


  profissoes : Array<Profissao>;

  constructor(private routeActive: ActivatedRoute, private fornecedorService: FornecedorService) {
  }


  ngOnInit() {
  
     

    let id = this.routeActive.snapshot.paramMap.get('id');

    if (id != null) {
      this.fornecedorService.getFornecedor(id).subscribe(data => {
        this.fornecedor = data;
        console.log(this.fornecedor);
      });

    }

  }


  salvarFornecedor() {


    if (this.fornecedor.id != null && this.fornecedor.id.toString().trim() != null) { /* Atualizando ou Editando*/
      this.fornecedorService.updateFornecedor(this.fornecedor).subscribe(data => {
       
        console.info("Fornecedor Atualizado: " + data);
      });
    } else {
      this.fornecedorService.salvarFornecedor(this.fornecedor).subscribe(data => { /*Salvando um novo User */
       
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

