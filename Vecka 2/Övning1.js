const days = ['Söndag', 'Måndag', 'Tisdag', 'Onsdag', 'Torsdag']
const months = ['', '', 'Mars']

let today = new Date();
const dayName = days[today.getDay()]
const monthName = months[today.getMonth()]
console.log (today.toLocaleDateString("sv-Sv", {weekday: 'long'}))

console.log(today)
console.log(today.getFullYear())
console.log(today.getDay())
console.log(
    dayName + " den " + today.getDate() + " " + monthName + " " + today.getFullYear()
)


const in1 = prompt("How many minutes do you dial?")
console.log(in1)
const in2 = prompt("What is the cost per minute?")

const cost = Number(in1) * Number(in2)
console.log(cost)

