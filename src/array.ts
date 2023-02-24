export default class MyArray {

  // Coder une méthode oddNumbers qui prend en paramètre un tableau d'entier, et renvoie un tableau uniquement composé
  // des entiers impairs de ce dernier
  oddNumbers(arr: number[]) {
    return arr.filter(a => a % 2 !== 0);
  }

  // Coder une méthode sort qui renvoie le tableau passé en paramètre trié par ordre croissant
  sort(arr: number[]) {
    return arr.sort((a, b) => a - b);
  }

  // Coder une méthode boringFunction qui renvoie true si les string du tableaux ont toutes la même longueur,
  // ou renvoie "relou ta fonction" sinon
  boringFunction(arr: string[]) {
    for(var i=0; i < arr.length-1; i++) {
      if(arr[0].length != arr[i].length ) {
        return "relou ta fonction";
      }
    }
    return true;
  }

  // Coder une méthode optionalArray qui renvoie true si les 2 arrays d'entiers passés en paramètres sont égaux, false sinon
  // Faire de même avec un 3e tableau passé en paramètre qui sera optionnel
  optionalArray(a : number[], b:number[], c? :number[]) {
    if(c !== null){
      if(a.length === b.length){
        for(var i=0; i < a.length; i++) {
          if(a[i] !== b[i]){
            return false;
          }
        }
      }
      else{
        return false;
      }
    }else{
      if(a.length === b.length && a.length === c.length){
        for(var i=0; i < a.length; i++) {
          if(a[i] !== b[i] || a[i] !== c[i]){
            return false;
          }
        }
      }
      else{
        return false;
      }
    }
    return true;
  }
}
