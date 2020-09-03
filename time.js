
var number = [1, 2, 3, 4];
console.log(number)

function largestTimeFromDigits(number) {
    var fall = "Такой массив на время не разделить"
    var num = 2;
    var num1 = 4;
    var num2 = 5;
    var digit = -1;
    var final = [];
    console.log(number)
    while (digit == -1) {

        for (var i = 0; i < number.length; i++) {
            if (number[i] == num) {
                digit = number[i]
                final.push(digit)
                break;
            }
        }
        num--
        if (num == 0) {
            return fall
        }
    }

    var index = number.indexOf(digit);
    number.splice(index, 1);
    digit = -1;

    while (digit == -1) {

        for (var i = 0; i < number.length; i++) {
            if (number[i] == num1) {
                digit = number[i]
                final.push(digit)
                break;
            }
        }
        num1--
        if (num == 0) {
            return fall
        }
    }

    var index = number.indexOf(digit);
    number.splice(index, 1);
    digit = -1;

    final.push(":")

    while (digit == -1) {

        for (var i = 0; i < number.length; i++) {
            if (number[i] == num2) {
                digit = number[i]
                final.push(digit)
                break;
            }
        }
        num2--
        if (num == 0) {
            return fall
        }
    }

    var index = number.indexOf(digit);
    number.splice(index, 1);
    digit = -1;
    final.push(number[0])

    console.log(final);

    console.log(digit);
    console.log(number);

}

var qwq = largestTimeFromDigits(number)
console.log(qwq);