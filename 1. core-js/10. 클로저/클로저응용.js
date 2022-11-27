// const increase = (() =>{
//     let num = 0;
//     return () => ++num
// })();


// const decrease = (() =>{
//     let num = 0;
//     return () => --num
// })();

// console.log(increase());
// console.log(increase());
// console.log(decrease());
// console.log(decrease());
// console.log(increase());
// // 이렇게 되면 num 이 increase 와 decrease에서 각각 다르게 돌아서 계산결과가 따로 나온다.



// const counting = function(){
//     let num = 0;
//     return {
//         increase: function(){
//             return ++num;
//         },
//         decrease: function(){
//             return --num;
//         }
//     };
// };
// console.log(counting.increase());
// console.log(counting.increase());
// console.log(counting.decrease());
// console.log(counting.decrease());
// console.log(counting.increase());
// // 이렇게 짜면 호출을 한번 해줘야한다.


// const c = (function() {
//     let num = 0;

//     return {
//         increase: function() {
//             return ++num;
//         },
//         decrease: function() {
//             return --num;
//         }
//     };
// })();

// console.log(c.increase());
// console.log(c.increase());
// console.log(c.increase());
// console.log(c.decrease());
// console.log(c.decrease());
// console.log(c.increase()); 
// 여기서 return안쪽도 더 줄여보기


// const c = (function() {
//     let num = 0;

//     return {
//         increase: () => ++num,
//         decrease: () => --num
//     };
// })();

// console.log(c.increase());
// console.log(c.increase());
// console.log(c.increase());
// console.log(c.decrease());
// console.log(c.decrease());
// console.log(c.increase()); // 2



// console.log('=============콜백클로저===============')

// const counter1 = (() => {
//     let num = 0;
//     return(callback) => {
//         return num=callback(num);
//     };
// })();
// console.log(counter(n => n+=2));
// console.log(counter(n => n**3));



// // 콜백을 이용한 클로저
// function abc() {
//     let num = 0;

//     function def(callback) {
//         num = callback(num);
//         return num;
//     }
//     return def;
// };

// const counter = abc;

// const co = counter();

// function triple(m) {
//     return m += 3;
// }

// let n = co(triple);
// n = co(triple);
// n = co(triple);
// n = co(triple);
// n = co(triple);

// console.log(`n: ${n}`);

//==============================================

const counter = () => {

    let num = 0;

    return (callback) => {
        return num = callback(num);
    };
};

const increase = counter(n => ++n);
const decrease = counter(n => --n);