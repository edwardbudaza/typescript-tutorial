let variable = "hello";

// variable = 34; //- this is not valid in typescript

// variable = "hi"; //- this is valid 

let age = 18;

// age = "eighteen"; //- this is not valid in typescript

let ageWithType: number;

// ageWithType = "eighteen"; //- not a valid assignment since variable was defined with a type

ageWithType = 18;