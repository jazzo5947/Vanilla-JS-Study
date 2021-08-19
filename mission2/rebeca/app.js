import { storage } from './model/storage.js'
import TodoList from './components/TodoList.js'
import TodoInput from './components/TodoInput.js'
import TodoCount from './components/TodoCount.js'

let todos = [
    { text: 'JS 공부하기', isCompleted: true },
    { text: 'JS 복습하기', isCompleted: false }
]

storage.set('todo-app', todos)

class App {
    #id
    #items
    $app
    $inputDiv
    $list
    $todoCountDiv
    $components

    constructor({ id = 'todo-app' }) {
        this.#id = id
        this.#items = storage.get(this.#id, [])
        this.$app = document.querySelector('#app')
        this.$inputDiv = document.querySelector('#todo-input')
        this.$list = document.querySelector('#todo-list')
        this.$todoCountDiv = document.querySelector('#todo-count')

        this.$components = []
        this.setItemId()

        this.$components.push(
            new TodoCount({
                items: this.#items, countDiv: this.$todoCountDiv
            }))

        this.$components.push(
            new TodoInput({
                inputDiv: this.$inputDiv,
                addTodoItem: (text) => {
                    const newData = [...this.#items, { text: text, isCompleted: false }]
                    storage.set(this.#id, newData)
                    this.setState(newData)
                }
            }))

        this.$components.push(
            new TodoList({
                parent: this.$app, items: this.#items, list: this.$list,
                deleteTodoItem: (todoIdx) => {
                    const newItems = this.#items.slice(0, todoIdx).concat(this.#items.slice(todoIdx + 1))
                    this.setState(newItems)
                },
                changeTodoStatus: (todoIdx) => {
                    this.#items[todoIdx].isCompleted = !this.#items[todoIdx].isCompleted
                    this.setState(this.#items)
                }
            }))

        this.$app.appendChild(this.$components)
    }

    setItemId() {
        this.#items.forEach((item, index) => {
            item.id = index;
        })
    }

    setState(nextData) {
        this.#items = nextData
        this.setItemId()
        this.$components.forEach(component => {
            if (!component.setState) return
            component.setState(nextData)
        })
    }

}

export default App
