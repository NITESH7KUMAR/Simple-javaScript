//////////////Login Js

let user={};


function signUp(){
  const name=document.getElementById('signup-name').value;
  const email=document.getElementById('signup-email').value;
  const password=document.getElementById('signup-password').value;

  if(!name || !email || !password){
    alert("Please fill in all fields");
    return;
  }

  user={name,email,password};
  alert("Sign-up successful! Now Login");
  console.log("User Signed Up:",user);
}

function logIn(){

  const email=document.getElementById('login-email').value;
  const password=document.getElementById('login-password').value;

  if(email==user.email && password==user.password){
    document.getElementById('user-info').textContent=`Welcome, ${user.name}!`;
    console.log("Login successful: ", user);
  }
  else{
    alert("Invalid email or password");
  }

}

function goHome(){
  window.location.href="index.html";
}