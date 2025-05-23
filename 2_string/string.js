
console.log("string file")

// !  how to declare string 

let msg = "tomorrow you have to give the mock"

console.log(msg)
console.log(typeof msg)

let reply = 'we will not give sir'

console.log(reply)
console.log(typeof reply)


let msg2 = `then today will be your last webtech class`

console.log(msg2)
console.log(typeof msg2)


// !  how to know the length of the string 

let greet = "hello"

let len = greet.length
console.log(len)


// !  string interpolation 

// the length of the string is 5


console.log(` the length of the string is ${len} `)


let a = 2 
let b = 3 

//  the addition of 2 and 3 is 5

console.log(` the addition of ${a} and ${b} is ${a+b} `)


// !   String Methods


// ! 1. toUpperCase()

// this method is used to convert the string into uppercase and it will return one new string.

let sname = "rohit"

  let upper = sname.toUpperCase()

  console.log(upper)
  console.log(sname) 


//   ! 2. toLowerCase()

// this method is used to convert the string into lowercase and it will return one new string.

let lastName = "SHARMA"

let lower = lastName.toLowerCase()

console.log(lower)
console.log(lastName)

// !  3. includes()

// it is used to know the given string is present or not.
// if it is present it will return true otherwise it will return false.

console.log(lastName.includes("a"))   // false
console.log(lastName.includes("A"))  //  true


// ! 4. charAt()

// it is used to know the character of the given position.

console.log(lastName.charAt(3))

// ! 5. indexOf()

//  it is used to know the index of the given string.
// always it will take the first occurace of that specified string. 
// if the given string is not present then this method will return -1.

console.log(lastName.indexOf("A"))    // 2

console.log(lastName.indexOf("e"))  // - 1


// ! 6. lastIndexOf()

//  it is used to know the index of the given string.
// always it will take the last occurace of that specified string. 
// if the given string is not present then this method will return -1.

console.log(lastName.lastIndexOf("A"))   // 5

console.log(lastName.lastIndexOf("e"))  // -1


// ! 7.  concat()

// this method is used to combine two or more than two strings together and it will return one new string.


let fullName = sname.concat(" ",lastName)

console.log(fullName)


// ! 8. trim()

// it is used to remove the spaces from the start and the end of the string and it returns new string.

let str = "  hello   "
console.log(str)

console.log(str.length)  // 10

console.log(str.trim())

console.log(str.trim().length) // 5

// ! 9. split()

// it is used to convert string into array.

let str2 = "hello how are you"

let str2Arr = str2.split(" ")

console.log(str2Arr)


// ! 10. slice()

// it is used to extract one string from another stirng.
// it will take two parameters (startIndex and endIndex)
// it will not inclue the endIndex value.
// we can give negative value also.

let str3 = "hello everyone"

console.log(str3.slice(0,9))

console.log(str3.slice(2))

console.log(str3.slice(-5,-1))

console.log(str3.slice(-3))

console.log(str3.slice(-1,-3))

console.log(str3.slice(1,-1))


// ! 11. substring()


console.log(str3.substring(-3))

console.log(str3.substring(4,1))