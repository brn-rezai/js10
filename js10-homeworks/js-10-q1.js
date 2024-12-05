// Using an example, explain the difference between block,global and function scope in variables.

let x = 10;

function sum() {
    let y = 15;
    s = x + y;
    return s;
}

console.log( x );
console.log( sum() );
console.log( s );
console.log( y );

// x in global scope
// y in block scope
// s is var and we can use it in globalscope








