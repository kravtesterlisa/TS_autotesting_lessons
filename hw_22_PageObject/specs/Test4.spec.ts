import { Browser, Builder, By, until, WebDriver } from "selenium-webdriver";
import { path } from "chromedriver";
import * as chrome from "selenium-webdriver/chrome";

//test 4:  set page https://catalog.onliner.by/catlitter
describe("set page /catlitter", () => {
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

  test('set page "Наполнители для туалетов"', async () => {
    let zootovaryElement = await driver.findElement(
      By.css("[data-item-id='Зоотовары']")
    );
    await zootovaryElement.click();

    let checkCats = await driver.findElement(
      By.css(".b-tile-main[href*='catlitter']")
    );
    await checkCats.click();

    let catlitterPage = await driver
      .findElement(By.css(".schema-header__title.js-schema-header_title"))
      .getText();
    expect(catlitterPage).toBe("Наполнители для туалетов");
  });
});
