export default class MyArray {
  // Coder une méthode oddNumbers qui prend en paramètre un tableau d'entier, et renvoie un tableau uniquement composé
  // des entiers impairs de ce dernier
  oddNumbers(arr: number[]) {
    return arr.filter((x: number) => x % 2 !== 0);
  }

  // Coder une méthode sort qui renvoie le tableau passé en paramètre trié par ordre croissant
  sort(arr: number[]) {
    return arr.sort((a: number, b: number) => a - b);
  }

  // Coder une méthode boringFunction qui renvoie true si les string du tableaux ont toutes la même longueur,
  // ou renvoie "relou ta fonction" sinon
  boringFunction(arr: string[]) {
    const length: number = arr[0].length;
    const checkLength = arr.every((numb) => numb.length === length);
    if (checkLength) {
      return true;
    }
    return 'relou ta fonction';
  }

  // Coder une méthode optionalArray qui renvoie true si les 2 arrays d'entiers passés en paramètres sont égaux, false sinon
  // Faire de même avec un 3e tableau passé en paramètre qui sera optionnel
  optionalArray(a: number[], b: number[], c?: number[]) {
    if (a.length !== b.length) {
      return false;
    }

    // FAIRE LE C !!!!!!!!

    // Vérifie si les éléments des deux tableaux sont identiques
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        return false;
      }
    }

    // Si tous les éléments sont identiques, renvoie true
    return true;
  }
}
