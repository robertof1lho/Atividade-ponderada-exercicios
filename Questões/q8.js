// Criação da classe Animal
class Animal {
    // Construtor da classe Animal
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    // Método para descrever o animal
    descrever() {
        console.log(`\nO nome do animal é ${this.nome} e sua idade é ${this.idade} anos`);
    }
}

// Definição da classe Gato que herda de Animal
class Gato extends Animal {
    // Construtor da classe Gato
    constructor(nome, idade, cor) {
        super(nome, idade); // Chamar atributos do construtor da classe Animal
        this.cor = cor;
    }

    // Método específico para Gato para fazer o gato miar
    miar() {
        console.log(`Miauuuu... Miauuu...`);
    }
}

// Criação de um objeto de Animal chamado cao 
let cao = new Animal("Cachorro", "4");
cao.descrever(); // Chama o método descrever do Animal

// Criação de um objeto de Gato
let gato = new Gato("Gato", "9", "marrom e branco");
gato.descrever(); // Chama o método descrever do Gato
gato.miar(); // Chama o método miar do Gato
