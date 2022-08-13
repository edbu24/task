export class MainPage{
    elements = {
        hamburgerMenu: () => cy.get('#nav-hamburger-menu'),
        tvAndElectronicsMenu: () => cy.get('[data-menu-id="9"]'),
        televisionsOption: () => cy.get('.hmenu-item').contains('Televisions')
    }

    goToTelevisionSection(){
        this.elements.hamburgerMenu().click();
        this.elements.tvAndElectronicsMenu().click();
        this.elements.televisionsOption().click();
    }

}

export const mainPage = new MainPage()