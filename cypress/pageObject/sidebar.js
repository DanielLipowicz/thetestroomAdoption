class Sidebar{
    HomeLink = () => cy.get("#home_link").contains("HOME")

    AdoptionLink = () => cy.get("#adoption_link").contains("ADOPTION")

    AboutLink = () => cy.get("#about_link").contains("ABOUT")

    ContactLink = () => cy.get("#contact_link").contains("CONTACT")
}

export default new Sidebar();
