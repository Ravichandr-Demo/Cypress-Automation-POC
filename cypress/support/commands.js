// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('clickLink',(lable)=>{
    cy.xpath('//a').contains(lable).click();
})

Cypress.Commands.add("loginapp",(email,password)=>{
    cy.xpath("//input[@name='email'][@data-qa='login-email']").type(email);
    cy.xpath("//input[@name='password'][@data-qa='login-password']").type(password);
    cy.xpath("//button[contains(.,'Login')]").click();
})