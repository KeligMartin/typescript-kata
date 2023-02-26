import IAnimal from './animal.interface';
import Food from './food/food';

// Créer une class Animal qui implémente l'interface IAnimal
// par défaut, la méthode eat augmente le poids de l'animal de 10
// par défaut, la méthode sleep réduit le poids de l'animal de 10
// le poids d'un animal ne peut pas être négatif

export default class Animal implements IAnimal {
  // CODER ICI

  name: string;
  weight: number;

  constructor(name: string, weight: number) {
    this.name = name;
    this.newWeight(weight);
  }

  eat(food: Food): void | 'beurk' {
    this.newWeight(10);
  }

  sleep(): void {
    if (this.weight > 10) {
      this.newWeight(-10);
    }
  }

  newWeight(muscle: number): void {
    if (this.weight + muscle >= 0) {
      this.weight += muscle;
    } else {
      this.weight = 0;
    }
  }
}
