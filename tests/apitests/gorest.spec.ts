
import {test,expect} from "@playwright/test"

const TOKEN = '8dc2f09a0fde193248f27fa19d5f5e7bda1788d6b20cc409f04a773155e7507b'

const BASE_URL='https://gorest.co.in/public/v2/users'

//Common headers

const headers={
    'Authorization': `Bearer ${TOKEN}`,
    //'Content-Type':'application/json',
    'Accept': 'application/json'

}

test("Get -fetch all users",async({request})=>{
    const response=await request.get(BASE_URL,{headers})

    expect(response.status()).toBe(200)
    const data=await response.json()
    console.log(data);

})

test ('POST- create new users',async({request})=>{
    const requestbody={
        name: "nikhil",
        email: `nikhil${Date.now()}@gmail.com`,
        status: 'active',
        gender: 'male'
    }

    const response=await request.post(BASE_URL,{headers,
        data: requestbody
    })
expect(response.status()).toBe(201)
    const data=await response.json()
    console.log(data);

})


test ('PUT- create new users',async({request})=>{
    
    const userID= 8499042

    const requestbody={
        status: 'inactive',
        
    }

    const response=await request.put(`${BASE_URL}/${userID}`,{headers,
        data: requestbody
    })
expect(response.status()).toBe(200)
    const data=await response.json()
    console.log(data);

})

test ('Delete- create new users',async({request})=>{
    
    const userID= 8499042
    const response=await request.delete(`${BASE_URL}/${userID}`,{headers
        
    })
expect(response.status()).toBe(204)
  

})

//npx playwright test tests/gorest.spec.ts