// Créer une interface Animal qui aura 2 méthodes : eat() et sleep()
// eat() prendra un argument generic qui hérite de Food qui ne renvoie soit rien soit une chaine de caractere
// sleep() ne prend pas d'argument et ne renvoie rien

import Food from './food/food';

export default interface IAnimal {
  // CODER ICI

  eat<T extends Food>(food: T): void | string;

  sleep(): void;
  
}
