import {Selector} from "testcafe";

export default async (t: TestController) => {
    await t.report("should see the login page");
    await t.expect(Selector('#login').exists).ok({timeout: 5000})
};