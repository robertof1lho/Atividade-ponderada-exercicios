// Criar uma classe chamada Animal
class Animal {
    // Construtor da classe Animal que recebe como atributos nome e idade
    constructor(nome , idade){
        this.nome = nome
        this.idade = idade
    }

    // Criação de um método chamado descrever o animal
    descrever() {
        // Printar no console uma mensagem com o nome e a idade do animal
        console.log(`A idade do animal é ${this.nome}, ele tem ${this.idade} anos`);
    }
}
    // Criar uma instância chamada cao dentro da classe Animal, naqual seu nome é "cachorro" e sua idade é 8
    let cao = new Animal ("cachorro", 8);
    // Chamar o método descrever da instância cao para printar a descrição do animal 
    cao.descrever();

    // Criar uma instância chamada gato dentro da classe Animal, naqual seu nome é "gato" e sua idade é 10
    let gato = new Animal ("gato", 10);
    // Chamar o método descrever da instância gato para printar a descrição do animal 
    gato.descrever();
