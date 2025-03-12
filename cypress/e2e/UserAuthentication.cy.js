import loginPage from "../support/pages/loginPage";
import homePage from "../support/pages/homePage";

describe('Verify User Registration with valid details', () => {

    beforeEach('login',()=>{
        cy.visit("https://automationexercise.com/")
    })


  let userdata;
  before( ()=>{
    cy.fixture('Testdata').then((data)=>{
        userdata=data; })
    })


  it('Verify Title of Home Page', () => {
    cy.title().should('contain','Automation')
    })

    it('Verify login with correct credentials', () => {
        loginPage.click_on_login_button()
        loginPage.enter_emailfield(userdata.email)
        loginPage.enter_passwordfield(userdata.password)
        loginPage.elements.login_submit_button().should('have.class','btn btn-default')
        loginPage.click_on_login_submitbutton()   
        homePage.elements.logged_message().then((x)=>{
               let loggedSuccessMessage=x.text();
               expect(loggedSuccessMessage).to.contains(userdata.loginSuccessMessage)
            })  
         
    })

    it('Verify login failure with invalidemailAddress', () => {   
        loginPage.click_on_login_button()
        loginPage.enter_emailfield(userdata.invalidemail)
        loginPage.enter_passwordfield(userdata.password)
        loginPage.click_on_login_submitbutton()
        loginPage.elements.error_message().then( (x) =>{
                let errorMessage=x.text()
                expect(errorMessage).to.equal(userdata.expecteErrorMessage)
            })
    })


    it('Verify login failure with InValidpassword', () => {
        loginPage.click_on_login_button()
        loginPage.enter_emailfield(userdata.email)
        loginPage.enter_passwordfield(userdata.invalidpassword)
        loginPage.click_on_login_submitbutton()
        loginPage.elements.error_message().then( (x) =>{
                let errorMessage=x.text()
                expect(errorMessage).to.equal(userdata.expecteErrorMessage)
            })
    })

    it('Verify login failure with Bith Invalid Credentials', () => {  
        loginPage.click_on_login_button()
        loginPage.enter_emailfield(userdata.invalidemail)
        loginPage.enter_passwordfield(userdata.invalidpassword)
        loginPage.click_on_login_submitbutton()
        loginPage.elements.error_message().then( (x) =>{
                let errorMessage=x.text()
                expect(errorMessage).to.equal(userdata.expecteErrorMessage)
            })
    })

    it('Verify logout functionality', () => {
        loginPage.click_on_login_button()
        loginPage.enter_emailfield(userdata.email)
        loginPage.enter_passwordfield(userdata.password)
        loginPage.click_on_login_submitbutton()
        homePage.elements.logged_message().then((x)=>{
               let loggedSuccessMessage=x.text();
               expect(loggedSuccessMessage).to.contains(userdata.loginSuccessMessage)
            }) 
        homePage.elements.logout_icon_visible().should('be.visible').and('exist')
        homePage.elements.logout_icon_visible().click()
            

        
    })
    
  })