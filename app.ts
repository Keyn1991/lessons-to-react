interface XSpace
{
    mission_name: string;
    launch_date_local: string;
    launch_site?: {
    site_name_long: string
},
    links?: {
    article_link?: string
    video_link: string
},
    rocket?: {
    rocket_name:  string
    first_stage: {
        cores: ICores[]

    },
       second_stage?: {
        payload: IPayload[]
       }
}
}

interface ICores {
    flight?: number;
    cores?: {
        reuse_count: number;
        status: string;
    }
}

interface IPayload{
    payload_type: string
    payload_mass_kg: number
    payload_mass_lbs: number
}

const missionName: XSpace = {mission_name: "Starlink-15 (v1.0)", launch_date_local: "2020-10-24T11:31:00-04:00"}
const payloadMass: IPayload = {payload_type: "Satellite", payload_mass_kg: 15400, payload_mass_lbs: 33951.2 }

console.log(missionName);
console.log(payloadMass);

/////////////////////////////////////////////////////

const user: {name: string, age: number, gender: string} = {
    name: "Max",
    age: 18,
    gender: "male"
};

function sum(a: number, b: number): number {
    return a + b;
}

function showSum(a: number, b: number): void {
    console.log(a + b);
}

function incAge(someUser: {
    name: string, age: number, gender: string}, inc: number): {name: string, age: number, gender: string} {
    someUser.age += inc;

    console.log(someUser);

    return someUser
}

console.log(sum(1, 2));
showSum(2,3)
incAge(user, 2)
