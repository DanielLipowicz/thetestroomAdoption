import Sidebar from "../sidebar";

class AdoptionPage{
    getPageRoute = () => '/adoption_pass_confirm.html'
    sidebar = () => Sidebar
    adoptionConfirmationContent = () => cy.get('td.content')
}

export default new AdoptionPage();
