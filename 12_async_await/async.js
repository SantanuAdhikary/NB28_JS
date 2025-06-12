

let getData = async ()=>{

  try{
    
    let resoponse = await fetch("https://fakestoreapi.com/products")
    console.log(resoponse)

    let data = await resoponse.json()
    console.log(data)
  }
  catch(e)
  {
    console.log(e)
  }
    
}

getData()



