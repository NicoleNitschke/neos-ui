describe('TopBar.UserDropDown', () => {
    it('should initially hide the dropdown items.', () => {
        expect(browser.isVisibleWithinViewport('#neos__topBar__userDropDown__logoutButton')).to.equal(false);
        expect(browser.isVisibleWithinViewport('#neos__topBar__userDropDown__userSettings')).to.equal(false);
    });

    it('should display the dropdown items after the button was clicked.', () => {
        browser.click('#neos__topBar__userDropDownButton');

        expect(browser.isVisibleWithinViewport('#neos__topBar__userDropDown__logoutButton')).to.equal(true);
        expect(browser.isVisibleWithinViewport('#neos__topBar__userDropDown__userSettings')).to.equal(true);
    });

    it('should hide the dropdown items after the button was clicked again.', () => {
        browser.click('#neos__topBar__menuToggler');

        expect(browser.isVisibleWithinViewport('#neos__topBar__userDropDown__logoutButton')).to.equal(false);
        expect(browser.isVisibleWithinViewport('#neos__topBar__userDropDown__userSettings')).to.equal(false);
    });
});
