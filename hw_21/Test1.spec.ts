// #### Task 1 💻
// - Написать минимум 5 UI тестов для сайта: https://catalog.onliner.by/
// - При написании использовать различные типы селекторов и локаторов
// - Добавить методы ожидания элементов
// - Добавить проверки элементов/текстовых значений

import { Browser, Builder, By, WebDriver } from "selenium-webdriver";
import { path } from "chromedriver";
import * as chrome from "selenium-webdriver/chrome";

//test 1 --> check the page 'catalog.onliner'
describe("visitOnliner", () => {
  let driver: WebDriver;
  beforeEach(async () => {
    const service = new chrome.ServiceBuilder(path);
    driver = await new Builder()
      .forBrowser(Browser.CHROME)
      .setChromeService(service)
      .build();
    await driver.manage().window().maximize();
    await driver.manage().setTimeouts({ implicit: 15000 });
    await driver.get("https://catalog.onliner.by/");
  });
  afterEach(() => {
    driver.quit();
  });
  test("visit catalog.onliner page", async () => {
    let checkItem = await driver
      .findElement(By.css("div.catalog-navigation__title"))
      .getText();
  });
});
