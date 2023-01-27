interface FormatoDeElemento {
    desenhar(): void 
    redimensionar(): void
}

export class Circulo implements FormatoDeElemento {
    raio: number;

    constructor(raio: number) {
        this.raio = raio;
    };

    desenhar() {
        console.log('Desenhando ✍');
    };
    redimensionar() {
        console.log('Redimensionando 🔍');  
    };
};

export class Retangulo implements FormatoDeElemento {
    comprimento: number;
    altura: number;

    constructor(comprimento: number, altura: number) {
        this.comprimento = comprimento;
        this.altura = altura;
    };

    desenhar() {
        console.log('Desenhando ✍');
    };
    redimensionar() {
        console.log('Redimensionando 🔍');
    };
};

