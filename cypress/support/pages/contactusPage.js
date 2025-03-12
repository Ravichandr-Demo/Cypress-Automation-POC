class contactUsPage{

    //define elements
    elements={
        verify_get_in_touch_message:()=>cy.xpath("//h2[contains(.,'Get In Touch')]"),
        verify_contactus_form:()=>cy.get("div.contact-form > .title"),
        contactus_name:()=>cy.xpath("//input[@name='name']"),
        contactus_email:()=>cy.xpath("//input[@name='email']"),
        contactus_subject:()=>cy.xpath("//input[@name='subject']"),
        contactus_message:()=>cy.xpath("//textarea[@id='message']"),
        upload_file:()=>cy.xpath("//input[@name='upload_file']"),
        contactus_submit_form:()=>cy.xpath("//input[@name='submit']")
    }


    // operation we want to perform here
   fill_on_contactus_name(name){
    this.elements.contactus_name().type(name)
   }


   fill_on_contactus_email(email){
    this.elements.contactus_email().type(email)
   }

   fill_on_contactus_subject(subject){
    this.elements.contactus_subject().type(subject)
   }

   fill_on_contactus_message(message){
    this.elements.contactus_message().type(message)
   }

   clickon_contactus_submit_form(){
    this.elements.contactus_submit_form().click()
   }
}

export default new contactUsPage