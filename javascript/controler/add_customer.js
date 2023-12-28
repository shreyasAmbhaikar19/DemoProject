import Customer from "../model/Customer.js";
import CustomerService from "../service/customerService.js";

$(document).ready(function(){
    $(".btn1").click(function(){
        let name=$(".cname").val();
        let password=$(".cust_password").val();
        let email=$(".email").val();
        let dob=$(".dob").val();
        let address=$(".add").val();
        let no=$(".cno").val();
        let gender="";
        if($("#male").is(':checked'))
        {
            gender=$("#male").val();
        }
        else if($("#female").is(':checked'))
        {
            gender=$("#female").val();
        }

        // craete object of customer model(class)
        let customer=new Customer();
        customer.customerName=name;
        customer.password=password;
        customer.email=email;
        customer.date_of_birth=dob;
        customer.address=address;
        customer.gender=gender;
        // console.log("customer object",customer);

        // call service method and send model object
        CustomerService.addCustomerdetails(customer)
        .then(response=>{
            console.log(response);
        })
        .catch(error=>{
            console.log(error);
        })
    })
})