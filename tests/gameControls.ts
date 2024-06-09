import shouldSeeLoginSuccessful from "../step/expectLoginSuccessful";
import enterSignupInfoAndSubmit from "../step/enterSignupInfoAndSubmit";
import shouldSeeLoginPage from "../step/shouldSeeLoginPage";
import Person from "../model/Person";
import {Selector} from "testcafe";


fixture`how people control the game`
    .page`http://localhost:5173`
    .beforeEach(async t => {
        t.ctx.actor=new Person();
        await signupAndSignInNewUser(t);
        await closeHowToPlayModal(t)
    });


test('where on screen keyboard types', async t => {
    await typeWithOnScreenKeyboard(t, 'Q');
    await expectFirstGameFieldToShow(t, 'Q')
});

test('where on screen keyboard types', async t => {
    await typeWithKeyboard(t, 'Q');
    await expectFirstGameFieldToShow(t, 'Q')
});


async function signupAndSignInNewUser(t: TestController) {
    await t.click(Selector('a[href*="signup"]'))
    await enterSignupInfoAndSubmit(t);
    await shouldSeeLoginPage(t);
    await shouldSeeLoginSuccessful(t);
}

async function closeHowToPlayModal(t: TestController) {
    await t.click(Selector(".modal-close"))
}


async function typeWithOnScreenKeyboard(t, key: string) {
    await t.click(Selector('#root button').withText(key))
}

async function expectFirstGameFieldToShow(t, key: string) {
    await t.expect(Selector('.letter-container').nth(0).innerText).eql(key);
}


async function typeWithKeyboard(t, key: string) {
    await t.pressKey(key )
}
