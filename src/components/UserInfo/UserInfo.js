export default function UserInfo ({item}){
    return (
        <div>


            <p><strong>id:</strong> {item.id}</p>
            <p><strong>name:</strong> {item.name}</p>
            <p><strong>username:</strong> {item.username}</p>
            <p><strong>email:</strong> {item.email}</p>

            <p><strong>street:</strong> {item.address.street}</p>
            <p><strong>suite:</strong> {item.address.suite}</p>
            <p><strong>city:</strong> {item.address.city}</p>
            <p><strong>zipcode:</strong> {item.address.zipcode}</p>


            <p><strong>geolocation:</strong> {item.address.geo.lat}</p>
            <p><strong>geolocation:</strong> {item.address.geo.lng}</p>

            <p><strong>phone:</strong> {item.phone}</p>
            <p><strong>website:</strong> {item.website}</p>

            <p><strong>company:</strong> {item.company.name}</p>
            <p><strong>catchPhrase:</strong> {item.company.catchPhrase}</p>
            <p><strong>bs:</strong> {item.company.bs}</p>






        </div>
    )
}