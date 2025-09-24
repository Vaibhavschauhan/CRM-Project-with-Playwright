class homepage{
    constructor(page){
        this.leadslink= page.locator("//a[@href='index.php?module=Leads&action=index']");
    }

    async homepageclick(){
        await this.leadslink.click();
    }
}

module.exports = {homepage}