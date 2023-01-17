import { Browser, Builder, By, until, WebDriver } from "selenium-webdriver";
import { path } from "chromedriver";
import * as chrome from "selenium-webdriver/chrome";

//test 2 check the title name
describe("Page title: Каталог Onliner", () => {
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

  test("check the page title --> is 'Каталог Onlíner' ", async () => {
    expect(await driver.getTitle().then((el) => el)).toBe("Каталог Onlíner");
  });
});
