# 객체와 객체지향 프로그래밍

- 객체는 프로퍼티를 가지며, 각 프로퍼티에는 문자열이나 심볼 인덱스가 있음
- 객체는 순서가 보장되지 않음.

```javascript
class Car{
    constructor(make,model){
        this.make = make;
        this.model = model;
        this.userGears = ['P','N','R','D'];
        this.userGear = this.userGear[0];
    }
    shift(gear){
        if(this.userGear.indexOf(gear) <0){
            throw new Error(`Invalid gear: ${gear}`);
            this.userGear = gear;
        }
    }
  
}
```

- instanceOf : 해당 클래스의 인스턴스인지 확인함
- 클래스는 함수다
- 클래스의 인스턴스에서는 사용할 수 있는 메서드는 프로포타입 메소드
- 자바스크립트는 먼저 인스턴스를 체크하고 없으면 프로토타입을 체크함
- 정적메서드 : 클래스자체에 묶임. (스위프트의 타입 메서드와 동일)
- obj.hasOwnProperty(x) : obj에 프로퍼티에 있다면 true, 프로토타입에만 있다면 false
- 믹스인 : 다중상속을 비슷하게 지원하기 위한 방법
