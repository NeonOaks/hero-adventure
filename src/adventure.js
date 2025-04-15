import readline from 'readline';
import { stdin as input, stdout as output } from 'process';

class Adventure {
    constructor() {
                this.r1 = readline.createInterface({ input, output});
                this.startGame();
    }

   startGame() {
        this.actionUser();
   }

    actionUser(){
        this.r1.question('Qual o nome do Heroi? ' ,(name) => {
            this.r1.question('Qual sua idade: ', (age) => {
                this.heroCreate(name,age);
                this.askFaction();
            })
        });    
    }

    heroCreate(name,age){
        this.nameHero = name;
        this.age = age;
        console.log(`Nome do Héroi: ${this.nameHero}`);
        console.log(`Idade: ${this.age}`);
    }

    askFaction() {
        console.log('Escolha sua Facção:');
        console.log('1 - Magos!');
        console.log('2 - Guerreiros!');
        console.log('3 - Monges!');
        console.log('4 - Ninjas!');

        this.r1.question('Digite o número da sua Facção: ', (choose) => {
            this.chooseFaction(choose);
            this.executionAttack();
            this.r1.close();
        });
    }

    chooseFaction(choose) {
        switch (choose) {
            case '1':
                this.faction = 'Mago';
                break;
            case '2':
                this.faction = 'Guerreiro';
                break;
            case '3':
                this.faction = 'Monge';
                break;
            case '4':
                this.faction = 'Ninja';
                break;
            default:
                console.log('Opção Inválida.');
            break;
        }
        console.log(`Facção Escolhida: ${this.faction}`);
    }

    executionAttack() {
        console.log(`${this.nameHero}, da Facção ${this.faction}, prepara-se para atacar!`);

        switch(this.faction) {
            case 'Mago':
                console.log('Lança Rajada de Raios!');
            break;
            case 'Guerreiro':
                console.log('Ataca com sua espada Poderosa!');
            break;
            case 'Monge':
                console.log('Ataca com suas habilidade de Artes Marciais!');
            case 'Ninja':
                console.log('Ataca usando Shuriken!');
            break;
                console.log('Ataque falhou...');
        }
    }

}

new Adventure();