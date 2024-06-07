// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Edit Task', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('Edit Task', async function() {
    await driver.get("http://localhost:5173/")
    await driver.manage().window().setRect({ width: 1552, height: 832 })
    await driver.findElement(By.css(".toDo:nth-child(12) .icon:nth-child(1) > path")).click()
    await driver.findElement(By.css(".popup__input_holder > input")).click()
    await driver.findElement(By.css(".popup__input_holder > input")).click()
    {
      const element = await driver.findElement(By.css(".popup__input_holder > input"))
      await driver.actions({ bridge: true}).doubleClick(element).perform()
    }
    await driver.findElement(By.css(".popup__input_holder > input")).click()
    await driver.findElement(By.css(".popup__input_holder > input")).sendKeys("Edit Task")
    await driver.findElement(By.css(".popup__input_holder > button")).click()
  })
})
