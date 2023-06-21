//document.addEventListener('onclick', validation(), false)

const ck = document.querySelector('#id-newletter');
const email = document.querySelector('#id-email');
const btn = document.querySelector('#id-submit');

ck.addEventListener('click',validation);
email.addEventListener('click',validation);//'onmouseenter'


function validation(){

    console.log(ck);
    if (ck.checked){
        console.log("Valeur Email :"+ email.id);
        const emailValid = document.querySelector('#id-email').validity.valid
        if(emailValid){
            btn.disabled = false;
        }
        else {
            console.log("Email Valide ?" + emailValid);
        }
    }
    else {
        console.log("Case cochée ?" + ck.checked);
    }
}