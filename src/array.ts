export default class MyArray {

  // Coder une méthode oddNumbers qui prend en paramètre un tableau d'entier, et renvoie un tableau uniquement composé
  // des entiers impairs de ce dernier
  oddNumbers(arr: number[]) {

    return arr.filter((n) => n % 2 !== 0);

  }

  // Coder une méthode sort qui renvoie le tableau passé en paramètre trié par ordre croissant
  sort(arr: number[]) {

    return arr.sort((a, b) => a - b);

  }

  // Coder une méthode boringFunction qui renvoie true si les string du tableaux ont toutes la même longueur,
  // ou renvoie "relou ta fonction" sinon
  boringFunction(arr: string[]) {

    var firstStringTable = arr[0].length;
    var allStringsTable = arr.every((str) => str.length === firstStringTable);

    return allStringsTable ? true : "relou ta fonction";
    
  }

  // Coder une méthode optionalArray qui renvoie true si les 2 arrays d'entiers passés en paramètres sont égaux, false sinon
  // Faire de même avec un 3e tableau passé en paramètre qui sera optionnel
  optionalArray(a:number[], b:number[], c?: number[]): boolean {

    if (a.length !== b.length) {

      return false;

    }
    if (c && a.length !== c.length) {

      return false;

    }
    for (let i = 0; i < a.length; i++) {

      if (a[i] !== b[i]) {
        return false;

      }
      if (c && a[i] !== c[i]) {

        return false;

      }
    }
    return true;
    
  }
}
