describe('Visual tests', () => {
    beforeEach(() => {
       browser.url('http://localhost:4104/');
    });
  
    it('should save the screenshot of main page', () => {
        browser.saveScreen('mainPage');
    
    });
    it('should compare successful with a baseline', () => {
        expect(browser.checkScreen('mainPage')).toEqual(0);
    });
  });