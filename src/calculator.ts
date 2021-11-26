export default class MyCalculator {

  // Coder une methode add qui prend 2 nombres en paramètre et renvoie la somme des deux
  add(a:number, b:number):number {
    let sum = a + b;
    return sum;
  }

  // Coder une methode subtract qui prend 2 nombres en paramètre et renvoie la différence des deux
  subtract(a:number, b:number):number {
    let subtract = a - b;
    return subtract;
  }

  // Coder une methode multiply qui prend 2 nombres en paramètre et renvoie le produit des deux
  multiply(a:number, b:number):number {
    let multiply = a * b;
    return multiply;
  }

  // Coder une methode divide qui prend 2 nombres en paramètre et renvoie le quotient des deux
  divide(a:number, b:number):number {
    if (b == 0) {
      return 0;
    } else {
      return a / b;
    }
    
  }

  // Coder une méthode power qui prend 2 nombres en paramètre et renvoie le premier élevé à la puissance de l'autre
  power(a:number, b:number):number {
    let power = Math.pow(a, b);
    return power;
  }

  // Coder une méthode squareRoot qui prend un nombre en paramètre et renvoie sa racine carrée
  squareRoot(a:number):number {
    if (a < 0) {
      return 0;
    } else {
      return Math.sqrt(a);
    }
  }

  // Coder une fonction fléchée qui renvoie true si le chiffre en paramètre est premier, false sinon
  isPrime = (a:number):boolean => {
    for(var i = 2; i < a; i++) {
      if(a%i === 0) return false;
    }
    return a > 1;
  }

}
