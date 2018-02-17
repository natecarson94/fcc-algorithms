function translatePigLatin(str) {
    let vowels = ['a','e','e','o','u'];
    //find if string starts with vowel or not
    if(vowels.includes(str[0])){
      //if starts with vowel concate 'way'
      return str+'way';
    }
    else{
     let index;
     let splitString = str.split('');
      
     //if starts with consonant find index of first vowel
     for(let i=0;i<splitString.length;i++){
       if(vowels.includes(splitString[i])){
         index = i;
         break;
       }
     }
     //move that consonant or cluster to the back
     //concate 'ay' to the end
     let cluster = splitString.splice(0,index).join('');
    
      return splitString.join('') + cluster + 'ay';
    }
  }
  
  translatePigLatin("consonant");
  