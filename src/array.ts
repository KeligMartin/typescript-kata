export default class MyArray {

  // Coder une méthode oddNumbers qui prend en paramètre un tableau d'entier, et renvoie un tableau uniquement composé
  // des entiers impairs de ce dernier
  oddNumbers(arr: number[]): number[] {
    return arr.filter(value => value % 2);
  }

  // Coder une méthode sort qui renvoie le tableau passé en paramètre trié par ordre croissant
  sort(arr: number[]): number[] {
    return arr.sort((a: number, b: number ): number => a - b);
  }

  // Coder une méthode boringFunction qui renvoie true si les string du tableaux ont toutes la même longueur,
  // ou renvoie "relou ta fonction" sinon
  boringFunction(arr: string[]): boolean | string {
    if (arr.length > 1) {
      const firstElementLength: number = arr[0].length;
      for (let i: number = 0; i < arr.length; i++) {
        if (arr[i].length !== firstElementLength) {
          return 'relou ta fonction';
        }        
      }
    }

    return true;
  }

  // Coder une méthode optionalArray qui renvoie true si les 2 arrays d'entiers passés en paramètres sont égaux, false sinon
  // Faire de même avec un 3e tableau passé en paramètre qui sera optionnel
  optionalArray(a: number[], b: number[], c?:number[]): boolean {
    if (c ? (a.length === b.length && a.length === c.length) : (a.length === b.length)) {
      for(let i: number = 0; i < a.length; i++) {
        if (c ? (a[i] !== b[i] || a[i] !== c[i]): (a[i] !== b[i])) {
          return false;
        }
      }
    } else {
      return false;
    }

    return true;
    // return c ? (a === b && a === c) : (a === b);
  }
}
