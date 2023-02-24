import Food from './food/food';

// Créer une class Animal qui implémente l'interface IAnimal
// par défaut, la méthode eat augmente le poids de l'animal de 10
// par défaut, la méthode sleep réduit le poids de l'animal de 10
// le poids d'un animal ne peut pas être négatif

export default class Animal {
  public weight: number;
  public name: string;

  constructor(name: string, weight: number) {
    this.name = name;
    this.weight = weight;
  }

  eat(food: Food): void | 'beurk' {
    this.weight += 10;
  }

  sleep(): void {
    if (this.weight < 10) {
      this.weight = 0;
      return;
    }
    this.weight -= 10;
  }
}
