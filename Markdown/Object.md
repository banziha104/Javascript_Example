# Object

```javascript
var obj = {
    name : 'lee',
    age : '26',               // 속성
    goLib : function(where) { // 속성중 함수를 포함하는 것을 메서드라함  
      console.log(where + "going");
    }
}
```

<br/>

---
# this

```javascript
var obj = {
    name : 'lee',
    age : '26',               
    goLib : function(where) {  
      console.log(this.name + where + "going"); // 반드시 this를 사용해야함
    }
}
```

<br/>

---
# in 과 with

in : 해당 속성이 존재하는 지
```javascript
var obj = {
    name : 'lee',
    age : '26',               
    goLib : function(where) {  
      console.log(this.name + where + "going"); 
    }
}

console.log('app' in obj);
```

<br/>
with : 객체를 간소화 해줌

```javascript
var obj = {
    name : 'lee',
    age : '26',               
    goLib : function(where) {  
      console.log(this.name + where + "going"); 
    }
}

var output = obj.name + age.name;
```

<br/>

with 사용시

```javascript
var obj = {
    name : 'lee',
    age : '26',               
    goLib : function(where) {  
      console.log(this.name + where + "going"); 
    }
}
var output ="";
with (obj){
    output += name;
    output += age;
}
```

<br>

---
# 속성 추가와 제거

추가

```javascript
var obj = {
    name : 'lee',
    age : '26',               
    goLib : function(where) {  
      console.log(this.name + where + "going"); 
    }
}

obj.university = "gachon";
obj.sleep = function(howMuch) {
  console.log(howMuch + "sleeping");
}
```

<br/>

제거

```javascript
var obj = {
    name : 'lee',
    age : '26',               
    goLib : function(where) {  
      console.log(this.name + where + "going"); 
    }
}
delete(obj.name);
```

<br/>

---
# 객체 깊은 복사

```javascript
function clone(obj) {
  var output = {};
  for (var i in obj){
      output[i] = obj[i];
  }
  return output;
}
var obj = {a:10,b:20};
var cloned = clone(obj);
```

<br/>

---
# 전개 연산자를 사용한 배열 테크닉

배열 복사

```javascript
const originalArray = [1,2,3,4,5];
const newArray = [...originalArray];
```

<br/>

배열 병합

```javascript
const originalArray = [1,2,3,4,5];
const originalArray2 = [6,7,8,9,10];
const newArray = [...originalArray,...originalArray2];
```
