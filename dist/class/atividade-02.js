"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Retangulo = exports.Circulo = void 0;
class Circulo {
    constructor(raio) {
        this.raio = raio;
    }
    ;
    desenhar() {
        console.log('Desenhando ✍');
    }
    ;
    redimensionar() {
        console.log('Redimensionando 🔍');
    }
    ;
}
exports.Circulo = Circulo;
;
class Retangulo {
    constructor(comprimento, altura) {
        this.comprimento = comprimento;
        this.altura = altura;
    }
    ;
    desenhar() {
        console.log('Desenhando ✍');
    }
    ;
    redimensionar() {
        console.log('Redimensionando 🔍');
    }
    ;
}
exports.Retangulo = Retangulo;
;
