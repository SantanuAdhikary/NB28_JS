

let fetchedData = fetch("https://fakestoreapi.com/products")
console.log(fetchedData)

fetchedData
.then((data)=>{
    console.log(data)

    let jsondata = data.json()
    console.log(jsondata)

    jsondata
    .then((fd)=>{
        console.log(fd)
    })
    .catch((err)=>{
        console.log(err)
    })
})
.catch((err)=>{
    console.log(err)
})