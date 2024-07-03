/*const array = [1, 2, 3, 8, 69, 1488];
//const arrayStrings = ['a', 'b', 'c', 'd', 'e', 'f'];
//const array = new Array(1, 2, 3, 69, 1488);
//console.log(array.length);
//console.log(array[1]); //...
console.log(array[array.length - 1]); //array[6 - 1]
array[0] = 'hello world';
console.log(array);

array[array.length] = 'hello world';*/

/*  

const person = {
    name: 'Roman',
    age: 15,
    isAdmin: true,
    hobbies: ['Sports', 'Cooking'],
    address: {
        city: 'Moscow',
        country: 'Russian'
    }
}

console.log(person)
console.log(person.name)
console.log(person['hobbies']);
const key = 'isAdmin' 
console.log(person[key]);
person.isAdmin = false;*/

/*  

const person = {
    name: 'Roman',
    age: 15,
    isAdmin: true,
    hobbies: ['Sports', 'Cooking'],
    address: {
        city: 'Moscow',
        country: 'Russian'
    }
}

console.log(person)
console.log(person.name)
console.log(person['hobbies']);
const key = 'isAdmin' 
console.log(person[key]);
person.isAdmin = false;*/

/*const inputElement = document.getElementById('title');
const createBtn = document.getElementById('create'); // исправлено имя переменной createBth на createBtn
const listElement = document.getElementById('list');

const notes = [
    { title: 'note 1', completed: false },
    { title: 'note 2', completed: false },
    { title: 'note 3', completed: false }
];

function render() {
    listElement.innerHTML = ''; // очищаем список перед рендером всех заметок
    notes.forEach(note => {
        listElement.insertAdjacentHTML('beforeend', getNoteTemplate(note));
    });
}

function getNoteTemplate(note) {
    return 
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${note.title}</span>
        <span>
            <span class="btn btn-small btn-success">&check;</span>
            <span class="btn btn-small btn-danger">&times;</span>
        </span>
    </li>
    ;
}

createBtn.onclick = function() {
    if (inputElement.value.length === 0) {
        return;
    }
    const newNote = {
        title: inputElement.value,
        completed: false
    }
    notes.push(newNote); // добавляем новую заметку в массив notes
    render(); // перерисовываем список заметок
    inputElement.value = '';
}

render();*/

const inputElement = document.getElementById('title')
const createBtn = document.getElementById('create')
const listElement = document.getElementById('list')

const notes = [
  { title: 'note 1', completed: false },
  { title: 'note 2', completed: false },
  { title: 'note 3', completed: false },
]

function render() {
  listElement.innerHTML = '' // очищаем список перед рендером всех заметок
  notes.forEach((note, index) => {
    listElement.insertAdjacentHTML('beforeend', getNoteTemplate(note, index))
  })
}

function getNoteTemplate(note, index) {
  return `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${note.title}</span>
        <span>
            <span class="btn btn-small btn-success" onclick="markAsCompleted(${index})">&check;</span>
            <span class="btn btn-small btn-danger" onclick="deleteNote(${index})">&times;</span>
        </span>
    </li>
    `
}

function markAsCompleted(index) {
  notes[index].completed = !notes[index].completed
  render()
}

function deleteNote(index) {
  notes.splice(index, 1)
  render()
}

createBtn.onclick = function () {
  if (inputElement.value.length === 0) {
    return
  }
  const newNote = {
    title: inputElement.value,
    completed: false,
  }
  notes.push(newNote) // добавляем новую заметку в массив notes
  render() // перерисовываем список заметок
  inputElement.value = ''
}

render()
