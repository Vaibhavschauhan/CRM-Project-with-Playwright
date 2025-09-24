class loginpage{
    constructor(page){
        this.page=page;
        this.username=page.locator("//input[@name='user_name']");
        this.userpassword=page.locator("//input[@name='user_password']");
        this.loginbtn= page.locator('#submitButton');

    }

async logincredentials(username,userpassword){
    await this.username.fill(username);
    await this.userpassword.fill(userpassword);
    await this.loginbtn.click();


}

}

module.exports = {loginpage};