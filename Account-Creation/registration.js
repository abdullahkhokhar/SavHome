// Form Blur Event Listeners --> When we step away, blur occurs.
document.getElementById('name').addEventListener('blur', validateName);
// document.getElementById('InputEmail').addEventListener('blur', validateEmail);
document.getElementById('InputPassword').addEventListener('blur', validatePass);
document.getElementById('userName').addEventListener('blur', validateUsername);
// check for the submit button
document.getElementById('submitBtn').addEventListener('click', checkSubmit);

function validateUsername(){
  const username = document.getElementById('userName');
  const nameExpr = /^[a-zA-Z]{2,10}$/;

  if(!nameExpr.test(username.value)){
    username.classList.add('is-invalid');
  } else {
    username.classList.remove('is-invalid');
  }
}

function checkSubmit(e){
  e.preventDefault()
  const name = document.getElementById('name').value;
  const email = document.getElementById('InputEmail').value;
  const pass = document.getElementById('InputPassword').value;

  if(name == '' || email == '' || pass == ''){
    // GIVE AN ALERT
    const div = document.createElement('div');
    div.className = "alert error";
    div.appendChild(document.createTextNode('Please fill out all required fields!'));
    const container = document.querySelector('.container');
    const form = document.querySelector('.hello');

    container.insertBefore(div, form);
    setTimeout(function(){
      document.querySelector('.alert').remove();
    }, 5000);
  }
  else{
    // everything is filled out, go to next page depending on if manager or not
    // check if the radio button has been clicked
    var checkBox = document.getElementById("managerCheck");
    if(checkBox.checked == true){
      // go to employee page
      window.location.href = "./EmployeeReg.html";
    }
    else{
      // go to manager page
      window.location.href = "./managerReg.html";
    }
  }
}

function validateName() {
  const name = document.getElementById('name');
  const nameExpr = /^([a-zA-Z]{2,20} [a-zA-Z]{2,20})$/;

  if(!nameExpr.test(name.value)){
    name.classList.add('is-invalid');
  } else {
    name.classList.remove('is-invalid');
  }
}

// function validateEmail() {
//   const email = document.getElementById('InputEmail');
//   const emailExpr = /^([a-zA-Z0-9_\-\.]+)@savaria.com$/;    // need to include gmail
//
//   if(!emailExpr.test(email.value)){
//     email.classList.add('is-invalid');
//   } else {
//     email.classList.remove('is-invalid');
//   }
// }

function validatePass() {
  const pass = document.getElementById('InputPassword');
  const passExpr = /^[a-zA-Z\d]{2,10}$/;

  if(!passExpr.test(pass.value)){
    pass.classList.add('is-invalid');
  } else {
    pass.classList.remove('is-invalid');
  }
}
