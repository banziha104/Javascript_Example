/*Example1*/
// var sum=0;
//
// for (var i = 0 ; i < 100 ; i ++){
//     sum+=i;
// }
//
// console.log(sum);

/*example2*/

// var arr = [52,273,103,32,56,103,31,2];
// var max = arr[0];
// var min = arr[0];
//
// for(var i in arr){
//     if(arr[i] > max) max = arr[i];
//     else if(arr[i] < min) min = arr[i];
// }
//
// console.log(min);
// console.log(max);
//
/*function*/
// var func = function (text) {
//     console.log(text + "익명 함수"); //익명함수를 나중에 읽음
// }
//
// function func(text) {
//     console.log(text + "선언적 함수"); //선언적 함수를 먼저읽고
// }
//
// func("This is"); // 선언->익명 순이기 때문에 마지막에 저장된 익명함수가 실행

// var sum = 0;
// function sumAll() {
//     for (var i in arguments){
//         sum +=arguments[i] //매개변수 배열
//     }
//     console.log(sum);
// }
// sumAll(1,2,3,4,5,6,7,8,9);

/*콜백 함수*/
// function callTenTimes(callback) {
//     for (var i = 0 ; i < 10 ;i ++){
//         callback();
//     }
// }
//
// var callback = function() {
//     console.log('호출')
// };
//
// callTenTimes(callback);

/*함수를 리턴하는 함수*/
// function returnFunction() {
//     return function () {
//         console.log("호출");
//     };
// }
//
// returnFunction();
//
// function test(name) {
//     var output = 'Hello' + name;
//     return function() {
//         alert(output);
//     }
// }
//
// test("Lee Young Joon");

/*짧은 조건문*/

//
// function test(a,b,c) {
//     b = b || 52;
//     c = c || 273;
//
//     console.log(a + "/" + b + "/" + c)
// }
//
// test(1,2);

function test(a,b,c) {
    console.log(a);
    console.log(a * b);
    console.log(a * b * c);
}

test(1,10);