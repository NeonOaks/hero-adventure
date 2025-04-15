import readline from 'readline';
import { stdin as input, stdout as output } from 'process';

class adventure {
    constructor(actionUser, heroCreate, chooseFaction,  executionAttack) {
                r1 = readline.createInterface({ input, output});
                this.startGame;
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
        this.nameHero = nameHero;
        this.age = age;
        console.log(`Nome do Héroi: ${this.nameHero}`);
        console.log(`Idade: ${this.age}`);
    }

    chooseFaction() {
        switch (this.chooseFaction.faction()) {
            case '1':
                faction = 'Mago';
                break;
            case '2':
                faction = 'Guerreiro';
                break;
            case '3':
                faction = 'Monge';
                break;
            case '4':
                faction = 'Ninja';
                break;
            default:
                console.log('Opção Inválida.');
            this.r1.close;
            return;
        }
    }

    executionAttack() {
        wizard
    }

}