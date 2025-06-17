


console.log(this)    // window object



function display()
{
        console.log(this)   // window object 
}
display()


let display2 = ()=>{
    console.log(this)    // window object
}

display2()



// !   call()  , apply()  , bind() method


let student = {
    sname : "rohit",
    age :  10 
}

function print(a, b)
{
    console.log(this)
    console.log(this.sname)
    console.log(this.age)

    console.log( a, b)
}

print.call(student, 20 , 30)

print.apply(student,[100,200])


let res = print.bind(student,400,500)

res()