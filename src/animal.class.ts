import IAnimal from './animal.interface';
import Food from './food/food';

// Créer une class Animal qui implémente l'interface IAnimal
// par défaut, la méthode eat augmente le poids de l'animal de 10
// par défaut, la méthode sleep réduit le poids de l'animal de 10
// le poids d'un animal ne peut pas être négatif

export default class Animal implements IAnimal{
  weight : number = 0;
  name : string;
  constructor(name : string,weight : number){
    this.setWeight(weight);
    this.name=name
  }

  eat(params: Food): string | void {
    this.setWeight(10);
  }

  sleep(): void {
    this.setWeight(-10)
  }

  setWeight(value : number) : void{
    if (this.weight + value >= 0) {
      this.weight =  this.weight + value;
    }
    else{
      this.weight = 0;
    }
  }
}
