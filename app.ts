let variable = "hello"
variable = "hi"
// it cannot be another type

let age = 18;
// age = "eighteen" it will shoot error because it must be a number

let ageWithType: number = 22;
// ageWithType ="eighteen" it must be a number;
ageWithType = 18;

let testString: string
testString = "hello"

let testBoolean: boolean
testBoolean = false

let testStringOrNumber: string | number
// in this case i can use only string or a number 

testStringOrNumber = 10
testStringOrNumber = "10"
// testStringOrNumber = []
// if we try to change it type we will see a warning

// ARRAY 
let names = ["john", "jane", "tom"]
// names.push(3)
// we will get Argument of type 'number' is not assignable to parameter of type 'string'. error
names.push("mike")

let numbers = [11, 22, 35]
// numbers.push(true)
// Argument of type 'boolean' is not assignable to parameter of type 'number'
numbers.push(92)

let testStringArray: string[]
// testStringArray = [1,2,3]
// Type 'number' is not assignable to type 'string'
testStringArray = ["one", "two", "three"]

let testNumberArray: number[]
// testNumberArray = [true, "hi", 23]
testNumberArray = [12, 55, 23]

let testStringOrNumberArray: (string | number)[]
testStringOrNumberArray = [1, "two", 3]

// OBJECT
let user = {
    username: "john",
    age: 22,
    isAdmin: false
}

user.username = "jane"
// user.age = "eighteen"
user.age = 18
// user.isAdmin = "no"
user.isAdmin = true
// user.phone= "+1234566"

let userObj: {
    username: string
    age: number
    isAdmin: boolean
}

userObj = {
    username: "john",
    age: 22,
    isAdmin: false
    // phone= "+1234566" it is not going to work because it is not part of the original structure

};

let userObj2 : {
    username: string;
    age: number;
    isAdmin: boolean
    phone?: string
}

userObj2 = {
    username: "john",
    age: 22,
    isAdmin: false,
    // phone: "+1234566" even withou it, wont shoot error
}

let testAny : any;

testAny = 12
testAny = "hello"
testAny = true
testAny = [true]
testAny = {}

let testAnyArray : any[]
testAnyArray = [1, "two", false, []]


let sayHi = () => {
    console.log("Hi, welcome")
}

// sayHi = "Hi"

let funcReturnString = ():string=> {
// console.log("hi") its not going to work
return "code with billions"
}

let mutiple = (num: number) => {
    return num * 2
}

let mutiple2 = (num: number): number => {
    return num * 2
}

let mutiple3 = (num: number): void => {
    // return num * 2
    //do something but dont return
}

let sum = (num1: number, num2: number) => {
    return num1 + num2
}

sum(2,3)

let sum1 = (num1: number, num2: number, another?:number) => {
    return num1 + num2
}

