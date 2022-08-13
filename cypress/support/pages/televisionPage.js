export class TelevisionsPage{
    elements = {
        brands: () => cy.get('[class="a-size-base a-color-base"]'),
        sortByDropdown: () => cy.get('#a-autoid-0-announce'),
        sortByOptions: () => cy.get('[role="listbox"]'),
    }

    selectBrand(brand){
        //this.elements.brands().filter(brand).click()
        this.elements.brands().each((selectBrand) => {
            if(brand === selectBrand.text()){
                cy.wrap(selectBrand).click()
            }
        })
    }

    sortBy(sort){
        this.elements.sortByDropdown().click()
        this.elements.sortByOptions().filter(':contains("'+sort+'")').click()

    }

    selectTV(position){
        let arrayOfPrices = [];
        cy.get('.a-price-whole').each((price, index, listPrice) => {
            arrayOfPrices.push(price.text())
        }).then(() => {
            cy.get('[class="a-size-base a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal"]')
            .invoke('removeAttr','target')
            cy.contains(arrayOfPrices[position]).click()
        })
    }

}

export const tvPage = new TelevisionsPage()