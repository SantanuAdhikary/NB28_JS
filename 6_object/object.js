

// !   how to create object 


let student = {
    sname:"rohit",
    age:10,
    isPlayer:true,
    sub:["html","css","js","java","python"],
    do:()=>{
        console.log("eat sleep study")
    },
    address:{
        city:"chennai",
        pin:560085
    }
}


console.log(student)

//!  how to access object property

console.log(`The name of the student is : ${student.sname}`)
console.log(`age of the student is : ${student.age}`)

console.log(`city is : ${student.address.city}`)


console.log(student.sub)

// !  how to add element

student.phNo = 9735675569

console.log(student)

// !  how to update 

student.isPlayer = false 

console.log(student)


// !  how to delete 

delete student.age
console.log(student)



console.log(student.sub)

student.sub.forEach((ele)=>{
    console.log(ele.toUpperCase())
})



// !   object methods 


// !  1.  Object.keys()

// this method is used to return all the keys of the object in the form of array.

let keys = Object.keys(student)

console.log(keys)

// !  2. Object.values()

// this method is used to return all the values of the object in the form of array.

let values = Object.values(student)
console.log(values)


// ! 3.  Object.entries()

// it will return one array where all the key and value will be stored in separate one one array.

let key_value = Object.entries(student)
console.log(key_value)


// !  4. Object.freeze()

// this method will make the object frozen where we can't add/modify/delete any element from the object.

let ob1 ={
    sname:"rahul",
    age:15
}
console.log(ob1)

Object.freeze(ob1)

console.log("after freeze")

ob1.phNo = 989898989    // we can not add 
ob1.age = 16           //  we can not modify
delete ob1.age        //   we can not delete
 
console.log(ob1)    


// ! 5. Object.isFrozen()

// it is used to check whether any object is frozen or not.
// if it is frozen it will return true else it will return false.

console.log(Object.isFrozen(ob1))       // true
console.log(Object.isFrozen(student))  // false


// !  6. Object.seal()

// it is also similar to Object.freeze() method , we can't add or we can't delete but here we can modify the value.

let ob2 ={
    sname:"iyer",
    age:13
}

console.log(ob2)

Object.seal(ob2)

console.log("after using Object.seal()")

ob2.phNo = 9090909090    // we can not add 
delete ob2.age           // we can not delete

ob2.age = 15            // modification is possible 

console.log(ob2)   


// !  7. Object.isSealed()

// it is used to check whether any object is sealed or not.
// if it is sealed it will return true else it will return false.

console.log(Object.isSealed(ob2))          // true 
console.log(Object.isSealed(student))     // false


// ! 8. Object.assign()


let ob3= {
    sname:"rahul",
    age:10
}

let ob4 = {
    city:"chennai",
    phNo : 1234567890
}

// let newOb = Object.assign(ob3,ob4)
let newOb = Object.assign({},ob3,ob4)

console.log(newOb)
console.log(ob4)
console.log(ob3)



// !   objectName.hasOwnProperty()

// this method is used to know any property is present or not and it will return boolean value.

console.log(ob4.hasOwnProperty("city"))
console.log(ob4.hasOwnProperty("pin"))