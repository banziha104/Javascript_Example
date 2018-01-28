# 내장 타입 

- 원시타입
    - null
    - undefined 
    - boolean
    - number
    - string
    - object
    - symbol

- null 은 false나 다름 없는 유일한 객체이며 타입은 object다

```javascript
var a = null;
(a! && typeof a === "object"); // true
```

---

### 값이 없는 vs 선언되지 않는 

- 둘다 undefined다.
- 하지만 둘은 완전히 다른 개념이다

