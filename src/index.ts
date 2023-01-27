import {
  Item,
  Pedido,
  Circulo,
  Retangulo,
  Criminoso,
  Endereco,
  Vitima,
  Crime,
  Delegacia,
} from "./class";

// --- ATIVIDADE 01 ---
const item01 = new Item(150, "Mouse", "Mouse gamer 16000DPI");
const item02 = new Item(250, "Teclado", "Teclado mecanico, RGBA");

const pedido01 = new Pedido();
pedido01.addItem(item01);
pedido01.addItem(item02);
console.log(pedido01);

// --- ATIVIDADE 02 ---
const bola = new Circulo(200);
const retangulo = new Retangulo(200, 100);
bola.desenhar();
retangulo.redimensionar();

// --- ATIVIDADE 04 ---
const ladrao = new Criminoso(
  "Patrick",
  "02/02/1992",
  "987.654.321-00",
  new Endereco(
    "Rua Fundo Mar",
    69,
    "Bairro Algas Calcárias",
    "Sla",
    "Brazil",
    "95900-888"
  ),
  1.7,
  85
);

const vitima = new Vitima(
  "Bob Sponja",
  "01/01/1991",
  "123.456.678-00",
  new Endereco(
    "Rua Fundo Mar",
    69,
    "Bairro Abacaxi",
    "Sla",
    "Brazil",
    "95900-999"
  ),
  1.5,
  65
);

const roubo = new Crime(
  155,
  "Furto Qualificado",
  new Endereco(
    "Rua Fundo Mar",
    69,
    "Bairro Abacaxi",
    "Sla",
    "Brazil",
    "95900-999"
  ),
  new Date(),
  "O meliante abordou a vitima, com uma arma de jogar água, próximo a sua residência, furtando as calças quadradas e seu cahorro."
);

roubo.adicionarCriminoso(ladrao);
roubo.adicionarVitima(vitima);

ladrao.adicionarCrime(roubo);
ladrao.adicionarArma("Arma de jogar água 🔫");

vitima.adicionarCrimeSofrido(roubo);

const delegaciaSiriCascudo = new Delegacia();
delegaciaSiriCascudo.adicionarCrime(roubo);
delegaciaSiriCascudo.emitirRelatorio();
delegaciaSiriCascudo.emitirRelatorioCriminoso("Patrick");
