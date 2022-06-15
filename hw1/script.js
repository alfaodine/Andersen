function getNumberInOtherSystem() {
let a = +prompt('Enter first number');
let b = +prompt('Enter second number');
    if ((!isNaN(a)) && (!isNaN(b))){
        let x = a;
        let arr = [];
        while (x > 0) {
            arr.push(x%(b))
            x = x / b;
            x = Math.floor(x);
        }
        console.log(arr.reverse().join(''));
    } else {
        console.log('Некорректный ввод!');
    }
}

getNumberInOtherSystem();