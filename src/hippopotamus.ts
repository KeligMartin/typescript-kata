// Créer une class Hippopotamus qui hérite de la classe Animal
// modifier la méthode eat pour que l'hippopotame prenne 20 de weight si l'aliment qu'il mange est un légume
// si l'aliment qu'il mange est de la viande, il pousse (renvoie) un cri de dégout : "beurk" et son weight n'augmente pas
// l'hippopotame perd 20 de weight lorsqu'il dort
// ajouter une méthode swim() qui ne renvoie rien mais baisse le weight de 50.

import Animal from './animal.class';
import Food from './food/food';
import Meat from './food/meat';
import Vegetable from './food/vegetable';

export default class Hippopotamus extends Animal{
   name: string;
   weight: number;
  constructor(name: string, weight: number) {
    super(name, weight);
    this.name = name;
  }
  eat(food: Food): string | void {

    if(food.isVegan()){
      this.weight += 20;
      return;
    }else{
      return 'beurk';
    }
  }

  sleep(): void {
    this.weight > 20 ? this.weight -= 20 : this.weight = 0;
  }

  swim(): void {
    this.weight > 50 ? this.weight -= 50 : this.weight = 0;
  }
}
