const{By,Builder,until}=require('selenium-webdriver');
require('chromedriver');     
async function logintesting(){
    const driver=await new Builder().forBrowser('chrome').build();
    try{
        await driver.get('http://localhost:5173');
        await driver.wait(until.elementLocated(By.id('username')),5000);
        await driver.findElement(By.id('username')).sendKeys('admin');
        await driver.findElement(By.id('password')).sendKeys('admin123');
        await driver.findElement(By.id('login-button')).click();
const message = await driver
      .wait(until.elementLocated(By.id('login-message')), 5000)
      .getText();      
      console.log(message)

    }
    catch(err){
        console.error('Test failed:', err);
    }
    finally{
        await driver.quit();
    }
}
logintesting()