class SearchResult {

    #$searchResult
    #jjal

    constructor({ searchResult, jjal }) {
        this.#$searchResult = searchResult
        this.#jjal = jjal
    }

    render() {
        const imgHtmlStr = 
            this.#jjal.map(img => 
                img.imageUrl ? `<img class="search-result-img" src="${img.imageUrl}">` : '')
                .join('')
        this.#$searchResult.innerHTML = imgHtmlStr
    }

    setState(newResult) {
        this.#jjal = newResult
        this.render()
    }
}

export default SearchResult