//----------------1------------------
function deepCopyObject(obj) {
    const deepCopy = {};
    for(let key in obj) {
        if(typeof(obj[key]) === "object" && obj[key] !== null)
            deepCopy[key] = deepCopyObject(obj[key]);
        else
            deepCopy[key] = obj[key];
    }
    return deepCopy;
}
let obj = {
    a: 2,
    b: {
        c: 2,
        d: {
            e: 8
        }
    }
}

let newObj = deepCopyObject (obj);
console.log(newObj);

//----------------2------------------

function selectFromInterval (arr, startRange, endRange) {
    let isArrayNumbers = arr.every((elem) => typeof(elem) === 'number')
    if (isArrayNumbers && (typeof(startRange) === 'number') && typeof(endRange) === 'number') {
        if (startRange > endRange) {
            let x = startRange;
            startRange = endRange;
            endRange = x;
        }
        let resArr = arr.filter((item) => {
            if  ((startRange <= item) && (endRange >= item )) {
                return item;
            }
    
        })
        console.log(resArr)
    } else {
        throw new Error ('Ошибка!');
    }

}

selectFromInterval ([-8, -15, 0, 4], -13, -5);

//----------------3-------------------

const myIterable = { from: 1, to: 4 };
  
  myIterable[Symbol.iterator] = function() {
    if ((this.from < this.to) && (typeof(this.from) === 'number') && typeof(this.to) === 'number'){
        let current = this.from;
        let last = this.to;
        return {
          next() {
            if (current <= last) {
              return {
                done: false,
                value: current++
              };
            } else {
              return {
                done: true
              };
            }
          }
        }
    } else {
        throw new Error ('Error! Check input data');
    }
  };
  
  for (let item of myIterable) {
    console.log(item);
  }