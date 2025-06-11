

let form = document.querySelector("form")

console.log(form)

form.addEventListener("submit",(e)=>{

    e.preventDefault()

    let username = document.getElementById("username").value 
    let userpass = document.getElementById("userpass").value 
    let userph = document.getElementById("userph").value 

    console.log({username,userpass,userph})

    document.getElementById("username").value = ""
    document.getElementById("userpass").value = ""
    document.getElementById("userph").value = ""

    console.log("submitted")
})



let select = document.querySelector("select")

select.addEventListener("change",(e)=>{

    console.log(e.target.value)

    let outer = document.querySelector(".outer")

    outer.style.backgroundColor = e.target.value;
})