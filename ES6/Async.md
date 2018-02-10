# 비동기적 프로그래밍

- 오류 우선 콜백 :

```javascript
errorFirstCallback(fname, (err,data) => {
    if(err) return console.error(`error`) // err을 체크하여 에러인지 확인
    else{
        
    }
});

```

- 프라미스 : 프라미스 기반 비동기적 함수를 호출하면, Promise 인스턴스를 반환하며 fulfilled 또는 rejected를 반환, 반환하면 settled라고 함

- 프라미스 만들기 : resolve(성공)과 reject 콜백이 있는 함수로만 만들면 됌
- 프라미스 사용

```javascript
/*프라미스를 만듬*/
function countdown(seconds) {
  return new Promise(function(resolve,reject) {
    for(let i=seconds; i>=0 ; i--) {
        setTimeout(function() {
          if(i>0) console.log(`${i} ...`)
          else resolve(console.log("GO!"))
        },(seconds-i)*1000)
    }
  })
}
countdown(5).then(
    function() {
        console.log("successfully");
    },
    function(err) {
        console.log(`error : ${err.message}`)
    }
);

```



