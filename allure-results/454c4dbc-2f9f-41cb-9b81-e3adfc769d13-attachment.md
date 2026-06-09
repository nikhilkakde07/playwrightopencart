# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: apitests\post_api_request01_createbooking.spec.ts >> Fetch all users
- Location: tests\apitests\post_api_request01_createbooking.spec.ts:30:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: [Function status]
```

# Test source

```ts
  1  | 
  2  | /* 
  3  | Test:create booking
  4  | Request type:Post
  5  | Request body:static
  6  | 
  7  | */
  8  | 
  9  | import {test,expect} from "@playwright/test"
  10 | 
  11 | /* 
  12 | const token = '8dc2f09a0fde193248f27fa19d5f5e7bda1788d6b20cc409f04a773155e7507b'
  13 | 
  14 | test("fetch all users",async({request})=>{
  15 | 
  16 | 
  17 |     const response = await request.get('https://gorest.co.in/public/v2/users')
  18 |     {
  19 |         Headers:{
  20 |             Authorization : `Bearer ${token}` 
  21 |         }
  22 |     }
  23 |     expect (response.status()).toBe(200)
  24 |     const data = await response.json()
  25 |     console.log(data);
  26 |     
  27 | }) */
  28 | const token = '8dc2f09a0fde193248f27fa19d5f5e7bda1788d6b20cc409f04a773155e7507b'
  29 | 
  30 | test("Fetch all users",async({request})=>{
  31 | 
  32 |     const response=await request.get("https://gorest.co.in/public/v2/users")
  33 |     {
  34 |         Headers:{
  35 |             Authorization: `Bearer ${token}`
  36 | 
  37 |         }
  38 |     }
> 39 |     expect(response.status).toBe(200)
     |                             ^ Error: expect(received).toBe(expected) // Object.is equality
  40 |     const data=await response.json()
  41 |     console.log(data);
  42 |     
  43 | 
  44 | })
  45 | 
  46 | 
  47 | 
  48 |    /*  const requestbody={
  49 |         firstname: "Jim",
  50 |         lastname: "Brown",
  51 |         totalprice: 1000,
  52 |         depositpaid: true,
  53 |         bookingdates:{
  54 |             checkin: "2025-07-01",
  55 |             checkout: "2025-07-05",
  56 |         },
  57 |         additionalneeds: "super bowls",
  58 | 
  59 |     }
  60 |     //Send post request 
  61 |     const response = await request.post("https://restful-booker.herokuapp.com/booking",{data:requestbody})
  62 | 
  63 |     const responsebody= response.json()  //Extracted response
  64 |     console.log(responsebody);
  65 |     
  66 |     //Validate status
  67 |     expect(response.ok()).toBeTruthy()
  68 |     expect(response.status()).toBe(200)
  69 | 
  70 |     expect(responsebody).toHaveProperty("bookingid")
  71 | expect(responsebody).toHaveProperty("booking")
  72 | expect(responsebody).toHaveProperty("additionalneeds")
  73 | 
  74 | 
  75 | 
  76 |  */
  77 | 
  78 | 
  79 | 
  80 | //npx playwright test tests/post_api_request01_createbooking.spec.ts
  81 | 
```