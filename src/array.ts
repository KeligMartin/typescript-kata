export default class MyArray {

  // Coder une méthode oddNumbers qui prend en paramètre un tableau d'entier, et renvoie un tableau uniquement composé
  // des entiers impairs de ce dernier
  oddNumbers(arr: number[]): number[] {
    let oddArray: number[] = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 !== 0)
        oddArray.push(arr[i]);
    }
    return oddArray;
  }

  // Coder une méthode sort qui renvoie le tableau passé en paramètre trié par ordre croissant
  sort(arr: number[]): number[] {
    return arr.sort((a, b)=> a - b);
  }

  // Coder une méthode boringFunction qui renvoie true si les string du tableaux ont toutes la même longueur,
  // ou renvoie "relou ta fonction" sinon
  boringFunction(arr: string[]): boolean | string {
    let firstElementLength: number = arr[0].length;
    let condition = true;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length !== firstElementLength) {
        return 'relou ta fonction';
      }
    }
    return true;
  }

  // Coder une méthode optionalArray qui renvoie true si les 2 arrays d'entiers passés en paramètres sont égaux, false sinon
  // Faire de même avec un 3e tableau passé en paramètre qui sera optionnel
  optionalArray(a: number[], b: number[], c?: number[]): boolean {
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
  }
}
