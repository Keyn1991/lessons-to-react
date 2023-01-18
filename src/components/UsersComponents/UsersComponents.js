import {useEffect} from "react";
import {getDetailsUsers} from "../ServiceComponents/ServiceComponents";


function UsersComponents() {


    useEffect(()=> {
        getDetailsUsers().then(value => console.log(value))
    },[])

    return (
        <div className="header">



        </div>
    )

}


export default UsersComponents