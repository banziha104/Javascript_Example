# 배열

> 자바스크립트의 배열은 _엄격하지 않은 배열로_ 어떤 타입의 값이라도 담을 수 있다

- delete 연산자 사용시 주의 : 슬롯을 제거할 수 있지만 length 프로퍼티 값은 바뀌지 않음
- 빈 요소는 undefined로 채워지기 때문에 조심해야함
- 문자열 : 단지 문자의 배열로만 생각하지만 생김새만 비슷할 뿐 문자 배열과 같지 않음.
    - 둘다 length 프로퍼티, concat() 메소드를 가짐 
    - 문자열은 불변값, 배열은 가변값
    
- 숫자 : number가 유일하면 정수와 소수가 담겨져 있음
    - 정수는 부동 소수점이 없는 소수이다.
    - 숫자 리터럴은 10진수 리터럴로 표시
    - 소수점 앞 정수가 0 이면 생략 가능
    - 소수점 이하가 0일때도 생략 가능
    - 객체 레퍼로 박싱할 수 있으며, Number.prototype 메서드로 접근할 수도 있다.
    - toFixed(num) : num 값까지만 소수점을 출력한다
    - 0.1과 0.2를 더해도 정확히 0.3은 아니다. 실제는 0.300000000004에 가깝다.
    - Number.isInteger() : 정수인지 확인
    - NaN(Not A Number) : 유효하지 않은 숫자를 뜻한다. (숫자 집합 내에서 특별한 종류의 에러 상황을 나타냄)
    - NaN은 자기자신과도 동등하지 않다. (===로 식별 불가능) 
    - _isNaN()_ 은 숫자인지 아닌지만 판단함
    - 그러므로 _Number.isNaN()_ 을 이용해야 진짜 NaN을 찾을 수 있음
    - 무한대 : Infinity로 나옮, 양의 무한대와 음의 무한대가 존재. 
    - 0 : 자바스크립트는 양의 0 과 음의 0이 존재
    - 단순 값은 값 복사 방식으로 할당됌
    - 객체나 함수 등 합성 값은 레퍼런스 사본을 생성
    
    
```javascript
if (!Number.isNaN){
    Number.isNan = function(n) {
      return n !== n // NaN은 자신과도 맞지 않는 유일한 개체임을 이용함
    }
}


```
 

 