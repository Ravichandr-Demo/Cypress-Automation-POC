class registerPage{

    //define elements
    elements={
        name_field:()=>cy.get('[data-qa="signup-name"]'),
        new_user_signup:()=> cy.xpath("//h2[contains(.,'New User Signup!')]"),
        email_field:()=>cy.get('[data-qa="signup-email"]'),
        signUp_Button:()=>cy.get('[data-qa="signup-button"]'),
        already_email_exist:()=>cy.xpath("//p[contains(.,'Email Address already exist!')]"),
        gender_select:()=>cy.get('#id_gender1'),
        registration_password:()=>cy.get('[data-qa="password"]'),
        days_select:()=>cy.get('[data-qa="days"]'),
        month_select:()=>cy.get('[data-qa="months"]'),
        year_select:()=>cy.get('[data-qa="years"]'),
        newselecter_check:()=>cy.get('#newsletter'),
        firest_Name:()=>cy.get('[data-qa="first_name"]'),
        last_name:()=>cy.get('[data-qa="last_name"]'),
        company_Name:()=>cy.get('[data-qa="company"]'),
        address1:()=>cy.get('[data-qa="address"]'),
        address2:()=>cy.get('[data-qa="address2"]'),
        country_select:()=>cy.get('[data-qa="country"]'),
        state_field:()=>cy.get('[data-qa="state"]'),
        city_field:()=>cy.get('[data-qa="city"]'),
        zipCode:()=>cy.get('[data-qa="zipcode"]'),
        mobileNumber:()=>cy.get('[data-qa="mobile_number"]'),
        create_account_button:()=>cy.get('[data-qa="create-account"]'),
        Verify_successful_account_created_message:()=>cy.get('b')
    }


    // operation we want to perform here
   fill_name_field(name){
    this.elements.name_field().type(name)
   }


   fill_email_field(email){
    this.elements.email_field().type(email)
   }

   click_signUp_Button(){
    this.elements.signUp_Button().click()
   }

   fill_registration_password(password){
    this.elements.registration_password().type(password)
   }

   fill_firest_Name(firstName){
    this.elements.firest_Name().type(firstName)
   }

   fill_last_name(lastName){
    this.elements.last_name().type(lastName)
   }

   fill_company_Name(company){
    this.elements.company_Name().type(company)
   }

   fill_address1d(address){
    this.elements.address1().type(address)
   }

   fill_address2(address2){
    this.elements.address2().type(address2)
   }

   fill_state_field(state){
    this.elements.state_field().type(state)
   }

   fill_city_field(city){
    this.elements.city_field().type(city)
   }

   fill_zipCode(zip){
    this.elements.zipCode().type(zip)
   }

   fill_mobileNumber(number){
    this.elements.mobileNumber().type(number)
   }

   click_on_create_account_button(){
    this.elements.create_account_button().click()
   }

}

export default new registerPage