# 고전 이벤트 모델

```javascript
window.onload = function() {
  var header = document.getElementById('header');
  
  header.onclick = function() {
    alert("onclick");
  };
};
```

<br/>

---
# 이벤트 발생객체와 이벤트 객체

```javascript
window.onload = function() {
  document.getElementById('header').onclick = function(e) {
    var event = e || window.event;
    
    document.body.innerHTML = '';
    
    for (var key in event){
        document.body.innerHTML += '<p>' + key + ': '+ event[key] + '</p>';
    };
  };
}
``` 

# 인라인 이벤트 모델

```html
<body>
    <h1 onclick="var a = 10 ;alert('a')">Click</h1> <!--코드가 지저분해짐-->
</body>
```

```html
<head>
    <script>
        function whenClick(e) {
          alert('클릭');
        }
    </script>
</head>
<body>
    <h1 onclick = "whenClick(event)">Click</h1>
</body>
```

<br/>

---
# 디폴트 이벤트 제거

<li> 고전 이벤트 모델

```javascript
    window.onload = function() {
      document.getElementById('my-form').onsubmit = function() {
        return false; // 리턴값을 false로 주면 디폴트 이벤트가 제거됨.
      };
    };
```

<li> 인라인 모델

```html
<form onsubmit="return whenSubmit()"> <!--return 함수()를 입력하면 디폴트 이벤트 제-->

</form> 
```

<br/>

---

# 이벤트 전달

```javascript

document.getElementById('paragraph').onclick = function(e) {
    var evnet = e || window.event;
    
    alert('paragraph');
    
    event.cancelBubble = true; //이벤트 전달을 제거, 익스플로어의 경우
    
    if(event.stopPropagation){ //익스플로어의 경우 stopPropagation이 없음으로 조건문으로 처리
        event.stopPropagation(); // 그 외의 경우 
    }
}
```

<br/>

---

# 인터넷 익스플로러 이벤트 모델

```javascript
window.attachEvent('onload',function() {//이벤트 연결
  
});

window.detachEvent('onclick',handler);

```

<br/>

---

# 표준 이벤트 모델

```javascript
window.onload = function() {
  var header = document.getElementById('my-header');
  
  header.addEventListener('click',function() {
    
  }); // 이벤트 연결
}

window.removeEventListener('click',handler);
```
