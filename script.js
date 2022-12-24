const claimbutton = document.querySelector(".btn-claim")
const warningfirstname = document.querySelector(".firstname")
const warninglastname = document.querySelector(".lastname")
const warningemail = document.querySelector(".wemail")
const warningpassword = document.querySelector(".wpassword")
const emailexample = document.querySelector(".emailexample")
let emailinput = document.getElementById("email");


claimbutton.addEventListener("click", () => {
    if(document.getElementById("firstn").value == "") {
        warningfirstname.classList.remove("hidden");
        document.getElementById("firstn").style.borderColor= "hsl(0, 100%, 74%)"; 
        document.getElementById("firstn").style.borderWidth= "2px";
        document.getElementById('firstnametext').style.display='none'
    }
    else{
        warningfirstname.classList.add("hidden");
        document.getElementById("firstn").style.borderColor= "hsl(246, 25%, 77%)"; 
        document.getElementById("firstn").style.borderWidth= "1px";
    }

    if(document.getElementById("lastn").value == "") {
        warninglastname.classList.remove("hidden");
        document.getElementById("lastn").style.borderColor= "hsl(0, 100%, 74%)"; 
        document.getElementById("lastn").style.borderWidth= "2px";
        document.getElementById('lastnametext').style.display='none';
    } 
    else{
        warninglastname.classList.add("hidden");
        document.getElementById("lastn").style.borderColor= "hsl(246, 25%, 77%)"; 
        document.getElementById("lastn").style.borderWidth= "1px";
    }

    if(document.getElementById("email").value == "") {
        warningemail.classList.remove("hidden");
        document.getElementById("email").style.borderColor= "hsl(0, 100%, 74%)"; 
        document.getElementById("email").style.borderWidth= "2px";
        document.getElementById('emailtext').style.display='none';
        emailexample.classList.remove("hidden");
    } 
    else{
        warningemail.classList.add("hidden");
        document.getElementById("email").style.borderColor= "hsl(246, 25%, 77%)"; 
        document.getElementById("email").style.borderWidth= "1px";
       
    }

    if(document.getElementById("pass").value == "") {
        warningpassword.classList.remove("hidden")
        document.getElementById("pass").style.borderColor= "hsl(0, 100%, 74%)"; 
        document.getElementById("pass").style.borderWidth= "2px";
        document.getElementById('pwd').style.display='none';
    } 
    else{
        warningpassword.classList.add("hidden")
        document.getElementById("pass").style.borderColor= "hsl(246, 25%, 77%)"; 
        document.getElementById("pass").style.borderWidth= "1px";
    }
})

emailinput.addEventListener('focus', ()=>{
    emailexample.classList.add("hidden");
})