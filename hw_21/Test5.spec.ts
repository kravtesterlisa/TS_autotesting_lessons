import { Browser, Builder, By, Condition, WebDriver } from "selenium-webdriver";
import { path } from "chromedriver";
import * as chrome from "selenium-webdriver/chrome";

//test 5 --> heck item 'Корзина' can be selected
describe("check element size", () => {
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

  test("check item 'Корзина'", async () => {
    const element = await driver.findElement(
      By.css("a.auth-bar__item.auth-bar__item--cart[title='Корзина']")
    );
    await element.click();
    const check_page = await driver.findElement(
      By.className(
        "cart-form__title cart-form__title_big-alter cart-form__title_condensed-additional"
      )
    );
    await check_page.isDisplayed();
  });
});
