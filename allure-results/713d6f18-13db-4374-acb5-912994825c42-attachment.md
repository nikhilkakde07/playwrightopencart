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

Expected: 201
Received: 422
```

# Test source

```ts
  1  | import {test,expect} from "@playwright/test"
  2  | 
  3  | const TOKEN = '8dc2f09a0fde193248f27fa19d5f5e7bda1788d6b20cc409f04a773155e7507b'
  4  | 
  5  | const BASE_URL='https://gorest.co.in/public/v2/users'
  6  | 
  7  | //Common headers
  8  | 
  9  | const headers={
  10 |     'Authorization': `Bearer ${TOKEN}`,
  11 |     //'Content-Type':'application/json',
  12 |     'Accept': 'application/json'
  13 | 
  14 | }
  15 | test('e2e crud flow test', async({request})=>{
  16 |     //Step 1 Create a user 
  17 | 
  18 |     const requestbody={
  19 |         name: "NIkhil",
  20 |         email:`nikhil${Date.now}@gmail.com`,
  21 |         status: "Active",
  22 |         gender: "male"
  23 |     }
  24 | 
  25 |     const response=await request.post(BASE_URL,{headers,
  26 |         data:requestbody
  27 |     })
  28 | 
> 29 |     expect(response.status()).toBe(201)
     |                               ^ Error: expect(received).toBe(expected) // Object.is equality
  30 |     const createduser=await response.json()
  31 |     console.log(createduser)
  32 |     const userId= createduser.id
  33 |     console.log("Created User ID:" +userId);
  34 | 
  35 | 
  36 | })
  37 | //npx playwright test tests/goreste2e.spec.ts
```