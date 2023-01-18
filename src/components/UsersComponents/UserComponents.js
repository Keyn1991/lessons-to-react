
export default function UserComponents({item, Details}) {

    return (
        <div>

            <h2>{item.id} - {item.name}</h2>
            <button onClick={() => {Details(item.id)}}>details</button>

        </div>
    )
}

