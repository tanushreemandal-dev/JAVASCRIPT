// function Add(number1,number2){
//     console.log(number1+number2)
// }
// Add(3,7)

// function add(num1,num2){
//     return num1+num2
// }
// const result=add(2,4)
// console.log(result)

function loginmessage(username){
    if(!username){
        console.log("invalid")
        return
    }
    return(`${username} just logged in `)
}
console.log(loginmessage("Tgh"))
console.log(loginmessage())

function loginMessage(username="hitesh"){
    if(!username){
        console.log("invalid")
        return
    }
    return(`${username} just logged in `)
}
console.log(loginMessage("T"))
console.log(loginMessage())