import loginPage from "../pageobjects/login.page";
import HomePage from "../pageobjects/home.page";
import CartPage from "../pageobjects/cart.page";


describe('Login Test', () => {
    it('Test 1 - Successfull Login', async () => {
        
        await loginPage.open()
        await loginPage.login("standard_user", "secret_sauce")
        await HomePage.validateOnHomePage()
    });

    it('Test 2 - Wrong Password attempt', async () => {

        await loginPage.open()
        await loginPage.login("standard_user", "wrong password")
        await loginPage.errorMessageLogin()
    })

    it('Test 3 - Add Product to Cart', async () => {
        await HomePage.open()
        await HomePage.clickaddToCartButton()
        await HomePage.validateProductInCart()
        await HomePage.clickCartIcon()
        await CartPage.validateOnCartPage()
    })


});