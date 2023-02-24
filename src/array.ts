export default class MyArray {

  // Coder une méthode oddNumbers qui prend en paramètre un tableau d'entier, et renvoie un tableau uniquement composé
  // des entiers impairs de ce dernier
  oddNumbers(arr: number[]) {
    let newArray = new Array<Number>;
    arr.forEach(nb => {
      if(nb % 2 == 0) {
      } else {
        newArray.push(nb)
      }
    });
    return newArray
  }

  // Coder une méthode sort qui renvoie le tableau passé en paramètre trié par ordre croissant
  sort(arr: number[]) {
    return arr.sort((a, b) => a - b)
  }

  // Coder une méthode boringFunction qui renvoie true si les string du tableaux ont toutes la même longueur,
  // ou renvoie "relou ta fonction" sinon
  boringFunction(arr: string[]) {
    if(arr.length === 0) {
      return "relou ta fonction"
    }
    let initialNumber = arr[0].length;

    for(let i = 1; i < arr.length; i++) {
      if(arr[i].length !== initialNumber) {
        return "relou ta fonction"
      }
    }
    return true
  }

  // Coder une méthode optionalArray qui renvoie true si les 2 arrays d'entiers passés en paramètres sont égaux, false sinon
  // Faire de même avec un 3e tableau passé en paramètre qui sera optionnel
  optionalArray(a: number[], b: number[], c?: number[]): boolean {
    if (c) {
      if (a.length !== b.length || a.length !== c.length) {
        return false;
      }
      for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i] || a[i] !== c[i]) {
          return false;
        }
      }
    }
    else {
      if (a.length !== b.length) {
        return false;
      }
      for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
          return false;
        }
      }
    }
    return true;
  }
}
