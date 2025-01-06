const num = 1
const str = 'java script'
const bool = true
const sym = Symbol('лалал')
const n = null
let bigInt = BigInt(9007199254740991)

const myArray = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
]
const index = myArray[1][2]

const text = 'функція працює'
function func(props) {
  console.log(props)
}
func(text)

let obj = {
  name: 'Вероніка',
  age: 18,
  university: 'КПІ',
  faculty: 'Факультет інформатики та обчислювальної техніки',
  specialty: 'Інформаційні системи та технології',
}
console.log(obj) //виводиться початковий обj
obj = {
  age: 19,
}
console.log(obj) //виводиться змінений обj

const obj2 = {
  fruit: 'banana',
  vegetable: 'potato',
}
console.log(obj2) // сonst не змінити

console.log(`${num} типу ${typeof num}`)
console.log(`${str} типу ${typeof str}`)
console.log(`${str.length} символів у слові типу ${typeof str.length}`)
console.log(`${n} типу ${typeof n}`)
console.log(`empty типу ${typeof empty}`)
console.log(`${bigInt} типу ${typeof bigInt}`)
console.log(`${bool} типу ${typeof bool}`)
console.log(`sym типу ${typeof sym}`)
console.log(`myArray типу ${typeof myArray}`)
console.log(`${index} в масиві типу ${typeof index}`)
console.log(`obj типу ${typeof obj}`)
console.log(`func типу ${typeof func}`)
