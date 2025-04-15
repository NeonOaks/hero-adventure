import readline from 'readline';
import { stdin as input, stdout as output } from 'process';

class adventure {
    constructor(actionUser, heroCreate, chooseFaction,  executionAttack) {
                this.actionUser = actionUser;
                this.heroCreate = heroCreate;
                this.chooseFaction = chooseFaction;
                this.executionAttack = executionAttack;
    }

    r1 = readline.createInterface({ input, output});

    actionUser(){
        this.r1.question('Qual o nome do Heroi? ' ,(this.nameHero) => {
            console.log(`Seu nome é ${nameHero}`);
        })

        
    }

    heroCreate(){
        nameHero = nameHero;
        age = age;
    }

    chooseFaction() {
        switch (this.chooseFaction.faction()) {
            case '1':
                faction = ''
        }
         wizard = wizard;
        warrior = warrior;
        monk = monk;
        ninja = ninja;
    }

    executionAttack() {
        wizard
    }

}