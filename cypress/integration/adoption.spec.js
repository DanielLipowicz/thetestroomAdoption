import adoption from "../pageObject/adoption/adoption";
import adoptionFail from "../pageObject/adoption/adoptionFail";
import adoptionPass from "../pageObject/adoption/adoptionPass";
import adoptionConfirmation from "../pageObject/adoption/adoptionConfirmation";
import config from "../fixtures/config";

let baseConfig = config.getEnvConfig("theTestRoom")

describe("Adoption page", () => {
    beforeEach(() => {
        cy.visit(`${baseConfig.baseUrl}${adoption.getPageRoute()}`)
    })
    it("Adoption pass", () => {
        adoption.clickOnCheckForAvailablePet();
        adoptionPass.fillAdoptionFormWithRandomData();
        adoptionPass.submitAdoptionForm();
        cy.url().should("match", new RegExp(adoptionConfirmation.getPageRoute()))
        adoptionConfirmation.adoptionConfirmationContent().should('contain', "YOUR ADOPTION HAS BEEN SET UP");
    })
    it("Adoption fail", () => {
        adoption.clickOnCheckForNotAvailablePet();
        cy.url().should("match", new RegExp(adoptionFail.getPageRoute()))
        adoptionFail.adoptionFailContent().should('contain', 'SORRY, ANIMAL NOT AVAILABLE')
    })
    it("Adoption select date dropdown", () => {
        let dropdownOptions = [
            {text: "Today", attributeVal: "today"},
            {text: "First day of the next week", attributeVal: "fday"},
            {text: "First day of the next month", attributeVal: "fmonth"}
        ]
        dropdownOptions.forEach(option => {
            adoption.getAdoptionDropdownOption(option.text).should('exist')
            adoption.adoptionDateDropdown().select(option.text).invoke('val').should('eq', option.attributeVal);
        })
    })
})