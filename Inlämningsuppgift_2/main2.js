
// G-nivå
    /*  let uncompressed = JSON.parse(localStorage.getItem("choosenProduct"));
     console.log(uncompressed.description);
     //document.getElementById("product").innerHTML = uncompressed.description;
     document.getElementById("1").style.visibility="hidden";
 */
/*     output = 
    "<hr> <h4>" + uncompressed.title + "</h3><br>" 
    + uncompressed.description + "<br>"
    + "<img src=" + uncompressed.image + " width=\"300\"> <br>"
    + uncompressed.price + "<br>";
    document.getElementById("product").innerHTML = output;
 */
  
   // document.getElementById("product").innerHTML=choosenProduct;


//VG-nivå

//1. ladda ner alla produkter.
//1.5 Ladda ner arrayen med valda produkter. 
//2. Ladda upp info om valda produkter. 

let products = JSON.parse(localStorage.getItem("jsondata"));
 // console.log(products);
let arrayBoughtProducts = JSON.parse(localStorage.getItem("basket"));
//console.log(arrayBoughtProducts[1])
for (let index = 0; index < arrayBoughtProducts.length; index++) {
    console.log(arrayBoughtProducts[index])
  }

  //document.getElementById("row").style.visibility="hidden";

    
    let output = "";
    for (let index = 0; index < arrayBoughtProducts.length; index++) {
        let theproduct = arrayBoughtProducts[index];
        output = 
        "<hr> <h6>" + products[theproduct].title + "</h6><br>" 
        //+ products[theproduct].description + "<br>"
        //+ "<img src=" + products[theproduct].image + " width=\"300\"> <br>"
        + products[theproduct].price + " euro <br>"
        + "Antal:";

       // document.getElementById(index).style.visibility="visible";
        document.getElementById(index).insertAdjacentHTML('afterbegin', output);
}



if (arrayBoughtProducts.length == 1){
    document.getElementById("button2").style.display="none";
    document.getElementById("button3").style.display="none";
    document.getElementById("button4").style.display="none";
    document.getElementById("button5").style.display="none";
    document.getElementById("button6").style.display="none";
}

else if (arrayBoughtProducts.length == 2){
    document.getElementById("button3").style.display="none";
    document.getElementById("button4").style.display="none";
    document.getElementById("button5").style.display="none";
    document.getElementById("button6").style.display="none";
}

else if (arrayBoughtProducts.length == 3){
    document.getElementById("button4").style.display="none";
    document.getElementById("button5").style.display="none";
    document.getElementById("button6").style.display="none";
}

else if (arrayBoughtProducts.length == 4){
    document.getElementById("button5").style.display="none";
    document.getElementById("button6").style.display="none";
}

else if (arrayBoughtProducts.length == 5){
    document.getElementById("button6").style.display="none";
}





    localStorage.clear();




function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert ("Name must be filled out");
        return false;
    }

    var x = document.forms["myForm"]["telephone"].value;
    if (x == "") {
        alert ("Telephone number must be filled out");
        return false;
    }

    var x = document.forms["myForm"]["email"].value;
    if (x == "") {
        alert ("Email address must be filled out");
        return false;
    }

    var x = document.forms["myForm"]["street"].value;
    if (x == "") {
        alert ("Street address must be filled out");
        return false;
    }

    var x = document.forms["myForm"]["city"].value;
    if (x == "") {
        alert ("Postal code and city must be filled out");
        return false;
    }
}
