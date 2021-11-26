class Calculator {
    total = 0;
    sum(value) {
      this.total += value;
    }
    substract(value) {
      this.total -= value;
    }
    multiply(value) {
      this.total *= value;
    }
    divide(value) {
      this.total /= value;
    }
  }
  
  //escenario
  const calculator = new Calculator();
  
  // accion
  calculator.sum(4);
  calculator.substract(2);
  calculator.multiply(3);
  calculator.divide(2);
  
  // comprobación
  //if (calculator.total == 2) console.log("el test esta ok");
  //else console.log("esta Fail")
  console.log(calculator.total);
  
  //ejercicio ---> hacer calculadora con sumar , restar, dividir y 0
  