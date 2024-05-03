import {Selector} from "testcafe";
import Person from "../model/Person";

export default async (t: TestController) => {

    await t.report("enter signup info and submit");

    const p: Person  = t.ctx.actor
    await t.typeText("input#name", p.userName) // Type name
    await t.typeText("input#email", p.email) // Type name
    await t.typeText("input#password", p.password) // Type name
    let countrySelect = Selector('#country');
    await t.click(countrySelect)
    await t.click(countrySelect.find('option').nth(1));
    await t.click('#create-account')
};