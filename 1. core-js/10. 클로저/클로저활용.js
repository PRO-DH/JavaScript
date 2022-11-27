
// //카운팅
// let num = 0; // 카운트 상태변수

// //카운트 상태변경 함수
// const increase = function(){
//     return ++num;
// };

// console.log(increase());
// console.log(increase());
// num = 99;
// console.log(increase());

// //num이 전역변수여서 increase함수 이외에도 num의 상태값을 변경시킬 가능성이 존재한다.



// const increase = function(){
//     let num = 0;
//     return ++num;
// };

// console.log(increase());
// console.log(increase());
// console.log(increase());
// // num이 지역변수여서 함수 호출 시 재초기화되는 문제가 존재한다.


const increaseClosure = (function(){

    let num = 0;    //상태변수
    
    return function(){
    
        return ++num;
    
    };
}());
// return 할 값을 새로운 함수로 호출한 다음, 즉시실행 함수로 호출한다.

console.log(increaseClosure());
console.log(increaseClosure());
console.log(increaseClosure());
console.log(increaseClosure());



//강사님 코딩설명파일
//==================================

// const increaseClosure = function() {

//     let num = 0; // 상태 변수

//     return function() {
//         return ++num;
//     };
// };

// const increase = increaseClosure();


const increase = (function() {

    let num = 0; // 상태 변수

    return function() {
        return ++num;
    };
}());

console.log(increase());
console.log(increase());
console.log(increase());
console.log(increase());

// const another = function() {
//     return ++num;
// }

// another();




const increase2 = (() =>{
    let num = 0;
    return () => ++num
})();