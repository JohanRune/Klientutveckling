document.getElementById("button1").addEventListener("click", saveToBasket);


load();

      function load() {
        fetch("http://webacademy.se/fakestore/")
          .then((response) => response.json())
          .then((data) => render(data))
          .catch((error) => console.error(error));
      }

      function render(users) {
        console.log(users);
        let output = "";
        for (let index = 1; index < 13; index++) {
            output = 
            "<hr> <h4>" + users[index].title + "</h3><br>" 
            + users[index].description + "<br>"
            + "<img src=" + users[index].image + " width=\"300\"> <br>"
            + users[index].price + "br";
            document.getElementById(index).insertAdjacentHTML('afterbegin', output);
          
        }

//        users.forEach((user) => (output += user.title + "<br>"));
        
      }

     



/* const sko1 = {name: "Nike", price: "990 kr"};
const key = sko1.name;

let html = `<div> <p>hej ${key} </p>`;
html += `<p>hallå</p> </div>`;
html += `<a id="10" href="basket.html", target = "_blank">Köp ännu mer!!</a>`;
html += `<img class = "border" src="https://www.wigglestatic.com/product-media/104406555/Reebok-Women-s-Floatride-Panthea-Running-Shoe-Running-Shoes-black-white-pure-gre-SS20-EH28434.jpg?w=430&h=430&a=7" alt="CashMachine" width = "400">`

console.log(html);

document.getElementById("product1").insertAdjacentHTML('afterbegin', html); */
//document.getElementById("skoNamn").innerHTML= html;

//document.getElementById("skoPris").innerHTML= sko1.price;
// skapa ett objekt som tar info från index.html om aktuell sko och lägger in i objektet.

    


function saveToBasket(e){
    console.log("hejsan")
    //document.getElementById("choosenProduct").insertAdjacentHTML('afterbegin', "hej");
  //  document.getElementById("choosenProduct").innerHTML="hej";
    localStorage.setItem("product", html);
    const win = window.open("basket.html", '_blank');
    //win.focus();
    e.preventDefault();
}


    
   // localStorage.setItem("myName", sko1.name);
    localStorage.setItem("myPrice", 100);

   
    console.log(localStorage.getItem("myPrice"))