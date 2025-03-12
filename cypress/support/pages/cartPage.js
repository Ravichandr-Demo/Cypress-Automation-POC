class CartPage{

    //define elements
    elements={
        cart_quantity_delete:()=>cy.xpath("//a[@class='cart_quantity_delete']"),
        cart_is_empty:()=>cy.xpath("//b[contains(.,'Cart is empty!')]"),
        procced_to_check_out:()=>cy.xpath("//a[contains(.,'Proceed To Checkout')]"),
        verify_address_details:()=>cy.xpath("//h2[contains(.,'Address Details')]"),
        login_acount_to_procced_message:()=>cy.xpath("//p[contains(.,'Register / Login account to proceed on checkout.')]"),
        continue_on_cart_link:()=>cy.xpath("//button[contains(.,'Continue On Cart')]"),
        shopping_cart_message:()=>cy.xpath("//li[contains(.,'Shopping Cart')]")
    }


    // operation we want to perform here
   click_on_cart_quantity_delete(productName){
    this.elements.cart_quantity_delete().click()
   }

   click_on_procced_to_checkout(){
    this.elements.procced_to_check_out().click()
   }

   click_on_continue_on_cartLink(){
    this.elements.continue_on_cart_link().click()
   }

   click_on_product_popup(){
    this.elements.click_on_popup().click()
   }
   
   click_on_view_cart(){
    this.elements.view_cart().click()
   }


}

export default new CartPage

