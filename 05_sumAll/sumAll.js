const sumAll = function(firstNum, secondNum) {
let sum = 0;
if (firstNum < 0 || secondNum < 0 || !Number.isFinite(firstNum) || !Number.isFinite(secondNum)) {
    return 'ERROR';
}
else if (firstNum <= secondNum) {
for (i = firstNum; i <= secondNum; i++) {
    sum += i; 
}
}
else {
    for (i = secondNum; i <= firstNum; i++) {
        sum += i;   
} 
}
return sum;
};

// Do not edit below this line
module.exports = sumAll;
