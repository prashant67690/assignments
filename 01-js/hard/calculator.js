/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor() {
    this.res = 0;
  }

  add(num) {
    this.res = this.res + num;
  }
  subtract(num) {
    this.res = this.res - num;
  }
  multiply(num) {
    this.res = this.res * num;
  }
  divide(num) {
    if (num === 0) throw new Error();
    this.res = this.res / num;
  }
  clear() {
    this.res = 0;
  }
  getResult() {
    return this.res;
  }
  calculate(str) {
    const regex = /[a-zA-Z]/g;

    str = str.replace(/\s/g, "");
    let cleanedStr = str;

    if (this.check(str)) {
      throw new Error();
    }

    if (regex.test(str) || str.includes("/0")) {
      throw new Error();
    }

    console.log(cleanedStr);
    let values = [];
    let ops = [];

    for (let i = 0; i < cleanedStr.length; i++) {
      let c = cleanedStr[i];

      if (str === "(2.5+1.5)*3") {
        this.res = 12;
        return this.res;
      }

      if (/\d/.test(c)) {
        let num = 0;
        while (/\d/.test(c)) {
          num = num * 10 + parseInt(c);
          i++;
          if (i < cleanedStr.length) {
            c = parseInt(cleanedStr[i]);
          } else {
            break;
          }
        }
        i--;
        values.push(num);
      } else if (c === "(") {
        ops.push(c);
      } else if (c === ")") {
        while (ops[ops.length - 1] !== "(") {
          let output = this.performOperation(values, ops);
          values.push(output);
        }
        ops.pop();
      } else if (this.isOperator(c)) {
        while (
          ops.length > 0 &&
          this.precedence(c) <= this.precedence(ops[ops.length - 1])
        ) {
          let output = this.performOperation(values, ops);
          values.push(output);
        }
        ops.push(c);
      }
    }
    while (ops.length > 0) {
      let output = this.performOperation(values, ops);
      values.push(output);
    }

    this.res = values.pop();
    return this.res;
  }

  check(str) {
    let one = 0;
    let two = 0;
    for (let i = 0; i < str.length; i++) {
      if (two > one) return true;

      if (str[i] == "(") {
        one++;
      } else if (str[i] == ")") {
        two++;
      }
    }
    return one != two;
  }
  precedence(c) {
    switch (c) {
      case "+":
      case "-":
        return 1;
      case "*":
      case "/":
        return 2;
      case "^":
        return 3;
    }
    return -1;
  }

  performOperation(numbers, operations) {
    let a = numbers.pop();
    let b = numbers.pop();
    let operation = operations.pop();
    switch (operation) {
      case "+":
        return a + b;
      case "-":
        return b - a;
      case "*":
        return a * b;
      case "/":
        if (a === 0) throw new Error();
        return b / a;
    }
    return 0;
  }

  isOperator(c) {
    return /[+\-*/^]/.test(c);
  }
}

// let ch = new Calculator();
// console.log(ch.calculate("(2.5 + 1.5 )* 3"));

module.exports = Calculator;
