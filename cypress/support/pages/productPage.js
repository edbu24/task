export class ProductPage{
    elements = {
        aboutThisItem: () => cy.get('#feature-bullets'),
    }

    validateProductDisplay(){
        this.elements.aboutThisItem().should('contain.text', ' About this item ')
    }

}

export const productPage = new ProductPage()