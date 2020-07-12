class Search {
    get searchLink() { return $('*=Private Beta Launch') }
   
    clickSearchLink() {
        this.searchLink.waitForDisplayed()
        this.searchLink.click()
    }
}

module.exports = new Search()