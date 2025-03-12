import loginPage from "../support/pages/loginPage";
import homePage from "../support/pages/homePage";
import productPage from "../support/pages/productPage";

describe('Product search And Filtering', () => {
// redirect to url
    let userdata;
    before( ()=>{
      cy.fixture('Testdata').then((data)=>{
          userdata=data;
      })
    })

    beforeEach('login',()=>{
      // url redirect
              cy.visit("https://automationexercise.com/")
              loginPage.click_on_login_button()
              loginPage.enter_emailfield(userdata.email)
              loginPage.enter_passwordfield(userdata.password)
              loginPage.elements.login_submit_button().should('have.class','btn btn-default')
              loginPage.click_on_login_submitbutton()   
              homePage.elements.logged_message().then((x)=>{
                let loggedSuccessMessage=x.text();
                expect(loggedSuccessMessage).to.contains(userdata.loginSuccessMessage)})  
              homePage.click_on_product_link()
            
    })

    it('Verify product search with valid keyword', () => {
              productPage.search_product_input(userdata.expecteProductdName)
              productPage.click_on_product_search_button()
              productPage.elements.product_info().then( (x) =>{
                   let actProductName=x.text()
                   expect(actProductName).to.equal(userdata.expecteProductdName)
               }) 

       
    })

    it('Verify no result for invalid product', () => {
        productPage.search_product_input('xyz')
        productPage.click_on_product_search_button()
        productPage.elements.no_product().should('have.length','0')
    })


    it('Verify filtering by category', () => {
         productPage.click_on_men_Tshirt_link()
         productPage.click_On_Tshirt()
         productPage.elements.Tshirt_product_().then( (x)=>{
            let shirtText= x.text()
            expect(shirtText).to.contain(userdata.shirtText)})
    })

    
  })