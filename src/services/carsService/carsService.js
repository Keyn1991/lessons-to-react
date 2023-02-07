
import {axiosService} from "../axiosService";
import {urls} from "../../configs";
const carsService =  {

    getAll: () => axiosService.get(urls.cars),
    getById: (id) => axiosService.get(`${urls.cars}/${id}`),
    create:(newCar) =>axiosService.post(urls.cars, newCar),


};

export {
    carsService
}