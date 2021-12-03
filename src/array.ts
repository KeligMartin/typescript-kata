export default class MyArray {

  // Coder une méthode oddNumbers qui prend en paramètre un tableau d'entier, et renvoie un tableau uniquement composé
  // des entiers impairs de ce dernier
  oddNumbers(arr: number[]) {
    let tmp: Array<number> = [];
    arr.forEach(value => {
      if(value%2 > 0){
        tmp.push(value)
      }
    });
    return tmp;
  }

  // Coder une méthode sort qui renvoie le tableau passé en paramètre trié par ordre croissant
  sort(arr: number[]) {
    return arr.sort(function(a, b){return a - b});
  }

  // Coder une méthode boringFunction qui renvoie true si les string du tableaux ont toutes la même longueur,
  // ou renvoie "relou ta fonction" sinon
  boringFunction(arr: string[]) {
    for(var i = 0; i < arr.length -1; i++){
      if(arr[i].length != arr[i+1].length) return 'relou ta fonction';
    }
    return true
  }

  // Coder une méthode optionalArray qui renvoie true si les 2 arrays d'entiers passés en paramètres sont égaux, false sinon
  // Faire de même avec un 3e tableau passé en paramètre qui sera optionnel
  optionalArray(a: number[], b: number[], c?: number[]): boolean {
    let tmp:boolean = true;
    a.forEach((value, key) => {
      if(value != b[key]){
        tmp = false;
        return;
      }
    })
    if(c !== undefined && tmp){
      return this.optionalArray(a, c);
    }
    return tmp;
  }
}
