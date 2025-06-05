
// !  for loop 


for(let i = 1 ; i<=5 ; i++)
{
    console.log(i)
}

// !  while loop 


let num = 10 

while(num<=15)
{
    console.log(num)
    num++
}


// !  for in  for array


let arr = [ 10 , 20 , 30 , 40 , 50]

for(let index in arr)
{
    console.log(index, arr[index])
}

// !  for of loop for array

for(let ele of arr)
{
    console.log(ele)
}


//!   in string 

let str = "santanu"

for(let i of str)
{
    console.log(i)
}



// !  for-in loop in object 

let ob ={
    sname:"san",
    age:10,
    isStudent:true
}

for(let key in ob)
{
    console.log(key)
}

// !  for-of loop in object 

// for(let i of ob)
// {
//     console.log(i)
// }



console.log(10 == "10")   // true
console.log(10 === "10")   // false