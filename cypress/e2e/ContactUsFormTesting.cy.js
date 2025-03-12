import 'cypress-file-upload';
import homePage from "../support/pages/homePage";
import contactusPage from '../support/pages/contactusPage';


describe('Contact us Form Testing', () => {

    let userdata;
    before( ()=>{
        cy.fixture('Testdata').then((data)=>{
            userdata=data; })
        })

    beforeEach('openapp',()=>{
        cy.visit("https://automationexercise.com/")
        homePage.click_on_contactus_link()
        contactusPage.elements.verify_get_in_touch_message().then((x)=>{
          let textValue=  x.text();
          expect(textValue).to.equal('Get In Touch')
        })
        contactusPage.elements.verify_contactus_form().should('have.text','Get In Touch')
    })

    it('Verify Successful submission of the Contact Us form', () => {
        contactusPage.fill_on_contactus_name(userdata.name)
        contactusPage.fill_on_contactus_email(userdata.email)
        contactusPage.fill_on_contactus_subject(userdata.subjectOfContactUs)
        contactusPage.fill_on_contactus_message(userdata.UserMessage)
        contactusPage.elements.upload_file().attachFile('contactUs.pdf')
        contactusPage.clickon_contactus_submit_form()
        cy.on('window.confirm',(t)=>{
            expect(t).to.equal('Press OK to proceed!')
        })
        cy.get(".status").should('have.text','Success! Your details have been submitted successfully.')
    })


    it('Verify error message of empty fields', () => {
        contactusPage.fill_on_contactus_name(userdata.name)
        contactusPage.fill_on_contactus_email(userdata.email)
        contactusPage.fill_on_contactus_subject(userdata.subjectOfContactUs)
        contactusPage.fill_on_contactus_message(userdata.UserMessage)
        contactusPage.elements.upload_file().attachFile('contactUs.pdf')
        contactusPage.clickon_contactus_submit_form()
        cy.on('window.confirm',(t)=>{
            expect(t).to.equal('Press OK to proceed!')
        })
        cy.get(".status").should('have.text','Success! Your details have been submitted successfully.')
    })

    it('Verify correct redirection after successful submission', () => {
        contactusPage.fill_on_contactus_name(userdata.name)
        contactusPage.fill_on_contactus_email(userdata.email)
        contactusPage.fill_on_contactus_subject(userdata.subjectOfContactUs)
        contactusPage.fill_on_contactus_message(userdata.UserMessage)
        contactusPage.elements.upload_file().attachFile('contactUs.pdf')
        contactusPage.clickon_contactus_submit_form()
        cy.on('window.confirm',(t)=>{
            expect(t).to.equal('Press OK to proceed!')
        })
        cy.get(".status").should('have.text','Success! Your details have been submitted successfully.')  
    })


  })