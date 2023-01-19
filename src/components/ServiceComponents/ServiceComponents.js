
const getdata = ()=>{
    return fetch('https://api.spacexdata.com/v4/launches/').then(value => value.json())

}
export default getdata;



