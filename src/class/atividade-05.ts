interface Desconto {
  aplicarDescontoEmPorcentagem(desconto: number): void;
  recuperarValorTotal(): number;

}

interface ValorPedido {
  aplicarDescontoEmReais(desconto: number): void;
  removeItem(item: string): void;

}

class Pedido implements Desconto, ValorPedido {
  itens: ItemPedido[];
  private _totalPedido: number;

  get getTotalPedido() {
    return this._totalPedido
  }

  constructor() {
    this.itens = [];
    this._totalPedido = 0;
  }

  recuperarValorTotal(): number {
    return this.getTotalPedido
  }

  aplicarDescontoEmReais(desconto: number): void {
    if(this._totalPedido === 0) {
      console.log('Adicione itens no carrinho para aplicar desconto :)');
      return
    }

    if(this._totalPedido < desconto) {
      console.log('Desconto não disponivel :(');
      return
    }

    if(desconto  <= 0) {
      console.log('Desconto não disponivel :(');
      return
    }

    this._totalPedido -= desconto;

  }

  aplicarDescontoEmPorcentagem(desconto: number): void {
    if(desconto > 100 || desconto <= 0) {
      console.log('Desconto não disponivel :(');
      return
    }

    const porcentagem = desconto / 100;
    const descontoEmReais =  this._totalPedido * porcentagem;
    this._totalPedido -= descontoEmReais;

  }

  removeItem(item: string): void {
    const index = this.itens.findIndex((i) => i.nome === item);

    if(index === -1) {
      console.log('Não possui um item com esse nome :(');
    }

    this.itens.splice(index, 1);
    this._totalPedido -= this.itens[index].valor;
  }

  add(item: ItemPedido): void {
    this.itens.push(item);
    this._totalPedido += item.valor
  }

}

class ItemPedido implements  Desconto {
  valor: number;
  nome: string;
  quantidade: number;

  constructor(valor: number, nome: string, quantidade: number) {
    this.valor = valor;
    this.nome = nome;
    this.quantidade = quantidade;
  }

  aplicarDescontoEmPorcentagem(desconto: number): void {
    if(desconto > 100 || desconto <= 0) {
      console.log('Desconto não disponivel :(');
      return
    }

    const porcentagem = desconto / 100;
    const descontoEmReais =  this.valor * porcentagem;
    this.valor -= descontoEmReais;
  }

  recuperarValorTotal(): number {
    return this.valor * this.quantidade;
  }

  aplicarDescontoEmReais(desconto: number): void {
    this.valor -= desconto;
  }

}
