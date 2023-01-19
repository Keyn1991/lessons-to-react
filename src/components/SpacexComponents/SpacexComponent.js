import {useEffect, useState} from "react";

import Launch from "./SpaceX";
import getdata from "../ServiceComponents/ServiceComponents";


export default function Launchs (){
    let [launch, setDataLaunch] = useState([]);


    useEffect(()=>{
        getdata().then(value => {
            setDataLaunch(value)


        })

    },[ ])

    return(
        <div>


            {launch.filter(({date_utc})=>date_utc !== '2020').map((launch,index)=>
                (
                    <Launch launch={launch}
                            key={index}/>
                ))}

        </div>
    )
}

