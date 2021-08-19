class TodoCount {

    #items
    #$countDiv

    constructor({ items, countDiv }) {
        this.#items = items
        this.#$countDiv = countDiv
        this.setState(this.#items)
    }

    setState(newData) {
        this.#items = newData
        this.render()
    }

    render() {
        this.#$countDiv.innerHTML = `<span>${this.#items.length}개 중 ${this.#items.filter(item => item.isCompleted).length}개 완료했어요! :)</span>`
    }
}

export default TodoCount
