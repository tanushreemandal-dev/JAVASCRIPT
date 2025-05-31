const myArray=[1,2,3,4,5]
console.log(myArray[0])

const array1=new Array(6,4,2,8)
console.log(array1[3])
myArray.push(15)
console.log(myArray)
myArray.pop()
console.log(myArray)
const newArray1=myArray.join()
console.log(newArray1)
console.log(typeof(newArray1))

const array=[1,2,3,4,5,6,7,8,9,10]
const arr1=[11,12,13,14,15,16,17,18,19,20]

const newArray2=[...array,...arr1]
console.log(newArray2)

const arr=[1,[2,3],[4,[5,[6,7]],8,9],10]
const newArray=arr.flat(Infinity)
console.log(newArray)

console.log(Array.isArray("abc"))
console.log(Array.from("abc"))
console.log(Array.from({name:"abc"})) //interesting 
