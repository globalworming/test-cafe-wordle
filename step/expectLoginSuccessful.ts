import {Selector} from "testcafe";
import Person from "../model/Person";

export default async (t: TestController) => {
    await t.report("should log in successfully");
    const actor: Person = t.ctx.actor;
    await t.typeText("input#name", actor.userName)
    await t.typeText("input#password", actor.password)
    await t.click('#login')
    await t.expect(Selector("h3").withText("How to play").exists).ok(); // Check result
};