// Créer une class Hippopotamus qui hérite de la classe Animal
// modifier la méthode eat pour que l'hippopotame prenne 20 de poids si l'aliment qu'il mange est un légume
// si l'aliment qu'il mange est de la viande, il pousse (renvoie) un cri de dégout : "beurk" et son poids n'augmente pas
// l'hippopotame perd 20 de poids lorsqu'il dort
// ajouter une méthode swim() qui ne renvoie rien mais baisse le poids de 50.

import Animal from './animal.class';
import Food from './food/food';

export default class Hippopotamus extends Animal{

  // CODER ICI
  constructor(name:string,weight:number){
    super(name,weight)
  }
  eat(foo: Food): string {
    if (foo.isVegan()) {
      this.weight = this.weight + 20
      return `Miam un légume, maintenant je pèse ${this.weight} kg !`;
    } else {
      return "beurk";
    }
  }

  sleep(): void {
    this.weight = this.weight - 20;
    if(this.weight < 0)
      this.weight = 0;
    console.log(`J'ai bien dormi, mtn je pèse ${this.weight} kg !`);
  }

  swim() : void {
    this.weight = this.weight - 50;
    if(this.weight < 0)
      this.weight = 0;
    console.log(`J'ai perdu 50 kg mon nouveau poid est : ${this.weight} kg`);
  }
}
