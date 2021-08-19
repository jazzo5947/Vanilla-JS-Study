# David-JS-Study

Vanilla JS Study Managed by David (
1. Coding a Todo-List as Module System
2. Coding a GIF Searcher as Module System

---

### [Mission 1] TodoList Component 작성
#### _필수구현사항_
* function, class 아무거나 사용해도 좋습니다.
* new 키워드를 통해 생성해서 사용합니다.
* 파라미터로 아래와 같은 형태의 data를 넘겨받습니다.
```
const data = [
  {
    text: 'JS 공부하기'
  },
  {
    text: 'JS 복습하기'
  }
]
```
* `const todoList = new TodoList(data);` 와 같은 형태로 파라미터를 넘기고, 생성해서 사용합니다.
* `TodoList` 컴포넌트에 `render` 함수를 작성합니다. 이 함수는 파라미터로 넘겨받은 data를 순회하며 각 배열첨자의 text를 html string으로 만든 뒤, `todo-list`라는 id를 가진 div에 `innerHTML`을 이용해 렌더링 되도록 합니다.

#### _추가구현사항: 에러 발생_
* new 키워드로 함수의 인스턴스를 만들 때 올바른 파라미터가 아닐 경우 에러 발생시키기
* null이나 undefined일 경우
* array가 아닐 경우
* 빈 데이터인 경우
* 에러를 발생시킬 때 `throw new Error('에러 메시지')` 를 사용해보세요.

#### _추가구현사항: 다수의 컴포넌트_
1. html
* `<div id="todo-list"></div>` 외의 다른 div를 두 개 더 html 코드에 만듭니다.
* div의 id는 적당한 이름으로 지어주세요.
2. js
* `const data = [{ ... }]` 외에 todo를 담고 있는 array data를 두 개 더 만듭니다.
* todo의 내용은 본인의 현재 todo를 담아서 넣으면 더 좋겠죠?
* `TodoList` 컴포넌트를 총 세 개 만듭니다. 첫 번째 컴포넌트에는 제가 넣어둔 data와 #todo-list에 렌더링하고, 나머지 두 개는 여러분이 추가하신 div + data를 활용해서 만들어주세요.

#### _추가구현사항: 완료상태 표시_
* `data`의 각 object에 `text`외에 `isCompleted` 라는 필드를 추가합니다.
* 해당 값은 true, 혹은 false 값을 지정해주세요.

```
var data = [
  { 
    text: '코딩하기',
    isCompleted: true
  },
  {
    text: '집안 청소하기',
    isCompleted: false
  }
]
```

* `TodoList` 컴포넌트 내에 `text` 렌더링 시, `isCompleted` 값이 `true`인 경우 `<s>`태그를 이용해 취소선 처리를 해주는 걸 추가합니다.

#### _추가구현사항: setState_
* `TodoList` 함수에 `setState(nextData)`라는 함수를 만듭니다.
* 이 함수는 해당 컴포넌트 초기 생성 시 넘겼던 `data` 파라메터를 `nextData`로 대체하고 컴포넌트를 다시 렌더링합니다.
* 해당 함수를 추가한 뒤, `new TodoList(...)` 하는 코드 이후에 해당 컴포넌트의 인스턴스에 `todoList.setState(새로운 배열)` 형태로 데이터만 다시 넣었을 때 컴포넌트가 다시 렌더링 되도록 작성해주세요.
* `setState` 함수 호출 후 다시 `todoList.render()`를 호출하는 것이 아니라, `setState` 함수 내에서 화면을 다시 렌더링하는 것까지 처리해야 합니다.

---

### [Mission2] Todo App 업그레이드

#### _필수구현사항_
* 미션1 html에 있던 스크립트를 TodoList.js로 분리합니다.
* `new TodoList()`를 실행했던 구문은 index.js로 분리합니다.
* index.html에서 해당 스크립트를 로드합니다.

** TodoList data 모델 **
데이터 형태는 아래와 같이 생각하고 만듭니다.
```
[{
  text: 'todo text',  // 할 일 이름
  isCompleted: false, // 완료 여부
}]
```

** input 추가하기 **
`<input type='text'>` input에 할 일을 입력하여 TodoList 컴포넌트의 데이터에 추가하게 합니다.
별도의 입력 버튼을 만들거나 엔터 입력 시 처리되게 하거나 취향껏 하시면 됩니다.
Todo 목록에 할일이 추가 되면 할일 텍스트 옆에 삭제버튼을 하나 추가하고 그 버튼을 클릭 시 할 일이 삭제되게 합니다.
할일 텍스트를 클릭하면 `isCompleted` 값을 true로 바꾸고 완료되었다는 ui를 처리합니다. (완료 라벨을 넣거나 <s> 태그 등을 활용)
이벤트 리스너 참고 https://developer.mozilla.org/ko/docs/Web/API/EventTarget/addEventListener

#### _추가구현사항: _

#### _추가구현사항: _

#### _추가구현사항: _


---

### Mission3

#### _필수구현사항: _

#### _추가구현사항: _

#### _추가구현사항: _

#### _추가구현사항: _
