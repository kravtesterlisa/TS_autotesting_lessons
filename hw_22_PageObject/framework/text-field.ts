import { BaseElement } from "./base-element";

export class TextField extends BaseElement {
  public typeText(text: string) {
    return this.element.sendKeys(text);
  }
}
