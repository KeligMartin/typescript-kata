// Créer une class Hippopotamus qui hérite de la classe Animal
// modifier la méthode eat pour que l'hippopotame prenne 20 de poids si l'aliment qu'il mange est un légume
// si l'aliment qu'il mange est de la viande, il pousse (renvoie) un cri de dégout : "beurk" et son poids n'augmente pas
// l'hippopotame perd 20 de poids lorsqu'il dort
// ajouter une méthode swim() qui ne renvoie rien mais baisse le poids de 50.

import Animal from './animal.class';
import Food from './food/food';
import Vegetable from './food/vegetable';

export default class Hippopotamus extends Animal {
  // CODER ICI
  eat(food: Food): void | string {
    if (food instanceof Vegetable) {
      this.weight += 20;
    } else return 'beurk';
  }

  sleep(): void {
    this.weight > 20 ? (this.weight -= 20) : (this.weight = 0);
  }

  swim(): void {
    this.weight > 50 ? (this.weight -= 50) : (this.weight = 0);
  }
}
