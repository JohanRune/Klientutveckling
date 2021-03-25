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

      function render(users) {
        console.log(users);

        let compressed = JSON.stringify(users);
        localStorage.setItem("jsondata", compressed);

       // let uncompressed = JSON.parse(localStorage.getItem("jsondata"));
        //console.log(uncompressed);
    

        let output = "";
        for (let index = 1; index < 13; index++) {
            output = 
            "<hr> <h4>" + users[index].title + "</h3><br>" 
            + users[index].description + "<br>"
            + "<img src=" + users[index].image + " width=\"300\"> <br>"
            + users[index].price + " euro <br>";
            document.getElementById(index).insertAdjacentHTML('afterbegin', output);
             
    
        }

      }


      function goToCart(){
        
        localStorage.setItem("basket", JSON.stringify(basket));
        
        const win = window.open("basket.html", '_blank');

      }

      var basket = [];

     

function saveToBasket1(e){ 
  
  products = JSON.parse(localStorage.getItem("jsondata"));
  

  basket.push("0");
  for (let index = 0; index < basket.length; index++) {
    console.log(basket[index])
  }


//localStorage.setItem("basket", basket)


let compressed = JSON.stringify(products[0]); //ändra siffran till vilken knapp som har använts.
  localStorage.setItem("choosenProduct", compressed);


//G-nivå
/*   users = JSON.parse(localStorage.getItem("jsondata"));
  let compressed = JSON.stringify(users[0]); //ändra siffran till vilken knapp som har använts.
  localStorage.setItem("choosenProduct", compressed);
  console.log(compressed)
 */
 // const win = window.open("basket.html", '_blank');
  //win.focus();
  e.preventDefault();
}


function saveToBasket2(e){ //sätt siffra efter utifrån vilken knapp som tryckts. 
  basket.push("1");
  e.preventDefault();
}
//localStorage.setItem("basket", basket)


//let compressed = JSON.stringify(products[1]); //ändra siffran till vilken knapp som har använts.
 // localStorage.setItem("choosenProduct", compressed);


//G-nivå
/*   users = JSON.parse(localStorage.getItem("jsondata"));
  let compressed = JSON.stringify(users[0]); //ändra siffran till vilken knapp som har använts.
  localStorage.setItem("choosenProduct", compressed);
  console.log(compressed)
 */
 // const win = window.open("basket.html", '_blank');
  //win.focus();
  
  function saveToBasket3(e){ //sätt siffra efter utifrån vilken knapp som tryckts. 
    basket.push("2");
    e.preventDefault();
  }

  function saveToBasket4(e){ //sätt siffra efter utifrån vilken knapp som tryckts. 
    basket.push("3");
    e.preventDefault();
  }

  function saveToBasket5(e){ //sätt siffra efter utifrån vilken knapp som tryckts. 
    basket.push("4");
    e.preventDefault();
  }

  function saveToBasket6(e){ //sätt siffra efter utifrån vilken knapp som tryckts. 
    basket.push("5");
    e.preventDefault();
  }

  function saveToBasket7(e){ //sätt siffra efter utifrån vilken knapp som tryckts. 
    basket.push("6");
    e.preventDefault();
  }

  function saveToBasket8(e){ //sätt siffra efter utifrån vilken knapp som tryckts. 
    basket.push("7");
    e.preventDefault();
  }

  function saveToBasket9(e){ //sätt siffra efter utifrån vilken knapp som tryckts. 
    basket.push("8");
    e.preventDefault();
  }

  function saveToBasket10(e){ //sätt siffra efter utifrån vilken knapp som tryckts. 
    basket.push("9");
    e.preventDefault();
  }

  function saveToBasket11(e){ //sätt siffra efter utifrån vilken knapp som tryckts. 
    basket.push("10");
    e.preventDefault();
  }

  function saveToBasket12(e){ //sätt siffra efter utifrån vilken knapp som tryckts. 
    basket.push("11");
    e.preventDefault();
  }