function convertToRoman(num) {
  const numbers = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
  const romans = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];
   
  let answer='';
   
  for(let i = 0; i<numbers.length; i++){
    while(numbers[i] <= num){
      answer += romans[i];
      num -= numbers[i];
    }
  }
   
   return answer;
 }