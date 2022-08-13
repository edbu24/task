import {mainPage} from '../support/pages/mainPage'
import {tvPage} from '../support/pages/televisionPage'
import {productPage} from '../support/pages/productPage'
describe('Search for Samsung TV', () => {

    it('Search TV', () => {
        cy.visit('/')
        mainPage.goToTelevisionSection()
        tvPage.selectBrand('Samsung')
        tvPage.sortBy('Price: High to Low')
        tvPage.selectTV(1)
        productPage.validateProductDisplay()
    })
})