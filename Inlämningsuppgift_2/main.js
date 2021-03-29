document.getElementById("button1").addEventListener("click", saveToBasket1);
document.getElementById("button2").addEventListener("click", saveToBasket2);
document.getElementById("button3").addEventListener("click", saveToBasket3);
document.getElementById("button4").addEventListener("click", saveToBasket4);
document.getElementById("button5").addEventListener("click", saveToBasket5);
document.getElementById("button6").addEventListener("click", saveToBasket6);
document.getElementById("button7").addEventListener("click", saveToBasket7);
document.getElementById("button8").addEventListener("click", saveToBasket8);
document.getElementById("button9").addEventListener("click", saveToBasket9);
document.getElementById("button10").addEventListener("click", saveToBasket10);
document.getElementById("button11").addEventListener("click", saveToBasket11);
document.getElementById("button12").addEventListener("click", saveToBasket12);

document.getElementById("toCart").addEventListener("click", goToCart);




load();

function load() {
  fetch("http://webacademy.se/fakestore/")
    .then((response) => response.json())
    .then((data) => render(data))
    .catch((error) => console.error(error));
}

function render(products) {
  console.log(products);

  let compressed = JSON.stringify(products);
  localStorage.setItem("jsondata", compressed);



  let output = "";
  for (let index = 0; index < 12; index++) {
      output = 
      "<hr> <h4>" + products[index].title + "</h3><br>" 
      + products[index].description + "<br>"
      + "<img src=" + products[index].image + " width=\"300\"> <br>"
      + products[index].price + " euro <br>";
      document.getElementById(index).insertAdjacentHTML('afterbegin', output);
        

  }

}


function goToCart(){
  
  localStorage.setItem("basket", JSON.stringify(basket));
  
  const win = window.open("basket.html", '_blank');

}

var basket = [];

     

function saveToBasket1(e){ 
  basket.push("0");
  e.preventDefault();
}

function saveToBasket2(e){ 
  basket.push("1");
  e.preventDefault();
}

function saveToBasket3(e){  
  basket.push("2");
  e.preventDefault();
}

function saveToBasket4(e){  
  basket.push("3");
  e.preventDefault();
}

function saveToBasket5(e){  
  basket.push("4");
  e.preventDefault();
}

function saveToBasket6(e){
  basket.push("5");
  e.preventDefault();
}

function saveToBasket7(e){ 
  basket.push("6");
  e.preventDefault();
}

function saveToBasket8(e){  
  basket.push("7");
  e.preventDefault();
}

function saveToBasket9(e){ 
  basket.push("8");
  e.preventDefault();
}

function saveToBasket10(e){ 
  basket.push("9");
  e.preventDefault();
}

function saveToBasket11(e){ 
  basket.push("10");
  e.preventDefault();
}

function saveToBasket12(e){
  basket.push("11");
  e.preventDefault();
}