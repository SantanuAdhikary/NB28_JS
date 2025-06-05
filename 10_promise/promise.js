
// let p = new Promise((resolve, reject)=>{

//     let isExam = true;

//     if(isExam)
//     {
//         resolve("yes you have exam....")

//     }
//     else{

//         reject("no exam today...")
//     }

// })

// console.log(p)


// p.then((data)=>{
//     console.log(data)
// })
// .catch((err)=>{
//   console.log(err)
// })
// .finally(
//     console.log("promise has created ..")
// )






let p1 = new Promise((resolve, reject)=>{

    // resolve("I am resolve")
    reject("I am reject")
})

console.log(p1)

p1.then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log(err)
})
.finally(
    console.log("promise created")
)



