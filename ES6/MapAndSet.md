# Map

- 사용 이유
    - 프로토타입 체인 떄문에 의도하지 않은 연결이 생김
    - 객체 안에 연결된 키와 값이 몇 개나 되는지 쉽게 알수 없음
    - 키는 반드시 문자열이나 심볼이어야 하므로 객체를 키로 써서 값과 연결 불가능
    - 객체는 프로퍼티 순서를 보장하지 않음
    
 ```javascript
const userRoles = new Map();
userRoles.set(u1, 'User'); //맵에 저장
userRoles.set(u2, 'User2');

const userRoles = new Map([
    [u1,'User'], //배열로 맵에 저장
    [u2,'User2']
])

userRoles.get(u2); // 읽기
userRoles.size // 맵의 요소 카운트
userRoles.key() //맵의 키
userRoles.values() // 맵의 값을
 
```

# WeakMap

- 맵과 다른점
    - 키는 반드시 객체여야함
    - WeakMap의 키는 가비지 컬렉션에 포함될 수 있음
    - WeakMap은 이터러블이 아님
    
    
# Set

> 중복을 허용하지 않는 데이터 집합

```javascript
const roles = new Set();

roles.add("User") // 추가 
roles.delete("User") // 삭제
```

