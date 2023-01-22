import axios from "axios";

let axiosServiceUsers = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {}
});

const getUsers = () => {
    return axiosServiceUsers.get('/users');

}
const getUser = (id) => {

return axiosServiceUsers.get('/users/' +id)
}

const getPost = (post) => {
  return axiosServiceUsers.get('/posts', {params:{getUser}})
}




export  {getUser, getUsers, getPost}



