# Instruções
  - lembre-se de utilizar as estruturas de código como ``esta aqui com ` `` ou
```javascript
//esta aqui com ```
let a = "olá"
let b = 10
print(a)
```

# Questões objetivas

**1)** O que o código a seguir faz?

![Uma imagem](assets/ex01.PNG)

Escolha a opção que responde corretamente:

~~a)~~ Imprime os números pares de 1 a 10.

b) Imprime os números ímpares de 1 a 10.

c) Imprime os números pares de 2 a 10.

d) Imprime os números ímpares de 2 a 10.

______

**2)** Identificar a linha que falta no código para criar uma classe Veiculo com atributo marca, e uma classe Carro que herda de Veiculo com um método ligar(). 

![Uma imagem](assets/ex02.PNG)

No lugar onde está escrito “// linha” qual das opções abaixo deve estar para funcionar corretamente o código?

~~A)~~ let carro = new Carro("Toyota");

B) let ligar = new ligar("Toyota");

C) class Moto extends Veiculo {};

D) carro1.ligar();

______

**3)** Qual é o valor de resultado após a execução deste código?

![Uma imagem](assets/ex03.PNG)

Escolha a opção que responde corretamente:

~~A)~~ 18

B) 16

C) 14

D) 12

______

**4)** Como você criaria um método `acelerar()` em uma classe `Carro`, que recebe um parâmetro `velocidade` e o adiciona a um atributo `velocidadeAtual`?

~~A)~~ ![Uma imagem](assets/ex04_1.PNG)

B) ![Uma imagem](assets/ex04_2.PNG)

C) ![Uma imagem](assets/ex04_3.PNG)

D) ![Uma imagem](assets/ex04_4.PNG)

______

**5)** Qual a forma correta de definir uma classe Carro em JavaScript, com um método ligar() e um atributo marca?

~~A)~~ ![Uma imagem](assets/ex05_1.PNG)

B) ![Uma imagem](assets/ex05_2.PNG)

C) ![Uma imagem](assets/ex05_3.PNG)

D) ![Uma imagem](assets/ex05_4.PNG)

______

**6)** Observe o código abaixo:

![Uma imagem](assets/ex06.PNG)

Qual será a saída do código acima?

~~A)~~ "Olá, meu nome é João. Olá, meu nome é Maria."

B) "Olá, meu nome é ."

C) "João Maria"

D) "undefined undefined"

______

# Questões dissertativas

**7)** Vamos criar um programa em JavaScript para entender classes, métodos e atributos!
Classe Animal:
- Crie uma classe chamada Animal.
- Adicione dois atributos: nome e idade.
- Adicione um método chamado descrever() na classe Animal.
  - Este método deve exibir no console uma descrição do animal com seu nome e idade.

Criando e manipulando Animais:
- Crie dois objetos da classe Animal: um chamado "cachorro" e outro "gato", com idades distintas.
- Para cada animal, chame o método descrever() para ver a descrição no console.

Dica: Utilize `console.log()` para exibir as informações!

**Resposta:**

```javascript
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
```


______

**8)** Nos últimos dias tivemos a oportunidade de ter contato com Programação Orientada a Objetos, e tivemos contato com o tema "herança". Herança é um princípio de orientação a objetos, que permite que classes compartilhem atributos e métodos. Ela é usada na intenção de reaproveitar código ou comportamento generalizado ou especializar operações ou atributos. Então vamos praticar esse conteúdo nessa questão.
Vamos criar um programa em JavaScript para entender classes, métodos, atributos e herança!

Classe Animal:
- Crie uma classe chamada Animal.
- Adicione dois atributos: nome e idade.
- Adicione um método descrever() que exiba no console uma descrição do animal com seu nome e idade.

Classe Gato (Herda de Animal):
- Crie uma classe chamada Gato que herda da classe Animal.
- Adicione um atributo extra cor específico para gatos.
- Adicione um método miar() que exiba no console o som que um gato faz.

Criando Animais:
- Crie dois objetos da classe Animal: um chamado cachorro e outro gato, com idades distintas.
- Para o gato, também defina a cor.

Chamando os Métodos:
- Para cada animal, chame o método descrever() para ver a descrição no console.
- Para o gato, chame o método miar() para "ouvir" o som que ele faz (é também para ver o som no console).

Dica: Utilize console.log() para exibir as informações!

**Resposta:**

```javascript
// Definição da classe Animal
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
        super(nome, idade); // Chamada ao construtor da classe Animal
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
```
______

**9)** Vamos criar um programa em JavaScript para somar notas!

Classe SomadorDeNotas:
- Crie uma classe chamada SomadorDeNotas.
- Adicione um atributo total inicializado com 0 para armazenar a soma das notas.

Método adicionarNota:
- Adicione um método chamado adicionarNota(nota) na classe SomadorDeNotas.
- Este método deve receber um parâmetro nota e somá-lo ao atributo total.

Criando o Somador e Adicionando Notas:
- Crie um objeto da classe SomadorDeNotas, chamado somador.
- Utilize o método adicionarNota(nota) para adicionar algumas notas ao somador.

Chamando o Método para Ver o Total:
- Após adicionar todas as notas, chame um método verTotal() para exibir o total das notas adicionadas.

Dica: Utilize console.log() para exibir as informações!

**Resposta:**
```javascript
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
```
______

**10)** Imagine que você está criando um programa em JavaScript para uma escola. Neste programa, existem diferentes tipos de funcionários, cada um com suas próprias características. Considere as seguintes classes:

Funcionário:
- atributo: Nome
- atributo: Idade
- atributo: Salário base
- método: calcularSalario() - Este método calcula o salário total do funcionário. Para cada tipo de funcionário, o cálculo será diferente.

Professor (herança de Funcionário):
- atributo: Disciplina
- atributo: Horas de aula por semana
- método: calcularSalario() - Para calcular o salário do professor, multiplicamos suas horas de aula pelo valor da hora/aula.

Agora, sua tarefa é escrever um código em JavaScript que crie as classes Funcionário e Professor, com suas características e métodos descritos acima. Depois de criar as classes, crie:
- Dois objetos do tipo Professor com informações fictícias.
- Para cada objeto, chame o método calcularSalario() e mostre o salário calculado no console.

Certifique-se de explicar cada parte do código utilizando comentários, explicando para que serve cada atributo e método, bem como a lógica por trás do cálculo de salário para o tipo de funcionário Professor.

**Resposta:**
```javascript
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
```  