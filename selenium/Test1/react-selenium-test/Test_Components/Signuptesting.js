const {Builder,By,until} = require('selenium-webdriver');
require('chromedriver');
async function Signuptesting(){
    const driver=await new Builder().forBrowser('chrome').build();
    try{
await driver.get('http://localhost:5173/signup');
await driver.wait(until.elementLocated(By.id('username')),5000);
await driver.findElement(By.id('username')).sendKeys('admin');
await driver.findElement(By.id('Age')).sendKeys(25);
await driver.findElement(By.id('email')).sendKeys('sabarim@gmail.com');
await driver.findElement(By.id('password')).sendKeys('admin123');
await driver.findElement(By.id('signup-button')).click();
const message = await driver
      .wait(until.elementLocated(By.id('signup-message')), 10000)
      .getText();
      console.log(message);


    }
    catch(err){
        console.error('Test failed:', err);
    }
    finally{
        await driver.quit();
    }

}
module.exports = Signuptesting;