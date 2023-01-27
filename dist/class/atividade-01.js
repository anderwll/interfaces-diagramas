"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = exports.Pedido = void 0;
class Pedido {
    get getValorTotal() {
        return this.valorToral;
    }
    constructor() {
        this.itens = [];
        this.valorToral = 0;
    }
    ;
    addItem(novoItem) {
        this.itens.push(novoItem);
        this.valorToral += novoItem.valor;
    }
}
exports.Pedido = Pedido;
;
class Item {
    constructor(valor, nome, descricao) {
        this.valor = valor;
        this.nome = nome;
        this.descricao = descricao;
    }
    ;
}
exports.Item = Item;
;
