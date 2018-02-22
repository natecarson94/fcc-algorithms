// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than 10 are 1, 1, 3, and 5.

function sumFibs(num) {
    let number1 = 1;
    let number2 = 1;
    let numbers = [number1, number2];
    for(let i = 0; i<=num; i++){
      let x = number1+number2;
      if(x > num){
          break;
      }
      else {
        numbers.push(x);
        number1=number2;
        number2 = x;
      }
      
    }
    return numbers.reduce((sum,el)=>{
       if (el%2 != 0){
           return sum+el;
       }
       else return sum;
   });

   
  }
  
  console.log(sumFibs(1000));