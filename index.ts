import userJson  from './users.json';

interface User {
    name: string,
    email: string,
    website: string,
    phonenumber: number
}

const userJsonFiltered = userJson.filter(user => user.website.includes(".org"));


const user:User[] = userJsonFiltered.map(user => {
    return { 
        name: user.name,
        email: user.email,
        website: user.website,
        phonenumber: Number(user.phone.replace(/-/g, "").replace("x", "").replace(" ",""))
    }
});
//console.log(user);

let csvString = "name, email, website, phonenumber \n";
user.map(userMap => {
csvString += userMap.name + "," + userMap.email + "," + userMap.website + "," + userMap.phonenumber + "\n"
})

console.log(csvString);