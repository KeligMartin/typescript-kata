export default class MyArray {

  // Coder une méthode oddNumbers qui prend en paramètre un tableau d'entier, et renvoie un tableau uniquement composé
  // des entiers impairs de ce dernier
  oddNumbers(arr: number[]): Array<number> {
    return arr.filter(function (arr:number) {
      return arr%2 > 0 
    });
  }

  // Coder une méthode sort qui renvoie le tableau passé en paramètre trié par ordre croissant
  sort(arr: number[]): Array<number> {
    arr.sort(function(a:number, b: number) {
     return a - b;
    });
    return arr;
  }

  // Coder une méthode boringFunction qui renvoie true si les string du tableaux ont toutes la même longueur,
  // ou renvoie "relou ta fonction" sinon
  boringFunction(arr: string[]): Boolean | string {
    let bool: Boolean = arr.every(function (x: string) {
      return arr[0].length == x.length;
    })
    if (!bool)
      return "relou ta fonction"
    return bool;
  }

  // Coder une méthode optionalArray qui renvoie true si les 2 arrays d'entiers passés en paramètres sont égaux, false sinon
  // Faire de même avec un 3e tableau passé en paramètre qui sera optionnel
  optionalArray(a: number[], b: number[], c?: number[]): Boolean {
    if (a.length != b.length)
    {
      return false
    }
      
    let bool: Boolean = a.every(function (element: number, i:number) {
      if (c)
        return element == b[i] && element == c[i];
      return element == b[i];
    })
    return bool;
  }
}
