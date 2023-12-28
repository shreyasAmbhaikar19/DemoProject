class CustomerService{
    static url="http://localhost:3000/customers";
    static async addCustomerdetails(customer)
    {
        // post api to insert record
        return await axios.post(this.url,customer);
        
    }

    static async getCustomerDetails()
    {
        // to fetch data from url --get API
        return await axios.get(this.url);
    }
}
export default CustomerService;