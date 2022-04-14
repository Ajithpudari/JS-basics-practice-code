const a = 5, b = 2, c = 'hello';

// equal to operator
console.log(a == 5);    
 // true
console.log(b == '2');  
 // true
console.log(c == 'Hello');  // false

//////////////////////

const d = 2;

// strict equal operator
console.log(d === 2); 
// true
console.log(d === '2');
 // false
///////////////
const e = 2, f = 'hello';

// strict not equal operator
console.log(e !== 2); // false
console.log(e !== '2'); // true
console.log(f !== 'Hello'); // true

///////////////
const g = true,  h= false;
const i = 4;

// logical AND
console.log(g && g); // true
console.log(g && h);
  // false

console.log((i > 2) && (i < 2)); 
// false

