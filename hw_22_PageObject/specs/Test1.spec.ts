import { Browser, Builder, By, until, WebDriver } from "selenium-webdriver";
import { path } from "chromedriver";
import { catalogPage } from "../page-objects/catalogPage";
import * as chrome from "selenium-webdriver/chrome";

//test 1 -->check Search field, input word 'test', searchResult
describe("test Search field", () => {
  let driver: WebDriver;
  beforeEach(async () => {
    const service = new chrome.ServiceBuilder(path);
    driver = await new Builder()
      .forBrowser(Browser.CHROME)
      .setChromeService(service)
      .build();
    await driver.manage().window().maximize();
    await driver.manage().setTimeouts({ pageLoad: 1000 * 10, implicit: 10000 });
    await driver.get("https://catalog.onliner.by/");
  });

  afterEach(() => {
    driver.quit();
  });

  test("test1: Search is returned 10 values", async () => {
    // let page = new catalogPage();
    // page.searchField.typeText("test");
    // await page.searchField.typeText("test");

      // find the iframe
      let searchIframe = await driver.findElement(By.css(".modal-iframe"));
      // switch to the frame
      await driver.switchTo().frame(searchIframe);

      // expect 10 values:
      expect(
        await driver
          .findElements(By.css(".search__result"))
          .then((elements) => elements.length)
      ).toBe(10);
    });
  });
});
