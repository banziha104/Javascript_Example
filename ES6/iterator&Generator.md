# 이터레이터 

> 일종의 책갈피와 비슷한 개념으로 지금 어디 있는지 파악할 수 있도록 돕는다.

- values() : 이터레이터를 만듬
- next() : 다음을 반환함. 끝에 가면 undefined 과 done: true 리턴

```javascript
class Log{
    constructor(){
        this.messages = [];    
    }
    add(message) {
        this.messages.push({message, titmestamp :Date.now()});
    }
    [Symbol.iterator](){
        return this.messages.values();
    }
    
}
```

# 제너레이터 

> 이터레이터를 사용해 자신의 실행을 제어하는 함수

- 제너레이터는 언제든 호출자에게 제어권을 넘길 수 있음
- 호출한 즉시 실행되지 않 , 이터레이터를 반환하며 next메서드를 호출함에 따라 실행됨
- 함수 뒤에 *을 붙임으로 생성

```javascript
function* rainbow() {
  yield 'red';
  yield 'orange';
  yield 'yellow';
}
```
