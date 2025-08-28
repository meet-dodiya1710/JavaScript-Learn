// ---------- Implicit Conversion (type conversion) ----------

// Number + String --> String 
let result1 = 5 + "10"
console.log(result1, typeof result1)

// Number + Boolean --> Number 
let result2 = true + 5
console.log(result2, typeof result2)

// String * Number --> Number
let result3 = "5" * 2;
console.log(result3, typeof result3)

// String + Boolean --> String
let result4 = "Hello" + false
console.log(result4, typeof result4)


// ---------- Explicit Conversion ----------

// String to Number
let num = Number("123")
console.log(num, typeof num)

// Number to String
let str = String(123)
console.log(str, typeof str)

// Boolean to Number
let boolNum = Number(true)
console.log(boolNum, typeof boolNum)

// Number to Boolean
let boolVal = Boolean(0)
console.log(boolVal, typeof boolVal)