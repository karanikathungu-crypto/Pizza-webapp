//user logic
const submitButton=document.getElementById("pizzaForm");
submitButton.addEventListener('submit',onsubmit);
function onsubmit(e){
  e.preventDefault();
//business logic
function Pizza(type,size,crust,topping,quantity){
  this.pizzaType= type;
  this.pizzaSize= size;
  this.pizzaCrust= crust;
  this.pizzaTopping= topping;
  this.pizzaQuantity= quantity;
}
let pizzaType=document.getElementsByClassName("form-check-input").value;
let pizzaSize= document.getElementsByClassName("size").value;
let pizzaCrust= document.getElementsByClassName("crust").value;
let pizzaTopping= document.getElementsByClassName("topping").value;
let pizzaQuantity= parseInt(document.getElementById("pizza-numbers").value);
let pizzaDelivery=document.getElementsByClassName("delivery").value;


var clientPizza= new Pizza(pizzaType,pizzaSize,pizzaCrust,pizzaTopping,pizzaQuantity,pizzaDelivery);

Pizza.prototype.displayPrice= function(){
  if(Radio1.checked===true && Radio4.checked===true && Radio7.checked===true){
    alert("The price of the crispy crust is ksh80 and tomato topping will be 100 ,the total price of the pizza will be ksh 500");
  }
  else if(Radio1.checked===true && Radio4.checked===true && Radio8.checked===true){
    alert("The price of the crispy crust is ksh80 and onion topping will be 100 ,the total price of the pizza will be ksh 500");
  }
  else if(Radio1.checked===true && Radio4.checked===true && Radio9.checked===true){
    alert("The price of the crispy crust is ksh80 and black olive topping will be 100 ,the total price of the pizza will be ksh 500");
  }
  else if(Radio1.checked===true){
    alert("The price of the pizza will be ksh 500")
  }
  else if(Radio2.checked===true){
    alert("The price 0f the pizza will be ksh 700");
  }
  else if(Radio3.checked===true){
    alert("The price of the pizza will be ksh 900");
  }
  else{
    alert("Kindly select required options before submitting")
  }
 }
 alert(clientPizza.displayPrice());
Pizza.prototype.displayLocation= function(){
  if(Radio16.checked===true){
    var location=prompt("Enter the location for delivery").value;
    alert("Your order will be delivered to"+location+".");
 }
  else if(Radio15.checked===true){
    alert("Your pizza will be ready for pickup in 20minutes");
  }
  else{
    alert("Your pizza will be ready to go after confirming pickup or delivery option");
  }
  // Radio16.checked===true? prompt("Enter the location for delivery"): alert("Your pizza will be ready for pickup in 20minutes");
  // alert("Your order will be delivered to your location");
}
alert(clientPizza.displayLocation());
}
