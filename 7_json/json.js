

// JSON (JavaScript Object Notation) is a lightweight data-interchange format 
// that is easy for humans to read and write, and easy for machines to parse and generate.  
 
//!  Advantages of JSON: - 

//? Human-Readable:

//  JSON's structure is easy for developers to understand and  write. 

//? - Lightweight: 

// JSON is a minimal format that reduces the size of the data being transmitted. 

//? - Language-Independent:

//  JSON can be used with many programming languages, 
// including JavaScript, Python, Ruby, Java, etc. 



let ob = {
    sname : "san",
    age:10 , 
    phNo:999999999
}

console.log(ob)


// !  1. JSON.stringify()

// this method is used to convert any javascript object into json string.


let jsonData = JSON.stringify(ob)

console.log(jsonData)
console.log(typeof jsonData)


// !  2. JSON.parse()

// this method is used to convert json string data into javascript object.

let parsedOb = JSON.parse(jsonData)

console.log(parsedOb)