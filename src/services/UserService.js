import {AxiosService} from "./AxiosService";

import {urls} from "../configs/urls";

const UserService = {
    getAll:() => AxiosService.get(urls.users),

}

export {
    UserService
}