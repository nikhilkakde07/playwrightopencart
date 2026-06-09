# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: apitests\post_api_request01_createbooking.spec.ts >> Create port request using static body
- Location: tests\apitests\post_api_request01_createbooking.spec.ts:11:5

# Error details

```
TypeError: apiRequestContext.post: Invalid URL
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
  11 | test("Create port request using static body",async({request})=>{
  12 | 
  13 |     const requestbody={
  14 |         firstname: "Jim",
  15 |         lastname: "Brown",
  16 |         totalprice: 1000,
  17 |         depositpaid: true,
  18 |         bookingdates:{
  19 |             checkin: "2025-07-01",
  20 |             checkout: "2025-07-05",
  21 |         },
  22 |         additionalneeds: "super bowls",
  23 | 
  24 |     }
  25 |     //Send post request 
> 26 |     const response = await request.post("/booking",{data:requestbody})
     |                                    ^ TypeError: apiRequestContext.post: Invalid URL
  27 | 
  28 |     const responsebody= response.json()  //Extracted response
  29 |     console.log(responsebody);
  30 |     
  31 |     //Validate status
  32 |     expect(response.ok()).toBeTruthy()
  33 |     expect(response.status()).toBe(200)
  34 | 
  35 | 
  36 |     //validate attributes
  37 |     
  38 |     expect(responsebody).toHaveProperty("bookingid")
  39 | expect(responsebody).toHaveProperty("booking")
  40 | expect(responsebody).toHaveProperty("additionalneeds")
  41 | 
  42 | 
  43 | 
  44 | 
  45 | 
  46 | })
  47 | 
  48 | 
  49 | //post_api_request01_createbooking.spec.ts
```