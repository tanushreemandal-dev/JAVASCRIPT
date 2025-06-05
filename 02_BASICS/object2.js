const obj1={}
//console.log(obj1)
obj1.name="Tanu"
obj1.id=123
obj1.IsLoggedIn=false
//console.log(obj1)

const obj2={
    email:"asd@gmail.com",
    full:{
        username:{
            first:"asd",
            last:"uio"
        }

    }
}
//console.log(obj2.full.username.last)

const obj6={1:"u",2:"s"}
const obj7={3:"a",4:"b"}
//merging objs(1st way)
//const obj8=Object.assign({},obj6,obj7)
//merging objs(2nd way:Spread)
const obj8={...obj6,...obj7}
//console.log(obj8)

// console.log(Object.keys(obj1))
// console.log(Object.values(obj1))
// console.log(Object.entries(obj1))
console.log(obj1.hasOwnProperty("name"))