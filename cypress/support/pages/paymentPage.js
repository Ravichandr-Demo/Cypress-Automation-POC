class PaymentPage{

    //define elements
    elements={
        place_orderLink:()=>cy.xpath("//a[contains(.,'Place Order')]"),
        payment_message:()=>cy.xpath("//h2[contains(.,'Payment')]"),
        name_on_card_field:()=>cy.xpath("//input[@name='name_on_card']"),
        cardNumber_field:()=>cy.xpath("//input[@name='card_number']"),
        cvv_input_field:()=>cy.xpath("//input[@name='cvc']"),
        month_input_field:()=>cy.xpath("//input[@name='expiry_month']"),
        year_input_field:()=>cy.xpath("//input[@name='expiry_year']"),
        card_submission_button:()=>cy.xpath("//button[@id='submit']"),
        your_order_confirmed_message:()=>cy.xpath("//p[contains(.,'Congratulations! Your order has been confirmed!')]")

    }


    // operation we want to perform here
   click_on_place_orderLink(){
    this.elements.place_orderLink().click()
   }


   fill_name_on_card_field(name){
    this.elements.name_on_card_field().type(name)
   }

   fill_cardNumber_field(cardNumber){
    this.elements.cardNumber_field().type(cardNumber)
   }

   fill_cvv_input_field(cvv){
    this.elements.cvv_input_field().type(cvv)
   }

   fill_month_input_field(month){
    this.elements.month_input_field().type(month)
   }

   fill_year_input_field(year){
    this.elements.year_input_field().type(year)
   }

   click_on_card_submission_button(){
    this.elements.card_submission_button().click()
   }

}

export default new PaymentPage

// cy.xpath("//a[contains(.,'Place Order')]").click()
// cy.xpath("//h2[contains(.,'Payment')]").should('have.text','Payment')
// cy.xpath("//input[@name='name_on_card']").type(userdata.cardHolder)
// cy.xpath("//input[@name='card_number']").type(userdata.cardNumber)
// cy.xpath("//input[@name='cvc']").type(userdata.cvv)
// cy.xpath("//input[@name='expiry_month']").type(userdata.expireDate)
// cy.xpath("//input[@name='expiry_year']").type(userdata.expireYear)
// cy.xpath("//button[@id='submit']").click()