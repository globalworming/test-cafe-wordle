import {Selector} from "testcafe";

fixture`exploring the signup`
    .page`http://localhost:5173/signup`
    .beforeEach(async t => {
        t.ctx.someKey = 123;
    });

// Tests
test('Text typing basics', async t => {
    //console.log({key: t.ctx.someKey})
    await t.report("go to account");
    await t.typeText("input#names", 'Peter') // Type name
    await t.report("enter stuff");
    await t.expect(Selector("input#name").value).eql('Peter'); // Check result
    await t.report("done");
});
