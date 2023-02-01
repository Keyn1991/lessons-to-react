
import {AxiosService} from "./AxiosService";

import {baseURL, urls} from "../configs/urls";


const CommentService = {
    getAll:() => AxiosService.get(urls.comments),
}

export {
    CommentService
}