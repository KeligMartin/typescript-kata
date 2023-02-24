export default class MyArray {
  // Coder une méthode oddNumbers qui prend en paramètre un tableau d'entier, et renvoie un tableau uniquement composé
  // des entiers impairs de ce dernier
  oddNumbers(arr: number[]): number[] {
    const oddArr: number[] = [];
    arr.forEach((num) => {
      if (num % 2 != 0) oddArr.push(num);
    });
    return oddArr;
  }

  // Coder une méthode sort qui renvoie le tableau passé en paramètre trié par ordre croissant
  sort(arr: number[]): number[] {
    return arr.sort((a, b) => a - b);
  }

  // Coder une méthode boringFunction qui renvoie true si les string du tableaux ont toutes la même longueur,
  // ou renvoie "relou ta fonction" sinon
  boringFunction(arr: string[]): boolean | string {
    let l: number = arr[0].length;
    for (let i: number = 0; i < arr.length; i++) {
      if (arr[i].length != l) return 'relou ta fonction';
    }
    return true;
  }

  // Coder une méthode optionalArray qui renvoie true si les 2 arrays d'entiers passés en paramètres sont égaux, false sinon
  // Faire de même avec un 3e tableau passé en paramètre qui sera optionnel
  optionalArray(a: number[], b: number[], c?: number[]): boolean {
    if (c) {
      return JSON.stringify(a) == JSON.stringify(b) && JSON.stringify(a) == JSON.stringify(c);
    } else {
      return JSON.stringify(a) == JSON.stringify(b);
    }
  }
}
