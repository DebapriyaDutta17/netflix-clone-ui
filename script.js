const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion) => {
  accordion.addEventListener("click", () => {

    accordion.classList.toggle("active");

    const panel = accordion.nextElementSibling;

    if(panel.style.maxHeight){
      panel.style.maxHeight = null;
    }
    else{
      panel.style.maxHeight =
      panel.scrollHeight + "px";
    }

  });
});

// Email Validation

const emailBtn =
document.querySelector(".email-box button");

if(emailBtn){

emailBtn.addEventListener("click", () => {

const email =
document.querySelector(".email-box input").value;

if(email.trim() === ""){

alert("Please enter your email address.");

}
else{

alert("Welcome to Netflix!");

}

});

}
