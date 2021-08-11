import axios from 'axios'

const PRODUCT_API_BASE_URL="http://localhost:8081/api/products";

class ProductServices {
    getProducts(){
        axios.get(PRODUCT_API_BASE_URL);
    }
}
export default new ProductServices();
