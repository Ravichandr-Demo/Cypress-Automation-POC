import loginPage from "../support/pages/loginPage";
import homePage from "../support/pages/homePage";
import productPage from "../support/pages/productPage";
import cartPage from "../support/pages/cartPage";


describe('Adding and Removing Items from the cart', () => {

    let userdata;
  before( ()=>{
    cy.fixture('Testdata').then((data)=>{
        userdata=data;
    })
  })

  beforeEach('login',()=>{
    cy.visit("https://automationexercise.com/")
    loginPage.click_on_login_button()
    loginPage.enter_emailfield(userdata.email)
    loginPage.enter_passwordfield(userdata.password)
    loginPage.elements.login_submit_button().should('have.class','btn btn-default')
    loginPage.click_on_login_submitbutton()   
    homePage.elements.logged_message().then((x)=>{
      let loggedSuccessMessage=x.text();
      expect(loggedSuccessMessage).to.contains(userdata.loginSuccessMessage) })              
    })

    it('Verify adding products to the cart from the product page', () => {
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
    })

    it('Verify removing products from the cart', () => {
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
      cartPage.click_on_cart_quantity_delete()
      cartPage.elements.cart_is_empty().then((x)=>{
        let emptyMessage=x.text()
        expect(emptyMessage).to.equal(userdata.cartEmptyMessage)
      })
    })


  })