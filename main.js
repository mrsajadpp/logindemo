const firstName = document.querySelector("#FirstName");
const lastName = document.querySelector("#LastName");
const email = document.querySelector("#Email");
const password = document.querySelector("#Password");
const loginButton = document.querySelector("#loginButton");
const text = document.querySelector("#loginText");
const first = document.querySelector("#firstName");
const last = document.querySelector("#lastName");
const mailc = document.querySelector("#mail");
const photo = document.querySelector("#Photo");
const dp = document.querySelector("#Prof");
//Login start
function login() {
  if (firstName.value) {
    localStorage.setItem("First Name",firstName.value);
    text.innerText = "Welcome " + firstName.value;
    first.innerText = firstName.value;
  };
  if(lastName.value){
    localStorage.setItem("Last Name",lastName.value);
    last.innerText = lastName.value;
  };
  if(email.value){
    localStorage.setItem("Email",email.value);
    mailc.innerText = email.value;
  };
  if(password.value){
    localStorage.setItem("Password",password.value);
  };
    if(dp.value){
    localStorage.setItem("Picture",dp.value);
    photo.src = dp.value;
    console.log(localStorage.getItem("Picture"));
    location.reload();
  };
  console.log("User " + firstName.value + " Logged");
  //location.reload();
};
//Login end
if (localStorage.getItem("First Name")) {
    text.innerText = "Welcome " +  localStorage.getItem("First Name");
    first.innerText = localStorage.getItem("First Name");
    
}else{
  text.innerText = "Please login"
};

if (localStorage.getItem("Last Name")) {
    last.innerText = localStorage.getItem("Last Name");
};
if (localStorage.getItem("Email")) {
    mailc.innerText = localStorage.getItem("Email");
};
if (localStorage.getItem("Picture")) {
    photo.src = localStorage.getItem("Picture");
    //console.log(localStorage.getItem("Picture"));
};
//Logout start
function logout(){
  localStorage.clear();
  location.reload();
};
//Logout end

