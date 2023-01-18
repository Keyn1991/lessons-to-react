
import {useEffect, useState} from "react";
import {getUsers, getUser} from "../ServiceComponents/ServiceComponents";
import UserComponents from "./UserComponents";
import UserInfo from "../UserInfo/UserInfo";
function UsersComponents() {

    let [users, setUsers] = useState([])
    let [userDet, setUser] = useState(null)


    useEffect(()=> {
        getUsers().then(value => setUsers(value.data))
    },[])


    const userDetails = (id) => {
        getUser(id).then(value => setUser(value.data))
    }

    return (

        <div>

                {users.map(value =>
                <UserComponents
                key={value.id}
                item={value}
                Details={userDetails}


            />)

            }
            <hr/>

            <div>
                {userDet &&<UserInfo item={userDet}/>}
            </div>
        </div>
    )

}


export default UsersComponents