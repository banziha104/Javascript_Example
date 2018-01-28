# 함수

- 자바스크립트에서는 함수도 객체, 호출과 참조의 차이가 있음

```javascript
function greeting() { //함수정의
  console.log("hello")
}

greeting(); // 함수 호출
greeting // 함수 참조

const f = greeting(); // 함수할당
f() // 함수 실행

const o = {};
o.f = greeting(); // 객체에 함수 할당
o.f(); // 함수 실행

const arr = [1,2,3];
arr[1] = greeting(); // 함수를 배열에 할당
arr[1]() // 함수실행

```

- 함수를 호출하면 함수 매개변수는 변수 자체가 아니라 값을 전달 받는 call-by-value 방식
- 매개변수는 함수를 전달하지 않고, 식별자가 같다면 같은 함수를 실행함(오버로딩이 없음)

```javascript
function f(x) {
  return `in f:x= ${x} `;
}

f(10) // in f:x = 10
f() // in f:x = undefined 기본적으로 undefined가 리턴
```

- 매개변수 해체

```javascript
function getSentence({subject, verb, object}) {
  return `${subject} ${verb} ${object}`
}
const o = {
      subject : "i",
      verb :"love",
      object : "Javascript",
  }
  
  getSentence(o) 
```

- 매개변수 기본값

```javascript
function f(a,b="default",c=10) {
  
}
```

- 객체의 프로퍼티인 함수 

```javascript
const o = {
    name : 'name',
    bark : function() {
      return 'Woof'
    }
}

//es6

const o = {
    name : 'name',
    bark() { return 'Woof'} // 함수 프로퍼티(메소드)
}
```

- 화살표 표기법 
    - funtion 키워드 생략
    - 함수에 매개변수가 하나라면, ()도 생략
    - 함수 바디가 표현식 하나라면 중괄호와 return 문도 생략
    
- call : this로사용할 객체를 넘기면 해당 함수가 주어진 객체의 메서드인 것처럼 사용가능


```javascript
const bruce = { name : "Bruce"};
const madeline = {name : "Madeline"};

function greet() {
  return `I'm ${this.name}`
}

greet(); // I'm undefined this는 어디에도 묶이지 않음
greet.call(bruce); // this 는 bruce
greet.call(madeline) // this는 madeline
```

- apply : 매개변수로 배열을 받음

```javascript
update.apply(bruce, [1955,"actor"])
```

- bind : this 값을 영구히 바

```javascript
const updateBruece1949 = update.bind(bruce,1949);
updateBruece1949("singer,songwritter");
```

