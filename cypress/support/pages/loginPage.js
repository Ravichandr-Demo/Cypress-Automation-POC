class LoginPage{

    //define elements
    elements={
        signup_login_button:()=> cy.xpath("//a[contains(.,' Signup / Login')]"),
        email_input:() => cy.xpath("//input[@name='email'][@data-qa='login-email']"),
        password_input:()=>cy.xpath("//input[@name='password'][@data-qa='login-password']"),
        login_submit_button:()=>cy.xpath("//button[contains(.,'Login')]"),
        error_message:()=>cy.xpath("//p[contains(.,'Your email or password is incorrect!')]")
    }


    // operation we want to perform here
    click_on_login_button(){
        this.elements.signup_login_button().click()
    }

    enter_emailfield(email){
        this.elements.email_input().type(email)
    }

    enter_passwordfield(password){
        this.elements.password_input().type(password)
    }

    click_on_login_submitbutton(){
        this.elements.login_submit_button().click()
    }

    



}

export default new LoginPage