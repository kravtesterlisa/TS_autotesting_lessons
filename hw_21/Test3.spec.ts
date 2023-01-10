import { Browser, Builder, By, Condition, WebDriver } from "selenium-webdriver";
import { path } from "chromedriver";
import * as chrome from "selenium-webdriver/chrome";
import { checkout } from "superagent";
import { chunk } from "cypress/types/lodash";

//test 3 --> check that picture size is correctly (width is 72px)
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

  test("check width for element 'picture'", async () => {
    const element = await driver
      .findElement(
        By.css("img.catalog-navigation-classifier__item-image[width='72px']")
      )
      .getRect();
    const checkWidth = element.width;
    if (checkWidth === 72) {
      console.log("correct width");
    } else console.log("the width was changed");
  });
});
