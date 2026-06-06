import {Page,expect,Locator} from "@playwright/test"
import { error } from "node:console"

export class HomePage{
//In this we will have 3 things 1.locators,2.constructors,3.action methods

private readonly page:Page
//Locators
private readonly linkMyAccount:Locator
private readonly linkRegister:Locator
private readonly linkLogin:Locator
private readonly txtSearchbox:Locator
private readonly btnSearch:Locator

//Constructor
constructor(page:Page)
{
    this.page=page
    this.linkMyAccount=page.locator('span:has-text("My Account")')
    this.linkRegister =page.locator ('a:has-text("Register")')
    this.linkLogin = page.locator ('a:has-text("Login")')
    this.txtSearchbox=page.locator('[name="search"]')
    this.btnSearch = page.locator ('button.btn.btn-default.btn-lg')
}

//action methods
 
//Check if homepage exists 
async isHomepageExists(){
let title:string=await this.page.title()
if(title)
{
    return true
}
return false

}
   
//Click "My account" link
async clickMyAccount(){
    try{
        await this.linkMyAccount.click()

    }catch(error){
        console.log(`Exception occured while clicking my account:${error}`);
        throw error

    }
}

//Click register link
async clickRegister(){
    try{
        await this.linkRegister.click()
    }catch (error){
        console.log(`Exception occured:${error} `);
        throw error
    }
}
//click "login" link

async clickLogin(){
    try{
        await this.linkLogin.click()
    }catch(error)
    {
        console.log(`Exception occured while clicking 'Login':${error}`);
        throw error
    }
} 

//Enter product name in search box
async enterProductName(pName:string){
    try{
        await this.txtSearchbox.fill(pName)
    }catch (error)
    {
        console.log(`Exception error while entering product name: ${error}`);
        throw error
    }
}

    // Click the search button 

    async clickSearch(){
        try{
            await this.btnSearch.click()
        }catch(error)
        {
            console.log(`Exception error occured:${error}`);
            throw error
        }
    }



}