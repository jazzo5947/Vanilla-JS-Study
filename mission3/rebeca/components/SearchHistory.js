class SearchHistory {

    #$searchHistory
    #historyData = []
    #searchByHistory

    constructor({ searchHistory, historyData, searchByHistory }) {
        this.#$searchHistory = searchHistory
        this.#historyData = historyData
        this.#searchByHistory = searchByHistory

        this.#$searchHistory.addEventListener('click', e => {
            const selectedKeyword = e.target.dataset.keyword
            this.#searchByHistory(selectedKeyword)
        })
    }

    setState(newData) {
        this.#historyData = newData
        this.render()
    }

    render() {
        const renderedData = this.#historyData.map(data =>
            `<span class="history" data-keyword="${data}">${data}</span>`)
            .join(', ')
        this.#$searchHistory.innerHTML = renderedData
    }
}

export default SearchHistory