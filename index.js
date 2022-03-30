
//const oper=require("./oper");

// using when calling multiple functions
/*console.log(oper);       //object calling
console.log(oper.add(5,5));
console.log(oper.sub(10,5));*/


// another way of calling multiple functions

const {add, sub, name}=require("./oper");
console.log(add(5,5));
console.log(sub(10,5));

//const name=require("./oper");
console.log(name);
