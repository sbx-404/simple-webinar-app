const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const age = document.getElementById("age");
const job = document.getElementById("job");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
});

const sendDate = (sRate , count) => {
    if(sRate === count) {
        location.href = "popup.html"
    }
}

const successMsg = () => {
    let formElem = document.getElementsByClassName('input-control')
    let count = formElem.length - 1
    for(let i =0 ; i < formElem.length; i++){
        if (formElem[i].className === "input-control success"){
            let sRate = 0 + i;
            sendDate(sRate,count);
        }
        else{
            return false
        }
    }
}



const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};



const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const phoneValue = phone.value.trim();
  const ageValue = age.value.trim();
  const jobValue = job.value.trim();

  if (usernameValue === "") {
    setError(username, "Username is required");
  } else {
    setSuccess(username);
  }

  if (emailValue === "") {
    setError(email, "Email is required");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Provide a valid email address");
  } else {
    setSuccess(email);
  }

  if (phoneValue === "") {
    setError(phone, "phone number is required");
  } else if (phoneValue.length != 10) {
    setError(phone, "please enter 10 digit number");
  } else {
    setSuccess(phone);
  }

  if (phoneValue === "") {
    setError(phone, "phone number is required");
  } else if (phoneValue.length != 10) {
    setError(phone, "please enter 10 digit number");
  } else {
    setSuccess(phone);
  }

  if (ageValue === "") {
    setError(age, "Enter your age");
  } else if (Number(ageValue) < 18) {
    setError(age, "You are not allowed");
  } else if (Number(ageValue) > 50) {
    setError(age, "age excceded");
  } else {
    setSuccess(age);
  }

  if (jobValue === "") {
    setError(job, "Please enter your current job");
  } else {
    setSuccess(job);
  }

  successMsg()
};
