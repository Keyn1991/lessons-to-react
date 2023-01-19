
import axios from "axios";

let axiosInstance = axios.create(
    {
        baseURL:'https://api.spacexdata.com/v3/launches/'

    }
)
const getdata = ()=>{
    return axiosInstance.get()
}
export default getdata;



