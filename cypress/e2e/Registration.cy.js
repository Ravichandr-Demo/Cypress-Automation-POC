import loginPage from "../support/pages/loginPage";
import { faker, Faker } from "@faker-js/faker";
import RegisterPage from "../support/pages/RegisterPage";

describe('My First Test', () => {


  let RegisterationData;
  before( ()=>{
    cy.fixture('RegisterData').then((data)=>{
      RegisterationData=data; })
    })


  beforeEach('login',()=>{
    cy.visit('https://automationexercise.com')
    loginPage.click_on_login_button()
    RegisterPage.elements.new_user_signup().then((x)=>{
      let verifyNewUser=x.text()
      expect(verifyNewUser).to.equal('New User Signup!')})
    })



  it('You are in register page', () => {
    const randomEmail=faker.internet.email();
    const randomName=faker.internet.username()
    const randomPassword=faker.internet.password()
    const randomfirstname=faker.internet.username()
    const randonlastName=faker.internet.username()
    const randomcompany=faker.internet.userAgent()
    const randomaddress=faker.location.streetAddress()
    const randomstate=faker.location.state()
    const randoncity=faker.location.city()
    const radomzipCode=faker.location.zipCode()
    const randommobileNumber=faker.phone.number()

    RegisterPage.fill_name_field(randomName)
    RegisterPage.fill_email_field(randomEmail)
    RegisterPage.click_signUp_Button()
    RegisterPage.elements.gender_select().check()
    RegisterPage.fill_registration_password(randomPassword)
    RegisterPage.elements.days_select().select('4')
    RegisterPage.elements.month_select().select('3')
    RegisterPage.elements.year_select().select('2001')
    RegisterPage.elements.newselecter_check().check()
    RegisterPage.fill_firest_Name(randomfirstname)
    RegisterPage.fill_last_name(randonlastName)
    RegisterPage.fill_company_Name(randomcompany)
    RegisterPage.fill_address1d(randomaddress)
    RegisterPage.fill_address2(randomaddress)
    RegisterPage.elements.country_select().select('India')
    RegisterPage.fill_state_field(randomstate)
    RegisterPage.fill_city_field(randoncity)
    RegisterPage.fill_zipCode(radomzipCode)
    RegisterPage.fill_mobileNumber(randommobileNumber)
    RegisterPage.click_on_create_account_button()
    RegisterPage.elements.Verify_successful_account_created_message().then((x)=>{
     let actualAccountCreated= x.text()
     expect(actualAccountCreated).to.equal('Account Created!')
    })

  })

  it('You are in register Verify already exist email', () => {
    
    RegisterPage.fill_name_field(RegisterationData.name)
    RegisterPage.fill_email_field(RegisterationData.email)
    RegisterPage.click_signUp_Button()
    RegisterPage.elements.already_email_exist().then((x)=>{
      let actualText=x.text();
      expect(actualText).to.equal('Email Address already exist!')
    })

  })
})