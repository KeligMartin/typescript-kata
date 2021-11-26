export default class MyArray {

  // Coder une méthode oddNumbers qui prend en paramètre un tableau d'entier, et renvoie un tableau uniquement composé
  // des entiers impairs de ce dernier
  oddNumbers(arr: number[]): number[] {
    let odds = [];
    for (let i = 0; i < arr.length; i++) {
      if ((arr[i] % 2) != 1) {  
        console.log("it's even")
      }
      else {
        odds.push(arr[i]);
      }
    }
    return odds;
  }

  // Coder une méthode sort qui renvoie le tableau passé en paramètre trié par ordre croissant
  sort(arr: number[]): number[] {
    arr.sort((a, b) => a - b);
    return arr;
  }

  // Coder une méthode boringFunction qui renvoie true si les string du tableaux ont toutes la même longueur,
  // ou renvoie "relou ta fonction" sinon
  boringFunction(arr: string[]): any {
    for (let i=0;i<arr.length;i++) {
      if (arr[i].length == arr[i+1].length) {
        return true;
      } else {
        return "relou ta fonction";
      }
    }
  }

  // Coder une méthode optionalArray qui renvoie true si les 2 arrays d'entiers passés en paramètres sont égaux, false sinon
  // Faire de même avec un 3e tableau passé en paramètre qui sera optionnel
  optionalArray(a: Array<number> = [], b: Array<number> = [], c?: number[]): boolean {
    if (c !== undefined) {
      if (JSON.stringify(a) === JSON.stringify(b) && JSON.stringify(b) === JSON.stringify(b)) {
        return true;
      } else {
        return false;
      }
    } else {
      if (JSON.stringify(a) === JSON.stringify(b)) {
        return true;
      } else {
        return false;
      }
    }
  }
}
