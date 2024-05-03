import {Selector} from "testcafe";

export default async (t: TestController) => {
    await t.report("should log in successfully");
    await t.typeText("input#name", t.ctx.userName) // Type name
    await t.typeText("input#password", 'aA1!pass') // Type name
    await t.click('#login')
    await t.expect(Selector("h3").withText("How to play").exists).ok(); // Check result
};