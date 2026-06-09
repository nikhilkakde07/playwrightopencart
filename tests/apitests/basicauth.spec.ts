/* 

import{test,expect} from "@playwright/test"


test("Basic auth test", async({request})=>{

    const username='admin'
    const password = 'admin'

    const credentials= Buffer.from(`${username}:${password}`).tostring('base64')

    await request.get('https://the-internet.herokuapp.com/basic_auth')


    })
}) */
// npx playwright test tests/basicauth.spec.ts