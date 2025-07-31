const { Builder, By, until } = require('selenium-webdriver');
require('chromedriver');

async function testLogin() {
  const driver = await new Builder().forBrowser('chrome').build();

  try {
    await driver.get('http://localhost:5173');

    await driver.wait(until.elementLocated(By.id('username')), 5000);

    // Fill in correct credentials
    await driver.findElement(By.id('username')).sendKeys('admin');
    await driver.findElement(By.id('password')).sendKeys('admin123');

    // Click login
    await driver.findElement(By.css('[data-testid="login-button"]')).click();

   
    const message = await driver
      .wait(until.elementLocated(By.id('login-message')), 5000)
      .getText();

    console.log('Login Message:', message);
  } catch (err) {
    console.error('Test failed:', err);
  } finally {
    await driver.quit();
  }
}

testLogin();
