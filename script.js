//Prajwol Neupane

//Area of Traingle
function areaOfTriangle(base, height) {
    var area = (base * height) / 2;
    return area;
}
console.log(areaOfTriangle(3, 2));

//Return Something to me
function returnSomething(title) {
    var changed = "Something " + title;
    return changed;
}
console.log(returnSomething("Hello"));

//Basketball Points
function points(firstPoint, secondPoint) {
    firstPoint = firstPoint * 2;
    secondPoint = secondPoint * 3;
    var totalPoint = firstPoint + secondPoint;
    return totalPoint;
}
console.log(points(7, 5));

//Less Than 100
function lessThan100(num1, num2) {
    var totalNumber = num1 + num2;
    return totalNumber < 100;
}
console.log(lessThan100(22, 15));

//Add up to number
function addUptoNumber(num) {
    var addedNumber = 0;
    for (let i = 1; i <= num; i++) {
        addedNumber = addedNumber + i
    }
    return addedNumber;
}

console.log(addUptoNumber(5));

//Oddish vs Evenish
function oddishVsEvenish(num) {
    var sum = 0;
    var number = num;
    while (number != 0) {
        var lastDigit = number % 10;
        sum = sum + lastDigit;
        number = Math.floor(number / 10);
    }
    if (sum % 2 == 0) {
        return "Evenish";
    } else {
        return "Oddish";
    }


}
console.log(oddishVsEvenish(4433));

//Prime Number
function findPrimesInRange(start, end) {
    // Initialize an empty array to store prime numbers
    let primes = [];

    // Loop through all numbers in the range
    for (let i = start; i <= end; i++) {
        let isPrime = true;

        // Check if current number is prime
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }

        // If current number is prime, add it to the array
        if (isPrime && i > 1) {
            primes.push(i);
        }
    }

    // Return the array of prime numbers
    return primes;
}

// Example usage
console.log(findPrimesInRange(1, 10));


//LeftShift by Powers of Two
function leftShift(num1, num2) {
    if (num2 < 0) {
        return "num2 must be positive integer."
    }
    var answer = num1 * (2 ** num2);
    return answer;
}
console.log(leftShift(10, 3));

//Convert a number to Base-2
function numberToBase2(num) {
    if (num == 0) {
        return 0;
    } else if (num >= 1024) {
        return "Number must be below 1024."
    }
    var number = num;
    var finalBinary = "";
    while (number != 0) {
        var binary = (number % 2).toString();
        number = Math.floor(number / 2);
        finalBinary = finalBinary + binary;
    }
    var spiltString = finalBinary.split("");
    var reverseArray = spiltString.reverse();
    finalBinary = reverseArray.join("");
    return finalBinary;
}
console.log(numberToBase2(10));


