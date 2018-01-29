# 스코프

> 자바스크립트의 스코프는 정적 스코프를 가짐

```javascript
function f1() {
  console.log(`one`);
}

function f2() {
  console.log('two');
}

f2();
f1();
f2();
```

- 전역 스코프 : 시작할 때 암시적으로 주어지는 스코프, 전역 스코프에서 선언한 것은 무엇이든 프로그램의 모든 스코프에서 볼 수 있음
- 블록 스코프 : let과 const는 블록 스코프에서 선언됨 
- 변수 숨기기 

```javascript
{
    let x = 'blue';
    console.log(x); //blue
    {
        let x = 3;
        console.log(x); //3
    }
    console.log(x); //3 상위 x가 가려짐
}
```

클로저 : 특정 스코프에 접근할 수 있도록 의도적으로 그 스코프에 정의하는 경우

```javascript
let globalFunc;
{
    let blockVar = "a";
    globalFunc = function() {
      console.log(blockVar);
    }
}

globalFunc(); 

```

- 즉시 실행 함수 : 익명 함수로 만들고 바로 호출됨 자체는 함수임으로 스코프 밖으로 무언가 내보낼 수 있음

```javascript
(function() {
  
})();
```

- 호이스팅 : 함수나 전역 스코프 전체를 살펴보고 var로 선언한 변수를 끌어 올림, 할당은 끌어올려지지 않음
```javascript
/*원래 코드*/
var x = 3;
if (x === 3){
    var x = 2;
    console.log(x);
}

console.log(x);

/*자바스크립트가 해석한코드*/

var x;
x = 3;
if(x === 3){
    x = 2;
    console.log(x)
}
console.log(x);
```

- 함수 호이스팅 : 함수 선언도 스코프 맨 위로 끌어올려짐. 할당한 함수 표현식은 끌어올려지지 안ㅇ흠

- 스트릭트 모드 : "use strict" 