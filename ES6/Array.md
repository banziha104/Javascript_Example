# 배열의 기초

- 배열은 객체와 달리 순서가 있음 0으로 시작하는 숫자형 인덱스 사용
- 비균질적, 한 배열의 요소가 모두 같은 타입일 필요는 없음
- 배열 리터럴은 괄호로 만들고 , 배열 요소에 접근할 떄도 대괄호 사용
- 모든 배열에는 length 프로퍼티가 있음
- 배열에 배열 길이보다 큰 인덱스를 사용해서 요소를 할당하면 배열은 자동으로 그 인덱스에 맞게 늘어남 빈자리는 undefined
- Array 생성자를 사용해도 되지만, 거의 사용되지 않음

# 배열

- 배열 메서드 중 일부는 배열 자체를 수정함
- push() : 수정, 배열의 끝에 새로운 요소를 추가함
- shift() : 수정, 배열의 끝에 요소를 제거
- concat() : 사본, 배열에 여러 요소를 추가
- slice() : 배열의 일부만 가져옮
- splice() : 임의의 위치에 요소 추가하거나 제거하기
- copyWithin() : 배열 안에서 요소 교체하기
- fill() : 정해진 값으로 해당 배열을 채움

```javascript
const arr = new Array(5).fill(1) // [1,1,1,1,1] 배열 생성
```

- indexOf() : 해당 숫자와 일치하는  배열의 첫번째 인덱스 리턴
- lastIndexOf() : 해당 숫자와 일치하는 배열의 끝부터 첫번째 인덱스 리턴
- find() : 해당 객체를 직접 찾을때

```javascript
const arr = [{ id:5, name: "Judith"}, {id:7, name : "Fancis"}];
arr.find(o=> o.id ===5) //배열 자체를 리턴함

```

- map() : 배열의 요소를 변경
- filter() : 배열의 필요한 요소만 남김
- reduce : 배열의 값을 하나로 줄임
    - 첫번째 매개변수는 어큐뮬레이터(누적값)
    - 두번째 매개변수 부터는 배열 요소, 현재 인덱스, 배열 자체

```javascript
const arr = [5,7,2,4];
const sum = arr.reduce((a,x) => {a += x},0 )// 초기값 0부터 x를 계속 더함
```