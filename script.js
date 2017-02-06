var name = window.prompt('what is your name?');
if(name.length > 15){
  alert("Whoa! that is a long name!");
  var nameOption = window.confirm('Can i call you '+name.substring(0,1).trim().toUpperCase()+' for short?');
  if(nameOption){
    name = name.substring(0,1).trim().toUpperCase();
  }
}

var option = ""
while(option != "left" || option != "right"){
  option = window.prompt(name+"!!! There is a car comming at us! should we go right or left???");
  option = option.trim().toLowerCase();
  if(option === "left"){
    alert("you dove into a another car and died :(");
    exit();
  }
  else if(option === 'right'){
    break;
  }
  else{
    alert(name+"? That is not an option");
  }
}

option = "";
while(option != "left" || option != "right"){
  option = window.prompt("you dodged the car, but there is another car comming!!! right or left?");
  option = option.trim().toLowerCase();
  if(option == "right"){
   alert("you dove into a another car and died :(");
   break;
  }
  else if(option === "left"){
   alert("You dodged the car and survived. Congratz!!!");
   break;
  }
  else{
   alert(name+"? That is not an option");
 }
}
