const { Builder, By, Key } = require('selenium-webdriver');

(async function simpleTest() {
    let driver = await new Builder().forBrowser('chrome').build();

        await driver.get('https://www.google.com');

        await driver.findElement(By.name('q')).sendKeys('prudhvi', Key.RETURN);

        
})();
