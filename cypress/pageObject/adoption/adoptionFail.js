import Sidebar from "../sidebar";

class AdoptionPage {
    getPageRoute = () => '/adoption_fail.html'
    sidebar = () => Sidebar

    adoptionFailContent = () => cy.get('td.content')

}

export default new AdoptionPage();
