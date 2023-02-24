import IAnimal from './animal.interface';
import Food from './food/food';

// Créer une class Animal qui implémente l'interface IAnimal
// par défaut, la méthode eat augmente le poids de l'animal de 10
// par défaut, la méthode sleep réduit le poids de l'animal de 10
// le poids d'un animal ne peut pas être négatif

export default class Animal implements IAnimal {
  name: string;
  weight: number;

  constructor(name: string, weight: number) {
    (this.name = name), (this.weight = weight);
  }

  public eat<T extends Food>(miam: T): string | null {
    this.weight += 10;
    return miam ? miam.toString() : null;
  }

  public sleep(): void {
    this.weight -= 10;
  }
}
