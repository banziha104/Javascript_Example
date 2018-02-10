# try catch finally 예외 처리


```javascript

try {
    node.addEventListener(event,listener, false); //최신 버전의 웹브라우저
}catch (exception){
    node.attachEvent('on'+event,listener); //구 버전의 인터넷 익스플로러
}
```

# 예외 객체

<li> message : 예외 메세지
<li> description : 예외 설명
<li> name : 예외 이름

# 강제로 예외 발생시키기

```javascript
try{
    throw 'DivideByZeroException'
}catch(exception){
    
}
```