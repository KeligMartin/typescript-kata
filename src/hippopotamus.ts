// Créer une class Hippopotamus qui hérite de la classe Animal
// modifier la méthode eat pour que l'hippopotame prenne 20 de poids si l'aliment qu'il mange est un légume
// si l'aliment qu'il mange est de la viande, il pousse (renvoie) un cri de dégout : "beurk" et son poids n'augmente pas
// l'hippopotame perd 20 de poids lorsqu'il dort
// ajouter une méthode swim() qui ne renvoie rien mais baisse le poids de 50.

import Food from './food/food';
import Animal from './animal.class';
import Meat from './food/meat';
import Vegetable from './food/vegetable';

export default class Hippopotamus extends Animal {
  weight: number;

  constructor(name: string, weight: number) {
    super(name, weight);
  }

  eat(food: Food) {
    if (food instanceof Meat) {
      return 'beurk';
    } else if (food instanceof Vegetable) {
      this.weight += 20;
    }
  }

  sleep() {
    this.weight -= 20;

    if (this.weight < 0) {
      this.weight = 0;
    }
  }

  swim() {
    this.weight -= 50;

    if (this.weight < 0) {
      this.weight = 0;
    }
  }
}
