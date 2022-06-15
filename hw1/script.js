function getAnswerTwoNumbers (){
    let a = +prompt('Enter first number');
    if (isNaN(a)) {
        console.log('Некорректный ввод!');
        return;
    }
    let b = +prompt('Enter second number');
    if (isNaN(b)) {
        console.log('Некорректный ввод!');
        return;
    }
    console.log(`Ответ: ${a+b}, ${a/b}`)
}

getAnswerTwoNumbers();