import ProductService from "../service/productService.js"
import Product from "../model/Product.js"

$(document).ready(()=>{
    let params = new URLSearchParams(window.location.search)

    let id = params.get("pid")
    $(".info").text(id)
    let image = null
    ProductService.getProductdDetailsById(id).then((response) => {
        console.log(response);
        $(".info").text(response._price)
        $('#productName').val(response._productName)
        $('#productId').val(response.id)
        $('#brandName').val(response._brandName)
        $('#price').val(response._price)
        $('#productDescription').val(response._productDescription)
       image = response._productImage
        $('.pimg').html(`<img src='${response._productImage.replace('C:\\fakepath\\','../images/')}' height='70px' width='70px' alt='image'>`)

    }).catch((error)=>{
        console.log(error);
    })


    $(document).on('click', '#updateProduct', function(){
    console.log('Update processed');

    let name = $("#productName").val()
    let brand = $("#brandName").val()
    let price = $("#price").val()
    let desc = $("#productDescription").val()
    let img = $("#image").val()
    let product = new Product();
    product.productName = name;
    product.brandName = brand;
    product.price = price
    product.productDescription = desc;
    if(img == null || img == ""  || img == undefined)
    {
        product.productImage=img
    }
    else{
        product.productImage=productImage;
    }

    ProductService.updateProduct(id, product).then(response => {
        window.location.href = "../../HTML/product_card.html"
    }).catch((error)=>{
        console.log(error);
    })

    })
})