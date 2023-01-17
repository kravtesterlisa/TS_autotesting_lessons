import { Browser, Builder, By, until, WebDriver } from "selenium-webdriver";
import { path } from "chromedriver";
import * as chrome from "selenium-webdriver/chrome";

//test 5: block Prime is visible on page
describe("set page /catlitter ,check-box 'Prime'", () => {
  let driver: WebDriver;
  beforeEach(async () => {
    const service = new chrome.ServiceBuilder(path);
    driver = await new Builder()
      .forBrowser(Browser.CHROME)
      .setChromeService(service)
      .build();
    await driver.manage().window().maximize();
    await driver.manage().setTimeouts({ pageLoad: 1000 * 10, implicit: 10000 });
    await driver.get("https://catalog.onliner.by/catlitter");
  });

  afterEach(() => {
    driver.quit();
  });
  test("block Prime is visible", async () => {
    // let blockPrime = await driver.findElement(
    //   By.css(".schema-filter__bonus-description")
    // );
    // await blockPrime.getText();
    // expect(blockPrime).toBe(
    //   "Доставка со склада Onlíner в удобное для вас время"
    // );

    let primeAttrib = await driver.findElement(
      By.css(".schema-filter__bonus-item.schema-filter__bonus-item_primary")
    );
    let compareElement = await primeAttrib.getAttribute("data-bind");
    expect(compareElement).toBe(
      "template: {name: 'schema-filter-template__boolean-bonus-prime', data: $root.getBonusFacet(facet)}"
    );
  });
});
