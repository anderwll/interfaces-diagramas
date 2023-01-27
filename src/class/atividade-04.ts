abstract class Pessoa {
  protected nome: string;
  protected dataNascimento: string;
  protected cpf: string;
  protected endereco: Endereco;
  protected altura: number;
  protected peso: number;

  get getNome() {
    return this.nome;
  }

  constructor(
    nome: string,
    dataNascimento: string,
    cpf: string,
    endereco: Endereco,
    altura: number,
    peso: number
  ) {
    this.nome = nome;
    this.dataNascimento = dataNascimento;
    this.cpf = cpf;
    this.endereco = endereco;
    this.altura = altura;
    this.peso = peso;
  }
}

export class Endereco {
  private rua: string;
  private numero: number;
  private bairro: string;
  private cidade: string;
  private pais: string;
  private cep: string;

  constructor(
    rua: string,
    numero: number,
    bairro: string,
    cidade: string,
    pais: string,
    cep: string
  ) {
    this.rua = rua;
    this.numero = numero;
    this.bairro = bairro;
    this.cidade = cidade;
    this.pais = pais;
    this.cep = cep;
  }
}

export class Crime {
  private codigo: number;
  private tipo: string;
  private local: Endereco | undefined;
  private data: Date;
  private relatoCrime: string;
  private vitimas: Array<Vitima>;
  private criminosos: Array<Criminoso>;

  get getCriminosos() {
    return this.criminosos;
  }

  constructor(
    codigo: number,
    tipo: string,
    local: Endereco | undefined,
    data: Date,
    relatoCrime: string
  ) {
    this.codigo = codigo;
    this.tipo = tipo;
    this.local = local;
    this.data = data;
    this.relatoCrime = relatoCrime;
    this.vitimas = [];
    this.criminosos = [];
  }

  adicionarVitima(novaVitima: Vitima): void {
    this.vitimas.push(novaVitima);
  }

  adicionarCriminoso(novoCriminoso: Criminoso): void {
    this.criminosos.push(novoCriminoso);
  }
}

export class Vitima extends Pessoa {
  private crimesSofridos: Array<Crime>;

  constructor(
    nome: string,
    dataNascimento: string,
    cpf: string,
    endereco: Endereco,
    altura: number,
    peso: number
  ) {
    super(nome, dataNascimento, cpf, endereco, altura, peso);
    this.crimesSofridos = [];
  }

  adicionarCrimeSofrido(novoCrime: Crime): void {
    this.crimesSofridos.push(novoCrime);
  }
}

export class Criminoso extends Pessoa {
  private crimes: Array<Crime>;
  private armasUsadas: Array<string>;

  constructor(
    nome: string,
    dataNascimento: string,
    cpf: string,
    endereco: Endereco,
    altura: number,
    peso: number
  ) {
    super(nome, dataNascimento, cpf, endereco, altura, peso);
    this.crimes = [];
    this.armasUsadas = [];
  }

  adicionarCrime(novoCrime: Crime): void {
    this.crimes.push(novoCrime);
  }

  adicionarArma(novaArma: string): void {
    this.armasUsadas.push(novaArma);
  }
}

export class Delegacia {
  private historico: Array<Crime>;

  constructor() {
    this.historico = [];
  }

  emitirRelatorio(): void {
    console.log(`O histórico: ${this.historico}`);
  }

  emitirRelatorioCriminoso(nomeCriminoso: string): void {
    const criminosoBuscado = this.historico.filter((crime) => {
      return crime.getCriminosos.find(
        (criminoso) =>
          criminoso.getNome.toLowerCase() === nomeCriminoso.toLowerCase()
      );
    });

    if (!criminosoBuscado) {
      console.log(`Criminoso não encontrado, verifique o nome digitado :|`);
      return;
    }

    console.log(`O criminoso buscado é: ${criminosoBuscado}`);
  }

  adicionarCrime(novoCrime: Crime): void {
    this.historico.push(novoCrime);
  }
}
