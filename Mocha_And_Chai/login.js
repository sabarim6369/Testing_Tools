const { Builder, By, until } = require('selenium-webdriver');
const { expect } = require('chai');

describe('Login Page Tests', function () {
  let driver;

  this.timeout(30000);

  before(async () => {
    driver = await new Builder().forBrowser('chrome').build();
  });

  after(async () => {
    await driver.quit();
  });

  it('should login successfully with valid credentials', async () => {
    await driver.get('http://localhost:5173/login');

    await driver.findElement(By.id('email')).sendKeys('sabarim@gmail.com');
    await driver.findElement(By.id('password')).sendKeys('admin123');
    await driver.findElement(By.id('login-button')).click();

    const messageElem = await driver.wait(until.elementLocated(By.id('login-message')), 10000);
    const message = await messageElem.getText();

    expect(message).to.equal('Login successful!');
  });
});
