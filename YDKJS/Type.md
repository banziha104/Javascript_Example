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
- 선언 되지 않는 변수 
    - typeof 안전가드 : 선언하지 않는 변수여도 'typeof 변수'를 해도 오류가 나지 않음
    
```javascript
function doSomething() {
  let helper = 
  (typeof FeatureXYZ !== "undefined") ? FeatureXYZ : function() { // 없어도 에러가 나지 않는다.
    
  }
}
```

