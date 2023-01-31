"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Delegacia = exports.Criminoso = exports.Vitima = exports.Crime = exports.Endereco = void 0;
class Pessoa {
    get getCpf() {
        return this.cpf;
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
        this.armasUsadas = [];
    }
    adicionarVitima(novaVitima) {
        this.vitimas.push(novaVitima);
    }
    adicionarCriminoso(novoCriminoso) {
        this.criminosos.push(novoCriminoso);
    }
    adicionarArma(novaArma) {
        this.armasUsadas.push(novaArma);
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
    }
    adicionarCrime(novoCrime) {
        this.crimes.push(novoCrime);
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
    emitirRelatorioCriminoso(cpfCriminoso) {
        const crimesBuscado = this.historico.filter((crime) => crime.getCriminosos.some((criminoso) => criminoso.getCpf === cpfCriminoso));
        if (!crimesBuscado) {
            console.log(`Criminoso não encontrado, verifique o cpf digitado :|`);
            return;
        }
        console.log(`Crimes cometidos pelo cpf ${cpfCriminoso}`);
        crimesBuscado.forEach((crime) => console.log(crime));
    }
    adicionarCrime(novoCrime) {
        this.historico.push(novoCrime);
    }
}
exports.Delegacia = Delegacia;
