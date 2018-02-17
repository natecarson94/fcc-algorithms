// Check if a value is classified as a boolean primitive. Return true or false.

// Boolean primitives are true and false.

function booWho(bool) {
    let val = String(bool);
    return typeof bool === 'string' ? (false) : ((val == 'true' || val == 'false') ? true : false);
  }
  
  booWho(null);