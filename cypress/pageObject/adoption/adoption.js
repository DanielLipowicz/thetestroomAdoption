import Sidebar from "../sidebar";

class AdoptionPage{
    getPageRoute = () => '/adoption.html'
    sidebar = () => Sidebar
    checkAvailablePetButton = () => cy.get("table.inner_table input[available=yes]")
    checkNotAvailablePetButton = () => cy.get("table.inner_table input[available=no]")
    adoptionDateDropdown = () => cy.get('select#start_select')
    adoptionDropdownOption = () => cy.get('select option')

    clickOnCheckForAvailablePet() {
        return this.checkAvailablePetButton().click();
    }

    clickOnCheckForNotAvailablePet() {
        return this.checkNotAvailablePetButton().click();
    }
    getAdoptionDropdownOption(optionText){
        return this.adoptionDropdownOption().contains(optionText)
    }
}

export default new AdoptionPage();
