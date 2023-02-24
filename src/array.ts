export default class MyArray {

  // Coder une méthode oddNumbers qui prend en paramètre un tableau d'entier, et renvoie un tableau uniquement composé
  // des entiers impairs de ce dernier
  oddNumbers(numbers: number[]): number[] {
    const oddNumbersArray: number[] = [];
  
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 !== 0) {
        oddNumbersArray.push(numbers[i]);
      }
    }
    return oddNumbersArray;
  }



  // Coder une méthode sort qui renvoie le tableau passé en paramètre trié par ordre croissant
  sort(numbers: number[]): number[] {
    numbers.sort((a, b) => a - b);
    return numbers;
  }



  // Coder une méthode boringFunction qui renvoie true si les string du tableaux ont toutes la même longueur,
  // ou renvoie "relou ta fonction" sinon
  boringFunction(strings: string[]): boolean | string {
    const firstStringLength = strings[0].length;
  
    for (let i = 1; i < strings.length; i++) {
      if (strings[i].length !== firstStringLength) {
        return "relou ta fonction";
      }
    }
    return true;
  }

  // Coder une méthode optionalArray qui renvoie true si les 2 arrays d'entiers passés en paramètres sont égaux, false sinon
  // Faire de même avec un 3e tableau passé en paramètre qui sera optionnel
  optionalArray(
    array1: number[],
    array2: number[],
    optionalArray?: number[]
  ): boolean {
    if (optionalArray) {
      if (array1.length !== array2.length || array1.length !== optionalArray.length) {
        return false;
      }
      
      for (let i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i] || array1[i] !== optionalArray[i]) {
          return false;
        }
      }
    }
    else {
      if (array1.length !== array2.length) {
        return false;
      }
      
      for (let i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
          return false;
        }
      }
    }
  
    return true;
  }
  
}
