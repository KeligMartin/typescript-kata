import IAnimal from './animal.interface';
import Food from './food/food';

// Créer une class Animal qui implémente l'interface IAnimal
// par défaut, la méthode eat augmente le poids de l'animal de 10
// par défaut, la méthode sleep réduit le poids de l'animal de 10
// le poids d'un animal ne peut pas être négatif

export default class Animal implements IAnimal{

  // CODER ICI
  name:string;
  weight:number;

  constructor(name:string,weight:number) {
    if(weight >0)
      this.weight = weight;
    this.name = name;
  }

  eat(foo: Food): string {
      this.weight = this.weight + 10;
      return `Tu as bien mangé, maintenant tu pèses ${this.weight} kg !`;
  }
  sleep(): void {
    this.weight = this.weight - 10 ;
    if(this.weight < 0)
      this.weight = 0;
    console.log(`tu as bien dormi, tu as même maigri, maintenant tu pèse ${this.weight} kg !`)
  }

}
