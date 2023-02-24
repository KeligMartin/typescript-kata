export default class MyArray {

  // Coder une méthode oddNumbers qui prend en paramètre un tableau d'entier, et renvoie un tableau uniquement composé
  // des entiers impairs de ce dernier

  oddNumbers(arr: number[]) {
    return arr.filter(el => el % 2 !== 0);
  }

  // Coder une méthode sort qui renvoie le tableau passé en paramètre trié par ordre croissant
  sort(arr: number[]) {
    return arr.sort((a,b) => a - b);
  }

  // Coder une méthode boringFunction qui renvoie true si les string du tableaux ont toutes la même longueur,
  // ou renvoie "relou ta fonction" sinon
  boringFunction(arr: string[]) {
    const firstLength = arr[0].length;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i].length !== firstLength) {
        return "relou ta fonction";
      }
    }
    return true;
  }

  // Coder une méthode optionalArray qui renvoie true si les 2 arrays d'entiers passés en paramètres sont égaux, false sinon
  // Faire de même avec un 3e tableau passé en paramètre qui sera optionnel
  optionalArray(a: number[], b: number[], c?: number[]): boolean {
    if (c && c.length !== a.length && c.length !== b.length) {
      return false;
    }
    return a.length === b.length &&
           a.every((value, index) => value === b[index]) &&
           (!c || c.every((value, index) => value === a[index] || value === b[index]));
  }
}
