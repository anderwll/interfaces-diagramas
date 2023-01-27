"use strict";
class Pedido {
    get getTotalPedido() {
        return this._totalPedido;
    }
    constructor() {
        this.itens = [];
        this._totalPedido = 0;
    }
    recuperarValorTotal() {
        return this.getTotalPedido;
    }
    aplicarDescontoEmReais(desconto) {
        if (this._totalPedido === 0) {
            console.log('Adicione itens no carrinho para aplicar desconto :)');
            return;
        }
        if (this._totalPedido < desconto) {
            console.log('Desconto não disponivel :(');
            return;
        }
        if (desconto <= 0) {
            console.log('Desconto não disponivel :(');
            return;
        }
        this._totalPedido -= desconto;
    }
    aplicarDescontoEmPorcentagem(desconto) {
        if (desconto > 100 || desconto <= 0) {
            console.log('Desconto não disponivel :(');
            return;
        }
        const porcentagem = desconto / 100;
        const descontoEmReais = this._totalPedido * porcentagem;
        this._totalPedido -= descontoEmReais;
    }
    removeItem(item) {
        const index = this.itens.findIndex((i) => i.nome === item);
        if (index === -1) {
            console.log('Não possui um item com esse nome :(');
        }
        this.itens.splice(index, 1);
        this._totalPedido -= this.itens[index].valor;
    }
    add(item) {
        this.itens.push(item);
        this._totalPedido += item.valor;
    }
}
class ItemPedido {
    constructor(valor, nome, quantidade) {
        this.valor = valor;
        this.nome = nome;
        this.quantidade = quantidade;
    }
    aplicarDescontoEmPorcentagem(desconto) {
        if (desconto > 100 || desconto <= 0) {
            console.log('Desconto não disponivel :(');
            return;
        }
        const porcentagem = desconto / 100;
        const descontoEmReais = this.valor * porcentagem;
        this.valor -= descontoEmReais;
    }
    recuperarValorTotal() {
        return this.valor * this.quantidade;
    }
    aplicarDescontoEmReais(desconto) {
        this.valor -= desconto;
    }
}
