# Vanilla-JS-Study

> Vanilla JS Study Managed by David [@dkim-planit](https://github.com/dkim-planit)
 - Coding a Todo List as a module system
 - Coding a GIF image Searcher as a module system

---

### [Mission 1] TodoList Component 작성

* `Class` 또는 `function`을 활용하여 기본적인 TodoList를 작성합니다.
* 에러 발생 시 처리하는 코드를 작성합니다.
* 화면 페인팅, 데이터 세팅 함수를 작성합니다.

---

### [Mission2] Todo App 업그레이드

* TodoInput, TodoCount 컴포넌트를 작성합니다.
* App 컴포넌트를 작성합니다.
* TodoItem 추가, 완료처리, 삭제 기능을 작성합니다.
* 로컬 웹서버를 설치합니다.
    * node.js 설치 후 `npm install http-server -g` 명령어를 실행합니다.
    * 터미널에서 `npx http-server -c -1` 실행하여 localhost:8080에서 페이지를 오픈할 수 있습니다.
* `Event Delegate` 기법을 활용합니다.
* `LocalStorage` 를 활용합니다.

<img src="https://user-images.githubusercontent.com/66122957/130165267-c20ecb22-c87e-4b79-a7a5-8aaf97b0e005.gif">

---

### [Mission3] fetch API로 움짤 검색기 만들기

* SearchInput, SearchResult, SearchHistory 컴포넌트를 작성합니다.
    * SearchInput: 짤방 검색 키워드 입력 input 컴포넌트
    * SearchResult: 검색된 짤방 이미지를 뿌려주는 컴포넌트
    * SearchHistory: 검색 키워드가 누적되고, 누적된 키워드 클릭 시 해당 키워드로 짤방이 재검색되는 컴포넌트
* input에 입력된 내용으로 `https://jjalbot.com/api/jjals?text=검색키워드`를 호출합니다.
* TodoList와 마찬가지로 App 컴포넌트에서 하위 컴포넌트를 관리하도록 구조화합니다.
* 짤방 이미지를 `fetch`해오는 코드를 `promise` → `async, await` 코드로 변경합니다.
* `debounce` 기법을 활용하여 불필요한 api 요청이 가는 것을 방지합니다.

<img src="https://user-images.githubusercontent.com/66122957/130168502-37da6860-efd3-44e8-a950-cec85450aaa7.gif">
