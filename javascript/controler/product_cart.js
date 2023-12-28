import ProductService from "../service/productService.js"

$(document).ready(function(){
    // $(".")
    ProductService.getProductdDetails()
    .then((response)=>{
        let products = response.data;
        for(let prod of products){
            // let abc = `<div class="card_container"><div class="card-row" id="card-row"><div class="card1" id="card1"><image src='${prod._productImage.replace('C:\\fakepath\\','../images/')}' width="200px"><h1>${prod._productName}</h1>
            // <h3>${prod._brandName}</h3>
            // <strong><p>Price<span>${prod._price}</span></p></strong>
            // <strong><p>Availibilty Status<span>${prod._avilability}</span></p></strong>
            // <p>${prod._productDescription}</p></div></div></div>`;
            // $("#abc").append(abc);
            // console.log(prod._productImage);

            let abc = `<div class="card_container"><div class="card-row" id="card-row"><div class="card1 card" id="card1"><image src='${prod._productImage.replace('C:\\fakepath\\','../images/')}' width="200px"><h1>${prod._productName}</h1>
            <h3>${prod._brandName}</h3>
            <p><strong>Price</strong><span id="price">${prod._price}</span></p>
            <p><strong>Availibilty Status </strong><span>${prod._avilability}</span></p>
            <p>${prod._productDescription}</p><button class="delete_product btn btn-danger" productId='${prod.id}'>Delete</button><button productId='${prod.id}' class="updateButton btn btn-info">Update</button></div></div></div>`;
            $("#abc").append(abc);
            console.log(prod._productImage);

        }
    })
    .catch((error)=>{
        console.log(error);
    })
})