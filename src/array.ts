export default class MyArray {
  // Coder une méthode oddNumbers qui prend en paramètre un tableau d'entier, et renvoie un tableau uniquement composé
  // des entiers impairs de ce dernier
  oddNumbers(arr: number[]) {
    let oddNumbers: number[] = [];

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 !== 0) {
        oddNumbers.push(arr[i]);
      }
    }
    return oddNumbers;
  }

  // Coder une méthode sort qui renvoie le tableau passé en paramètre trié par ordre croissant
  sort(arr: number[]) {
    return arr.reduce((acc: number[], cur: number) => {
      const index = acc.findIndex((val) => val > cur);
      if (index === -1) {
        return [...acc, cur];
      }
      
      return arr = [...acc.slice(0, index), cur, ...acc.slice(index)];
    }, []);
  }

  // Coder une méthode boringFunction qui renvoie true si les string du tableaux ont toutes la même longueur,
  // ou renvoie "relou ta fonction" sinon
  boringFunction(arr: string[]) {
    return arr.every((val) => val.length === arr[0].length) || "relou ta fonction" ;
  }

  // Coder une méthode optionalArray qui renvoie true si les 2 arrays d'entiers passés en paramètres sont égaux, false sinon
  // Faire de même avec un 3e tableau passé en paramètre qui sera optionnel
  optionalArray(a: number[], b: number[], c?: number[]) {
   // every js

    
    return a.toString() == b.toString() || (a.toString() == b.toString() && a.toString() == c.toString() && b.toString()) ;
  }
}
