// According to your js10 session, write a code that shows why we shouldn't use var?


function av() {
    let x = 20;
    var y = 30;
    // let x = 12; //(error)
    var y = 12;
    t = ( x + y ) / 2;
    return t;
}
let x = 10;
var y = 22;
console.log( x );
console.log( y );
console.log( "av: " + av() );
// var x = 10; //(error)
var y = 70;
// let y = 20; //(error)

console.log( y );
console.log( x );


// In a big program, a specific variable such as y can be defined many times in each scope, and this increases the possibility of programmer error.




