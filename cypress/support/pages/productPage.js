class ProductPage{

    //define elements
    elements={
        search_product:()=>cy.xpath("//input[@id='search_product']"),
        click_on_product:()=>cy.xpath("//button[@id='submit_search']"),
        product_able_to_see:()=>cy.xpath("//div[@class='productinfo text-center']/p[contains(.,'Men Tshirt')]"),
        product_item:()=>cy.xpath("(//div[@class='choose'])[1]"),
        verify_product:()=>cy.xpath("//h2[contains(.,'Men Tshirt')]"),
        click_on_popup:()=>cy.xpath("//button[@class='btn btn-default cart']"),
        verify_product_message:()=>cy.xpath("//h4[contains(.,'Added!')]"),
        verify_your_product_added_message:()=>cy.xpath("//p[contains(.,'Your product has been added to cart.')]"),
        view_cart:()=>cy.xpath("//u[contains(.,'View Cart')]"),
        no_product:()=>cy.get('.col-sm-9 padding-right'),
        men_Tshirt_link:()=>cy.xpath("(//span[@class='badge pull-right'])[2]"),
        click_Tshirt:()=>cy.xpath("//a[contains(.,'Tshirts')]"),
        Tshirt_product_:()=>cy.xpath("//h2[contains(.,'Men - Tshirts Products')]"),
        product_info:()=>cy.xpath("//div[@class='productinfo text-center']/p[contains(.,'Men Tshirt')]")
    }


    // operation we want to perform here
   search_product_input(productName){
    this.elements.search_product().type(productName)
   }

   click_on_product_search_button(){
    this.elements.click_on_product().click()
   }

   click_onproduct_item(){
    this.elements.product_item().click()
   }

   click_on_product_popup(){
    this.elements.click_on_popup().click()
   }
   
   click_on_view_cart(){
    this.elements.view_cart().click()
   }

   click_on_men_Tshirt_link(){
    this.elements.men_Tshirt_link().click()
   }

   click_On_Tshirt(){
    this.elements.click_Tshirt().click()
   }

}

export default new ProductPage

// cy.xpath("//input[@id='search_product']").type('Tshirt')
//         cy.xpath("//button[@id='submit_search']").click()
//         cy.xpath("//div[@class='productinfo text-center']/p[contains(.,'Men Tshirt')]").then( (x) =>{
//             let actProductName=x.text()
//             expect(actProductName).to.equal(userdata.expecteProductdName)
//         })