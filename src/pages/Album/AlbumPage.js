

const AlbumPage = ({album}) => {

    return (

        <div className={'albums-page'}>
        <p>
            {album.id} -- {album.title}
        </p>


        </div>

    )
}

export default AlbumPage