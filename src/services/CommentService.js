
import {AxiosService} from "./AxiosService";

import {baseURL} from "../configs/urls";


const CommentService = {
    getAll:() => AxiosService.get(urls.comments),
    create:(newComment)=>AxiosService.post(urls.comments, newComment),
    updateById:(id, data)=>AxiosService.put(`$urls.comments/${id}`, data),
    deleteById:(id)=> AxiosService.delete(`$urls.comments/${id}`)

}

export {
    CommentService
}