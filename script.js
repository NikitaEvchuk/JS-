/* let a = "Скільки"
console.log(a.length)


let b = "Today"
console.log(b.toUpperCase())

console.log(a.indexOf("и"))

console.log(b.includes("today"))

console.log(a.padEnd())

let a1 = " Nikita "
let a2 = 17 
let a3 = "Yes"/* 
console.log("My name is" + a1 + "I'm age " +a2 + " Is is cool weather today " + a3) */
/* console.log(`My name is ${a1} Im age ${a2} Is it cool weather today ${a3}`)  */


/* let name = "Nikita Evchuk"
console.log(name.indexOf(" ")) */

/* let name = "Nikita"
let surname = "Evchuk"
let time = "15:00"
let position = 234
console.log(`Гість  ${name} ${surname} посиляється в ${time} номер ${position}`) */



/* Домашнє завдання */
/* const result = 5+5+"5"
console.log(result)
console.log(typeof result)


let email = "nikitaevcuk@gmail.com"
console.log(email.includes("@"))
console.log(email.length)

let a1 = "My "
let a2 = " name"
let a3 = " is " 
let fullName = a1 + a2 + a3 + "Victor"
console.log(fullName)

let useName = "Nikita"
let payment = 300
let mesege = alert(`Дякуємо, ${useName}! До сплати ${payment} гривень`) */

/* let a = 12 
let result = 7 < a && 30 > a 
console.log(result)

let b = 13 
let newResult = 13 >= b || 16 < b
console.log(newResult)

let c = 8 
let nextResult = 9 !== c 
console.log(nextResult) */

/* 
if(age >= 18 ){
    type = alert("adult")

}else(
    type = "child"
)
console.log(type) */

/* let age = 25
let type = age >= 18 ? "adult":"child "
console.log(type) */


/* let nameJs = prompt("Яка “офіційна” назва JavaScript?")
if(nameJs === "ECMAScript"){
    alert("Правильно!")
}
else(
    alert("Ви не знаєте? ECMAScript!")
) */


/* let myNumber = prompt("Ведіть число")
if(myNumber > 0){
    alert("1")
}
else if(myNumber < 0  ){
    alert("-1")
}
else{
    alert("0")
} */

/* let result =  (a + b < 4) ? "Нижче":  "Вище" */

/* const x1 = 10;
const x2 = 30;
const number = 45;

if( number < x1){
    console.log (number + "Знаходиться перед x1 " )
}
else if (number > x1 ){
    console.log(`${number} Знаходитьсся після x1`)
}
else if ( number >= x1 && number < x2){
    console.log(`${number} знаходиться між ${x1} та ${x2}`)
}
else if ( number < x1 && number > x2){
    console.log(`${number} знаходиться за межами ${x1} та ${x2}`)
} */


/* let line = prompt("enter something")
let lineTwo = prompt("enter something")
if(line !== "" && lineTwo !== ""){
    alert("Обидва поля заповнені")
}
else{
    alert("Не всі поля заповнені")
} */


/* let line = Number.parseFloat(prompt(""))
let lineTwo =Number.parseFloat(prompt(""))
let sum = line + lineTwo
if( sum > 10){
    alert("Сума більша за 10")
}
else{
    alert("Сума менша або дорівнює 10")
} */


/* let nameText = prompt("")
if(nameText === "JavaScript"){
    alert("Текст містить слово JavaScript")
}
else{
    alert("Текст не містить слово JavaScript")
} */

/* let line = prompt("")
if( !isNaN(line) && line > 10 && line < 20) {
    alert("Число входить в діапазон від 10 до 20")
}
else{
    alert("Число не входить в діапазон від 10 до 20")
} */

/* let nickName = prompt("Enter your name")
let email = prompt("Enter your email")
if( nickName.length >= 3 && email.includes("@") && email.includes(".")){
    alert("You are apllyed")
}
else{
    alert("Incorect")
} */






/* ДЗ з цього моменту  */





/* const isOnline = true;
const isFriend = true;
const isDnd = false;
if(isOnline === true && isFriend === true && isDnd === true){
    alert("You can")
}
else{
    alert("You cant")
} */



/* const typeFree = false
const typePro = true 
const typeVip = true 
let person = typeFree
if(person === typePro && person === typeVip){
    alert("apply")
}
else{
    alert("Dont have")
} */

/* const balance = 700 
const payment = prompt("Ведіть ціну товару")
alert(`Загальна вартість замовлення ${payment} кредитів. Перевіряємо кількість доступних коштів на рахунку»`)
if(payment <= balance){
    a = balance - payment 
    alert(`На рахунку залишилося ${a} кредитів`)
}
else{
    alert("На рахунку недостатньо коштів для проведення операції!")
}
alert("Операція завершена")  */


/* let payment = prompt("Ціна товару")
let discount 
if( payment >= 100 && payment < 1000){
    discount = 2
}
else if(  payment >= 1000 && payment <= 5000){
    discount = 5
}
else if( payment > 5000){
    discount = 10
}
else{
    discount = 0
}
alert(`Оформляемо замовлення на суму ${payment} зі знижкою ${discount}%`)  */




