const submitButton=document.getElementById("pizzaForm");
submitButton.addEventListener('submit',onsubmit);
function onsubmit(e){
  e.preventDefault();
  alert("yahoo");

function Pizza(type,size,crust,topping,quantity){
  this.pizzaType= type;
  this.pizzaSize= size;
  this.pizzaCrust= crust;
  this.pizzaTopping= topping;
  this.pizzaQuanity= quantity;
}
let pizzaType=document.getElementsByClassName("form-check-input").value;
let pizzaSize= document.getElementsByClassName("size").value;
let pizzaCrust= document.getElementsByClassName("crust").value;
let pizzaTopping= document.getElementsByClassName("topping").value;
let pizzaQuanity= parseInt(document.getElementById("pizza-numbers").value);


var clientPizza= new Pizza(pizzaType,pizzaSize,pizzaCrust,pizzaTopping,pizzaQuanity);

Pizza.prototype.displayPrice= function(){
  if(Radio1.checked===true){
    alert("The price of the pizza will be ksh 500");
  }
  else if(Radio2.checked===true){
    alert("The price if the pizza will be ksh 700");
  }
  else if(Radio3.checked===true){
    alert("The price of the pizza will be ksh 900");
  }
  else{
    alert("Kindly select required options before submitting")
  }
 }
 alert(clientPizza.displayPrice());
}