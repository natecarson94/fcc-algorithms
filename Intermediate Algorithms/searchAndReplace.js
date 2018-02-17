function myReplace(str, before, after) {
    let newString = str.split(' ');
    let index = newString.indexOf(before);
    let newAfter = after;
    
    if(before.split('')[0] === before.split('')[0].toUpperCase()){
     newAfter = after.substring(0,1).toUpperCase() + after.substring(1);
    }
    
    newString.splice(index,1,newAfter);
    
    str = newString.join(' ');
    
    return str;
    
  }
  
  myReplace("He is Sleeping on the couch", "Sleeping", "sitting");