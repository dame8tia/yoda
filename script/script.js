//document.addEventListener('onclick', validation(), false)

const ck = document.querySelector('#id-newletter');
const email = document.querySelector('#id-email');
const btn = document.querySelector('#id-submit');
// --------
const dotTous = document.querySelector('.section-dot');
const dot = document.querySelectorAll('.dot');
const citations = document.querySelectorAll('.citation')

ck.addEventListener('click',validation);
email.addEventListener('click',validation);//'onmouseenter'


// -------------- > Cadre Nous contacter
function validation() 
{
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

// -------------- > Citations

console.log(dot);
dot.forEach((element)=>{
    element.addEventListener('click', effetSlide);
});

function effetSlide(clickDot){ // clickDot est un objet click de l'évément AddEventListener - Possède un attribut target

    console.log("effect", clickDot); // 
    //console.log(dot, position);
    let btn = clickDot.target //clickDot.target : origine du click
    let indexCible =  clickDot.target.dataset.target;// pour récupérer l'attribut data-target qui contient id de la citation à faire apparaitre
    
    console.log(citations.length)

    for (let j = 0; j < citations.length; j++) {
        console.log(indexCible, j);
        //console.log(citations[j].id, citations[j].hidden);
        if (indexCible == j){
            citations[j].hidden = false;
            console.log("citation N°" + j + " à afficher.")
        }
        else {
            citations[j].hidden = true;
        }
      }

}