
import {axiosService} from "../axiosService";
import {urls} from "../../configs";
const carsService =  {

    getAll: (page =1) => axiosService.get(urls.cars, {params:{page}}),
    getById: (id) => axiosService.get(`${urls.cars}/${id}`),
    create:(newCar) =>axiosService.post(urls.cars, newCar),
    updateById: (id, data) => axiosService.put(urls.cars.byId(id), data),
    deleteById: (id) => axiosService.delete(urls.byId(id))


};

export {
    carsService
}