# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: apitests\gorest.spec.ts >> Get -fetch all users
- Location: tests\apitests\gorest.spec.ts:17:5

# Error details

```
TypeError: apiRequestContext.get: Header name must be a valid HTTP token ["Content- Type"]
```

# Test source

```ts
  1  | 
  2  | import {test,expect} from "@playwright/test"
  3  | 
  4  | const TOKEN = '8dc2f09a0fde193248f27fa19d5f5e7bda1788d6b20cc409f04a773155e7507b'
  5  | 
  6  | const BASE_URL='https://gorest.co.in/public/v2/users'
  7  | 
  8  | //Common headers
  9  | 
  10 | const headers={
  11 |     'Authorization': `Bearer ${TOKEN}`,
  12 |     'Content- Type':'application/json',
  13 |     'Accept': 'application/json'
  14 | 
  15 | }
  16 | 
  17 | test("Get -fetch all users",async({request})=>{
> 18 |     const response=await request.get(BASE_URL,{headers})
     |                                  ^ TypeError: apiRequestContext.get: Header name must be a valid HTTP token ["Content- Type"]
  19 | 
  20 |     expect(response.status()).toBe(200)
  21 |     const data=await response.json()
  22 |     console.log(data);
  23 |     
  24 | 
  25 | 
  26 | })
  27 | 
  28 | //npx playwright test tests/gorest.spec.ts
```