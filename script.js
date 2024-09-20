const btn1 = document.querySelector("qstn1");
const btn2 = document.querySelector("qstn2");
const btn3 = document.querySelector("qstn3");
const btn4 = document.querySelector("qstn4");
const btn5 = document.querySelector("qstn5");
const btn6 = document.querySelector("qstn6");


btn1.addEventListener("click",destroy);
btn2.addEventListener("click",destroy);
btn3.addEventListener("click",destroy);
btn4.addEventListener("click",destroy);
btn5.addEventListener("click",destroy);
btn6.addEventListener("click",destroy);

function destroy()
{
    list.forEach(answer => {
        if(answer.lastElementChild.style.display=="block"&& answer.firstElementChild != this){
            answer.firstElementChild.lastElementChild.style.transform="transform(-50%) rotate(-45deg)";
            answer.lastElementChild.style.display="none";
        }
    });
    let element = this.nextElementSibiling;
    if(element.style.display=="none"){
        this.lastElementChild.style.transform="translate(-50%) rotate(45deg)";
        element.style.display="block";
    }else{
        this.lastElementChild.style.transform="translate(-50%) rotate(0deg)";
        element.style.display="none";
    }
}