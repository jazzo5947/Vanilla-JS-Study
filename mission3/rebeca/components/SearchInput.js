class SearchInput {

    #$searchInput
    #getSearchKeyword
    #getFetchedJJal

    constructor({ searchInput, getSearchKeyword, getFetchedJJal }) {
        this.#$searchInput = searchInput
        this.#$searchInput.type = "text"
        this.#$searchInput.placeholder = "검색어 입력 후 Enter!"
        this.#getSearchKeyword = getSearchKeyword
        this.#getFetchedJJal = getFetchedJJal

        this.inputEventListener()
    }

    inputEventListener(){
        this.#$searchInput.addEventListener('compositionend', e => { //fetch만 하고 히스토리 업뎃은 안할거야
            this.whatToDo(e)
        })
        this.#$searchInput.addEventListener('keyup', e => { //히스토리 업뎃은 이때만
            if(e.key !== 'Enter') return;
            this.whatToDo(e)
        })
    }

    whatToDo(e){
        const value = e.target.value
        if(value === null || value === undefined || value === '') return;

        if(e.type === 'compositionend'){
            this.#getFetchedJJal(value)
        }else if(e.type === 'keyup'){
           this.#getSearchKeyword(value)
        }
       
    }
}

export default SearchInput