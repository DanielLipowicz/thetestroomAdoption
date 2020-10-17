import config from "../fixtures/config";
import contact from "../pageObject/contact";
import contactConfirm from "../pageObject/contactConfirm";
import Chance from 'chance'

let baseConfig = config.getEnvConfig("theTestRoom")
let chance = new Chance()
describe("Contact us form", () => {
    before(() => {
        cy.visit(`${baseConfig.baseUrl}${contact.getPageRoute()}`)
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
    })
    after(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            throw err;
        })
    })
    it("User should be able to send contact form", () => {
        contact.enterName(chance.name())
        contact.selectRandomPurpose()
        contact.selectRandomCheckboxes()
        // TODO: Investigate what is expected behavior in donation section
        contact.inputAddress(chance.address())
        contact.inputPostcode(chance.postcode())
        contact.inputEmail(chance.email({domain: "test.test"}))
        contact.clickOnSendButton()
        cy.url().should('match', new RegExp(`${baseConfig.baseUrl}${contactConfirm.getPageRoute()}`))
        contactConfirm.pageHeader().should("contain","We have your message")
        contactConfirm.pageContent().should('contain', 'Many thanks for your message. We will contact you about your query as soon as possible.')
    })
})