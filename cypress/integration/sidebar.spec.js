import sidebar from "../pageObject/sidebar";
import adoption from "../pageObject/adoption/adoption";
import contact from "../pageObject/contact";
import landingPage from "../pageObject/landingPage";
import config from "../fixtures/config";
import about from "../pageObject/about";
let baseConfig = config.getEnvConfig("theTestRoom")

context("Adoption page - landing page and sidebar", () => {
    let SidebarElements = [
        {
            pageTitle: "Adoption",
            sidebarLink: sidebar.AdoptionLink,
            targetPageObject: adoption
        },
        {
            pageTitle: "About",
            sidebarLink: sidebar.AboutLink,
            targetPageObject: about
        },
        {
            // there is an issue in console. Some element is not properly defined on page - issue should be reported
            pageTitle: "Contact (Issue on page, should be reported)",
            sidebarLink: sidebar.ContactLink,
            targetPageObject: contact
        },
        {
            pageTitle: "Home",
            sidebarLink: sidebar.HomeLink,
            targetPageObject: landingPage
        },
    ]
    before(()=>{
        cy.visit(`${baseConfig.baseUrl}${landingPage.getPageRoute()}`)
    })
    SidebarElements.forEach((sidebarElement) => {
        it(`Going to ${sidebarElement.pageTitle} via sidebar link`, () => {
            sidebarElement.sidebarLink().click();
            cy.url().should("match", new RegExp(sidebarElement.targetPageObject.getPageRoute()));
        })
    })

})