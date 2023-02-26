import IAnimal from './animal.interface';
import Food from './food/food';

// Créer une class Animal qui implémente l'interface IAnimal
// par défaut, la méthode eat augmente le poids de l'animal de 10
// par défaut, la méthode sleep réduit le poids de l'animal de 10
// le poids d'un animal ne peut pas être négatif

export default class Animal implements IAnimal {

  name: string;
  weight: number;

  constructor(name : string, weight: number){
    this.name = name;
    this.weight = weight;
  }

  eat(food: Food): string | void {
    this.weight += 10;
  }

  sleep(): void {
    this.weight = Math.max(0, this.weight - 10);
  }

}
