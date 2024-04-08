function* fizzbuzz() {
  let i = 1n;

  while (true) {
    let answer = "";
    if (i % 3n === 0n) answer = "Fizz";
    if (i % 5n === 0n) answer += (answer ? " " : "") + "Buzz";

    yield console.log(answer || i);
    i++;
  }
}


const myFizzBazz = fizzbuzz();

myFizzBazz.next(); // 1n
myFizzBazz.next(); // 2n
myFizzBazz.next(); // Fizz
myFizzBazz.next(); // 4n
myFizzBazz.next(); // Fizz