"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Delegacia = exports.Criminoso = exports.Vitima = exports.Crime = exports.Endereco = void 0;
class Pessoa {
    get getNome() {
        return this.nome;
    }
    constructor(nome, dataNascimento, cpf, endereco, altura, peso) {
        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.cpf = cpf;
        this.endereco = endereco;
        this.altura = altura;
        this.peso = peso;
    }
}
class Endereco {
    constructor(rua, numero, bairro, cidade, pais, cep) {
        this.rua = rua;
        this.numero = numero;
        this.bairro = bairro;
        this.cidade = cidade;
        this.pais = pais;
        this.cep = cep;
    }
}
exports.Endereco = Endereco;
class Crime {
    get getVitimas() {
        return this.vitimas;
    }
    get getCriminosos() {
        return this.criminosos;
    }
    constructor(codigo, tipo, local, data, relatoCrime) {
        this.codigo = codigo;
        this.tipo = tipo;
        this.local = local;
        this.data = data;
        this.relatoCrime = relatoCrime;
        this.vitimas = [];
        this.criminosos = [];
    }
    adicionarVitima(novaVitima) {
        this.vitimas.push(novaVitima);
    }
    adicionarCriminoso(novoCriminoso) {
        this.criminosos.push(novoCriminoso);
    }
}
exports.Crime = Crime;
class Vitima extends Pessoa {
    constructor(nome, dataNascimento, cpf, endereco, altura, peso) {
        super(nome, dataNascimento, cpf, endereco, altura, peso);
        this.crimesSofridos = [];
    }
    adicionarCrimeSofrido(novoCrime) {
        this.crimesSofridos.push(novoCrime);
    }
}
exports.Vitima = Vitima;
class Criminoso extends Pessoa {
    constructor(nome, dataNascimento, cpf, endereco, altura, peso) {
        super(nome, dataNascimento, cpf, endereco, altura, peso);
        this.crimes = [];
        this.armasUsadas = [];
    }
    adicionarCrime(novoCrime) {
        this.crimes.push(novoCrime);
    }
    adicionarArma(novaArma) {
        this.armasUsadas.push(novaArma);
    }
}
exports.Criminoso = Criminoso;
class Delegacia {
    constructor() {
        this.historico = [];
    }
    emitirRelatorio() {
        console.log(`O histórico: ${this.historico}`);
    }
    emitirRelatorioCriminoso(nomeCriminoso) {
        const criminosoBuscado = this.historico.filter((crim) => {
            return crim.getCriminosos.find((criminoso) => criminoso.getNome.toLowerCase() === nomeCriminoso.toLowerCase());
        });
        if (!criminosoBuscado) {
            console.log(`Criminoso não encontrado, verifique o nome digitado :|`);
            return;
        }
        console.log(`O criminoso buscado é: ${criminosoBuscado}`);
    }
    adicionarCrime(novoCrime) {
        this.historico.push(novoCrime);
    }
}
exports.Delegacia = Delegacia;
