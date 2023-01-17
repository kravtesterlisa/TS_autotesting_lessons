import { By, WebElement } from "selenium-webdriver";
import { WebDriver } from "selenium-webdriver";

export abstract class BaseElement {
  private driver: WebDriver;

  constructor(private readonly selector: By, public readonly name: string) {
    // this.driver.findElement(this.selector);
  }
  protected get element() {
    return this.driver.findElement(this.selector);
  }

  public clickElement() {
    return this.element.click();
  }
  public getAttribute(attributeName: string) {
    return this.element.getAttribute(attributeName);
  }
  public getTitle(): Promise<string> {
    return this.driver.getTitle();
  }
}
