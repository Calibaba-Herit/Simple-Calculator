let num1 = document.getElementById("num-1")
let num2 = document.getElementById("num-2")
let sum = document.getElementById("sum")

const addBtn = document.getElementById("add-btn")
const subtractBtn = document.getElementById("subtract-btn")
const multiplyBtn = document.getElementById("multiply-btn")
const divideBtn = document.getElementById("divide-btn")

let first = prompt("Enter First Number: ")
let second = prompt("Enter Second Number: ")

num1.textContent = first
num2.textContent = second

addBtn.addEventListener("click", function(){
    let value = parseInt(first) + parseInt(second)
    sum.textContent = value
})

subtractBtn.addEventListener("click", function(){
    let value = parseInt(first) - parseInt(second)
    sum.textContent = value
})

multiplyBtn.addEventListener("click", function(){
    let value = parseInt(first) * parseInt(second)
    sum.textContent = value
})

divideBtn.addEventListener("click", function(){
    let value = parseInt(first) / parseInt(second)
    sum.textContent = value
})

