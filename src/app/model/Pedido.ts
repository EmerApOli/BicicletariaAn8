import { Produto } from './Produto';
import { ItemPedido } from './ItemPedido';

export class Pedido {

    id: Number;
    ItemPedidos: Array<ItemPedido>;
    dataCad : String
}
