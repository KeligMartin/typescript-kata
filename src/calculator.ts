export default class MyCalculator {
  // Coder une methode add qui prend 2 nombres en paramètre et renvoie la somme des deux
  public add(a: number, b: number): number {
    return a + b;
  }

  // Coder une methode subtract qui prend 2 nombres en paramètre et renvoie la différence des deux
  public subtract(a: number, b: number): number {
    return a - b;
  }

  // Coder une methode multiply qui prend 2 nombres en paramètre et renvoie le produit des deux
  public multiply(a: number, b: number): number {
    return a * b;
  }

  // Coder une methode divide qui prend 2 nombres en paramètre et renvoie le quotient des deux
  public divide(a: number, b: number): number {
    return a !== 0 && b !== 0 ? a / b : 0;
  }

  // Coder une méthode power qui prend 2 nombres en paramètre et renvoie le premier élevé à la puissance de l'autre
  public power(a: number, b: number): number {
    return a ** b;
  }

  // Coder une méthode squareRoot qui prend un nombre en paramètre et renvoie sa racine carrée
  public squareRoot(a: number): number {
    return a >= 0 ? Math.sqrt(a) : 0;
  }

  // Coder une fonction fléchée qui renvoie true si le chiffre en paramètre est premier, false sinon
  public isPrime = (a: number): boolean => {
    if (a < 2) return false;
    for (let i = 2; i <= Math.sqrt(a); i++) {
      if (a % i == 0) return false;
    }
    return true;
  };
}
