/*const now = new Date();
const output = document.getElementById('output');
const fullBth = document.getElementById('full');
const dateBth = document.getElementById('date');
const timeBth = document.getElementById('time');


output.textContent = now Date()ж*/

// output.textContent = now.toString()

/*fullBth.addEventListener('click', () => {
  output.textContent = now.toString()
})*/
/*let mode = 'time'
const output = document.getElementById('output')
const fullBth = document.getElementById('full')
const dateBth = document.getElementById('date')
const timeBth = document.getElementById('time')

fullBth.addEventListener('click', () => {
  mode = 'full'
  update()
})

dateBth.addEventListener('click', () => {
  mode = 'date'
  update()
})

timeBth.addEventListener('click', () => {
  mode = 'time'
  update()
})

update()

setInterval(update(), 1000)

function update() {
  output.textContent = format(mode)
}

function format(formatMode) {
  const now = new Date()

  switch (formatMode) {
    case 'time':
      return now.toLocaleTimeString()
    case 'date':
      return now.toLocaleDateString()
    case 'full':
      return now.toLocaleString() + ' ' + now.toLocaleTimeString()
    default:
      return now.toLocaleTimeString()
  }
}*/

let mode = 'time'
const output = document.getElementById('output')
const fullBth = document.getElementById('full')
const dateBth = document.getElementById('date')
const timeBth = document.getElementById('time')

fullBth.addEventListener('click', () => {
  mode = 'full'
  update()
})

dateBth.addEventListener('click', () => {
  mode = 'date'
  update()
})

timeBth.addEventListener('click', () => {
  mode = 'time'
  update()
})

update()

setInterval(update, 1000)

function update() {
  output.textContent = format(mode)
}

function format(formatMode) {
  const now = new Date()

  switch (formatMode) {
    case 'time':
      return now.toLocaleTimeString()
    case 'date':
      return now.toLocaleDateString()
    case 'full':
      return now.toLocaleString() + ' ' + now.toLocaleTimeString()
    default:
      return now.toLocaleTimeString()
  }
}
