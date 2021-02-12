document.getElementById('generate').addEventListener('click', () => {


  let pwLength = 0
  do {
    pwLength = (prompt("How long would you like your password to be? Please pick a number between 8 and 128 characters"))
    if (pwLength < 8 || pwLength > 128) {
      alert("Your password length MUST be between 8 and 128 characters")
    }
  } while (pwLength < 8 || pwLength > 128)


  let pwLower = (confirm('Do you want the password to contain lowercase letters?'))

  let pwUpper = (confirm('Do you want the password to contain uppercase letters?'))

  let pwNum = (confirm('Do you want the password to contain numbers?'))

  let pwSpec = (confirm('Do you want the password to contain special characters?'))

  let genPW = ''
  let lower = 'qwertyuiopasdfghjklzxcvbnm'
  let upper = 'QWERTYUIOPASDFGHJKLZXCVBNM'
  let number = 1234567890
  let Spec = '!@#$%^&*()'

  let officialPW = ''

  if (pwLower) {
    genPW += lower
  }
  if (pwUpper) {
    genPW += upper
  }
  if (pwNum) {
    genPW += number
  }
  if (pwSpec) {
    genPW += Spec
  }

  for (let i = 0; i < pwLength; i++) {
    officialPW += genPW[Math.floor(Math.random() * genPW.length)]
  }
  console.log(officialPW.length)
  document.getElementById('password').textContent = officialPW




})