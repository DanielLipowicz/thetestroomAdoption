import Sidebar from "./sidebar";

class ContactPage {
    getPageRoute = () => '/contact.html'
    sidebar = () => Sidebar

    selectRandomPurpose() {
        let optionNumberToSelect = chance.integer({min:1,max:3})
        cy.log(`Selecting option number ${optionNumberToSelect}`)
        this.purposeRadioOptions().eq(optionNumberToSelect-1).click()
    }

    enterName(name) {
        return this.enterNameInput().type(name)
    }

    enterNameInput() {
        return cy.get('input[name=name_field]')
    }

    purposeRadioOptions(){
        return cy.get('input[type=radio]')
    }

    optionalCheckboxes(){
        return cy.get('input[type=checkbox]')
    }
    addressInput(){
        return cy.get("input[name=address_field]")
    }
    postcodeInput(){
        return cy.get("input[name=postcode_field]")
    }
    emailInput(){
        return cy.get("input[name=email_field]")
    }
    sendButton(){
        return cy.get("input#submit_message")
    }

    selectRandomCheckboxes() {
        let lengthOfCheckboxes = 2;
        let numberOfOptions = chance.integer({min:0,max:lengthOfCheckboxes})
        cy.log(`Selecting ${numberOfOptions} of availableOptions`)
        if(numberOfOptions==0){
            return null;
        }else if(numberOfOptions==1){
            this.optionalCheckboxes().eq(chance.integer({min:1,max: lengthOfCheckboxes})-1).click()
        }else if(numberOfOptions==lengthOfCheckboxes){
            this.optionalCheckboxes().each(element=> element.click())
        }else{
            throw new Error("option not implemented")
        }
    }

    inputAddress(address) {
        this.addressInput().type(address);
    }

    inputPostcode(postcode) {
        this.postcodeInput().type(postcode);

    }

    inputEmail(email) {
        this.emailInput().type(email);

    }

    clickOnSendButton() {
        this.sendButton().click()
    }
}

export default new ContactPage();
