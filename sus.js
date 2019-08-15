const form = document.querySelector('form')
const ul = document.querySelector('ul')
const button = document.querySelector('button')
const input = document.getElementById('item')
let Resource = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []

localStorage.setItem('items', JSON.stringify(Resource))
const data = JSON.parse(localStorage.getItem('items'))

const liMaker = text => {
  const line = document.createElement('li')
  line.textContent = text
  ul.appendChild(line)
}

form.addEventListener('submit', function(e) {
  e.preventDefault()

  Resource.push(input.value)
  localStorage.setItem('items', JSON.stringify(Resource))
  liMaker(input.value)
  input.value = ''
})

data.forEach(item => {
  liMaker(item)
})

button.addEventListener('click', function() {
  localStorage.clear()
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild)
  }
})