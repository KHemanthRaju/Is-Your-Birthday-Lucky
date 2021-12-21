const dob = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#check");
const output = document.querySelector("#output-box");

checkButton.addEventListener('click',function getValues(){
    const dateOfBirth = dob.value;
    const dob2 = dateOfBirth.replaceAll("-","");
    let sum = sumBirthDate(dob2);
    checkBirthDate(sum,luckyNumber.value);
});

function checkBirthDate(sum,luckyNumber){
    if(sum%luckyNumber == 0){
        output.innerText = "Your Birthday is lucky 🚀";
    }else{
        output.innerText = "Your Birthday is not lucky 😞";
    }
}

function sumBirthDate(dob2){
    let sum = 0;
    for(let i=0;i<dob2.length;i++){
        sum += Number(dob2.charAt(i));
    }
    return sum;
}