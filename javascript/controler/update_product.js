
import ProductService from "../service/productService.js"


$(document).ready(function(){
    $(document).on('click','.updateButton', function() {
        let id = $(this).attr("productId");
        ProductService.getProductdDetailsById(id).then((response) => {
            const prod = response.data;
            console.log(prod);
            window.location.href = "../../HTML/edit_product.html?pid="+id      //To get id
            // let updateForm = `<table class="add_product_form">
            // <tr>
            //     <td>Peoduct Name</td>
            //     <td><input type="text" class="pname">${prod._productName}</td></tr>
            //     <tr></tr><td>Brand Name</td>
            //     <td><input type="text" class="bname">${prod._brandName}</td>
            // </tr>
            // <tr>
            //     <td>Price</td>
            //     <td><input type="number" class="price">${prod._price}</td>
            // </tr>
            // <tr>
            //     <td><label>Availibilty</label></td>
            //     <td><label>In Stock</label><input type="radio" id="IS" class="IS" name="prod" value="In Stock">
            //         <label>Out Of Stock</label><input type="radio" id="OFS" class="OFS" name="prod" value="Out of Stock">
            //     </td>
            // </tr>
            // <tr>
            //     <td>Description</td>
        //         <td><textarea class="des" style="margin-left: 10px; width: 175px;">${prod._productDescription}</textarea></td>
        //     </tr>
        //     <tr>
        //         <td>Select File</td>
        //         <td><input type="file" class="file" accept=".jpg, .png, .jpeg, .gif, .bmp, .tif">${prod._productImage}</td>
        //     </tr>
        //     <tr>
        //         <td></td>
        //         <td><input type="button" value="Add Product" id="btn2" class="btn2">
        //             <a href="add_customer.html"><input type="button" value="Register" id="btn" class="btn"></a>
        //             <a href="product_card.html"><input type="button" value="Card Product" id="btn3" class="btn3"></a></td>
        //     </tr>
        // </table>`

        // $('.container').append(updateForm)
        }).catch((error) => {
            console.log(error);
        })
    })
})