# 문서객체

```javascript
var h1 = document.getElementById('h1');     //문서객체 불러오기
var text = document.createTextNode("good");

document.body.appendChild(h1); //문서객체넣기

var qr = document.querySelector("#h1"); //쿼리문으로불러오기
qr.style.border = "2px solid"; //문서객체 스타일 조작

/*고전 이벤트 모델*/
qr.onclick = function() {
    console.log(this); // this는 이벤트 발생 객체를 말함.
  //온클릭 이벤트
}
qr.onclick = function() {
  qr.onclick = null; // 이벤트제거
}

/*표준 이벤트 모델*/
var header = document.getElementsByClassName('my-header');
header.addEventListener('click',function() {
  
});

```

