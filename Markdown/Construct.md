# 생성자

```javascript
function Student(name,lang) {
  this.name = name;
  this.lang = lang
  
  this.getLang = function() {
    return this.lang;
  }
}

var student = new Student('lee','ko');
```

# 프로토타입

속성은 모두 다르지만, 메서드는 동일함, 1000개의 객체를 만들면
같은 함수를 1000번을 만들게됨.


```javascript

function Student(name,lang) {
  this.name = name;
  this.lang = lang
}
Student.prototype.getLang = function() { //메서드를 프로토타이핑한다
  return this.lang;
}

```

<br/>

---
# 캡슐화

```javascript
function Student(name,lang) {
  this.name = name;
  this.lang = lang
  
  this.setName = function(name) {
    this.name = name;
  }
}
```

