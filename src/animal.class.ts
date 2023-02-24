import Food from './food/food';

// Créer une class Animal qui implémente l'interface Animal
// par défaut, la méthode eat augmente le poids de l'animal de 10
// par défaut, la méthode sleep réduit le poids de l'animal de 10
// le poids d'un animal ne peut pas être négatif

export default class Animal implements Animal {

  public name: string;
  public weight: number;

  constructor(name: string, weight: number = 0) {
    this.weight = Math.max(weight, 0);
    this.name = name;
  }

  eat(food: Food): void {
    this.weight += 10;
  }

  sleep(): void {
    this.weight = Math.max(this.weight - 10, 0);
  }

}
