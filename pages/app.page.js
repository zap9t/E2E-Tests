class App {
    get searchTitle() { return $('h4')}
  
    getSpecificElementText() {
        this.searchTitle.waitForDisplayed()
        return this.searchTitle.getElementText()
    }
}

module.exports = new app()