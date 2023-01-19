export default function SpaceX (props){
    let {launch} = props;
    return(
        <div>
            <p>{launch.mission_name}
                {launch.date_utc}
            </p>
            <img src={launch.links.patch.small
            }/>


        </div>
    )
}