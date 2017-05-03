// Write a function named stringy that takes a size and returns a string of alternating '1s' and '0s'. The string should start with a 1. A string with size 6 should return :'101010'. With size 4 should return : '1010'. With size 12 should return : '101010101010'. The size will always be positive and will only use whole numbers.

function stringy (size){
  string = ""
  for (x = 0; x < size; x++){
    if (x % 2 === 0){
      string += "1";
    }else{
      string += "0"
    }
  }
  return string
}

console.log(stringy(10))

// Given a non-negative integer, return an array containing a list of independent digits in reverse order. Example: 348597 => [7,9,5,8,4,3]

function reverseArray(i) {
  var num = i.toString();
  array = []
  for (x = num.length; x > 0; x--){
    array.push(num[x - 1])
  }
  return array
}

console.log(reverseArray(98141734));

// Fibonacci number is the sum of the previous two sequence numbers. Below is an example of the sequence 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, … Notice the sequence pattern is the sum of the previous two numbers?

// 0 + 1 = 1
// 1 + 1 = 2
// 1 + 2 = 3
// 2 + 3 = 5
// 3 + 5 = 8 …

// Build a function to illustrate how to get this sequence to output. If you don’t know where to begin start with pseudo code to work through the steps

function fibonacci(i){
  var x = 1, y = 0, num;
  while (i >= 0){
    num = x;
    x = x + y;
    y = num;
    i--;
  }
  return y
}

function output(fib){
  array = []
  for (x = 0; x < fib; x++){
    array.push(fibonacci(x))
  }
  return array
}

console.log(output(20))

// Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons. Write a function called checkCoupon to verify that a coupon is valid and not expired. If the coupon is good, return true. Otherwise, return false. A coupon expires at the END of the expiration date. All dates will be passed in as strings in this format: "June 15, 2014"

function checkCoupon(coupon){
  var expirationTime = new Date(coupon);
  expirationTime.setHours(23);
  expirationTime.setMinutes(59);
  expirationTime.setSeconds(59);
  if (expirationTime.getTime() > new Date().getTime()){
    return true;
  }else{
    return false;
  }
}
 console.log(checkCoupon("May 1, 2017"))
 console.log(checkCoupon("May 2, 2017"))
 console.log(checkCoupon("May 3, 2017"))
 console.log(checkCoupon("May 4, 2017"))
