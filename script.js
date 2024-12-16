
const cardholder = document.getElementById("cardholder-name");
const cardNumber = document.getElementById("card-number");
const expiry = Array.from(document.querySelectorAll(".expiry"));
const cvc = document.getElementById("cvc");
const submit = document.getElementById("submit");
const nameOnCard = document.querySelector(".cardholder-display");
const numOnCard = document.querySelector(".card-number-display");
const expMM = document.querySelector(".expiry-month-display");
const expYY = document.querySelector(".expiry-year-display");
const ccDisplay = document.querySelector(".cvc-display");
const thankYou = document.getElementById("thank-you-header");
const thankYouSection = document.getElementById("thank-you");
const continueBtn = document.getElementById("continue");
const form = document.getElementById("myForm");
const expiryErrorMsg = document.getElementById("expiry-error");




function inputCardNum(){
    let cardNumberIdnput= cardNumber.value;
    //dont allow users to write 
    let formattedCardNumber= cardNumberIdnput . replace (/[^\d]/g, "")
    formattedCardNumber= formattedCardNumber . substring(0,16);

    let cardNumberSections = formattedCardNumber.match (/\d{1,4}/g);
    if (cardNumberSections !==null){
        formattedCardNumber= cardNumberSections.join(" ");
    }
    if(cardNumberIdnput !== formattedCardNumber){
        cardNumber. value = formattedCardNumber;
    }

    numOnCard.innerHTML = cardNumber . value;
    if(cardNumber. value === ""){
        numOnCard.innerHTML= cardNumber.Placeholder;
    }
}



function inputMM(){
    let formattedMM= expiry[0]. value;
    formattedMM = formattedMM. substring(0,2);
    expiry[0].value= formattedMM;
    if(expiry[0]. value===""){
        expMM.innerHTML= expiry[0].value;
    }

}

function inputYY(){
    let formattedYY=expiry [1].value;
    formattedYY=formattedYY.substring(0,4);
    expiry[1].value = formattedYY;
    if (expiry[1] .value ===""){
        expYY.innerHTML=expiry[1]. value;
    }
}


function inputCvc() {
    let formattedCvc = cvc.value;
    formattedCvc = formattedCvc.substring(0, 3); 
    cvc.value = formattedCvc;

    if (cvc.value === "") {
        cvcDisplay.innerHTML = "000"; 
    } else {
        cvcDisplay.innerHTML = cvc.value;
    }
}

function massValidate() {
function validateName() {
    let cardholderExp = /^[A-Z a-z]+$/; 
    let errorMsg = document.getElementById("errorMsg");

    if (cardholder.value.match(cardholderExp)) {
        errorMsg.textContent = ""; 
    } else {
        errorMsg.innerHTML = "Please enter a valid cardholder name."; 
    }
}
function validateCard(){

    let cardNumError =document. getElementById("card-num-error");
    if(cardNumber.value.length> 0 && cardNumber . value.length<16){
        cardNumError.innerHTML="Wrong format!";
    }
    else if (cardNumber.value==" "){
        cardNumError.innerHTML = "can`t be blank";
    }
    else {
        cardNumError.innerHTML="";
    }
}
function validateExpiry() {
    let expMonth = /^(0[0-9]|1[1-2]){2}$/; 
    let expYear = /^[0-9] [0-2]{4}$/; 
    if (expiry[0].value.match(expMonth)) {
        expiryErrorMsg.innerHTML = ""; 
    } else if( expiry[0].value.match(expMonth) && 
               expiry[1].value.match(expYear) 
    ){
        expiryErrorMsg.innerHTML = ""; 
    } else if (expiry[0].value === "") {
        expiryErrorMsg.innerHTML = "Can't be blank!"; 
    } else {
        expiryErrorMsg.innerHTML = "Wrong format!"; 
    }
}
function validateCvc(){
let cvcErrorMsg =document.getElementById("error-cvc");
let cvcExp= /^[0-9]{3}&/;
if(cvc.value ===""){
    cvcErrorMsg.innerHTML="Cant be blank";
} else if (cvc.value.match (cvcExp)) {
    cvcErrorMsg.innerHTML="";
}else{
    cvcErrorMsg.innerHTML="Wrong format";

}

}

validateCard();
validateName();
validateExpiry();
validateCvc();
 if(
    
    nameOnCard.innerHTML== cardholder.Placeholder ||
    numOnCard.innerHTML== cardNumber.Placeholder||
    expMM.innerHTML== "00"||
    expYY.innerHTML=="0000"||
    cvcDisplay.innerHTML=="000"||
    (cardNumber.value.length> 0 && cardNumber.value.length<16)
    
    ){
        return false;

    }else{
        return true;
    }
    





 }

submit.addEventListener("click",function(){
    massValidate();
    if(massValidate()==false){
        event.preventDefault();
    } else {
        event.preventDefault();
        form.classList.add("hidden");
        thankYouSection.classList.remove("hidden");
    }
}

);

continueBtn.addEventListener("click", function (event) {
    event.preventDefault(); 

    thankYouSection.classList.add("hidden");
    form.classList.remove("hidden");

    nameOnCard.innerHTML = cardholder.placeholder;
    numOnCard.innerHTML = cardNumber.placeholder;
    expMM.innerHTML = "00";
    expYY.innerHTML = "0000";
    cvcDisplay.innerHTML = "000";

    cardholder.value = "";
    cardNumber.value = "";
    expiry[0].value = "";
    expiry[1].value = "";
    cvc.value = "";

    expiryErrorMsg.innerHTML="*";
});//