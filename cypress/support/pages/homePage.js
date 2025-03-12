class homePage{

    //define elements
    elements={
        product_link:()=>cy.xpath("//a[contains(.,' Products')]"),
        contactus_link:()=>cy.xpath("//a[contains(.,'Contact us')]"),
        logged_message:()=>cy.xpath("//a[contains(.,' Logged in as ')]"),
        logout_icon_visible:()=>cy.xpath("//a[contains(.,' Logout')]"),
        cart_link:()=>cy.xpath("//ul[@class='nav navbar-nav']/li/a[contains(.,'Cart')]")
    }


    // operation we want to perform here
   click_on_product_link(){
    this.elements.product_link().click()
   }


   click_on_cartlink(){
    this.elements.cart_link().click()
   }

   click_on_contactus_link(){
    this.elements.contactus_link().click()
   }

}

export default new homePage