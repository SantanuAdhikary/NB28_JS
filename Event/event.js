

let wish= ()=>{
    console.log("welcome to event session ")
}

// wish()


let changeColor =()=>{

    let header = document.getElementsByTagName("header")

    console.log(header[0])

    header[0].style.backgroundColor = "red"
}

let changeColor2 =()=>{
    
    let header = document.getElementsByTagName("header")


    header[0].style.backgroundColor = "bisque"
}



// !    Event Listner 


let btn2 = document.querySelector(".btn2")

console.log(btn2)


btn2.addEventListener("dblclick",()=>{

    alert("I am dbl click event")
})


let section = document.querySelector("section")

console.log(section)


section.addEventListener("mouseover",()=>{

    section.style.backgroundColor= "green"
})

section.addEventListener("mouseleave",()=>{
    section.style.backgroundColor= "aquamarine"

})



let greet =()=>{
    console.log("how are you ?")
}


let btn1 = document.querySelector(".btn1")

console.log(btn1)

btn1.addEventListener("click",()=>{
    console.log("I am click1")
})

btn1.addEventListener("click",()=>{
    console.log("I am click2")
})



let box2 = document.querySelector(".box2")

box2.addEventListener("click",()=>{

    let box1 = document.querySelector(".box1")

     let box1Content = box1.innerHTML

     box2.innerHTML = box1Content

     box1.innerHTML = ""
    
})


let box1 = document.querySelector(".box1")


box1.addEventListener("click",()=>{

    let box2 = document.querySelector(".box2")

     let box2Content = box2.innerHTML

     box1.innerHTML = box2Content

     box2.innerHTML = ""
    
})