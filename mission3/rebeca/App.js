import SearchInput from "./components/SearchInput.js"
import SearchResult from "./components/SearchResult.js"
import SearchHistory from "./components/SearchHistory.js"
import { debounce } from "./util/debounce.js"
import { fetchImg } from "./model/api.js"

class App {
    #$searchInput
    #$searchResult
    #$searchHistory
    #components

    #dataModel = {
        keywordHistory: [],
        searchedJJal: []
    }

    constructor() {
        this.#$searchInput = document.querySelector('#search-keyword')
        this.#$searchResult = document.querySelector('#search-result')
        this.#$searchHistory = document.querySelector('#search-history')

        this.#components = []

        this.#components.push(new SearchInput({
            searchInput: this.#$searchInput,
            getSearchKeyword: (keyword) => {
                if (!keyword) return
                debounce(async () => {
                    const imgData = await fetchImg(keyword)
                    if(!this.#dataModel.keywordHistory.includes(keyword)){
                        this.#dataModel.keywordHistory = [...this.#dataModel.keywordHistory, keyword]
                    }
                        
                    this.setState({
                        keywordHistory: this.#dataModel.keywordHistory,
                        searchedJJal: imgData
                    })
                }, 300)
                this.#$searchInput.select()
            },
            getFetchedJJal: (keyword) => {
                console.log(keyword)
                if(!keyword) return;
                debounce(async () => {
                    const imgData = await fetchImg(keyword)
                    this.setState({
                        keywordHistory: this.#dataModel.keywordHistory,
                        searchedJJal: imgData
                    })
                }, 300)
            }
        }))

        this.#components.push(new SearchResult({
            searchResult: this.#$searchResult,
            jjal: this.#dataModel.searchedJJal
        }))

        this.#components.push(new SearchHistory({
            searchHistory: this.#$searchHistory,
            historyData: this.#dataModel.keywordHistory,
            searchByHistory: async keyword => {
                const imgData = await fetchImg(keyword)

                this.#$searchInput.value = keyword
                this.#$searchInput.focus()
                this.#$searchInput.select()

                this.setState({
                    searchedJJal: imgData,
                    keywordHistory: this.#dataModel.keywordHistory
                })
            }
        }))
    }

    setState(newData) {
        this.#dataModel.searchedJJal = newData.searchedJJal
        this.#dataModel.keywordHistory = newData.keywordHistory

        this.#components.forEach(component => {
            if (component instanceof SearchResult) {
                component.setState(this.#dataModel.searchedJJal)
            }
            if (component instanceof SearchHistory) {
                console.log(this.#dataModel.keywordHistory)
                component.setState(this.#dataModel.keywordHistory)
            }
        })
    }

}

export default App