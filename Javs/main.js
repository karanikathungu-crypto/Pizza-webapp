
// const pizzaUserForm=document.querySelector("#pizzaForm");
const submitButton=document.getElementById("pizzaForm");
submitButton.addEventListener('submit',onsubmit);
function onsubmit(e){
  e.preventDefault();
  alert("yahoo");
let pizzaType=document.getElementsByClassName("form-check-input").value;
let pizzaSize= document.getElementsByClassName("size").value;
let pizzaCrust= document.getElementsByClassName("crust").value;
let pizzaTopping= document.getElementsByClassName("topping").value;
let pizzaQuanity= parseInt(document.getElementById("pizza-numbers").value);



function Pizza(type,size,crust,topping,quantity){
  this.pizzaType= type;
  this.pizzaSize= size;
  this.pizzaCrust= crust;
  this.pizzaTopping= topping;
  this.pizzaQuanity= quantity;
}
var Pizza= new Pizza();
}