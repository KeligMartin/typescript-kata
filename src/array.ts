export default class MyArray {

  // Coder une méthode oddNumbers qui prend en paramètre un tableau d'entier, et renvoie un tableau uniquement composé
  // des entiers impairs de ce dernier
  oddNumbers(arr: number[]):number[] {
    return arr.filter(x => x%2 !== 0);
  }

  // Coder une méthode sort qui renvoie le tableau passé en paramètre trié par ordre croissant
  sort(arr: number[]):number[] {
    return arr.sort((a,b) => a-b);
  }

  // Coder une méthode boringFunction qui renvoie true si les string du tableaux ont toutes la même longueur,
  // ou renvoie "relou ta fonction" sinon
  boringFunction(arr: string[]) :any {
    const tmpArr = arr.filter(word => word.length == arr[0].length);
    if (tmpArr.length == arr.length)
      return true;
    return 'relou ta fonction';
  }

  // Coder une méthode optionalArray qui renvoie true si les 2 arrays d'entiers passés en paramètres sont égaux, false sinon
  // Faire de même avec un 3e tableau passé en paramètre qui sera optionnel
  optionalArray(a:Array<number>, b:Array<number>, c?:Array<number>):boolean {
    if(arguments.length == 2) {
      return JSON.stringify(a) === JSON.stringify(b);
    }
    else if (arguments.length == 3) {
      return JSON.stringify(a) === JSON.stringify(b) && JSON.stringify(a) === JSON.stringify(c);
    }
    return false
  }
}
