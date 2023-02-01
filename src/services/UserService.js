import {AxiosService} from "./AxiosService";

import {urls} from "../configs/urls";

const UserService = {
    getAll:() => AxiosService.get(urls.users),
    create:(newUser)=>AxiosService.post(urls.users, newUser),
    updateById:(id, data)=>AxiosService.put(`$urls.users/${id}`, data),
    deleteById:(id)=> AxiosService.delete(`$urls.users/${id}`)

}

export {
    UserService
}