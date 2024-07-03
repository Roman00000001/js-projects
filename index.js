/*async function start() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    if (!response.ok) {
      console.error(`HTTP error! status: ${response.status}`)
      return
    }
    const data = await response.json()
    console.log(data)
  } catch (error) {
    console.error('Fetch error:', error)
  }
}*/

const list = document.querySelector('#list')
const filter = document.querySelector('#filter')
let USERS = []

filter.addEventListener('input', (event) => {
  const { value } = event.target
  const filteredUsers = USERS.filter((user) =>
    user.name.toLowerCase().includes(value.toLowerCase())
  )
  render(filteredUsers)
})

async function start() {
  list.innerHTML = '<p>Loading...</p>'
  console.log('Fetching data...')
  try {
    const resp = await fetch('https://jsonplaceholder.typicode.com/users/')
    const data = await resp.json()
    setTimeout(() => {
      USERS = data
      render(data)
    }, 2000)
  } catch (error) {
    console.error('Fetch error:', error)
  }
}

function render(users = []) {
  if (!users.length) {
    list.innerHTML = '<p>No users found.</p>'
    return
  }
  const html = users.map(toHTML).join('\n')
  list.innerHTML = html
}

function toHTML(user) {
  return `
        <li class="list-group-item">
            <h2>${user.name}</h2>
            <p>${user.email}</p>
        </li class="list-group-item">
    `
}

start()
