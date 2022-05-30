//number

let num1 = 10;
let num2 = 10.2;
let num3 = 1e+3; //지수(e) 10의 세제곱
console.log(num1 + "," + num2 + "," + num3);

//string
var str1 = '문자';
var str2 = "문자는 '문자'";
var str3 = '문자는 "문자"';
var str4 = 'you\'re too smart..';
console.log(str1 + "," + str1 + "," +
                str3 + ',' + str4);
//boolean
var com1 = (5 > 4);
var com2 = (5 < 4);
console.log(com1 + ',' + com2);

//underfined
var storage;
console.log(storage);

//null
var gnb = document.getElementById('gnb');
console.log(gnb);

//typeof
var type1 = 10;
var type2 = '문자';
var type3 = true;
console.log(typeof type1 + ',' + typeof type2 + ',' +
                typeof type3);
