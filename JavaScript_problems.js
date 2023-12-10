//1) Add two number , Level: Very Easy , Point so far: 5
function addition(a, b) {
    return a + b;
}

//2) Add up the Numbers from a Single Number , Level: Easy , Points so far : 15
//  Description: Create a function that takes a number as an argument. Add up all
//  the numbers from 1 to the number you passed to the function. For example, if the 
//  input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
function addUp(num) {
    sum = 0;
    for (i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
}

//3) Matchstick Houses, Level: Easy , Points so far: 25
function matchHouses(step) {
    if (step == 0) {
        return 0
    }
    else {
        return ((step * 6) - (step - 1))
    }
}

//4) Convert minutes to seconds, Level: Very Easy, Points so far: 30
function convert(minutes) {
    return minutes * 60;
}

//5) Find smallest and biggest numbers, Level: Easy, Points so far: 40
function minMax(arr) {
    var min = arr[0];
    var max = arr[0];
    for (i = 1; i <= arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    var solution = [min, max];
    return solution;
}

//6) Number of Squares in an N * N Grid, Level: Easy, Points so far: 50
function numberSquares(n) {
    if (n == 0) {
        return 0;
    }
    else {
        return ((n * n) + numberSquares(n - 1));
    }
}

//7) Find Number of Digits in Number , Level: Medium, Points so far: 70
function num_of_digits(num) {
    if (num == 0) {
        return 1;
    }
    else if (Math.floor(Math.abs(num) / 10) == 0) {
        return 1;
    }
    else {
        return num_of_digits(Math.floor(Math.abs(num) / 10)) + 1;
    }
}

//8) A Redundant Function, Level: Medium, Points so far: 90
function redundant(str) {
    return function () {
        return str;
    }
}

//9) Seven Boom!, Level: Hard, Points so far : 130
function sevenBoom(arr) {
    for (i = 0; i < arr.length; i++) {
        if (arr[i].toString().includes('7')) {
            return "Boom!";
        }
    }
    return "there is no 7 in the array";
}

//10) Even vs. Odds, Level: Very Hard, Points so far:210 
function availableSpots(arr, num) {
    var counter = 0;
    if (num % 2 == 0) {
        for (i = 0; i < arr.length - 1; i++) {
            if (arr[i] % 2 == 0 || arr[i + 1] % 2 == 0) {
                counter++;
            }
        }
    }
    else {
        for (i = 0; i < arr.length - 1; i++) {
            if (arr[i] % 2 != 0 || arr[i + 1] % 2 != 0) {
                counter++;
            }
        }
    }
    return counter;
}
