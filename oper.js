const add=(a,b)=>{
    return a+b;
}

const sub=(a,b)=>{
    return a-b;
}


//module.exports = add;

const name="Akshata";
//module.exports=name;

//for exporting multiple files

/*module.exports.add=add;
module.exports.sub=sub;*/

//another way of exporting multiple functions
module.exports={add, sub, name};