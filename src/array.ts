export default class MyArray {
  // Coder une méthode oddNumbers qui prend en paramètre un tableau d'entier, et renvoie un tableau uniquement composé
  // des entiers impairs de ce dernier
  oddNumbers(arr: number[]): number[] {
    return arr.filter((element) => element % 2 !== 0);
  }

  // Coder une méthode sort qui renvoie le tableau passé en paramètre trié par ordre croissant
  sort(arr: number[]): number[] {
    return arr.sort((a, b) => a - b);
  }

  // Coder une méthode boringFunction qui renvoie true si les string du tableaux ont toutes la même longueur,
  // ou renvoie "relou ta fonction" sinon
  boringFunction(arr: string[]): true | 'relou ta fonction' {
    let hasSameLength = true;
    let i = 0;
    while (i < arr.length) {
      if (arr[0].length !== arr[i].length) {
        hasSameLength = false;
        break;
      }
      i++;
    }
    return !hasSameLength ? 'relou ta fonction' : true;
  }

  // Coder une méthode optionalArray qui renvoie true si les 2 arrays d'entiers passés en paramètres sont égaux, false sinon
  // Faire de même avec un 3e tableau passé en paramètre qui sera optionnel
  optionalArray(a: number[], b: number[], c?: number[]): boolean {
    if (c) {
      return a.every((val, index) => val === b[index]) && b.every((val, index) => val === c[index]);
    }
    return a.every((val, index) => val === b[index]);
  }
}
