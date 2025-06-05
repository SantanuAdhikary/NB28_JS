
// !   creating object by object literals 


// let idenfier = {

//     key : value , 
//     key : value , 
//     key : value 
// }


let Player = {

    pName : "iyer",
    jurseyNo : 96,
    isDancer : true,
    shots : ["pull","cover drive"],
    work : ()=>{
        console.log("playing cricket")
    },
    address : {
        city:"punjub",
        pincode : 123456
    }
}

console.log(Player)

// !  how  to access 

console.log(Player.jurseyNo)
console.log(Player.shots)

console.log(Player.address)
console.log(Player.address.city)


Player.work()

// !  how to change data 

Player.pName = "Sreyash Iyer"

console.log(Player)

// !  how to add 

Player.phNo = 1234567890

console.log(Player)

// !  how to delete 

delete Player.isDancer

console.log(Player)



// !   methods 


let ob1 = {
    name:"pen",
    price : 30,
    color:"red"
}


// !  Object.keys()

let keys = Object.keys(ob1)
console.log(keys)

// !  Object.values()

console.log(Object.values(ob1))

// ! Object.entries()

console.log(Object.entries(ob1))


// !  Object.freeze()


Object.freeze(ob1)