/////  CSS with JavaScript
let body = document.getElementsByTagName('body')[0];
document.body.style.background = "linear-gradient(to  right, rgba(255, 50, 0, 0.2)30%, rgba(255, 255, 0, 0.2)80%)";
;

let navbarFunction=(e)=>{
let navbar=document.getElementById("navbar");
let ul=document.getElementById("content");

let navbarcss=`
background-color:lightgreen;
padding:10px;
text-align:center;
border-radius:20px
`;

let ulcss=`
list-style:none;
font-size:30px;
padding:0;
margin:2px;
display:flex;
justify-content:center;
gap:30px
`;

navbar.style.cssText=navbarcss;
ul.style.cssText=ulcss;

let liItems=ul.getElementsByTagName('li');

for(let items of liItems){

  let itemsCss=`
  cursor:pointer;
  transition:0.3s;
  padding:5px 20px;
  `;
  items.style.cssText=itemsCss;

  items.addEventListener("mouseover",()=>{
    items.style.color="blue";
    items.style.cssText=itemsCss+"background-color:red;border-radius:15px;padding:5px 20px;";
  });
  items.addEventListener("mouseout",()=>{
    items.style.cssText=itemsCss;
  });
}

}


function about(){
  window.location.href="about.html";
}
function project(){
  window.location.href="project.html";
}
function contact(){
  window.location.href="contact.html";
}

function logIn(){
  window.location.href="login.html"
}
navbarFunction();