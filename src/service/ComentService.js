import {axiosService} from "./axiosService";

import {urls} from "../configs";

const ComentService = {
    getAll:() => axiosService.get(urls.comments),
    create:(newComent)=>axiosService.post(urls.comments, newComent),
    updateById:(id, data)=>axiosService.put(`$urls.comments/${id}`, data),
    deleteById:(id)=> axiosService.delete(`$urls.comments/${id}`)

}

export {
    ComentService
}