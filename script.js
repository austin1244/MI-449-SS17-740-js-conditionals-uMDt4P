var isDead = false
var name = window.prompt('what is your name?')
if (name.length > 15) {
  window.alert('Whoa! that is a long name!')
  var nameOption = window.confirm('Can i call you ' + name.substring(0, 1).trim().toUpperCase() + ' for short?')
  if (nameOption) {
    name = name.substring(0, 1).trim().toUpperCase()
  }
}

var option = ''
while ((option !== 'left' || option !== 'right') && !isDead) {
  option = window.prompt(name + '!!! There is a car comming at us! should we go right, left or nothing???')
  option = option.trim().toLowerCase()
  if (option === 'left') {
    window.alert('you dove into a another car and died :(')
    isDead = true
    break
  } else if (option === 'nothing') {
    window.alert('You Did nothing and the car hit you and you died :(')
    isDead = true
    break
  } else if (option === 'right') {
    break
  } else {
    window.alert(name + '? That is not an option')
  }
}

option = ''
while ((option !== 'left' || option !== 'right') && !isDead) {
  var carCommingLeft = Math.floor(Math.random() * 209) % 2
  var carCommingRight = Math.floor(Math.random() * 209) % 2

  option = window.prompt('you dodged the car, but there is another car comming!!! right or left?')
  option = option.trim().toLowerCase()

  if (option === 'right') {
    option = carCommingRight ? 'died' : 'survived'
  }
  if (option === 'left') {
    option = carCommingLeft ? 'died' : 'survived'
  }

  if (option === 'died') {
    window.alert('you dove into a another car and died :(')
    isDead = true
    break
  } else if (option === 'survived') {
    window.alert('You dodged the car and survived.')
    option = window.prompt('You Won!!! enter Any number to get a random prize')
    option = parseInt(option)
    if (option % 2 === 0) {
      window.alert('You won a dog!')
    } else {
      window.alert('You won a cat!')
    }
    break
  } else {
    window.alert(name + '? That is not an option')
  }
}
