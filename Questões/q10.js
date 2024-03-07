// Criar classe Funcionarios
class Funcionarios {
    // Criar atributos Nome, Idade e SalarioBase para a classe
    constructor(Nome, Idade, SalarioBase ) {
        this.Nome = Nome
        this.Idade = Idade
        this.SalarioBase = SalarioBase
        this.salarioTotal = 0 // O salário total inicializa em 0
    }

    // Método para calcular o salário do funcionaio baseado na consdições impostas
    calcularSalario(HorasAulaPSemana, ValorHoraAula) {
        this.salarioTotal = this.SalarioBase + (HorasAulaPSemana * ValorHoraAula) // Salário total igual ao salário base mais horas aulo por semana vezes valor da hora aula
    }

    // Método para printar os atributos e o salario final do funcionario
    salarioFinal() {
        console.log(`${this.Nome}, ${this.Idade} anos, professor(a) de ${this.Disciplina} ganha R$ ${this.salarioTotal} ao mês.`)
    }
} 

// Criar classe Professor com herança da classe Funcionarios
class Professor extends Funcionarios {
    constructor(Nome, Idade, SalarioBase, Disciplina, HorasAulaPSemana, ValorHoraAula ) {
        super(Nome, Idade, SalarioBase) // Atributos herdados da clase Funcionarios
        this.Disciplina = Disciplina // Novo atributo da classe Professor
        this.HorasAulaPSemana = HorasAulaPSemana // Novo atributo da classe Professor
        this.ValorHoraAula = ValorHoraAula // Novo atributo da classe Professor
    }
}

// Criar objeto professor1 da classe Professor
let professor1 = new Professor("Joana", 32, 3100, "Física", 20, 34);
    professor1.calcularSalario(professor1.HorasAulaPSemana, professor1.ValorHoraAula); // Usar os atributos do professor1 para calcular seu salário final
    professor1.salarioFinal(); // Chamar salarioFinal para printar o salario total do professor1

// Criar objeto professor2 da classe Professor
let professor2 = new Professor("Mauro", 29, 2800,"Música", 9, 27);
    professor2.calcularSalario(professor2.HorasAulaPSemana, professor2.ValorHoraAula); // Usar os atributos do professor2 para calcular seu salário final
    professor2.salarioFinal(); // Chamar salarioFinal para printar o salario total do professor2