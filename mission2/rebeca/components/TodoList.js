class TodoList {
    #todoItems
    #$todoListUl
    #deleteTodoItem
    #changeTodoStatus
    #$parent

    constructor({ parent, items, list, deleteTodoItem, changeTodoStatus }) {
        this.#todoItems = items
        this.#$parent = parent
        this.#deleteTodoItem = deleteTodoItem
        this.#changeTodoStatus = changeTodoStatus
        this.#$todoListUl = list
        
        this.todoListFunction()
        this.render()
        this.#$parent.appendChild(this.#$todoListUl)
    }

    // todoListFunction() {
    //     const _self = this //이렇게 담아서 사용... 클로저의 개념 
    //     _self.#$todoListUl.addEventListener('click', function(e) { 
    //         console.log(_self.#todoItems)
    //         const target = e.target
    //         if (target.classList.contains('todoItem')) {
    //             const idx = _self.#todoItems.findIndex(item => {
    //                 return item.id == target.parentNode.id
    //             })
    //             _self.#changeTodoStatus(idx)
    //         }
    //         if (target.classList.contains('remove')) {
    //             const idx = _self.#todoItems.findIndex(item => {
    //                 return item.id == target.parentNode.id
    //             })
    //             _self.#deleteTodoItem(idx)
    //         }
    //     })
    // }

    todoListFunction() {
        this.#$todoListUl.addEventListener('click', e => {
            const target = e.target
            if (target.classList.contains('todoItem')) {
                const idx = this.#todoItems.findIndex(item => {
                    return item.id == target.parentNode.id
                })
                this.#changeTodoStatus(idx)
            }
            if (target.classList.contains('remove')) {
                const idx = this.#todoItems.findIndex(item => {
                    return item.id == target.parentNode.id
                })
                this.#deleteTodoItem(idx)
            }
        })
    }

    setState(newData) {
        this.#todoItems = newData
        this.render()
    }

    render() {
        const renderedList = this.#todoItems.map(todo =>
            `<li id="${todo.id}" class="${todo.isCompleted ? ' completed' : ''}"><span class="todoItem">${todo.id+1}. ${todo.text}</span><i class="far fa-trash-alt remove"></i></li>`
        )
        this.#$todoListUl.innerHTML = renderedList.join('')
    }

}

export default TodoList
