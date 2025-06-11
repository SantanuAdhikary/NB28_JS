
let hello = ()=>{
    alert("I am event handler")
}

let buttons = document.getElementsByTagName("button")

console.log(buttons[1])

buttons[1].addEventListener("click",()=>{
    alert("I am event listener")
})


let thirdButton = buttons[2]

thirdButton.addEventListener("click",(e)=>{

    console.log(e)
    console.log(e.target)
    console.log(e.type)
    console.log(e.target.innerText)
    console.log("third button clicked")
})


// !  keyboard event 

let inp1 = document.getElementById("inp1")
console.log(inp1)

inp1.addEventListener("keydown",()=>{

    console.log("keydown event occured..")
  
})


inp1.addEventListener("keyup",(e)=>{
    // console.log("keyup event occured...")

  console.log(e.target.value)

  let output = document.querySelector(".output")

//   output.innerText = e.target.value

 output.innerHTML = ` <h2> ${e.target.value}</h2>`
})

