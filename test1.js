let number1 = 1102;
let number2 = 2002;
let number3 = 3302;
let array = [number1, number2, number3];

let author = {
    fName: 'unknown',
    lName: 'unknown',
    Born_in: array[1]
};

author.fName = 'Bavli';
author['lName'] = 'Armanyous';

function personData(age) {

    let userInput = prompt("Click 'b'");

    if (userInput === 'b') {
       alert(JSON.stringify(author));
       alert('age now = ' + age + ' years old');
    }
}

personData(20);