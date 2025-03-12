import loginPage from "../support/pages/loginPage";
import homePage from "../support/pages/homePage";
import productPage from "../support/pages/productPage";
import cartPage from "../support/pages/cartPage";
import paymentPage from "../support/pages/paymentPage";

describe('Payment Gateway Mock Testing', () => {
    
    beforeEach('login',()=>{
        cy.visit("https://automationexercise.com/")
    })

    let userdata;
    before( ()=>{
        cy.fixture('Testdata').then((data)=>{
            userdata=data; })
        })

    it('Verify successful payment using a test card', () => {
        loginPage.click_on_login_button()
        loginPage.enter_emailfield(userdata.email)
        loginPage.enter_passwordfield(userdata.password)
        loginPage.elements.login_submit_button().should('have.class','btn btn-default')
        loginPage.click_on_login_submitbutton()
        homePage.elements.logged_message().then((x)=>{
          let loggedSuccessMessage=x.text();
          expect(loggedSuccessMessage).to.contains(userdata.loginSuccessMessage) })
        homePage.click_on_product_link()
        productPage.search_product_input('Tshirt')
        productPage.click_on_product_search_button()
        productPage.elements.product_able_to_see().then((x)=>{
           let actProductName=x.text()
           expect(actProductName).to.equal(userdata.expecteProductdName)})
        productPage.click_onproduct_item()
        productPage.elements.verify_product().then( (x)=>{
           let shirtName=x.text()
           expect(shirtName).to.equal(userdata.expecteProductdName)})
        productPage.click_on_product_popup()
        productPage.elements.verify_product_message().then( (x)=>{
           let addedmMessage=x.text()
           expect(addedmMessage).to.equal(userdata.confirmationMessage)})
        productPage.elements.verify_your_product_added_message().then( (x)=>{
           let message=x.text()
           expect(message).to.equal(userdata.productAddedMessage)})
        productPage.click_on_view_cart()
        homePage.click_on_cartlink()
        cartPage.elements.procced_to_check_out().should('have.text','Proceed To Checkout')
        cartPage.click_on_procced_to_checkout()
        cartPage.elements.verify_address_details().should('be.visible')
        cy.xpath("//a[contains(.,'Men Tshirt')]").then((x)=>{
          let confirmProductName= x.text();
          expect(confirmProductName).to.equal('Men Tshirt')
        })
        paymentPage.click_on_place_orderLink()
        paymentPage.elements.payment_message().should('have.text','Payment')
        paymentPage.fill_name_on_card_field(userdata.cardHolder)
        paymentPage.fill_cardNumber_field(userdata.cardNumber)
        paymentPage.fill_cvv_input_field(userdata.cvv)
        paymentPage.fill_month_input_field(userdata.expireDate)
        paymentPage.fill_year_input_field(userdata.expireYear)
        paymentPage.click_on_card_submission_button()
        paymentPage.elements.your_order_confirmed_message().should('have.text','Congratulations! Your order has been confirmed!')
    })

    it('Verify failed payment with an incorrect card number', () => {
               loginPage.click_on_login_button()
               loginPage.enter_emailfield(userdata.email)
               loginPage.enter_passwordfield(userdata.password)
               loginPage.elements.login_submit_button().should('have.class','btn btn-default')
               loginPage.click_on_login_submitbutton()
               homePage.elements.logged_message().then((x)=>{
                     let loggedSuccessMessage=x.text();
                     expect(loggedSuccessMessage).to.contains(userdata.loginSuccessMessage) })
               homePage.click_on_product_link()
               productPage.search_product_input('Tshirt')
               productPage.click_on_product_search_button()
               productPage.elements.product_able_to_see().then((x)=>{
                       let actProductName=x.text()
                       expect(actProductName).to.equal(userdata.expecteProductdName)})
               productPage.click_onproduct_item()
               productPage.elements.verify_product().then( (x)=>{
                       let shirtName=x.text()
                       expect(shirtName).to.equal(userdata.expecteProductdName)})
               productPage.click_on_product_popup()
               productPage.elements.verify_product_message().then( (x)=>{
                       let addedmMessage=x.text()
                       expect(addedmMessage).to.equal(userdata.confirmationMessage)})
               productPage.elements.verify_your_product_added_message().then( (x)=>{
                       let message=x.text()
                       expect(message).to.equal(userdata.productAddedMessage)})
               productPage.click_on_view_cart()
               homePage.click_on_cartlink()
               cartPage.elements.procced_to_check_out().should('have.text','Proceed To Checkout')
               cartPage.click_on_procced_to_checkout()
             cartPage.elements.verify_address_details().should('be.visible')
        cy.xpath("//a[contains(.,'Men Tshirt')]").then((x)=>{
          let confirmProductName= x.text();
          expect(confirmProductName).to.equal('Men Tshirt')
        })
        paymentPage.click_on_place_orderLink()
        paymentPage.elements.payment_message().should('have.text','Payment')
        paymentPage.fill_name_on_card_field(userdata.cardHolder)
        paymentPage.fill_cardNumber_field('56342617623773')
        paymentPage.fill_cvv_input_field(userdata.cvv)
        paymentPage.fill_month_input_field(userdata.expireDate)
        paymentPage.fill_year_input_field(userdata.expireYear)
        paymentPage.click_on_card_submission_button()

      })

    it('Verify order confirmation after a successful payment', () => {
                loginPage.click_on_login_button()
                loginPage.enter_emailfield(userdata.email)
               loginPage.enter_passwordfield(userdata.password)
               loginPage.elements.login_submit_button().should('have.class','btn btn-default')
               loginPage.click_on_login_submitbutton()
               homePage.elements.logged_message().then((x)=>{
                     let loggedSuccessMessage=x.text();
                     expect(loggedSuccessMessage).to.contains(userdata.loginSuccessMessage) })
               homePage.click_on_product_link()
               productPage.search_product_input('Tshirt')
               productPage.click_on_product_search_button()
               productPage.elements.product_able_to_see().then((x)=>{
                       let actProductName=x.text()
                       expect(actProductName).to.equal(userdata.expecteProductdName)})
               productPage.click_onproduct_item()
               productPage.elements.verify_product().then( (x)=>{
                       let shirtName=x.text()
                       expect(shirtName).to.equal(userdata.expecteProductdName)})
               productPage.click_on_product_popup()
               productPage.elements.verify_product_message().then( (x)=>{
                       let addedmMessage=x.text()
                       expect(addedmMessage).to.equal(userdata.confirmationMessage)})
               productPage.elements.verify_your_product_added_message().then( (x)=>{
                       let message=x.text()
                       expect(message).to.equal(userdata.productAddedMessage)})
               productPage.click_on_view_cart()
               homePage.click_on_cartlink()
               cartPage.elements.procced_to_check_out().should('have.text','Proceed To Checkout')
               cartPage.click_on_procced_to_checkout()
             cartPage.elements.verify_address_details().should('be.visible')
        cy.xpath("//a[contains(.,'Men Tshirt')]").then((x)=>{
          let confirmProductName= x.text();
          expect(confirmProductName).to.equal('Men Tshirt')
        })
        paymentPage.click_on_place_orderLink()
        paymentPage.elements.payment_message().should('have.text','Payment')
        paymentPage.fill_name_on_card_field(userdata.cardHolder)
        paymentPage.fill_cardNumber_field(userdata.cardNumber)
        paymentPage.fill_cvv_input_field(userdata.cvv)
        paymentPage.fill_month_input_field(userdata.expireDate)
        paymentPage.fill_year_input_field(userdata.expireYear)
        paymentPage.click_on_card_submission_button()

      })

  })