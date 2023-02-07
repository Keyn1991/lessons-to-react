import {axiosService} from "../axiosService";
import {urls} from "../../configs";

const postService =  {

    getPosts: () => axiosService.get(urls.posts),
    getPostById: (id) => axiosService.get(`${urls.posts}/${id}`)

};

export {
    postService
}