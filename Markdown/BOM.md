# Bom

<li> screen  : 화면 전체와 관련된 객체
<li> navigatior : 웹 브라우저와 관련된 객체
<li> location : 주소와 관련된 객체
<li> history : 기록과 관련된 객체
<li> document : HTML 문서와 관련된 객체


<br/>

---
# window 객체

<li> open() : 새로운 웹 브라우저 윈도우를 만듬 

```javascript
           /*URL, 통신하는 윈도우,가로,세로*/
window.open('http://naver.com','child','width=600,height=300',true);
```

<li> focus() : 윈도우에 초점을 맞춤
<li> blur() : 윈도우에 맞춘 초점을 제거합니다
<li> close() : 윈도우를 닫음
<li> onLoad() : 로드후에 자동으로 실행됨

```javascript

window.onload = function(a) {
  console.log(a);
}
```
<br/>

---
# screen

```javascript
var child = window.open('','','width=300,height=200');
var width = screen.width;
var height = screen.height;

child.moveTo(0,0);
child.resizeTo(width,height);
```
 
<br/>

---
# location 객체

<li> href : 문서의 url 주소
<li> host : 호스트이름과 포트번호
<li> hostname : 호스트 이름
<li> port : 포트번호
<li> pathname : 디렉토리 경로
<li> hash : 앵커 이름
<li> search : 요청 매개변수
<li> protocol : 프로토콜 종류
<li> reload() : 새로고침
<li> assign(link) : 현재위치를 이동
<li> replace(link) : 현재위치를 이동 (뒤로가기버튼 사용할 수 없음)

<br/>

---
# navigator 객체

<li> appCodeName : 브라우저의 코드 이름
<li> appName : 브라우저의 이름
<li> appVersion : 브라우저의 버전
<li> platform : 사용중인 운영체제의 시스템 환경
<li> userAgent : 웹 브라우저의 전체 정보

