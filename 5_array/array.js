
// Array is linear data structure where multiple value can be stored in continuous manner.


let arr = [18,"virat",true,[30,40]]

let arr2 = [10,20,30,40,50]

//! how to access array element 

console.log(arr2[2])   // 30 


// !  how to know the length of an array 

console.log(`the length of arr2 is ${arr2.length} `)


// !  array methods 

// !  1. push()

// it is used to add any element at the end of the array.
// it will return the length of the modified array. (length after adding the element)

let arr3 = [10]

arr3.push(12)

console.log(arr3.push(18))    // 3 (length)

console.log(arr3)    // [10,12,18]

// !  2. pop()

// it is used to remove the last element from the array . 
// it will return the removed element.


let arr4 = [10,20,30]

arr4.pop()

console.log(arr4)





// ! 3.  unshift()

// it is used to add any element at the starting of the array.
// it will return the length of the modified array.

let arr5 = [10,20,30]

arr5.unshift(6)

console.log(arr5)


// !  4. shift()

// it is used to remove the first element from the array . 
// it will return the removed element.

let arr6 = ["virat","rohit","rahul"]

arr6.shift()
console.log(arr6)





// next monday (26/05/2025) there will be webtech mock. 

// html full
// css (till units)
// js (till saturday topics)


// ! 5. includes()

// it is used to check whether the given element is present or not in the array. 
// if it is present it will return true otherwise it will return false.

let arr7 = ["html","css","js","react"]

console.log(arr7.includes("react"))
console.log(arr7.includes("nodejs"))


let a = 10 

a = "hello"

console.log(a)



// !  6. reverse()

// it is used to reverse the array and it will return one new array.
// this method will modify the original array .


let arr8 = [10,20,30,40,50]

let reverseArr = arr8.reverse()

console.log(reverseArr)  // [50, 40, 30, 20, 10]

console.log(arr8)      // [50, 40, 30, 20, 10]


// !  7. join()

// this method is used to convert array into string.


let charArr = ['h','e','l','l','o']

let str = charArr.join("")
console.log(str)    // hello


// !  reverse string by using in-built methods 

let subjectName = "javascript"
let convertedArr = subjectName.split("")
// console.log(convertedArr)
let revArr = convertedArr.reverse()
// console.log(revArr)

let revStr = revArr.join("")
console.log(revStr)


// ! 8. indexOf()

// it is used to know the index of the perticular element in the array.

let teams = ['gt','rcb','pk','mi']

console.log(teams.indexOf('rcb')) // 1



// !  9. slice()


let nums = [1, 2, 3, 4, 5];
console.log(nums.slice(1, 4)); // [2, 3, 4]



// !  10. splice()

let names = ["rohit","virat","rahul","iyer","jadeja","rinku"]


// names.splice(1,3)

// console.log(names)    // ["rohit","jadeja","rinku"]


// names.splice(2,1)
// console.log(names)     // ["rohit","virat","iyer","jadeja","rinku"]


// names.splice(0,1,"jaswal")
// console.log(names)      //  ['jaswal', 'virat', 'rahul', 'iyer', 'jadeja', 'rinku']


names.splice(3,0,"pant")

console.log(names)   // ['rohit', 'virat', 'rahul', 'pant', 'iyer', 'jadeja', 'rinku']




// !      Higher Order Array Methods 


// !  1. forEach()

// it is one higherOrder Array method. it is used to traverse the array.

// it will take one callback function there it can take 3 paremeters ( element, index, array)


let numbers = [10,20,30,40,50,60]


numbers.forEach((ele, index , arr)=>{

    console.log( ele, index, arr)
})

// !  add all the elements of the array by using forEach() method 


let sum = 0 

numbers.forEach((ele)=>{
   sum = sum + ele
})

console.log(`the sum of the array elements  : ${sum}`)




let fe = numbers.forEach((ele)=>{

    return ele;
})

console.log(fe)


let marks = [10,20,30,40,50]

let marks2 =[]

marks.forEach((ele)=>{

    // console.log(ele + 100)
    marks2.push(ele+100)
})

console.log(marks2)



// !   map()

// it is one higher order array method, it is used for travering the array and if we want to do any operation with all the elements we can do. 
// this method will return one new array.
// it can take 3 parameters. (element , index , array)

let mappedArr = marks.map((ele)=>{

    return ele+100
})

console.log(mappedArr)


let product = ["mobile","laptop","camera"]


let Upper = product.map((ele)=>{
    return ele.toUpperCase()
})

console.log(Upper)


// !  element who are greater than 20 , by using forEach()

let greater = []

marks.forEach((ele)=>{

    if(ele > 20 )
    {
        greater.push(ele)
    }
})

console.log(greater)

// !  3.  filter()

// it is highrerOrder array method , it is used to traverse the array and it checks the condition if the condition the true then it will return new array.
// it can take 3 parameters. (ele,index,arr)

let filteredArr = marks.filter((ele)=>{
    return ele > 20
})

console.log(filteredArr)



// !  4. reduce()

// Applies a function to reduce the array to a single value.

let add = marks.reduce((acc,ele)=>{

    return acc + ele

}, 0)


let mul = marks.reduce((acc,ele)=>{
    return acc * ele
},1)

console.log(add)
console.log(mul)




let prices = [200,400,500,600,100]

// find the value who are greater than 400 then add 200 with each value then add those values and tell me what is the total price.

// 500, 600 

// 700,800

// 1500

let f = prices.filter((ele)=>{
    return ele > 400
})

// console.log(f)

let m = f.map((ele)=>{
    return ele + 200 ;
})

// console.log(m)

let r = m.reduce((acc,ele)=>{
    return acc + ele
})

console.log(r)

// !  using map, filter , reduce in same line 

let x = prices.filter((ele)=> ele > 400).map((ele)=> ele + 200).reduce((acc,ele)=> acc + ele)

console.log(x)


// !  5. sort()


let ratings = [6,2,1,4,8,7,10,9]

console.log("asscending order")

let asc = ratings.sort((a,b)=>{
        return a - b
})

console.log(asc)

console.log("descending order")

let desc = ratings.sort((a,b)=> b - a)

console.log(desc)


[1,2,3,[4,5,[6,7,[9,10]]]]