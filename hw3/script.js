Array.prototype.myFilter = function (callback, obj) {
    const filtered = [];
    for (let i = 0; i < this.length; i++) {
        if (obj?callback.apply(obj, this[i]):callback(this[i])){
            filtered.push(this[i]);
        }
    }
    return filtered;
}
let filtered = [1, 2, 3, 4, 5, 6].myFilter((item) => {
    if (item > 3) {
        return item;
    }
})
// console.log(filtered);
//----------------------2--------------------------------------

function createDebounceFunction (func, ms){
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => { 
          func.apply(this, args); 
        }, ms);
    };
  }
  const log100 = () => console.log(100);
  const debounceLog100 = createDebounceFunction(log100, 2000);
  setTimeout(debounceLog100, 1000); 
  setTimeout(debounceLog100, 3000); 


