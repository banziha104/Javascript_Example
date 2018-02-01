# 강제변환

- 추상연산 
    - ToString : 문자열이 아닌 값 -> 문자열 
        - 숫자는 그대로 바뀌며, 너무 작거나 큰 값은 지수 형태로 바뀜
        - JSON 문자열화 : JSON.stringfy()는 인자가 undefined, 함수 심벌 값이면 자동으로 떨구고 null로 바꿈
    - ToNumber : 숫자 아닌 값 -> 수식 연산이 가능한 숫자
        - undefined -> NaN, null -> 0 
        - 변환이 실패하면 결과는 ㅜ무
    - ToBoolean : 불리언으로 강제변환하면 false 되는값과 그것을 제외한 나머지 true
        - Falsy값 : 항상 false를 리턴하는
            - false
            - undefined
            - null
            - +0 -0 NaN
            - "" (length가 0)
            - Falsy 객체는 불리언으로 강제 변환하면 false다 
            
- 명시적 강제변환 
    - 문자열 & 숫자 
    
    ```javascript
    
    var a = 42
    var b = String(a);
    var c = a.toString();
    
    var e = "3.14";
    var f = Number(c);
    var h = +e;
    
    ```
    
    - 똒똒해
    
    ```javascript
    dsfasdf
    ```