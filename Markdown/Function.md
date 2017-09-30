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
