import shouldSeeLoginSuccessful from "../step/expectLoginSuccessful";
import enterSignupInfoAndSubmit from "../step/enterSignupInfoAndSubmit";
import shouldSeeLoginPage from "../step/shouldSeeLoginPage";
import Person from "../model/Person";

fixture`env`

test('dev mode', async t => {
    console.log('Development mode: ', process.env.DEV_MODE);
});
