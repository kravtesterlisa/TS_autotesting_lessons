import { Browser, Builder, By, Condition, WebDriver } from "selenium-webdriver";
import { path } from "chromedriver";
import * as chrome from "selenium-webdriver/chrome";

//test 4 --> check the sub_menu is visible on page
describe("checking  the  visibility of sub_menu items", () => {
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
  // afterEach(() => {
  //   driver.quit();
  // });

  test("check sub_menu  is available for item 'На каждый день'", async () => {
    const element = await driver.findElement(
      By.css('[data-item-id="Товары на каждый день"]')
    );
    await element.click();
    // the sub_menu is visible on page
    const sub_menu = await driver.findElement(
      By.className(".catalog-navigation-list__aside-list")
    );
    await sub_menu.isDisplayed();
  });
});

// item 'на каждый день' ---> click() ---> isDisplayed new _submenu
