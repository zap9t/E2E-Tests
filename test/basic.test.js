const searchPage = require('../pages/search.page');
const appPage = require('../pages/app.page');

const { expect } = require('chai');

describe('Basic test to check Vortimo', () => {
    it('Should have the right title', () => {
        browser.url('http://localhost:4104/');
        expect(browser).toHaveTitle('Vortimo');
    })

    it('Should record browser search', () => {
        browser.url('http://localhost:4104');
        browser.newWindow('https://duckduckgo.com/?q=vortimo&ia=web')
        searchPage.clickSearchLink()
        expect(browser).toHaveTitle('Vortimo - Private Beta Launch');
        browser.switchWindow('http://localhost:4104')
        //expect(appPage.getSpecificElementText()).to.be.equal('Vortimo - Private Beta Launch'); - TODO
    })
})