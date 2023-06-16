let variable = "hello";

// variable = 34; //- this is not valid in typescript

// variable = "hi"; //- this is valid 

let age = 18;

// age = "eighteen"; //- this is not valid in typescript

let ageWithType: number = 22;

// ageWithType = "eighteen"; //- not a valid assignment since variable was defined with a type

ageWithType = 18;

let testString: string;

testString = "hello";  

let testBoolean: boolean;
  
testBoolean = true;

let testStringOrNumber: string | number;

testStringOrNumber = 10;
testStringOrNumber = "10";
// testStringOrNumber = [] //- not gonna be valid because list is not a number or a string 

// ARRAYS

let names = ["john", "jane", "tom"];

// names.push(3) //- not a valid entry
names.push("mike");
 

let numbers = [11, 12, 35];
// numbers.push(true) //- Argument of type 'boolean' is not assignable to parameter of type 'number'.
numbers.push(92);

let testStringArray: string[];

// testStringArray = [1, 2, 3] //- Type 'number' is not assignable to type 'string'.
testStringArray = ["one", "two", "three"];

let testNumbersArray: number [];

// testNumbersArray = [true, "hi", 23] //- Type 'boolean' is not assignable to type 'number'.
testNumbersArray = [23, 34, 56];


let testStringOrNumberArray: (string | number)[];

// testStringOrNumberArray = [true, false, "lif"] //- Type 'boolean' is not assignable to type 'string | number'.
testStringOrNumberArray = [1, "one", 2, "two"];


// OBJECTS
let user = {
    username: "john",
    age: 22,
    isAdmin: false,
};

user.username = "jane";
// user.age = "eighteen"; //- Type 'string' is not assignable to type 'number'.
user.age = 29;
// user.isAdmin = "no" //- Type 'string' is not assignable to type 'boolean'.

// user.phone = "+12345678" //- Property 'phone' does not exist on type '{ username: string; age: number; isAdmin: boolean; }'