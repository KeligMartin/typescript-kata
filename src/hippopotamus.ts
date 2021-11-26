// Créer une class Hippopotamus qui hérite de la classe Animal
// modifier la méthode eat pour que l'hippopotame prenne 20 de poids si l'aliment qu'il mange est un légume
// si l'aliment qu'il mange est de la viande, il pousse (renvoie) un cri de dégout : "beurk" et son poids n'augmente pas
// l'hippopotame perd 20 de poids lorsqu'il dort
// ajouter une méthode swim() qui ne renvoie rien mais baisse le poids de 50.

import Food from './food/food';
import Animal from './animal.class';

export default class Hippopotamus extends Animal {
  name: string;
  weight: number;

  constructor(name: string, weight: number) {
    super(name, weight);
    
    this.name = name;
    this.weight = weight;
  }

  eat<T extends Food>(food: T): void | string {
    if (food.isVegan()) this.weight += 20;
    else return "beurk";
  }

  sleep(): void {
    this.weight -= 20;
    if (this.weight < 0) this.weight = 0;
  }

  swim(): void {
    this.weight -= 50;
    if (this.weight < 0) this.weight = 0;
  }
}
