const { expect } = require('chai')

describe('Visual tests', () => {
    it('Should verify home page', () => {
        browser.url('http://localhost:4104/');
        browser.saveScreen('mainPage');
        expect(browser.checkScreen('mainPage')).to.be.lt(1)
    });
    it('Should verify report page', () => {
        browser.url('http://localhost:4104/report');
        browser.saveScreen('reportPage');
        expect(browser.checkScreen('reportPage')).to.equal(0);
    });
    it('Should verify settings page', () => {
        browser.url('http://localhost:4104/settings');
        browser.saveScreen('settingsPage');
        expect(browser.checkScreen('settingsPage')).to.equal(0);
    }); 
    it('Should verify help page', () => {
        browser.url('http://localhost:4104/help');
        browser.saveScreen('helpPage');
        expect(browser.checkScreen('helpPage')).to.be.lt(1)
    });    
  });