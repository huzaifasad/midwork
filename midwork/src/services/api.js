// import axios from "axios";

// const url = "http://localhost:5000";

// export async function sendPriceViaAxios(product){
//     console.log("Axios api reached.", product);
//     return await axios.post(url,product);
// }
import axios from "axios";
const url="http://localhost:5000";
export const addproduct= (ProductData) =>{
axios.post(`${url}/dashboard/addproduct`, ProductData);
}

export const getProduct = async () => {
return await axios.get(`${url}/dashboard/addproduct`)
}