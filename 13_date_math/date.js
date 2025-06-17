

let now = new Date()

console.log(now)


console.log("year is : ",now.getFullYear())
console.log("today date is : ",now.getDate())
// console.log(now.getTime())
console.log("time (hour) is : ",now.getHours())
console.log("time (minute) is : ",now.getMinutes())
console.log("time (second) is : ",now.getSeconds())


let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

console.log("day is : ", now.getDay())

console.log(days[now.getDay()])

let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

console.log(months[now.getMonth()])


console.log(now.toTimeString())
console.log(now.toLocaleDateString())
console.log(now.toLocaleString())




let getTime = ()=>{

    let date = new Date()

    let h = date.getHours()
    let m = date.getMinutes()
    let s = date.getSeconds()
    let period = "AM"

    if(h > 11)
    {
        period = "PM"
        if(h > 12)
        {
            h = h - 12
        }
    }

    h =  (h<10) ? "0"+h : h;
    m =  (m<10) ? "0"+m : m;
    s =  (s<10) ? "0"+s : s;

    let time = document.getElementById("time")

    time.innerText = `${h} : ${m} : ${s} ${period}`
}

getTime()

setInterval(getTime,1000)




// !   Math 


console.log("square root of 16 is : ",Math.sqrt(16))
console.log("ceil value of 3.2 is : ",Math.ceil(3.2))
console.log("floor value of 3.9 is : ",Math.floor(3.9))
console.log("round value of 3.6 is : ",Math.round(3.6))
console.log("round value of 3.3 is : ",Math.round(3.3))
console.log("minimum number is : ",Math.min(2,3,4,5))
console.log("maximum number is : ",Math.max(2,3,4,5))


console.log("random number is : ",Math.floor( Math.random()* 100 ))
