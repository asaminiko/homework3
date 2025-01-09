function getText() {
  let inputs = document.getElementsByTagName('input')
  let inputsObj = Array.from(inputs)

  console.log(
    `${inputsObj[0].value} ${inputsObj[1].value} ${inputsObj[2].value}`
  )
}
