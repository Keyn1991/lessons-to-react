import {useEffect, useState} from "react";

import Launch from "./SpaceX";
import getdata from "../ServiceComponents/ServiceComponents";


export default function Launchs (){
    let [launch, setDataLaunch] = useState([]);


    useEffect(()=>{
        getdata().then(value => {
            setDataLaunch(value.data)
        })

    },[ ])

    return(
        <div>


            {launch.filter(({launch_year})=>launch_year!=='2020').map((launch,index)=>
                (
                    <Launch launch={launch}
                            key={index}/>
                ))}

        </div>
    )
}

