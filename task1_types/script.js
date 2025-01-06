const num = 1
const str = 'java script'
const bool = true

const n = null
let bigInt = 0b11111111111111111111111111111111111111111111111111111
let empty

const myArray = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
]
function lastName(name) {
  return alert(name)
}
let obj = {
  name: 'Вероніка',
  age: 18,
  university: 'КПІ',
  faculty: 'Факультет інформатики та обчислювальної техніки',
  specialty: 'Інформаційні системи та технології',
}
obj = {
  age: 19,
}
const obj2 = {
  // сonst не змінити
  fruit: 'banana',
  vegitable: 'potato',
}
console.log(`${num} типу ${typeof num}`)
console.log(`${str} типу ${typeof str}`)
console.log(`${n} типу ${typeof n}`)
console.log(`${empty} типу ${typeof empty}`)
console.log(`${bigInt} типу ${typeof bigInt}`)
console.log(`${bool} типу ${typeof bool}`)
console.log(`${myArray} типу ${typeof myArray}`)
console.log(`${lastName('Чебакова')} типу ${typeof lastName}`)
console.log(`${obj} типу ${typeof obj}`)
