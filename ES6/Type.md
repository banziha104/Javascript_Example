# 타입

- 리터럴 : 값을 프로그램 안에서 직접 지정한다는 의미
- 자바스크립트의 값은 원시값 또는 객체
- 원시 타입 외의 객체
    - Array
    - Date
    - RegExp
    - Map과 WeakMAp
    - Set과 WeakSet
- 따옴표로 감쌓아진 숫자는 문자열이지만, 자바스크립트는 필요하다면 숫자가 들어 있는 무자녈을 자동으로 숫자로 바꿈

```javascript
/*숫자가 필요할 땐 숫자를 써야함*/
const result1 = 3 + '30' // 3이 문자열로 바뀜, 330
const result2 = 3 * '30' // 30이 숫자로 바뀜 90
```

- 심볼
> 유일한 토큰을 나타내기 위해 es6에서 도입한 새 데이터타입, 심볼은 항상 유일함

- null 과 undefined 
> null 객체는 null만, undefined는 undefined만 가질 수 있음
    
```javascript
let cureentTemp; // 암시적으로 undefined
const targetTemp = null; // null, 모르는 값
cureentTemp = 19.5 // 값 존재
cureentTemp = undefined // 초기화되지 않은 듯함 권장하지 않음
```
 
- 객체 

> 여러 가지 값이나 복잡한 값을 나타낼 수 있으며, 변할 수도 있음, 본질은 컨테이너.

```javascript
const obj = {}; // 빈객체
obj.color = "yello"; // 프로퍼티 추가
obj["not an identifier"] = 3; // 서브스크라이브 문법으로 접근
obj.speak = function() {    //함수도 담을 수 있음
  return 'Meow'
}

delete obj.speak() // 프로퍼티 제거

```

- 배열
    - 배열 크기는 고정되지 않음, 언제든 요소를 추가하거나 제거할 수 있음
    - 요소의 데이터 타입을 가르키지 않다. 문자열만 쓰거나 숫자만 쓰거나 하는 배열은 없음
    - 인덱스는 0 붜 시작
- 객체와 배열 마지막 쉼표(tailing comma) 

- 데이터 타입 변환
    - 숫자로 바꾸기 
        - Number 객체 생성자 사용
        - 내장 함수인 parseInt나 parseFloat 함수를 사용하는 방법
    - 문자열로 변환 
        - toString() 메서드 사용

- 단축 평가문

```javascript
if(!options) options = {};
options = options || {};

```

## 해체 할당

> 객체를 해체할 때는 반드시 변수 이름과 객체의 프로퍼티 이름이 일치 해야함

```javascript
const obj = {b:2, c:3, d:4};

const {a,b,c} = obj;

```

## 객체와 배열 연산자

