var data = [
  {
    text: 'JS 공부하기',
  },
  {
    text: 'JS 복습하기',
  },
]

const $target = document.querySelector('#todo-list')
const todoList = new TodoList($target, data)