// 1. Ask the user to provide a number

let userNumber = prompt('Enter a number to FizzBuzz:');
userNumber = Math.round(parseInt(userNumber));

// 2. For each number up to the number the user has provided
for (let i = 1; i <= userNumber; i++) {
    // 5. If the number is divisible by both 3 and 5, print _FizzBuzz_ to the console
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
    // 3. If the number is only divisible by 3, print _Fizz_ to the console
    } else if (i % 3 === 0) {
        console.log('Fizz');
    // 4. If the number is only divisible by 5, print _Buzz_ to the console
    } else if (i % 5 === 0) {
        console.log('Buzz');
    // 6. Otherwise, just print the number to the console
    } else {
        console.log(i);
    };
};

