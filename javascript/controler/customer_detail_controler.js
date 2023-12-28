import CustomerService from "../service/customerService.js"

$(document).ready(function(){
    CustomerService.getCustomerDetails()
    .then((response)=>{
        $(".cust_info").html("<table class='cust_table' border=5><table/>")
        $(".cust_table").html("<tr><th>ID</th><th>Name</th><th>Gender</th><th>Email</th><th>Address</th><th>Date of Birth</th></tr>");
        let customers=response.data;
        for(let cust of customers)
        {
            let row = `<tr><td>${cust.id}</td><td>${cust._customerName}</td><td>${cust._gender}</td><td>${cust._email}</td><td>${cust._address}</td><td>${cust._date_of_birth}</td></tr>`;
            $(".cust_table").append(row);
        }
    })
    .catch((error)=>{
        console.log(error);
    })

    

    
})