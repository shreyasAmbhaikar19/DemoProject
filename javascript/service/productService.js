class ProductService{
    static url="http://localhost:3000/products";

    static async addProductDetails(product)
    {
        // post api to insert record
        return await axios.post(this.url,product);
        
    }

    static async getProductdDetails()
    {
        // to fetch data from url --get API
        return await axios.get(this.url);
    }

    static async getProductdDetailsById(id)
    {
        let response = await axios.get(`${this.url}/${id}`)
        return response.data
    }

    static async deleteProductDetails(id)
    {
        // return await axios.delete(this.url+"/"+id);
        return await axios.delete(`${this.url}/${id}`);
        
    }

    static async updateProduct(id, product)
    {
        let response = await axios.put(`${this.url}/${id}`, product)   
        return response.data   //this.url + "/" _
    }
    
}
export default ProductService;