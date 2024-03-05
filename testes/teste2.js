class Veiculo {
    constructor(marca){
        this.marca = marca
    }
}

class Carro extends Veiculo {
    ligar(){
        console.log("carro ligado!")
    }
}

let carro = new Carro("Toyota");

carro.ligar();