import page from './page-model';

fixture `1`
    .page `./example/`;

// Tests
test('1', async t => {
    //console.log({fixture: t.fixture})
    //console.log({test: t.test})
    await t.report("enter name");
    await t.typeText(page.nameInput, 'Peter') // Type name
    await t.report("enter name replacing old");
    await t.typeText(page.nameInput, 'Paker', { replace: true }) // Replace with last name
    await t.typeText(page.nameInput, 'r', { caretPos: 2 }) // Correct last name

    await t.report("name should be Parker");
    await t.expect(page.nameInput.value).eql('Parker'); // Check result
});

// Tests
test('2', async t => {
    //console.log({fixture: t.fixture})
    //console.log({test: t.test})
    await t.report("enter name");
    await t.typeText(page.nameInput, 'Peter') // Type name
    await t.report("enter name replacing old");
    await t.typeText(page.nameInput, 'Paker', { replace: true }) // Replace with last name
    await t.typeText(page.nameInput, 'r', { caretPos: 2 }) // Correct last name

    await t.report("name should be Parker");
    await t.expect(page.nameInput.value).eql('Parker'); // Check result
});

// Tests
test('3', async t => {
    //console.log({fixture: t.fixture})
    //console.log({test: t.test})
    await t.report("enter name");
    await t.typeText(page.nameInput, 'Peter') // Type name
    await t.report("enter name replacing old");
    await t.typeText(page.nameInput, 'Paker', { replace: true }) // Replace with last name
    await t.typeText(page.nameInput, 'r', { caretPos: 2 }) // Correct last name

    await t.report("name should be Parker");
    await t.expect(page.nameInput.value).eql('Parker'); // Check result
});

fixture `2`
    .page `./example/`;

// Tests
test('2.1', async t => {
    //console.log({fixture: t.fixture})
    //console.log({test: t.test})
    await t.report("enter name");
    await t.typeText(page.nameInput, 'Peter') // Type name
    await t.report("enter name replacing old");
    await t.typeText(page.nameInput, 'Paker', { replace: true }) // Replace with last name
    await t.typeText(page.nameInput, 'r', { caretPos: 2 }) // Correct last name

    await t.report("name should be Parker");
    await t.expect(page.nameInput.value).eql('Parker'); // Check result
});

// Tests
test('2.2', async t => {
    //console.log({fixture: t.fixture})
    //console.log({test: t.test})
    await t.report("enter name");
    await t.typeText(page.nameInput, 'Peter') // Type name
    await t.report("enter name replacing old");
    await t.typeText(page.nameInput, 'Paker', { replace: true }) // Replace with last name
    await t.typeText(page.nameInput, 'r', { caretPos: 2 }) // Correct last name

    await t.report("name should be Parker");
    await t.expect(page.nameInput.value).eql('Parker'); // Check result
});

// Tests
test('2.3', async t => {
    //console.log({fixture: t.fixture})
    //console.log({test: t.test})
    await t.report("enter name");
    await t.typeText(page.nameInput, 'Peter') // Type name
    await t.report("enter name replacing old");
    await t.typeText(page.nameInput, 'Paker', { replace: true }) // Replace with last name
    await t.typeText(page.nameInput, 'r', { caretPos: 2 }) // Correct last name

    await t.report("name should be Parker");
    await t.expect(page.nameInput.value).eql('Parker'); // Check result
});
