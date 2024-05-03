import {Selector} from "testcafe";

export default async (t: TestController) => {

    await t.report("enter signup info and submit");

    let userName = t.ctx.userName;
    await t.typeText("input#name", userName) // Type name
    await t.typeText("input#email", userName + '@example.com') // Type name
    await t.typeText("input#password", 'aA1!pass') // Type name
    let countrySelect = Selector('#country');
    await t.click(countrySelect)
    await t.click(countrySelect.find('option').nth(1));
    await t.click('#create-account')
};