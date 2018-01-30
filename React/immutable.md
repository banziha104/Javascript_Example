# Immutable.js

> 불변성을 유지하는 라이브러리 

- 객체 Map
- 배열 List
- 설정 set
- 읽을때 get
- 읽은 다음 설정 update
- 내부에 있는건 setIn, getIn
- 일반 자바스크립트로 변환 toJS
- push, slice와 같은 내장 함수와 비슷한 함수들이 존재(불변성 유지)
- 특정 key를 지울땐 delete

```javascript

/*출처 velopert님 블로그*/

// 1. 객체는 Map
const obj = Map({
  foo: 1,
  inner: Map({
    bar: 10
  })
});

console.log(obj.toJS());

// 2. 배열은 List
const arr = List([
  Map({ foo: 1 }),
  Map({ bar: 2 }),
]);

console.log(arr.toJS());

// 3. 설정할땐 set
let nextObj = obj.set('foo', 5);
console.log(nextObj.toJS());
console.log(nextObj !== obj); // true

// 4. 값을 읽을땐 get
console.log(obj.get('foo'));
console.log(arr.get(0)); // List 에는 index 를 설정하여 읽음

// 5. 읽은다음에 설정 할 때는 update
// 두번째 파라미터로는 updater 함수가 들어감 
nextObj = nextObj.update('foo', value => value + 1);
console.log(nextObj.toJS());

// 6. 내부에 있는걸 ~ 할땐 In 을 붙인다
nextObj = obj.setIn(['inner', 'bar'], 20);
console.log(nextObj.getIn(['inner', 'bar']));

let nextArr = arr.setIn([0, 'foo'], 10);
console.log(nextArr.getIn([0, 'foo']));

// 8. List 내장함수는 배열이랑 비슷하다
nextArr = arr.push(Map({ qaz: 3 }));
console.log(nextArr.toJS());
nextArr = arr.filter(item => item.get('foo') === 1);
console.log(nextArr.toJS());

// 9. delete 로 key 를 지울 수 있음
nextObj = nextObj.delete('foo');
console.log(nextObj.toJS());

nextArr = nextArr.delete(0);
console.log(nextArr.toJS());

```