import { Browser, Builder, By, WebDriver } from "selenium-webdriver";
import { path } from "chromedriver";
import * as chrome from "selenium-webdriver/chrome";

//test 2 --> the items/link are available  in footer menu

describe("checkFooterMenu", () => {
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

  test("check footer menu link ./about", async () => {
    let footerlink = await driver.findElement(
      By.css(
        "a.footer-style__link.footer-style__link_primary[href*='.by/about']"
      )
    );
    await footerlink.click();
  });

  test("check footer menu link ./contacts", async () => {
    let footerlink = await driver.findElement(
      By.css(
        "a.footer-style__link.footer-style__link_primary[href*='.by/contacts']"
      )
    );
    await footerlink.click();
  });

  test("check footer menu link ./advertising", async () => {
    let footerlink = await driver.findElement(
      By.css(
        "a.footer-style__link.footer-style__link_additional[href*='.by/advertising']"
      )
    );
    await footerlink.click();
  });

  test("check footer menu link /edit 'Тарифы'", async () => {
    let footerlink = await driver.findElement(
      By.css(
        "a.footer-style__link.footer-style__link_additional[href*='/edit']"
      )
    );
    await footerlink.click();
  });

  test("check footer menu link ./vacancy", async () => {
    let footerlink = await driver.findElement(
      By.css(
        "a.footer-style__link.footer-style__link_primary[href*='.by/vacancy']"
      )
    );
    await footerlink.click();
  });

  test("check footer menu link .by/manifest", async () => {
    let footerlink = await driver.findElement(
      By.css(
        "a.footer-style__link.footer-style__link_primary[href*='.by/manifest']"
      )
    );
    await footerlink.click();
  });

  test("check footer menu link .by/siterules", async () => {
    let footerlink = await driver.findElement(
      By.css(
        "a.footer-style__link.footer-style__link_primary[href*='.by/siterules']"
      )
    );
    await footerlink.click();
  });

  test("check footer menu link by/publichnye-dogovory", async () => {
    let footerlink = await driver.findElement(
      By.css(
        "a.footer-style__link.footer-style__link_primary[href*='.by/publichnye-dogovory']"
      )
    );
    await footerlink.click();
  });
  test("check footer menu link .by/politika-konfidencialnosti", async () => {
    let footerlink = await driver.findElement(
      By.css(
        "a.footer-style__link.footer-style__link_primary[href*='.by/politika-konfidencialnosti']"
      )
    );
    await footerlink.click();
  });
  test("check footer menu link .support.onliner.by", async () => {
    let footerlink = await driver.findElement(
      By.css(
        "a.footer-style__link.footer-style__link_primary[href*='support.onliner.by']"
      )
    );
    await footerlink.click();
  });
  test("check footer menu link .by/pravila-vozvrata-tovarov-i-deneg", async () => {
    let footerlink = await driver.findElement(
      By.css(
        "a.footer-style__link.footer-style__link_primary[href*='.by/pravila-vozvrata-tovarov-i-deneg']"
      )
    );
    await footerlink.click();
  });
});
