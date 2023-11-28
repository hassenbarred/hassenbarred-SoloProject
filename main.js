var product = [
    {
        id: 0,
        image: "img/p.png",
        title: "Playstation5",
        Price: 2500
    },
    
    {
        id: 1,
        image: "img/avatar.jpg",
        title: "Avatar",
        Price: 280
    },
    {
        id: 2,
        image: "img/codm3.jpg",
        title: "Call Of Duty MW3",
        Price: 300
    },
    {
        id: 3,
        image: "img/tekken8.jpg",
        title: "Tekken 8",
        Price: 250
    },
    {
        id: 4,
        image: "img/fcsport24.jpg",
        title: "FC Sport 24",
        Price: 320
    },
    {
        id: 5,
        image: "img/msp2.jpg",
        title: "Marvel Spider Man 2",
        Price: 310
    },
];

//  map and display the images title price in the Section left of Id root
var categories = [...new Set(product.map((item) => item))];

document.getElementById("root").innerHTML = categories.map((item, i) => {
    var { image, title, Price } = item; 
    return (
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
            <div class='bottom'>
                <p>${title}</p>
                <h2>${Price}.00 Dt</h2>`+
                "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
           ` </div>
        </div>`
    )
}).join('');
// add the categories images , price , title in the array
var cart=[];
function addtocart(a){
cart.push({...categories[a]})
displaycart()
}
// delete
function deleteElement(a){
    cart.splice(a,1)
    displaycart()
}
// display ; length of cart
function displaycart(a) {
    var j = 0
    var total=0
    document.getElementById("count").innerHTML=cart.length
   
// initial Start
    if (cart.length == 0) {
        document.getElementById("cartItem").innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML =0+".00"+"Dt";


    } else {
        // section of my cart and calculate the total
        document.getElementById("cartItem").innerHTML = cart.map((items) => {
            var { image, title, Price } = items;
            total+=Price;

                    document.getElementById("total").innerHTML = total+".00"+"Dt";


            return (
                `<div class='cart-item'>
                    <div class='row-img'>
                        <img class='rowimg' src=${image}>
                    </div>
                    <p style='font-size: 12px;'>${title}</p>
                    <h2 style='font-size: 15px;'>${Price}.00 Dt</h2>
                    <span class='material-symbols-outlined' onclick='deleteElement(${j++})'>
                        delete_forever
                    </span>
                </div>`
            );
        }).join('');
    }
}
