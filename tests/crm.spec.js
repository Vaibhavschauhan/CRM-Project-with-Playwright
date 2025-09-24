const {test, expect} = require('@playwright/test');
const { asyncWrapProviders } = require('async_hooks');
import { loginpage } from '../POM pages/loginpage';
import { homepage } from '../POM pages/homepage'; 
import { leadscreationpage } from '../POM pages/leadCreationPage';
import { leadspage } from '../POM pages/leadspage';
import { logoutpage } from '../POM pages/logoutpage';
const dataset=JSON.parse(JSON.stringify(require("../Testdata/testDataCRM.json")));

let page;

test.beforeEach(async ({browser})=>{
    page=await browser.newPage();
    await page.goto(dataset.url);

    const lp = new loginpage(page);
    await lp.logincredentials(dataset.username,dataset.userpassword);


});

test('CRM Framework', async ({browser})=>
{

    const hp =new homepage(page);
    await hp.homepageclick();

    const lcp = new leadscreationpage(page);
    await lcp.leadsbtnclick();

    const ldp = new leadspage(page);
    await ldp.leadscredentials(dataset.lastname,dataset.title);


});

test.afterEach(async ()=>{

    const lop = new logoutpage(page);
    await lop.signout();

});
