class leadscreationpage{
    constructor(page){
        this.pluslink= page.locator("//img[@title='Create Lead...']");
    }

    async leadsbtnclick(){
        await this.pluslink.click();
    }
}

module.exports = {leadscreationpage}