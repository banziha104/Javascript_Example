# 클로저

> 함수가 속한 렉시컬 스코프를 기억하여 함수가 렉시컬 스코프 밖에서 실행될 때에도 이 스코프에 접근할 수 있게 하는 기능.

```javascript
function foo(){
    var a = 2;
    function bar(){
        console.log(a)
    }
    return bar;
}

var baz = foo();
baz() // 이부분에서 bar가 실행된다
```

- 클로저는 자신이 참조하고 있는 함수가 렉시컬 스코프를 지나 소멸될 타이밍에도 살려둔다