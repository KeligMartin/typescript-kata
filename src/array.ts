export default class MyArray {

  // Coder une méthode oddNumbers qui prend en paramètre un tableau d'entier, et renvoie un tableau uniquement composé
  // des entiers impairs de ce dernier
  oddNumbers(arr: number[]) {
    var odd: number[] = [];
    for(let i= 0; i < arr.length; i++) {
      if(arr[i] % 2 != 0) {
        odd.push(arr[i]);
      }
    
    }
    return odd;
  }

  // Coder une méthode sort qui renvoie le tableau passé en paramètre trié par ordre croissant
 
  sort(arr: number[]) {
      let swap: number;
      let test: boolean = false;
      while(!test){
        let x = 0;
        for(let i = 0; i < arr.length; i++){
          if(arr[i] > arr[i + 1]){
            swap = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = swap;
            x++;
          }
        }
        if(x == 0){
          test = true;
        }
      }
      return arr;
    }
  

  // Coder une méthode boringFunction qui renvoie true si les string du tableaux ont toutes la même longueur,
  // ou renvoie "relou ta fonction" sinon
  boringFunction(arr: string[]) {
    for (let i=0; i< arr.length - 1; i++) {
      if(arr[i].length != arr[i+1].length) {
        return 'relou ta fonction';
      }
      return true;
    }
  }

  // Coder une méthode optionalArray qui renvoie true si les 2 arrays d'entiers passés 
  //en paramètres sont égaux, false sinon
  // Faire de même avec un 3e tableau passé en paramètre qui sera optionnel
  optionalArray(a: number[], b: number[], c?: number[]) {
    
    if(a.length != b.length) {
      return false;
    } else {
      for (let i=0; i< a.length; i++) {
        if(a[i] != b[i]){
          return false;
        }
      }
    }
    if (c != null) {
      if (a.length != c.length) {
        for (let j=0; j< a.length; j++) {
          if(a[j] != c[j]){
            return false;
          }
        }
      }
    }


    return true;
  }
}
