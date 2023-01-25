import {useEffect, useState} from "react";

import {Services} from "../../services";
import AlbumPage from "../Album/AlbumPage";

const AlbumsPage = () => {

    const [album, setAlbum] = useState([]);

    useEffect(() => {
    Services.getAlbums().then(value => setAlbum(value.data))
    },[])

    return (
        <div>

            {
                album.map(album => <AlbumPage key={album.id} album={album}/>)
            }


        </div>
    )


}

export default AlbumsPage