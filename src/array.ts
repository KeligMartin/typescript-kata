export default class MyArray {

  // Coder une méthode oddNumbers qui prend en paramètre un tableau d'entier, et renvoie un tableau uniquement composé
  // des entiers impairs de ce dernier
  oddNumbers(arr: number[]): number[] {
    return arr.filter((n : number) => n % 2 === 1)
  }

  // Coder une méthode sort qui renvoie le tableau passé en paramètre trié par ordre croissant
  sort(arr: number[]): number[] {
    let sortedArray : number[] = arr;
   
    for(let i : number = 1; i < sortedArray.length; i++){

      for(let j = i - 1; j > -1; j--){
          
          if(sortedArray[j + 1] < sortedArray[j]){

              [sortedArray[j+1],sortedArray[j]] = [sortedArray[j],sortedArray[j + 1]];

          }
      }
    };

    return sortedArray
  }

  // Coder une méthode boringFunction qui renvoie true si les string du tableaux ont toutes la même longueur,
  // ou renvoie "relou ta fonction" sinon
  boringFunction(arr: string[]) : boolean|string {
    const firstElt : string = arr[0] ?? '';
    const allSameLength : boolean = arr.filter((elt : string) => elt.length == firstElt.length).length == arr.length

    return allSameLength ? true : 'relou ta fonction';
  }

  // Coder une méthode optionalArray qui renvoie true si les 2 arrays d'entiers passés en paramètres sont égaux, false sinon
  // Faire de même avec un 3e tableau passé en paramètre qui sera optionnel
  optionalArray(a : number[], b : number[], c? : number[]) : boolean {
    let aEqualB = false;

    // Je check a et b
    if(a.length == b.length){
      aEqualB = a.every((n, i) => n === b[i])
    }

    // Si on c n'est pas null, je test a et c aussi
    return aEqualB && (c ? this.optionalArray(a,c) : true);
  }
}
