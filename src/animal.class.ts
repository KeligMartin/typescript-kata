import IAnimal from './animal.interface';
import Food from './food/food';

// Créer une class Animal qui implémente l'interface IAnimal
// par défaut, la méthode eat augmente le poids de l'animal de 10
// par défaut, la méthode sleep réduit le poids de l'animal de 10
// le poids d'un animal ne peut pas être négatif

export default class Animal implements IAnimal {
  weight: number = 80;
  name: string;

  constructor(name: string, weight: number) {
    this.weight = weight;
    this.name = name;
  }

  eat = (myFood: Food) => {
      this.weight += 10;
    }

  sleep = () => {
    this.weight -= 10;
    if (this.weight < 0) this.weight = 0;
  }
}
