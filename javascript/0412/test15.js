// test15.js
// 날짜함수 연습
'use strict';

let str = '';

// 오늘날짜... Date()
const today = new Date();
const year = today.getFullYear();   // 연도 4자리
str += "오늘 연도는 : " + year + "<br/>";
const month = today.getMonth() + 1;
str += "오늘 월은 : " + month + "<br/>";
const date = today.getDate(); //날짜(일)
str += "오늘 일은 : " + date + "<br/>";
const hour = today.getHours();
str += "현재 시간은 : " + hour + "<br/>";
const minute = today.getMinutes();
str += "현재 분은 : " + minute + "<br/>";
const second = today.getSeconds();
str += "현재 초는 : " + second + "<br/>";
const yymmdd = year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;
str += "오늘 날짜와 시간 : " + yymmdd + "<hr/>";

// let weekStr = new Array();
let weekStr = ['일','월','화','수','목','금','토'];
let weekDay = today.getDay() // 요일 --java랑 다른것
// str += "오늘의 요일 : " + weekDay + "<br/>";
str += "오늘의 요일 : " + weekStr[weekDay] + "<br/>";


let lastDate = new Date(2024, 4, 0);
str += "이번달의 마지막 일자는? " + lastDate.getDate() +"일";

function dateCheck() {
  let yy = document.getElementById("yy").value;
  let mm = document.getElementById("mm").value;
  let strDate = new Date(yy, mm, 0);
  demo.innerHTML =  `${yy}년 ${mm}월의 마지막 일자는 : <font size='4' color='red'><b> ${strDate.getDate()} </b></font>`;
}


// demo.innerHTML = "<font size='4' color='red'><b>" + str + "</b></font>";