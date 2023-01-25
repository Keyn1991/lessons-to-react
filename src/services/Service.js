import {AxiosService} from "./AxiosService";
import {urls} from "../configs";

 const Services =  {
    getTodos: () => AxiosService.get(urls.todos),
    getComments: () => AxiosService.get(urls.comments),
    getAlbums: () => AxiosService.get(urls.albums),
    getPostById: (id) => AxiosService.get(`${urls.posts}/${id}`)

};

export {
    Services
}