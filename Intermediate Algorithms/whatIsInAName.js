function whatIsInAName(collection, source) {
    
    var arr = [];
    
    collection.forEach(obj => {
      let collectionKeys = Object.keys(obj);
      let sourceKeys = Object.keys(source);
      let counter = 0;
      sourceKeys.forEach(key => {
        if(source[key] === obj[key]){
          counter ++;
        }
      });
        if (counter === sourceKeys.length){
            arr.push(obj);
        }
    });
    
    return arr;
  }
  