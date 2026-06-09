
import{test,expect} from "@playwright/test"

test("Network monitoring test", async({page})=>{

    page.on('request',async req=>{
        console.log("outgoing request:", req.method(),req.url());
    })
     page.on('response',async res=>{
        console.log("Incoming request:", res.status(),res.url());
    })

    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=common/home")
    await page.getByRole('link',{name: 'iPhone'}).first().click()

})

//npx playwright test tests/networkMonitoring.spec.ts