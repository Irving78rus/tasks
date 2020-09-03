var number = [9, 2, 4, 3];

function largestTimeFromDigits(number) {
    var fall = "Такой массив на время не разделить"
    var fall1 = "Такой массив на время не разделить1"
    var fall2 = "Такой массив на время не разделить2"
    var num = 2;
    var num1 = 4;
    var num11 = 9;
    var num2 = 5;
    var digit = -1;
    var digit1 = -1;
    var digit2 = -1;
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
        if (num == -1) {
            return fall
        }
    }

    var index = number.indexOf(digit);
    number.splice(index, 1);

    while (digit1 == -1) {

        for (var i = 0; i < number.length; i++) {
            if ((number[i] == num1) && (digit == 2)) {
                digit1 = number[i]
                final.push(digit1)
                console.log(final + ' final');
                break;
            }
            else if ((number[i] == num11) && (digit == 1)) {
                digit1 = number[i]
                final.push(digit1)
                console.log(final + ' final');
                break;
            }
        }
        if (digit == 2) {
            num1--
        }
        if (digit == 1) {
            num11--
        }
        if ((num1 == -1) || (num11 == -1)) {
            return fall1
        }
    }
    var index = number.indexOf(digit1);
    number.splice(index, 1);
    final.push(":")

    while (digit2 == -1) {

        for (var i = 0; i < number.length; i++) {
            if (number[i] == num2) {
                digit2 = number[i]
                final.push(digit2)
                break;
            }
        }
        --num2
        if (num2 == -1) {
            return fall2
        }
    }
    var index = number.indexOf(digit2);
    number.splice(index, 1);

    final.push(number[0])
    var str = final.join('');
    return str
}
var result = largestTimeFromDigits(number)
console.log(result);
