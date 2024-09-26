import Food from './food/food';
import IAnimal from './animal.interface';

// Créer une class Animal qui implémente l'interface IAnimal
// par défaut, la méthode eat augmente le poids de l'animal de 10
// par défaut, la méthode sleep réduit le poids de l'animal de 10
// le poids d'un animal ne peut pas être négatif

export default class Animal implements IAnimal {

  constructor(name: string, weight: number) {
    this.name = name;
    this.weight = weight
  }

  // CODER ICI
  weight: number;
  name: string;

  eat<T extends Food>(a: T): void | string {
    this.weight += 10;
  };

  sleep(): void {
    if (this.weight >= 10) this.weight -= 10;
    if (this.weight < 0) this.weight = 0;
  };
}
