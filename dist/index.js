"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const class_1 = require("./class");
// --- ATIVIDADE 01 ---
const item01 = new class_1.Item(150, "Mouse", "Mouse gamer 16000DPI");
const item02 = new class_1.Item(250, "Teclado", "Teclado mecanico, RGBA");
const pedido01 = new class_1.Pedido();
pedido01.addItem(item01);
pedido01.addItem(item02);
console.log(pedido01);
// --- ATIVIDADE 02 ---
const bola = new class_1.Circulo(200);
const retangulo = new class_1.Retangulo(200, 100);
bola.desenhar();
retangulo.redimensionar();
// --- ATIVIDADE 04 ---
const ladrao = new class_1.Criminoso("Patrick", "02/02/1992", "987.654.321-00", new class_1.Endereco("Rua Fundo Mar", 69, "Bairro Algas Calcárias", "Sla", "Brazil", "95900-888"), 1.7, 85);
const vitima = new class_1.Vitima("Bob Sponja", "01/01/1991", "123.456.678-00", new class_1.Endereco("Rua Fundo Mar", 69, "Bairro Abacaxi", "Sla", "Brazil", "95900-999"), 1.5, 65);
const roubo = new class_1.Crime(155, "Furto Qualificado", new class_1.Endereco("Rua Fundo Mar", 69, "Bairro Abacaxi", "Sla", "Brazil", "95900-999"), new Date(), "O meliante abordou a vitima, com uma arma de jogar água, próximo a sua residência, furtando as calças quadradas e seu cahorro.");
roubo.adicionarCriminoso(ladrao);
roubo.adicionarVitima(vitima);
ladrao.adicionarCrime(roubo);
ladrao.adicionarArma("Arma de jogar água 🔫");
vitima.adicionarCrimeSofrido(roubo);
const delegaciaSiriCascudo = new class_1.Delegacia();
delegaciaSiriCascudo.adicionarCrime(roubo);
delegaciaSiriCascudo.emitirRelatorio();
delegaciaSiriCascudo.emitirRelatorioCriminoso("Patrick");
