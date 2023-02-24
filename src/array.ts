export default class MyArray {

  // Coder une méthode oddNumbers qui prend en paramètre un tableau d'entier, et renvoie un tableau uniquement composé
  // des entiers impairs de ce dernier
  oddNumbers(arr: number[]): number[] {
    return arr.filter((key) => key % 2 !== 0
    );
  }

  // Coder une méthode sort qui renvoie le tableau passé en paramètre trié par ordre croissant
  sort(arr: number[]): number[] {
    return arr.sort((a, b) => a - b);
  }

  // Coder une méthode boringFunction qui renvoie true si les string du tableaux ont toutes la même longueur,
  // ou renvoie "relou ta fonction" sinon
  boringFunction(arr: string[]): boolean | string {
    for (let i = 1, l = arr.length; i < l; i++) {
      if (arr[0].length != arr[i].length) {
        return 'relou ta fonction';
      }
    }
    return true;
  }

  // Coder une méthode optionalArray qui renvoie true si les 2 arrays d'entiers passés en paramètres sont égaux, false sinon
  // Faire de même avec un 3e tableau passé en paramètre qui sera optionnel
  optionalArray(a: number[], b: number[], c?: number[]): boolean {
    if (c) {
      if (a.length !== b.length || a.length !== c.length) {
        return false;
      } else {
        return (a.every((value: number, index) => value === b[index]) && a.every((value: number, index) => value === c[index]));
      }
    }

    if (a.length !== b.length) {
      return false;
    } else {
      return a.every((value: number, index) => value === b[index]);
    }
  }
}
