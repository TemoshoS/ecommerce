
document.getElementById("name").innerHTML = "<b>SNEAKER COMPANY</b>";


document.getElementById("nameedition").innerHTML = "<b>Fall Limited Edition Sneakers</b>";

document.getElementById("description").innerHTML = "These low-profile sneakers are your perfect casual wear companion.Featuring a durable rubber outer sole, they’ll withstand everything theweather can offer.";


document.getElementById("discount").innerHTML ="<s><b>$250.00</b></s>";
document.getElementById("desc").innerHTML ="These low-profile sneakers are your perfect <br>casual wear companion.Featuring a durable <br> rubber outer sole, they’ll withstand everything <br> theweather can offer.";
document.getElementById("").innerHTML ="";
//Increasing product
function incrementValue()
{
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    if(value<10){
        value++;
            document.getElementById('number').value = value;
    }
}

//Decreasing product
function decrementValue()
{
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    if(value>1){
        value--;
            document.getElementById('number').value = value;
    }

}

//hiding shopping cart
function myFunction() {

  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

//side bar
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

