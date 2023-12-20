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
    this.res = this.res / num;
  }
  clear() {
    this.res = 0;
  }
  getResult() {
    return this.res;
  }
  calculate(str) {
    let ans = 0;
    let cleaned = "";
    for (let i = 0; i < str.length; i++) {
      if (str[i] == " ") {
        continue;
      } else if (str[i] >= 48 && str[i] <= 57) {
        cleaned += str[i];
      } else {
        throw new Error("non-numerical characters");
      }
    }
    cleaned = "(" + cleaned + ")";
    let st = [];

    for (let i = 0; i < cleaned.length; i++) {
      if (cleaned[i] == ")") {
      } else {
        st.push(cleaned[i]);
      }
    }

    return ans;
  }
}

module.exports = Calculator;
