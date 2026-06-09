import {test,expect} from "@playwright/test"


const TOKEN= '8dc2f09a0fde193248f27fa19d5f5e7bda1788d6b20cc409f04a773155e7507b'
const BASE_URL='https://gorest.co.in/public/v2/users'

//Common headers
const headers = {
    'Authorization': `Bearer ${TOKEN}`,
    'Accept': 'application/json'
}


test('e2e crud flow test', async({request})=>{

    //Create the user 

    const requestbody= {
        name: 'Nikhil',
        email: `nikhil${Date.now()}@gmail.com`,
        gender: 'male',
        status: 'active'

    }
    const response=await request.post(BASE_URL,{headers,
        data:requestbody

    })
    expect(response.status()).toBe(201)
    const createduser=await response.json()
    console.log(createduser)
    const userID=createduser.id
    console.log("Crearted user:" +userID);
    
    console.log("========================get call=====================");
    

    //2. Get the same user by using userid

    const responseGET= await request.get(BASE_URL+'/'+userID,{
        headers

    })

    expect (responseGET.status()).toBe(200)
    const data=await responseGET.json()
    console.log(data);
    
console.log("=============================put call==============================");

//Step 3 Update the same user by using the uder id 

const updatedbody={
    name: 'nikhkakde',
    status: "inactive",
}
const responsePUT = await request.put(BASE_URL+'/'+userID,{headers,
    data:updatedbody
})

expect (responsePUT.status()).toBe(200)
const updateddata=await responsePUT.json()
console.log(updateddata);

console.log("=============================Delete call =======================");


 //Step 4 : Delete the same user using the user id 
 
 const responsedelete=await request.delete(BASE_URL+'/'+userID,{headers

 })
 expect (responsedelete.status()).toBe(204)
 console.log("User is successfully deleted");

 console.log("===============================Get call========================");
 
 const responseGETafterDELETE= await request.get(BASE_URL+'/'+userID,{
        headers

    })

    expect (responseGETafterDELETE.status()).toBe(404)
    const datadel=await responseGETafterDELETE.json()
    console.log(datadel);


})



//npx playwright test tests/goreste2e.spec.ts