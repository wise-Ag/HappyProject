// 해피 나이 자동 카운트
const age = document.querySelector('.age');
let happyBirth = new Date('2012-12-25');
let nowDate = new Date();
let happyAge = Math.floor((nowDate-happyBirth)/(60*60*24*365*1000));
age.textContent = `나이 : 만 ${happyAge}세`

//해피와 함께한 날 자동 카운트
let happyDays = document.querySelector('.card__baby-happy__title');
let withHappy = new Date('2013-3-10');
happyDays.textContent=`해피와 함께한지 ${Math.floor((nowDate-withHappy)/(60*60*24*1000))}일째`;
