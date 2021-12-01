import IAnimal from './animal.interface';
import Food from './food/food';

// Créer une class Animal qui implémente l'interface IAnimal
// par défaut, la méthode eat augmente le poids de l'animal de 10
// par défaut, la méthode sleep réduit le poids de l'animal de 10
// le poids d'un animal ne peut pas être négatif

export default class Animal implements IAnimal{
  weight: number;
  name: string;
  
  constructor(name: string, weight: number) {
    this.name = name;
    this.weight = weight;
  }

  eat<F extends Food> (arg:F){
    this.weight += 10; 
  }

  sleep() {
    if (this.weight > 10) {
      return this.weight = this.weight - 10;
    }
  }
}
