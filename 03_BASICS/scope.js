//var a=30
let a=30
if(true){
    let a=300
    let b=1
    const c=9
   // console.log("Inner:",a)
}
//console.log(a)
// console.log(b)
// console.log(c)

function one(){
    const username="tan"
    function two(){
        const age=12
        console.log(username)
    }
   // console.log(age)
    two()
}
one()
//IIFE
(function print(){
    console.log("T")
})()