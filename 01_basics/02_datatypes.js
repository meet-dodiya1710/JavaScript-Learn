
let name = "Meet";  
let age = 25;  
let isStudent = true;  
let city;  
let score = null;  
let id = Symbol("123");  
let bigNum = 123456789012345678901234567890n;  

// Store values and their types in an array of objects
let dataTypes = [
  { variable: "name", value: name, type: typeof name },
  { variable: "age", value: age, type: typeof age },
  { variable: "isStudent", value: isStudent, type: typeof isStudent },
  { variable: "city", value: city, type: typeof city },
  { variable: "score", value: score, type: typeof score },
  { variable: "id", value: id.toString(), type: typeof id }, // Symbol converted to string for display
  { variable: "bigNum", value: bigNum, type: typeof bigNum }
];

// Display in table format
console.table(dataTypes);

// for run write below command
// ------node 01_basics/02_datatypes.js
