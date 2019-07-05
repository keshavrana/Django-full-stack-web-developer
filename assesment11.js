var firstName=prompt("First name please! ")
var lastName=prompt("Last namr please!")
var age=prompt("how old are you?")
var height=prompt("what is your height? ")
var petName=prompt("what is your pet name? ")
alert("Thanku so much for the information ")



var namecond=null;
var agecond=null;
var heightcond=null;
var petcond=null;


if (firstName[0] === lastName[0]){
  namecond=true;
}else {
  namecond =false;
}

if (age > 20 && age < 30){
  agecond=true;
}else {
  agecond=false;
}

if (height>=170){
  heightcond=true;

}else {
  heightcond=false;
}

if (petName[petName.length-1] ==="y"){
  petcond = true;
}else{
  petcond=false;
}

if (namecond && agecond && heightcond && petcond){
  console.log("WElcome spy!");
}else{
  console.log('Nothing to see here');
  
}
