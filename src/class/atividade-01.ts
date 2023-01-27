export class Pedido {
    itens: Array<Item>
    private valorToral: number

    get getValorTotal() {
        return this.valorToral
    }

    constructor() {
        this.itens = [];
        this.valorToral = 0;
    };

    addItem(novoItem: Item) {
        this.itens.push(novoItem);
        this.valorToral += novoItem.valor;
    }
};

export class Item {
    valor: number;
    nome: string;
    descricao: string;

    constructor(valor: number, nome: string, descricao: string) {
        this.valor = valor;
        this.nome = nome;
        this.descricao = descricao;
    };
};