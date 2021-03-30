
let products = JSON.parse(localStorage.getItem("jsondata"));
let arrayBoughtProducts = JSON.parse(localStorage.getItem("basket"));

for (let index = 0; index < arrayBoughtProducts.length; index++) {
    console.log(arrayBoughtProducts[index])
  }

    
let output = "";
for (let index = 0; index < arrayBoughtProducts.length; index++) {
    let theproduct = arrayBoughtProducts[index]; //valda produkter plockas fram ur arrayen
    output = 
    "<hr> <h6>" + products[theproduct].title + "</h6><br>" 
    + products[theproduct].price + " euro <br>"
    + "Antal: <br>"

    document.getElementById(index).insertAdjacentHTML('afterbegin', output);
}


if (arrayBoughtProducts.length == 1){
    document.getElementById("button1").style.display="none";
    document.getElementById("button2").style.display="none";
    document.getElementById("button3").style.display="none";
    document.getElementById("button4").style.display="none";
    document.getElementById("button5").style.display="none";
    document.getElementById("button6").style.display="none";
    document.getElementById("button7").style.display="none";
    document.getElementById("button8").style.display="none";
    document.getElementById("button9").style.display="none";
}

else if (arrayBoughtProducts.length == 2){
    document.getElementById("button2").style.display="none";
    document.getElementById("button3").style.display="none";
    document.getElementById("button4").style.display="none";
    document.getElementById("button5").style.display="none";
    document.getElementById("button6").style.display="none";
    document.getElementById("button7").style.display="none";
    document.getElementById("button8").style.display="none";
    document.getElementById("button9").style.display="none";
}

else if (arrayBoughtProducts.length == 3){
    document.getElementById("button3").style.display="none";
    document.getElementById("button4").style.display="none";
    document.getElementById("button5").style.display="none";
    document.getElementById("button6").style.display="none";
    document.getElementById("button7").style.display="none";
    document.getElementById("button8").style.display="none";
    document.getElementById("button9").style.display="none";
}

else if (arrayBoughtProducts.length == 4){
    document.getElementById("button4").style.display="none";
    document.getElementById("button5").style.display="none";
    document.getElementById("button6").style.display="none";
    document.getElementById("button7").style.display="none";
    document.getElementById("button8").style.display="none";
    document.getElementById("button9").style.display="none";
}

else if (arrayBoughtProducts.length == 5){
    document.getElementById("button5").style.display="none";
    document.getElementById("button6").style.display="none";
    document.getElementById("button7").style.display="none";
    document.getElementById("button8").style.display="none";
    document.getElementById("button9").style.display="none";
}

else if (arrayBoughtProducts.length == 6){
    document.getElementById("button6").style.display="none";
    document.getElementById("button7").style.display="none";
    document.getElementById("button8").style.display="none";
    document.getElementById("button9").style.display="none";
}

else if (arrayBoughtProducts.length == 7){
    document.getElementById("button7").style.display="none";
    document.getElementById("button8").style.display="none";
    document.getElementById("button9").style.display="none";
}

else if (arrayBoughtProducts.length == 8){
    document.getElementById("button8").style.display="none";
    document.getElementById("button9").style.display="none";
}

else if (arrayBoughtProducts.length == 9){
    document.getElementById("button9").style.display="none";
}

let totalPrice = 0;

totalPriceCalculation();

function totalPriceCalculation () {
    
    for (let index = 0; index < arrayBoughtProducts.length; index++) {
        let theproduct = arrayBoughtProducts[index];
        totalPrice += (document.getElementById(`button${index}`).value * products[theproduct].price);
        }
}

console.log(totalPrice);

let twoDecimals = 0;
twoDecimals = totalPrice.toFixed(2);

document.getElementById("totalPrice").innerHTML= twoDecimals;


document.getElementById("update").addEventListener("click", updateBasket);

function updateBasket(){
    totalPrice = 0;
    totalPriceCalculation();
    document.getElementById("totalPrice").innerHTML= totalPrice;
}



    localStorage.clear();


function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert ("Name must be filled out");
        return false;
    }

    if (!/^[a-zA-ZÅÄÖåäö\s]*$/g.test(x)){
        alert ("Letters only in name");
        return false;
    }
    

    var x = document.forms["myForm"]["telephone"].value;
    if (x == "") {
        alert ("Telephone number must be filled out");
        return false;
    }

    if(isNaN(x)){
        alert ("Only digits in telephone number");
        return false;
    }

    var x = document.forms["myForm"]["email"].value;
    if (x == "") {
        alert ("Email address must be filled out");
        return false;
    }
    if (!/^[a-zA-Z0-9ÅÄÖåäö.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9ÅÄÖåäö-]+(?:\.[a-zA-Z0-9ÅÄÖåäö-]+)*$/g.test(x)){
        alert ("Not a valid email address");
        return false;
    }

    var x = document.forms["myForm"]["street"].value;
    if (x == "") {
        alert ("Street address must be filled out");
        return false;
    }
    if (!/^[a-zA-Z0-9ÅÄÖåäö\s]*$/g.test(x)){
        alert ("Only letters and numbers in street address");
        return false;
    }

    var x = document.forms["myForm"]["city"].value;
    if (x == "") {
        alert ("Postal code and city must be filled out");
        return false;
    }
    if (!/^[a-zA-Z0-9ÅÄÖåäö\s]*$/g.test(x)){
        alert ("Only letters and numbers in postal number and city");
        return false;
    }

}



