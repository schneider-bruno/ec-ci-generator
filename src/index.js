function generateCi() {
    firstDigits = firstDigits();
    return `${firstDigits}${lastDigit(firstDigits)}`

    function firstDigits() {
        const beginning = Array.from({ length: 2 }, () => randomInteger(0, 9));
        const middle = Array.from({ length: 1 }, () => randomInteger(0, 5));
        const end = Array.from({ length: 6 }, () => randomInteger(0, 9));
        return beginning.concat(middle, end).join('');
    }

    function isEven(n) {
        return (n % 2 == 0);
    }

    function randomInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function lastDigit(digits) {
        let mod = digitsSum(digits) % 10
        if (mod > 0) {
            return 10 - mod
        } else {
            return 0;
        }
    }

    function digitsSum(digits) {
        let sum = 0
        for (let index=0; index < digits.length; index++) {
            let char = digits[index];
            if (isEven(index)) {
                let multiple = Number(char) * 2
                if (multiple > 9) {
                    sum = sum + multiple - 9
                } else {
                    sum = sum + multiple
                }
            } else {
                sum = sum + Number(char);
            }
        }
        return sum;

    }
}

module.exports = generateCi