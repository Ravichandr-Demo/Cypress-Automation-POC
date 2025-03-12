import loginPage from "../support/pages/loginPage";
import homePage from "../support/pages/homePage";
import productPage from "../support/pages/productPage";
import cartPage from "../support/pages/cartPage";

describe('Checkout And Order confirmation', () => {

    let userdata;
    before( ()=>{
      cy.fixture('Testdata').then((data)=>{
          userdata=data;})
    })

    beforeEach('login',()=>{
        cy.visit("https://automationexercise.com/")
        })
    
    it('Verify successfull checkout for logged-in user', () => {
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
    })


    it('Verify checkout process for guest users', () => {
        homePage.click_on_product_link()
        productPage.search_product_input('Tshirt')
        productPage.click_on_product_search_button()
        productPage.elements.product_able_to_see().then((x)=>{
          let actProductName=x.text()
          expect(actProductName).to.equal(userdata.expecteProductdName)
        })
        productPage.click_onproduct_item()
        productPage.elements.verify_product().then( (x)=>{
            let shirtName=x.text()
            expect(shirtName).to.equal(userdata.expecteProductdName)
        })
        productPage.click_on_product_popup()
        productPage.elements.verify_product_message().then( (x)=>{
            let addedmMessage=x.text()
            expect(addedmMessage).to.equal(userdata.confirmationMessage)
        })
        productPage.elements.verify_your_product_added_message().then( (x)=>{
            let message=x.text()
            expect(message).to.equal(userdata.productAddedMessage)
        })
        productPage.click_on_view_cart()
        cartPage.elements.procced_to_check_out().should('have.text','Proceed To Checkout')
        cartPage.click_on_procced_to_checkout()
        cartPage.elements.login_acount_to_procced_message().should('have.text','Register / Login account to proceed on checkout.')
        cartPage.click_on_continue_on_cartLink
      })

    it('Verify from validation empty fields or incorrect input', () => {
        homePage.click_on_cartlink()
        cartPage.elements.shopping_cart_message().should('have.text','Shopping Cart')
        cartPage.elements.cart_is_empty().should('have.text','Cart is empty!')
        cartPage.elements.cart_is_empty().then((x)=>{
           let emptyMessage= x.text();
           expect(emptyMessage).to.contains('Cart is empty!')
        })
      }) 

    it('Verify correct order summary before payment', () => {
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
      }) 
  })