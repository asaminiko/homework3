function getFiveDigitNumber() {
  let myInput = document.getElementById('five-digit').value
  if (myInput.length === 5) {
    let myStr = myInput.split('')
    let str = myStr.join(' ')
    console.log(str)
  } else {
    console.log(`В умові завдання п'ятизначне число, а тут введено ${myInput}`)
  }
}
