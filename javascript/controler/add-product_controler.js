import Product from "../model/Product.js";
import ProductService from "../service/productService.js";

$(document).ready(function () {
    $("#btn2").click(function () {
        let productName = $(".pname").val();
        let brandName = $(".bname").val();
        let price = $(".price").val();
        let productDescription = $(".des").val();
        let productImage = $(".file").val();
        let productAvailable = "";
        if ($("#IS").is(':checked')) {
            productAvailable = $("#IS").val();
        }
        else if ($("#OFS").is(':checked')) {
            productAvailable = $("#OFS").val();
        }

        let product = new Product();
        console.log(product);
        product.productName = productName;
        product.brandName = brandName;
        product.price = price;
        product.productDescription = productDescription;
        product.avilability = productAvailable;
        product.productImage = productImage;

        ProductService.addProductDetails(product)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error);
            })
    })

})