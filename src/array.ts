export default class MyArray {

  // Coder une méthode oddNumbers qui prend en paramètre un tableau d'entier, et renvoie un tableau uniquement composé
  // des entiers impairs de ce dernier
  oddNumbers(arr: number[]): number[] {
    return arr.filter((n: number) => n%2);
  }

  // Coder une méthode sort qui renvoie le tableau passé en paramètre trié par ordre croissant
  sort(arr: number[]): number[] {
    return arr.sort((a, b) => a - b);
  }

  // Coder une méthode boringFunction qui renvoie true si les string du tableaux ont toutes la même longueur,
  // ou renvoie "relou ta fonction" sinon
  boringFunction(arr: string[]): any {
    let firstElementLength: number = arr[0].length;
    let sameLength: boolean = true;
    arr.forEach((element: string) => {
      if (firstElementLength !== element.length) {
        sameLength = false;
      }
    });
    
    if (sameLength) {
      return true;
    } else {
      return "relou ta fonction";
    }

  }

  // Coder une méthode optionalArray qui renvoie true si les 2 arrays d'entiers passés en paramètres sont égaux, false sinon
  // Faire de même avec un 3e tableau passé en paramètre qui sera optionnel
  optionalArray(a: number[], b: number[], c?: number[]): boolean {
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
