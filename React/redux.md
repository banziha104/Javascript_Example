# 리덕스

- 스토어 : 어플리케이션의 상태 값들을 내장하고 있음
- 액션 : 상태 변화를 일으킬 때 참조하는 객체
- 디스패치 : 액션을 스토어에 전달하는 것
- 리듀서 : 상태를 변화시키는 로직이 있는 함수
- 구독 : 스토어의 값을 필요로하는 컴포넌트가 스토어를 구독함

- 스토어 api
    - getState() : 현재 상태를 가져옮
    - subscribe(listener) : 상태 구독
    - dispatch(action) : action 보내기
    
- Ducks 구조 : 액션과 리듀서를 한 파일에 저장함

```javascript
// 액션 타입을 정의
const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';


// 액션 생성함수를 만듬
// 다른 파일에서 사용해야함으로 export
export const increment = () => ({type : INCREMENT});
export const decrement = () => ({type : DECREMENT});

// 모듈의 초기 상태를 정의

const initialState = {
    number : 0
};

// 리듀서를 만듬
export default function reducer(state = initialState, action){

    // 리듀서 함수에서는액션의 타입에 따라 변화된 상태를 정의하여 반환
   switch (action.type){
        case INCREMENT :
            return { number : state.number +1};
        case DECREMENT :
            return { number : state.number -1};
        default:
            return state;
    }
}

```

- redux-actions 
    - reateAction : 액션 생성 함수를 지원하는 라이브러
    - handlActions  : 액션 핸들 함수를 지원하는 라이브러리
    
    
- combineReducers : 리듀서를 하나로 합침 

```javascript
import { combineReducers } from 'redux';
import counter from './counter';

export default combineReducers({
  counter
  /* 리듀서가 더 붙을 경우 여기에 기술 */
});
```

- 스토어 만들기

```javascript

import {createStore} from 'redux';
import modules from './modules';

const configure = () => {
    // const store = createStore(modules); // 모듈을 이용해 스어를 만들고 스토어 반환
    const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    const store = createStore(modules, devTools);
    return store;
}
export default configure;
```