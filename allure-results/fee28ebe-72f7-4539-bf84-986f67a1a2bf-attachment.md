# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: apitests\goreste2e.spec.ts >> e2e crud flow test
- Location: tests\apitests\goreste2e.spec.ts:15:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 404
```

# Test source

```ts
  1  | import { da } from "@faker-js/faker"
  2  | import {test,expect} from "@playwright/test"
  3  | import { log } from "node:console"
  4  | 
  5  | const TOKEN= '8dc2f09a0fde193248f27fa19d5f5e7bda1788d6b20cc409f04a773155e7507b'
  6  | const BASE_URL='https://gorest.co.in/public/v2/users'
  7  | 
  8  | //Common headers
  9  | const headers = {
  10 |     'Authorization': `Bearer ${TOKEN}`,
  11 |     'Accept': 'application/json'
  12 | }
  13 | 
  14 | 
  15 | test('e2e crud flow test', async({request})=>{
  16 | 
  17 |     //Create the user 
  18 | 
  19 |     const requestbody= {
  20 |         name: 'Nikhil',
  21 |         email: `nikhil${Date.now()}@gmail.com`,
  22 |         gender: 'male',
  23 |         status: 'active'
  24 | 
  25 |     }
  26 |     const response=await request.post(BASE_URL,{headers,
  27 |         data:requestbody
  28 | 
  29 |     })
  30 |     expect(response.status()).toBe(201)
  31 |     const createduser=await response.json()
  32 |     console.log(createduser)
  33 |     const userID=createduser.id
  34 |     console.log("Crearted user:" +userID);
  35 |     
  36 |     console.log("========================get call=====================");
  37 |     
  38 | 
  39 |     //2. Get the same user by using userid
  40 | 
  41 |     const responseGET= await request.get(BASE_URL+'/'+userID,{
  42 |         headers
  43 | 
  44 |     })
  45 | 
  46 |     expect (responseGET.status()).toBe(200)
  47 |     const data=await responseGET.json()
  48 |     console.log(data);
  49 |     
  50 | console.log("=============================put call==============================");
  51 | 
  52 | //Step 3 Update the same user by using the uder id 
  53 | 
  54 | const updatedbody={
  55 |     name: 'nikhkakde',
  56 |     status: "inactive",
  57 | }
  58 | const responsePUT = await request.put(BASE_URL+'/'+userID,{headers,
  59 |     data:updatedbody
  60 | })
  61 | 
  62 | expect (responsePUT.status()).toBe(200)
  63 | const updateddata=await responsePUT.json()
  64 | console.log(updateddata);
  65 | 
  66 | console.log("=============================Delete call =======================");
  67 | 
  68 | 
  69 |  //Step 4 : Delete the same user using the user id 
  70 |  
  71 |  const responsedelete=await request.delete(BASE_URL+'/'+userID,{headers
  72 | 
  73 |  })
  74 |  expect (responsedelete.status()).toBe(204)
  75 |  console.log("User is successfully deleted");
  76 | 
  77 |  console.log("===============================Get call========================");
  78 |  
  79 |  const responseGETafterDELETE= await request.get(BASE_URL+'/'+userID,{
  80 |         headers
  81 | 
  82 |     })
  83 | 
> 84 |     expect (responseGETafterDELETE.status()).toBe(200)
     |                                              ^ Error: expect(received).toBe(expected) // Object.is equality
  85 |     const datadel=await responseGET.json()
  86 |     console.log(datadel);
  87 | 
  88 | 
  89 | })
  90 | 
  91 | 
  92 | 
  93 | //npx playwright test tests/goreste2e.spec.ts
```