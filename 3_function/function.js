
// !  Function 


// !  how to declare function 


function add()
{
    let a = 10 
    let b = 20 
    let sum = a + b

    console.log(`the addition of ${a} and ${b} is ${sum}`)
}

add()

console.log(add)


// !  function with parameter


function greet(uname)
{
   console.log(`good moring ${uname}`)
}

greet("santanu")
greet("Atul sir")
greet("Pranav sir")



// !  function with return keyword 


function muliply(a,b){

    return a * b ;
}

let res = muliply(10,2)

console.log(res)


// !  Anonymous Function 


// the function does not have any name, that is called Anonymous function.


let anonymous = function()
                {
                    console.log(" I am anonymous function")
                }

anonymous()


// !  Arrow Function 


let arrowFunction = ()=>{

   console.log("I am arrow function..")
}


arrowFunction()


// !  find the area of triangle by using arrow function.


let area =(h,b)=>{

    let res = 1/2 * (h * b)
    console.log(`the area of triangle is : ${res} meter`)
}

area(20,4)


// !  nested function 

// when we are declaring one function inside another function that is called nested function.

let parent = ()=>{

    console.log("I am parent function")

    let child = ()=>{
        console.log("I am child function")
    }

    child()
}

parent()


// !  Lexical Scopping

// if we are taking nested function, inner function can take all the properties of outer function but outer function can not take the properties of the inner function. it is called Lexical Scopping.

let outer =()=>{
    let a = 10 

    let inner =()=>{
        var b = 20 

        console.log(`a value is : ${a}`)
        console.log(`b value is : ${b}`)
    }
    // console.log(`b value is : ${b}`)
    
    inner()
}

outer()


// !  higher order function 

// any function that takes another function as parameter that is called higher order function. 

// ! callback function 

// the function we are sending as a parameter to the higher order function is called callback function.


let hof = (cb)=>{

    cb()

}


hof(()=>{
    console.log("I am callback function")
})




let addition =(a,b)=>{
  console.log(a + b)
}

let sub =(a,b)=>{

    console.log(a-b)
}

let mul = (a,b)=>{
    console.log(a * b)
}


let calculate =(myFunc,x,y)=>{

    myFunc(x,y)
}

calculate(addition,20,30)
calculate(sub,14,5)
calculate(mul,20,2);



// !   IIFE (Immediate Invoke Function Expression )



(function()
{
    console.log("I am iife function")
})();


(
    function(a,b)
    {
        console.log("hello how are you ??")
        console.log(a+b)
    }
)(10,20)



let str = "hello my name is santanu"


console.log(str.substring(14,4))



