// Criação da classe SomadordeNotas
class SomadorDeNotas {
    // Criação do atributo total 
    constructor () {
    this.total = 0 // O atributp total inicializa com note 0
    }

    // Criação de um método para adicionar as notas ao total
    AdicionarNota(nota) {
        
        this.total += nota;  
    }

    // Criação de um método para exebir a nota total final
    verTotal() {
        console.log(`Sua nota total final foi ${this.total}`)
    }
}

// Criação de um objeto a partir da classe SomadorDeNotas
const somador = new SomadorDeNotas();

//  Chamar o método AsidionalNota e adicional a nota 4
somador.AdicionarNota(4);
//  Chamar o método AsidionalNota e adicional a nota 3
somador.AdicionarNota(3);
//  Chamar o método AsidionalNota e adicional a nota 8
somador.AdicionarNota(8);

//  Chamar o método verTotal para printar o total das notas após as alterações
somador.verTotal();