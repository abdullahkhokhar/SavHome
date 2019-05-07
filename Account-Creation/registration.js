// Form Blur Event Listeners --> When we step away, blur occurs.
document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('InputEmail').addEventListener('blur', validateEmail);
document.getElementById('InputPassword').addEventListener('blur', validatePass);
// check for the submit button
document.getElementById('submitBtn').addEventListener('click', checkSubmit);

function validateName() {
  const name = document.getElementById('name');
  const nameExpr = /^[a-zA-Z]{2,10}$/;

  if(!nameExpr.test(name.value)){
    name.classList.add('is-invalid');
  } else {
    name.classList.remove('is-invalid');
  }
}

function validateEmail() {
  const email = document.getElementById('InputEmail');
  const emailExpr = /^([a-zA-Z0-9_\-\.]+)@savaria.com$/;    // need to include gmail

  if(!emailExpr.test(email.value)){
    email.classList.add('is-invalid');
  } else {
    email.classList.remove('is-invalid');
  }
}

function validatePass() {
  const name = document.getElementById('InputPassword');
  const passExpr = /^[a-zA-Z\d]{2,10}$/;

  if(!passExpr.test(name.value)){
    name.classList.add('is-invalid');
  } else {
    name.classList.remove('is-invalid');
  }
}
