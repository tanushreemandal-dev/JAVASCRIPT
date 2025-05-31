const mySymbol=Symbol("key1");
const obj={
    name:"Abc",
    age:12,
    IsLoggedIn:false,
    LogIndays:["Monday","Tuesday","Wednesday"],
    [mySymbol]:"key1"
}
console.log(obj.name)
console.log(obj["age"])
console.log(obj[mySymbol])
console.log(typeof mySymbol)