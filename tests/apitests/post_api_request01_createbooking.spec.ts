
/* 
Test:create booking
Request type:Post
Request body:static

*/

import {test,expect} from "@playwright/test"


/* 
const token = '8dc2f09a0fde193248f27fa19d5f5e7bda1788d6b20cc409f04a773155e7507b'

test("fetch all users",async({request})=>{


    const response = await request.get('https://gorest.co.in/public/v2/users')
    {
        Headers:{
            Authorization : `Bearer ${token}` 
        }
    }
    expect (response.status()).toBe(200)
    const data = await response.json()
    console.log(data);
    
}) */
const token = '8dc2f09a0fde193248f27fa19d5f5e7bda1788d6b20cc409f04a773155e7507b'

test("fetch all users",async({request})=>{
    const response = await request.get("https://gorest.co.in/public/v2/users/8496200")
    {
        Headers:{
             Authorization:`Bearer ${token}`

        }
    }
    expect (response.status()).toBe(200)
    const data=await response.json
    console.log(data)
})

test.only("POST-Create a new user",async({request})=>{

    const requestbody = {
        name: 'nikhil',
        email: 'jbhfksdjhf@gmail.com',
        gender: 'female',
        status:'active'
    }
    const response = await request.post("https://gorest.co.in/public/v2/users", {
        headers:{
            Authorization:`Bearer ${token}`,
        },
        data: requestbody
    })
    expect (response.status()).toBe(201)
    const data =response.json
    console.log(data);
    

})


   /*  const requestbody={
        firstname: "Jim",
        lastname: "Brown",
        totalprice: 1000,
        depositpaid: true,
        bookingdates:{
            checkin: "2025-07-01",
            checkout: "2025-07-05",
        },
        additionalneeds: "super bowls",

    }
    //Send post request 
    const response = await request.post("https://restful-booker.herokuapp.com/booking",{data:requestbody})

    const responsebody= response.json()  //Extracted response
    console.log(responsebody);
    
    //Validate status
    expect(response.ok()).toBeTruthy()
    expect(response.status()).toBe(200)

    expect(responsebody).toHaveProperty("bookingid")
expect(responsebody).toHaveProperty("booking")
expect(responsebody).toHaveProperty("additionalneeds")



 */



//npx playwright test tests/post_api_request01_createbooking.spec.ts
