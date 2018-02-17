function fearNotLetter(str) {
    let array = [];
    str.split('')
       .forEach(char => array.push(char.charCodeAt()));
          let unicodeVal;
          for(let i = 0; i< array.length; i++){
            if(array[i+1] != array[i]+1 && i+2 <= array.length){
              unicodeVal = array[i]+1;
              break;
            }
          }
    
    return unicodeVal ? String.fromCharCode(unicodeVal) : undefined;
  }