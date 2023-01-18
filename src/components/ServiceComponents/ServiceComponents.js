import axios from "axios";

let axiosServiceUsers = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {}
})

const getDetailsUsers = () => {
    return axiosServiceUsers.get('/users');

}

export {getDetailsUsers, axiosServiceUsers }