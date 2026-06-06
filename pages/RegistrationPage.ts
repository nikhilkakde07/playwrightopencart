import {test,Locator,expect, Page} from "@playwright/test"


export class RegistrationPage{

    private readonly page:Page

    //Locators using CSS selectors
    private readonly txtFirstname : Locator 
    private readonly txtLastname :Locator
    private readonly txtEmail:Locator
    private readonly txtTelephone:Locator
    private readonly txtPassword:Locator
    private readonly txtConfirmPassword:Locator
    private readonly chkdPolicy:Locator
    private readonly btnContinue:Locator
    private readonly msgCOnfirmation:Locator

    //Constructors

    constructor (page:Page)
    {
        this.page=page

        //Initialize locators with CSS selectors 
        this.txtFirstname= page.locator('#input-firstname')
        this.txtLastname =page.locator('#input-lastname')
        this.txtEmail=page.locator('#input-email')
        this.txtTelephone=page.locator('#input-telephone')
        this.txtPassword=page.locator('#input-password')
        this.txtConfirmPassword=page.locator('#input-confirm')
        this.chkdPolicy=page.getByRole('checkbox')
        this.btnContinue=page.locator('input.btn.btn-primary')
        this.msgCOnfirmation=page.getByRole('heading', { name: 'Your Account Has Been Created!' })


    }

    //Actions 
    //1.Sets the first name in registration form
    //@param fname - first name to enter 

    async setFirstName(fname:string){
        await this.txtFirstname.fill(fname)
    }

    //2.Sets last name in reg form
    //@param lname - last name to enter

    async setLastName(lname:string)
    {
        await this.txtLastname.fill(lname)
    }

    //3.EMail
    //@param email - email to enter 

    async setEmail(email:string)
    {
        await this.txtEmail.fill(email)
    }

    //4.Telephone
    //tel

    async setTelephone(tel:string)
    {
        await this.txtTelephone.fill(tel)
    }

    //5.password

    async setPassword(pwd:string)
    {
        await this.txtPassword.fill(pwd)
    }

    //6.Sets and confirm password

    async setConfirmPwd(pwd:string)
    {
        await this.txtConfirmPassword.fill(pwd)
    }

    //checks the privacy policy checkbox

    async setPrivacyPolicy()
    {
        await this.chkdPolicy.check()
    }

    //Click the continue button 

    async clickContinue()
    {
        await this.btnContinue.click()
    }

    //Get the confirmation text 

    async getConfirmationMsg()
    {
        await this.msgCOnfirmation.textContent()?? ""
    }

//One single method for compllete registration

async completeRegistration(userData:{
    firstName:string
    lastName:string
    email:string
    telephone:string
    password:string
})

{
  await this.setFirstName(userData.firstName)
  await this.setLastName(userData.lastName)
await this.setEmail(userData.email)
await this.setTelephone(userData.telephone)
await this.setPassword(userData.password)
await this.setConfirmPwd(userData.password)
await this.setPrivacyPolicy()
await this.clickContinue()
await expect(this.msgCOnfirmation).toBeVisible()
}}