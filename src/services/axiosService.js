import axios, {create} from "axios"

import {baseURL} from "../configs";
import {authService} from "./carsService/authService";
import {createBrowserHistory} from "history";

const history = createBrowserHistory();
const axiosService = axios.create({baseURL: baseURL})

axiosService.interceptors.request.use((config) =>{
   if (authService.isAuthenticated()) {
       const access = authService.getAccessToken()
       config.headers.Authorization = `Bearer ${access}`
   }
   return config
})

let isRefreshing = false
axiosService.interceptors.response.use((config) =>{
    return config
},
async (error) =>{
   const refresh = authService.getRefreshToken();
   if (error.response?.status === 401 && refresh && !isRefreshing){
       isRefreshing = true

       try {
           await  authService.refresh(refresh)
       }catch (e) {
            authService.deleteToken()
            history.replace('login?expSession=true')
       }
        isRefreshing = false;
        return axiosService(error.config)
   }
   return Promise.reject(error)

}
)

export {
    axiosService,
    history
}
