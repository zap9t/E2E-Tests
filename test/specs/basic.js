describe('Basic test to check Vortimo main page', () => {
    it('Should have the right title', () => {
        browser.url('http://localhost:4104/');
        expect(browser).toHaveTitle('Vortimo');
    })
})