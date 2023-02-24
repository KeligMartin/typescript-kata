export default class MyArray {
  // Coder une méthode oddNumbers qui prend en paramètre un tableau d'entier, et renvoie un tableau uniquement composé
  // des entiers impairs de ce dernier
  oddNumbers(arr: number[]): number[] {
    const result: number[] = [];

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 !== 0) {
        result.push(arr[i]);
      }
    }

    return result;
  }

  // Coder une méthode sort qui renvoie le tableau passé en paramètre trié par ordre croissant
  sort(arr: number[]): number[] {
    const array: number[] = [...arr];

    array.sort((a, b) => a - b);

    return array;
  }

  // Coder une méthode boringFunction qui renvoie true si les string du tableaux ont toutes la même longueur,
  // ou renvoie "relou ta fonction" sinon
  boringFunction(arr: string[]): boolean | string {
    const firstLength = arr[0].length;

    for (let i = 1; i < arr.length; i++) {
      if (arr[i].length !== firstLength) {
        return 'relou ta fonction';
      }
    }

    return true;
  }

  // Coder une méthode optionalArray qui renvoie true si les 2 arrays d'entiers passés en paramètres sont égaux, false sinon
  // Faire de même avec un 3e tableau passé en paramètre qui sera optionnel
  optionalArray(a: number[], b: number[], c?: number[]): boolean {
    if (a.length !== b.length || !a.every((value, index) => value === b[index])) {
      return false;
    }

    if (c) {
      if (c.length !== a.length || !c.every((value, index) => value === a[index])) {
        return false;
      }
    }

    return true;
  }
}
