# 텍스트 노드를 가지는 문서 객체 생성

<li> createElment(tagName) : 요소 노드를 생성
<li> createTextNode(text)   : 텍스트 노드를 생성
<li> appendChild(node) : 객체에 노드를 연결함

```javascript
window.onload = function() {
  var header = document.createElement('h1');
  var textNode = document.createTextNode('Hello Dom');
  
  header.appendChild(textNode);
  document.body.appendChild(header);
};
```

<br/>

---

# 텍스트 노드를 갖지 않는 노드 생성

```javascript
window.onload = function() {
  var img = document.createElement('img');
  img.src = 'Penguins.jpg';
  img.width = 500;
  img.height = 350;
  
  document.body.appendChild(img);
}
```

<li> setAttribute(name,value) : 객체 속성 지정
<li> getAttribute(name) : 객체 속성을 가져옮

<br/>

---
# 다른 방법으로 넣기

```javascript
window.onload = function() {
  var output ='';
  output += '<ul>';
  output += '   <li>javascript<li/>';
  output += '   <li>jQuery<li>';
  output += '<ul>';
  
  document.body.innerHTML = output;
}
```

# 문서 객체 가져오기

<li> getElementById(id) : 태그의 id 속성이 id 매개변수와 일치하는 문서객체를 가져옮
<li> getElementsByName(name) : 태그의 name 속성이 맞는 문서객체를 가져옮
<li> getElementsByTagName(tagName) : tagName과 일치하는 문서 객체를 배열로 가져옮
<li> querySelector(선택자) :  선택자로 가장 처음 선택되는 문서 객체를 가져옮.
<li> querySelectorAll(선택자) : 선택자를 통해 선택되는 문서 객체를 배열로 가져옵니다.


```javascript
var a = document.getElementById('header');
```

<li> 문서 객체 제거

```javascript
window.onload = function() {
  var removed = document.getElementById('removed');
  
    document.body.removeChild(removed);
}
```

