describe("Swag Labs", () => {

    it("User sau parola gresita", () => {
        cy.visit("https://www.saucedemo.com/"); 
        cy.get('[data-test="username"]',{timeout: 3000}).type("standard_user");
        cy.get('[data-test="password"]').type("abc"); //incorrect password
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="login-button"]').should("have.attr", "/login");
    })


    it("Login cu user-ul standard", () => {
        cy.visit("https://www.saucedemo.com/");
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type("secret_sauce");
        cy.get('[data-test="login-button"]').click();
        cy.url().should("include", "inventory"); // s-a verificat daca user-ul a ajuns pe pagina dupa logare
    })


    it("Logout de pe pagina dupa login", () => {
        cy.visit("https://www.saucedemo.com/");
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type("secret_sauce");
        cy.get('[data-test="login-button"]').click();
        cy.get('#react-burger-menu-btn').click();
        cy.get("#logout_sidebar_link").should("be.visible");
        cy.get('#logout_sidebar_link').click();
    })


    it("Verificare deschidere si inchidere meniu lateral", () => {
        cy.visit("https://www.saucedemo.com/");
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type("secret_sauce");
        cy.get('[data-test="login-button"]').click();
        cy.get('#react-burger-menu-btn').click();
        cy.get('.bm-menu').should("be.visible");
        cy.get('.bm-cross-button').click();
    })


    it("Adaugare produs in cart", () => {
        cy.visit("https://www.saucedemo.com/");
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type("secret_sauce");
        cy.get('[data-test="login-button"]').click();
        cy.get('#add-to-cart-sauce-labs-backpack').click();
        cy.get('.shopping_cart_badge').should("contain", "1");
    })


    it("Stergere produs din cart", () => {
        cy.visit("https://www.saucedemo.com/");
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type("secret_sauce");
        cy.get('[data-test="login-button"]').click();
        cy.get('#add-to-cart-sauce-labs-backpack').click();
        cy.get('.shopping_cart_link').click();
        cy.get('[data-test="remove-sauce-labs-backpack"]').click();
        cy.get('.shopping_cart_badge').should("contain", "1");
    })


    it("Verificare comanda produs", () => {
        cy.visit("https://www.saucedemo.com/");
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type("secret_sauce");
        cy.get('[data-test="login-button"]').click();
        cy.get('#add-to-cart-sauce-labs-bolt-t-shirt').click();
        cy.get('.shopping_cart_link').click();
        cy.get('#checkout').click();
        cy.get('[data-test="firstName"]').type('Andrei');
        cy.get('[data-test="lastName"]').type('Popescu');
        cy.get('[data-test="postalCode"]').type('400');
        cy.get('#continue').click();
        cy.get('#finish').click();
        cy.get('.complete-text').should('contain','Your order has been dispatched, and will arrive just as fast as the pony can get there!')
    })


    it("Accesare pagina produs", () => {
        cy.visit("https://www.saucedemo.com/");
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type("secret_sauce");
        cy.get('[data-test="login-button"]').click();
        cy.get('#item_4_img_link').click();
        cy.url().should('contain', '4');
    })


    it("Redirectionare de pe pagina produsului catre cea principala", () => {
        cy.visit("https://www.saucedemo.com/");
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type("secret_sauce");
        cy.get('[data-test="login-button"]').click();
        cy.get('#item_5_title_link').click();
        cy.get('[data-test="back-to-products"]').click();
        cy.url().should('contain', 'inventory');
    })


})