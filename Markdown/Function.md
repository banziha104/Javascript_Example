# 익명 함수

변수에 함수를 할당하는 경우

```javascript
var a = function(b) {
  console.log(b);
}

a("String")
```

---
# 선언적 함수

명시적으로 선언하는 함수

```javascript
function a(b) {
  console.log(b);
}
a("String"); 
```

---
# 명시적 함수와 선언적 함수를 같이 사용하는 경우

```javascript

var func = function (text) {
    console.log(text + "익명 함수"); //익명함수를 나중에 읽음
}

function func(text) {
    console.log(text + "선언적 함수"); //선언적 함수를 먼저읽고
}

func("This is"); // 선언->익명 순이기 때문에 마지막에 저장된 익명함수가 실행

```

# 매개변수가 여러개 일때 arguments

```javascript
var sum = 0;
function sumAll() {
    for (var i in arguments){
        sum +=arguments[i] //매개변수가 배열로 넘어옮
    }
    console.log(sum);
}
sumAll(1,2,3,4,5,6,7,8,9);
```

# 내부 함수

```javascript
function square(x) {
  return x*x;
}

function pythagoras(width,height) {
  return Math.sqrt(square(width) + square(height));
}
```

# 콜백 함수

자바스크립트에선 함수도 하나의 자료형이므로 매개변수로 전달할 수 있음
이렇게 매개 변수로 전달하는 함수를 콜백 함수라고 함.

```javascript

function callTenTimes(callback) {
    for (var i = 0 ; i < 10 ;i ++){
        callback();
    }
}

var callback = function() {
    console.log('호출')
};

callTenTimes(callback);
```

---
# 함수를 리턴하는 함수

주로 클로저를 사용하기 위해 사용.

```javascript
function returnFunction() {
    return function () {
        console.log("호출");
    };
}

returnFunction();
```

---
# 클로저

```javascript
function test(name) {
  var output = 'Hello' +name;
}

console.log(output); //output은 함수 스코프에서 소멸됨. 이 경우 클로저가 필요함
```

클로저
```javascript
function test(name) {
    var output = 'Hello' + name;
    return function() {
        alert(output);
    }
}

test("Lee Young Joon");
```

# 자바스크립트 실행 순서

```javascript
/*3,3,3이 출력됨. 함수를 호출하는 시점이 반복문이 모두 끝난 이후이기 때문*/
for (var i = 0 ; i < 3 ; i ++){
    setTimeout(function() {
      console.log(i);
    },0);
}
```
클로저를 활용한 해결
```javascript
    for(var i = 0 ; i <3 ; i++){
        (function(closed_i) {
          setTimeout(function() {
            console.log(closed_i);
          },0);
        })(i);
    }
```

---
# 기본 매개변수

```javascript
function test(a,b=52,c=352) {
  console.log(a+b+c+""); 
}

test(1); // 값을 넣지 않는 경우, 1 52 352이 출력 
```

---
# 짧은 조건문을 활용한 매개변수

```javascript
function test(a,b,c) {
  b = b || 52;
  c = c || 273;
  
  console.log(a + "/" + b + "/" + c) 
}

test(1,2) // 1은 참, b도 참이기 때문에 1/2 후 c가 undefined이기 때문에 273이 실행;

```

---
# 화살표 함수 

<li> 조건 1 : 프로토타입을 사용하지 않고 ECMAScript 6에서 추가 된 클래스를 사용할 때
<li> 조건 : jQuery 문서 객체 조작에서 this 키워드가 아니라, event.currentTarget을 사용할 때

```javascript
const mutiply = (a,b) => a*b;
```

# 가변 매개 함수

```javascript
function test(...number) {
  console.log(number[0]);
  console.log(number[1]);
  console.log(number[2]);
}
```