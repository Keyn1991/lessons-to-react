export default function SpaceX (props){
    let {launch} = props;
    return(
        <div>
            <p>{launch.mission_name} ***
                {launch.launch_year}
            </p>
            <img src={launch.links.mission_patch_small
            }/>


        </div>
    )
}