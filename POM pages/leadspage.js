class leadspage{
    constructor(page){
        this.page=page;
        this.lastname=page.locator("//input[@name='lastname']");
        this.title=page.locator("//input[@name='company']");
        this.savebtn= page.locator("//input[@type='submit' and @class='crmButton small save' ]");

    }

async leadscredentials(lastname,title){
    await this.lastname.fill(lastname);
    await this.title.fill(title);
    await this.savebtn.click();


}

}

module.exports = {leadspage};