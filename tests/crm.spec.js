const {test, expect} = require('@playwright/test');
const { asyncWrapProviders } = require('async_hooks');
import { loginpage } from '../POM pages/loginpage';
import { homepage } from '../POM pages/homepage'; 
import { leadscreationpage } from '../POM pages/leadCreationPage';
import { leadspage } from '../POM pages/leadspage';
import { logoutpage } from '../POM pages/logoutpage';

test('First PW test', async ({browser})=>
{
    const context= await browser.newContext();
    const page = await context.newPage();
    await page.pause();

    await page.goto('http://49.249.28.218:8888/');

    const lp = new loginpage(page);
    const username ='admin';
    const userpassword='admin';
    await lp.logincredentials(username,userpassword);
    // await page.goto('http://49.249.28.218:8888/');
    // await page.locator("//input[@name='user_name']").fill("admin");
    // await page.locator("//input[@name='user_password']").fill("admin");
    // await page.locator('#submitButton').click();

    const hp =new homepage(page);
    await hp.homepageclick();
    // await page.locator('a',{hasText:'Leads'}).click();

    const lcp = new leadscreationpage(page);
    await lcp.leadsbtnclick();
    // await page.locator("//img[@title='Create Lead...']").click();

    const ldp = new leadspage(page);
    const lastname="Samsung";
    const title="Mobile";
    await ldp.leadscredentials(lastname,title);
    // await page.locator("//input[@name='lastname']").fill("Samsung");
    // await page.locator("//input[@name='company']").fill("Mobile");
    // await page.locator("//input[@type='submit' and @class='crmButton small save' ]").click();

    const lop = new logoutpage(page);
    await lop.signout();
    // await page.locator("//img[@src='themes/softed/images/user.PNG']").hover();
    // await page.locator('a',{hasText:'Sign Out'}).click();

    await page.close();
    await context.close();
    await browser.close();



});