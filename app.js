const dob = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#check");

checkButton.addEventListener('click',function getValues(){
    console.log(dob.value,luckyNumber.value);
})