import Food from './food/food';
import myCalculator from './calculator';

// Créer une class Animal qui implémente l'interface IAnimal
// par défaut, la méthode eat augmente le poids de l'animal de 10
// par défaut, la méthode sleep réduit le poids de l'animal de 10
// le poids d'un animal ne peut pas être négatif

export default class Animal {
  name:string
  weight:number;
  eat(food){
    console.log(food)
    this.weight = this.weight +10
  }
  sleep(){
    this.weight = this.weight -10
  }


}
