describe('Selecionar produtos', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Selecionar Sauce Labs Balpack', () => {
    cy.title()
        .should('eq', 'Swag Labs')

    cy.get('input[data-test="username"]')
        .type('standard_user')

    cy.get('#password')
        .type('secret_sauce')

    cy.get('input[name="login-button"]')
        .click()

    cy.get('span.title')
        .should('have.text','Products')

    cy.get('img[alt="Sauce Labs Backpack"]')
        .click()

    cy.get('button[name="back-to-products"]')
        .should('have.text','Back to products')

    cy.get('div.inventory_details_name.large_size')
        .should('have.text', 'Sauce Labs Backpack')

    cy.get('div.inventory_details_price')
        .should('have.text', '$29.99')

    cy.get('#add-to-cart')
        .click()

    cy.get('a.shopping_cart_link')
        .should('have.text', '1')
  })
})