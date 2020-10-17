import Sidebar from "../sidebar";
import Chance from "chance";

class AdoptionPage {
    getPageRoute = () => '/adoption_pass.html'
    sidebar = () => Sidebar

    nameInput = () => cy.get('input[name=name_field]')
    addressInput = () => cy.get('input[name=address_field]')
    postcodeInput = () => cy.get('input[name=postcode_field]')
    emailInput = () => cy.get('input[name=email_field]');
    checkButton = () => cy.get('input#submit_adoption')

    fillAdoptionFormWithRandomData() {
        let chance = new Chance()
        this.nameInput().type(chance.name())
        this.addressInput().type(chance.address())
        this.postcodeInput().type(chance.postcode())
        this.emailInput().type(chance.email({domain: "test.test"}))
    }

    submitAdoptionForm() {
        this.checkButton().click();
    }
}

export default new AdoptionPage();
