import Food from './food/food';
import IAnimal from './animal.interface';

// Créer une class Animal qui implémente l'interface IAnimal
// par défaut, la méthode eat augmente le poids de l'animal de 10
// par défaut, la méthode sleep réduit le poids de l'animal de 10
// le poids d'un animal ne peut pas être négatif

export default class Animal implements IAnimal{

  constructor(public name: string, public weight: number) {}

  eat(food: Food) {
    this.weight += 10;
  }

  sleep() {
    this.weight -= 10;
  }
}
