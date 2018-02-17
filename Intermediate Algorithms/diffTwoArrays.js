function diffArray(arr1, arr2) {
    var newArr = [];
    // Same, same; but different.
    arr1.map(function(a1){
      if (!arr2.includes(a1)){
        newArr.push(a1);
      }
    });
    
      arr2.map(function(a2){
      if (!arr1.includes(a2)){
        newArr.push(a2);
      }
    });
    
    return newArr;
    
    
  }