import Food from './food/food';
import IAnimal from './animal.interface'

// Créer une class Animal qui implémente l'interface IAnimal
// par défaut, la méthode eat augmente le poids de l'animal de 10
// par défaut, la méthode sleep réduit le poids de l'animal de 10
// le poids d'un animal ne peut pas être négatif

export default class Animal implements IAnimal {
  weight: number
  name: string

  constructor( name:string,weight: number){
    this.name = name
    this.weight = weight
  }
  // CODER ICI
 eat(food?: Food): string | void{
  this.weight +=10
  return 'wow il a bien mangé'
 }
 sleep(): void{
   this.weight -= 10
 }
}
