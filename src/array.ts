export default class MyArray {

  // Coder une méthode oddNumbers qui prend en paramètre un tableau d'entier, et renvoie un tableau uniquement composé
  // des entiers impairs de ce dernier
  oddNumbers(arr: number[]) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 !== 0) {
        result.push(arr[i]);
      }
    }

    return result;
  }

  // Coder une méthode sort qui renvoie le tableau passé en paramètre trié par ordre croissant
  sort(arr: number[]) {

    arr.sort(function (a, b) {
      return a - b;
    });

    return arr;
  }

  // Coder une méthode boringFunction qui renvoie true si les string du tableaux ont toutes la même longueur,
  // ou renvoie "relou ta fonction" sinon
  boringFunction(arr: string[]) {
    if (arr.length <= 1) {
      return true;
    }
    let firstLength = arr[0].length;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i].length !== firstLength) {
        return "relou ta fonction";
      }
    }
    return true;
  }

  // Coder une méthode optionalArray qui renvoie true si les 2 arrays d'entiers passés en paramètres sont égaux, false sinon
  // Faire de même avec un 3e tableau passé en paramètre qui sera optionnel
  optionalArray(a: number[], b: number[], c?: number[]): boolean {
    if (a.length !== b.length) {
      return false;
    }

    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        return false;
      }
    }

    if (c) {
      if (a.length !== c.length) {
        return false;
      }

      for (let i = 0; i < a.length; i++) {
        if (a[i] !== c[i]) {
          return false;
        }
      }
    }

    return true;
  }
}
