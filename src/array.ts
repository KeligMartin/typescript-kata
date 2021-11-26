export default class MyArray {

  // Coder une méthode oddNumbers qui prend en paramètre un tableau d'entier, et renvoie un tableau uniquement composé
  // des entiers impairs de ce dernier
  oddNumbers(arr: number[]): number[] {
    let oddArray: number[] = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 !== 0) oddArray.push(arr[i]);
    }
    return oddArray;
  }

  // Coder une méthode sort qui renvoie le tableau passé en paramètre trié par ordre croissant
  sort(arr: number[]): number[] {
    let numArray: number[] = arr;
    numArray.sort(function (a, b) {
      return a - b;
    });
    return numArray;
  }

  // Coder une méthode boringFunction qui renvoie true si les string du tableaux ont toutes la même longueur,
  // ou renvoie "relou ta fonction" sinon
  boringFunction(arr: string[]): boolean | string {
    let strLength = arr[0].length;
    let condition = true;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length !== strLength) condition = false;
    }

    if (condition) return true
    else return "relou ta fonction"
  }

  // Coder une méthode optionalArray qui renvoie true si les 2 arrays d'entiers passés en paramètres sont égaux, false sinon
  // Faire de même avec un 3e tableau passé en paramètre qui sera optionnel
  optionalArray(a: number[], b: number[], c?: number[]): boolean {
    let condition: boolean = false;

    if (a.every((val, index) => val === b[index])) condition = true;
    if (c) {
      if (a.every((val, index) => val === b[index]) && a.every((val, index) => val === c[index])) condition = true;
    }
    return condition
  }
}
