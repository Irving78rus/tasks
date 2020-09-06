var number = [3, 2, 7, 0];


function largestTimeFromDigits(number ) {
    var fall = ""
    var fall1 = ""
    var fall2 = ""
    var num = 2;
    var num1 = 3;
    var num11 = 9;
    var num2 = 5;
    var digit = -1;
    var digit1 = -1;
    var digit2 = -1;
    var final = [];
    var soso = [];
    for (var i = 0; i < number.length; i++) {
        if (number[i] >= 6) {
            soso.push(number[i])
            
            if (soso.length >=2){
                if (number.indexOf(0) != -1 ){
                    digit = 0
                }
                if (number.indexOf(1) != -1){
                digit = 1
               }
               
            }
            
        }
    }
    console.log(soso)
console.log(digit)
    while (digit == -1) {

        for (var i = 0; i < number.length; i++) {
            if (number[i] == num) {
                digit = number[i]
                
                break;
            }
        }
        
        if (num == -1) {
            return fall
        }
        --num
    }

    var index = number.indexOf(digit);
    number.splice(index, 1);

    while (digit1 == -1) {

        for (var i = 0; i < number.length; i++) {
            if ((number[i] == num1) && (digit == 2)) {
                digit1 = number[i]
                break;
            }
            else if ((number[i] == num11) && ((digit == 1) ||(digit == 0))) {
                digit1 = number[i]
                
                break;
            }
        }
        
        if ((num1 == -1) || (num11 == -1)) {
            return fall1
        }
        if (digit == 2) {
            num1--
        }
        if ((digit == 1) || (digit == 0)) {
            num11-- 
        }
    }
    var index = number.indexOf(digit1);
    number.splice(index, 1);
    

    while (digit2 == -1) {

        for (var i = 0; i < number.length; i++) {
            if (number[i] == num2) {
                digit2 = number[i]
                
                break;
            }
        }
        
        if (num2 == -1) {
            return fall2
        }
         num2--
    }
    var index = number.indexOf(digit2);
    number.splice(index, 1);
    final.push(digit)
    final.push(digit1)
    final.push(":")
    final.push(digit2)
    final.push(number[0])
    var str = final.join('');
    return str
}
 console.log(largestTimeFromDigits(number))
