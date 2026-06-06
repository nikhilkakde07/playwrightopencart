//TestCase - Account registration

import { url } from "node:inspector"

//Tags  - @master @sanity @regression

//Steps:
/* 1.Navigate to app url
2.Go to myaccount and click 'Register'
3.FIll registration details with random DataTransfer
4.Agree the privacy policy  and submit form 
5.Validate the confirmation Message

 */

import  {test,expect} from "@playwright/test"
import { HomePage} from "../pages/HomePage"
import { RegistrationPage } from "../pages/RegistrationPage"
import { RandomDataUtil } from "../utils/randomDataGenerator"
import { TestConfig } from "../test.config"

test ('User registration test',async ({page})=>{
    const config = new TestConfig()
    await page.goto(config.appUrl) //Navigate to app URL

    //GO to my account and click register
    const homepage = new HomePage(page)
    await homepage.clickMyAccount()
    await homepage.clickRegister()

    //Fill in registration details with random data
    const registrationPage = new RegistrationPage(page)





})