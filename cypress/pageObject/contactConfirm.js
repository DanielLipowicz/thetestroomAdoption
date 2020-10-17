import Sidebar from "./sidebar";

class ContactConfirm{
    getPageRoute = () => '/contact_confirm.html'
    sidebar = () => Sidebar
    pageHeader = () => cy.get("td.content h1")
    pageContent = () => cy.get("td.content p")
}

export default new ContactConfirm();
