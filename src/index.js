module.exports = function getZerosCount(number, base) {
    let multipliers = [];
    let countOfPrimeNumber = [];
    let countMustiplierInNumber = [];
    factorizeBase(base, multipliers, countOfPrimeNumber);

    for (let i = 0; i < multipliers.length; i++){
        countMustiplierInNumber.push(Math.floor((countTempZero(number, multipliers[i])) / countOfPrimeNumber[i]));
    }
    countMustiplierInNumber.sort((a,b) => a - b);
    return countMustiplierInNumber[0];
}

function factorizeBase(base, multipliers,countOfPrimeNumber) {
    const primeNumbers = [251,241,239,233,229,227,223,211,199,197,193,191,181,179,173,167,163,157,151,149,139,137,131,127,113,109,107,103,101,97,89,83,79,73,71,67,61,59,53,47,43,41,37,31,29,23,19,17,13,11,7,5,3,2]
    for (let i = 0; i < primeNumbers.length; i++){
        let count = 0;
        while ((base >= primeNumbers[i]) && (base % primeNumbers[i] == 0)){
            count++;
            base /= primeNumbers[i];
        }
        if (count != 0){
            multipliers.push(primeNumbers[i]);
            countOfPrimeNumber.push(count);
        }
    }
}

function countTempZero(number, multiplier){
    let countOfZeros = 0;
    let counter = multiplier;
    while(counter <= number){
        countOfZeros += Math.trunc(number / counter);
        counter *= multiplier;
    }
    return countOfZeros;
}