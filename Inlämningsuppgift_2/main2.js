

    let choosenProduct = localStorage.getItem("product");
    document.getElementById("product").innerHTML=choosenProduct;
    localStorage.clear();

 console.log(localStorage.getItem("myPrice"))
console.log(localStorage.getItem("product"))


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

body