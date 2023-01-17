import { Browser, Builder, By, until, WebDriver } from "selenium-webdriver";
import { path } from "chromedriver";
import * as chrome from "selenium-webdriver/chrome";
import { elementTextMatches } from "selenium-webdriver/lib/until";

//test check item in category "Зоотовары"
describe("category 'Зоотовары'", () => {
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

  test('check items in category "Зоотовары"', async () => {
    let zootovaryElement = await driver.findElement(
      By.css("[data-item-id='Зоотовары']")
    );
    zootovaryElement.click();

    let checkCats = await driver.findElement(By.id("widget-1-307"));
    expect(await checkCats.isDisplayed);
  });
});
