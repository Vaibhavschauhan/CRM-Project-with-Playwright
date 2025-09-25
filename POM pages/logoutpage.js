class logoutpage{
    constructor(page){
        this.userfoto= page.locator("//img[@src='themes/softed/images/user.PNG']");
        this.signoutbtn= page.locator('a',{hasText:'Sign Out'});
    }

    async signout(){
        await this.userfoto.waitFor({ state: 'visible' });
        await this.userfoto.hover();
        await this.signoutbtn.click();

    }
}

module.exports = {logoutpage};