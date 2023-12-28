import ProductService from "../service/productService.js"

$(document).ready(function(){
    $(document).on('click', '.delete_product',function(){
        let id = $(this).attr("productId");
        console.log(id);
        $(".card_container").hide();
        ProductService.deleteProductDetails(id)
        .then(response=>{
            window.location.href="C:\\Users\\saadkhanp\\Desktop\\session-4\\HTML\\product_card.html";
        })
        .catch(error=>{
            window.location.href="C:\\Users\\saadkhanp\\Desktop\\session-4\\HTML\\product_card.html";
        })
    })
})