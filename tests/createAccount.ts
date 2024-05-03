import shouldSeeLoginSuccessful from "../step/expectLoginSuccessful";
import enterSignupInfoAndSubmit from "../step/enterSignupInfoAndSubmit";
import shouldSeeLoginPage from "../step/shouldSeeLoginPage";
import Person from "../model/Person";

fixture`exploring the signup`
    .page`http://localhost:5173/signup`
    .beforeEach(async t => {
        t.ctx.actor=new Person();
    });

// Tests
test('sign up sucessful', async t => {
    await enterSignupInfoAndSubmit(t);
    await shouldSeeLoginPage(t);
    await shouldSeeLoginSuccessful(t);
});
