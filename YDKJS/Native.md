# 네이티브 

> 네이티브는 내장함수들을 가르킴

- 내부 [[Class]] : typeof가 object인 값에는 [[Class]]라는 내부 프로퍼티가 추가로 붙음 
- 래퍼 박싱 
    - 객체 래퍼를 사용하게 되면 'truthy' 로 바뀜
    - 언박식 : valueOf() 메소드로 원시값 추출
    - Array 생성자는 : 배열의 크기를 미리 정한다.