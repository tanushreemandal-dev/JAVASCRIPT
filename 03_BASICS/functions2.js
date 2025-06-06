// function CalculateCart(...num){ // here ... is known as rest operator
//     return num
// }
// console.log(CalculateCart(100,200,300,400))

// function CalculateCart1(val1,val2,...num){ // here ... is known as rest operator
//     return num
// }
// console.log(CalculateCart1(100,200,300,400))

user={
    username:"asd",
    price:122
}
function userDetails(anyobject){
    console.log(`user name is ${anyobject.username} and price is ${anyobject.price}`)
}
userDetails(user)

const arr=[1,2,3,4]

function SecondElement(Arr){
    return Arr[1]
}
console.log(SecondElement(arr))

console.log(SecondElement([1,3,2,4,5]))