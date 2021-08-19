class TodoInput {
    #addTodoItem
    $app
    $inputDiv

    constructor({ inputDiv, addTodoItem }) {
        this.$inputDiv = inputDiv
        this.#addTodoItem = addTodoItem
        this.$input = `<input type="text" id="item-input" class="item-input" placeholder="할 일을 입력해주세요.">
                        <i id="addBtn" class="far fa-plus-square fa-2x add-button"></i>`
        this.$inputDiv.innerHTML = this.$input
        this.todoInputAddEventListener()
    }

    checkInputEmpty(value) {
        if (!value) {
            alert('Enter todo text!')
            return false
        }
        return true
    }

    todoInputAddEventListener() {
        const input = document.getElementById('item-input')
        const addBtn = document.getElementById('addBtn')

        input.addEventListener('keyup', e => {
            if (e.key === "Enter") {
                const check = this.checkInputEmpty(input.value)
                if (!check) return
                this.#addTodoItem(input.value)
                input.value = ""
            }
        })

        addBtn.addEventListener('click', e => {
            const check = this.checkInputEmpty(input.value)
            if (!check) return
            this.#addTodoItem(input.value)
            input.value = ""
        })
    }
}

export default TodoInput
