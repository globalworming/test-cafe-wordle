import page from './page-model';

fixture `A set of examples that illustrate how to use TestCafe API`
    .page `./example/`;

// Tests
test('Text typing basics', async t => {
    //console.log({fixture: t.fixture})
    //console.log({test: t.test})
    await t
        .typeText(page.nameInput, 'Peter') // Type name
        .typeText(page.nameInput, 'Paker', { replace: true }) // Replace with last name
        .typeText(page.nameInput, 'r', { caretPos: 2 }) // Correct last name
        .expect(page.nameInput.value).eql('Parker'); // Check result
});
