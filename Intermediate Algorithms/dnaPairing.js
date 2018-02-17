function pairElement(str) {
    let splitString = str.split('');
    let finalArray = [];
   splitString.forEach(char=>{
     switch(char){
       case 'A':
         finalArray.push(['A','T']);
         break;
       case 'T': 
         finalArray.push(['T','A']);
         break;
       case 'G':
         finalArray.push(['G','C']);
         break;
       case 'C':
         finalArray.push(['C','G']);
         break;
     }
   });
  return finalArray;
  }
  
  pairElement("GCG");
  