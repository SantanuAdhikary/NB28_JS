

// !  1. How to target Element from js 


// ! i)  targetting element by id 

//? method name:  document.getElementById()

let logo = document.getElementById("logo")

console.log(logo)


let about = document.getElementById("about")
console.log(about)


// ! ii)  targetting by the class name 

//? method name:  document.getElementsByClassName()

let cards = document.getElementsByClassName("card")
console.log(cards)


// target the second card 

let secondCard = cards[1]
console.log(secondCard)

//  target the login button 

let btn = document.getElementsByClassName("btn")

console.log(btn)

console.log(btn[0])


// ! iii)   targetting element by the tagname


let lists = document.getElementsByTagName("li")
console.log(lists)

// target 3rd list (contact) from the navbar 

let contact = lists[2]
console.log(contact)


// ! iv)  targetting by the selector 


let heading2 =  document.querySelector("#logo")

console.log(heading2)


let c = document.querySelector(".card")
console.log(c)



// !  2. how to write inside any element or how to know what is written


//?  innerHTML

let boxes = document.getElementsByClassName("box")

console.log(boxes[1])

boxes[1].innerHTML = `  <h1> I am box2</h1>
            <p> we are coming from the js file</p>
            <button> get started</button> `


//?  innerText

boxes[2].innerText = ` I am innerText`


//!  target the first card and print what is written inside that

let firstCard = document.querySelector(".card")
console.log(firstCard.innerHTML)
console.log(firstCard.innerText)


// !  3. How to style 


let firstBox = boxes[0]
console.log(firstBox)

firstBox.style.backgroundColor = "red"

firstBox.innerHTML = `<h1> I am firstBox</h1>`

firstBox.style.color= "white"


// !  4. how to remove and add class

let lastBox = boxes[2]
console.log(lastBox)

console.log(lastBox.classList)


// ! how to add class

lastBox.classList.add("dark")
lastBox.classList.add("san")
console.log(lastBox.classList)

// !  how to remove class

lastBox.classList.remove("san")
console.log(lastBox.classList)


// !  write something inside lastbox and apply css by class


lastBox.innerHTML = ` <h1> I am last box</h1>
                       <p> this is para</p>
                      <button> submit</button>`


//!  5. how to create elements 


let div = document.createElement("div")

div.innerText = "hello"

div.classList.add("circle")




let card1 = document.querySelector(".card")
console.log(card1)

// card1.append(div)

// card1.prepend(div)

// card1.after(div)
card1.before(div)


let ol = document.querySelector("#ol")
let subjects = ["html","css","js","react"]

subjects.map((ele)=>{
    let li = document.createElement("li")
    li.innerText = ele
    ol.append(li)
})