# this

- this 바인딩은 호출부와 연결된다

```javascript
function baz() {
  // 호출 스택 'baz'
  // 호출부는 전역 스코프
  bar()
}
function bar() {
  // 호출 스택 'baz -> bar'
  // 호출부는 bar
  foo()
}
function foo() {
  // 호출 스택 'baz->foo'
  // 호출부는 bar 
  
}
```

- 기본 바인딩 : 단독 함수 실행시, 전역 객체를 참조한다

```javascript
function foo() {
  console.log(this.a) // 전역 객체 a
}

var a =2
foo()
```

- 암시적 바인딩 : 호출부에 콘텍스트 객체가 있는 확인, 객체가 바인딩 된다

```javascript
function foo() {
  console.log( this.a); // obj가 this가 된다 
}

var obj = {
    a : 2,
    foo : foo
}
obj.foo() // 2 
```

- 암시적 소실 : 

```javascript
function foo() {
  console.log( this.a );
}

var obj = {
    a : 2,
    foo : foo
}

var bar = obj.foo;

var a = "sss"

bar()
```