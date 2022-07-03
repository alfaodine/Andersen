function createMessage(str, separator) {
  let sep = separator || "";
  if (typeof str === "string") {
    let arr = str.split(" ");
    if (arr[arr.length - 1] === "undefined") {
      arr.pop();
      return arr.join("");
    }
    str += sep;
    return (strInner, sepInner) => {
      if (typeof strInner !== "string") {
        return str;
      }
      return createMessage(str + strInner, sepInner);
    };
  }
}

console.log(createMessage("first", "123")("second")("third")());

class Calculator {
  constructor(a, b) {
    if (validateNumber(a, b)) {
      this.a = a;
      this.b = b;
      const methods = Object.getOwnPropertyNames(Object.getPrototypeOf(this));
      methods
        .filter((method) => method !== "constructor")
        .forEach((method) => {
          this[method] = this[method].bind(this);
        });
    } else {
      throw new Error("");
    }
  }
  setX(num) {
    if (validateNumber(num)) {
      this.a = num;
    } else {
      throw new Error("");
    }
  }
  setY(num) {
    if (validateNumber(num)) {
      this.b = num;
    } else {
      throw new Error("");
    }
  }
  logSum() {
    console.log(this.a + this.b);
  }
  logMul() {
    console.log(this.a * this.b);
  }
  logSub() {
    console.log(this.a - this.b);
  }
  logDiv() {
    if (this.b !== 0) {
      console.log(this.a / this.b);
    } else {
      throw new Error("");
    }
  }
}

function validateNumber(...args) {
  let isValid = args.every((item) => typeof item === "number");
  return isValid;
}

let calc = new Calculator(23, 2);
let mul = calc.logMul;
mul();
