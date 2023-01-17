import { By } from "selenium-webdriver";
import { Iframe } from "../framework/iframe";
import { TextField } from "../framework/text-field";
import { BasePage } from "./basePage";

export class catalogPage extends BasePage {
  public readonly searchField = new TextField(
    By.css("input.fast-search__input"),
    "SearchField"
  );
  // let searchIframe = await driver.findElement(By.css(".modal-iframe"));
  public readonly searchIframe = new Iframe(
    By.css(".modal-iframe"),
    "SearchIframe"
  );
}
