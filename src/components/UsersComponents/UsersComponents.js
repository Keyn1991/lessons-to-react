
import {useEffect, useState} from "react";
import {getUsers, getUser, getPost} from "../ServiceComponents/ServiceComponents";
import UserComponents from "./UserComponents";
import UserInfo from "../UserInfo/UserInfo";
import '../css/style.css'
function UsersComponents() {

    let [users, setUsers] = useState([])
    let [userDet, setUser] = useState(null)
    let [post, setPost] = useState([])

    useEffect(()=> {
        getUsers().then(value => setUsers(value.data))
        getPost().then(value => setPost(value.data))
        console.log(post);
    },[])





    const userDetails = (id) => {
        getUser(id).then(value => setUser(value.data))
    }





    return (

    <div className={'main-one'}>
<div className={'main'}>
    <div className={'header'}>

        {users.map(value =>
            <UserComponents
                key={value.id}
                item={value}
                Details={userDetails}


            />)

        }
        <hr/>


    </div>
    <div className={'userInfo'}>
        {userDet &&<UserInfo item={userDet}/>}
    </div>
</div>

        <div className={'posts'}>

            {userDet &&<UserInfo item={userDet}/>}
        </div>
    </div>
    )

}


export default UsersComponents