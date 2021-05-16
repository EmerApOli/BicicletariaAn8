import { Fornecedor } from './Fornecedor';
export class Produto {

id: Number;
lote:Number;
nome: String;
quantidade:Number;
valor: String;
fornecedor : Fornecedor = new Fornecedor();
}
