import { by, device, element } from 'detox';

describe('Main', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('show "Who are you?"', async () => {
    await expect(element(by.text('Who are you?'))).toBeVisible();
  });

  it('refuse me with a message if I get in with no name', async () => {
    await element(by.text('Get in')).tap();
    await expect(
      element(by.text('Your name is not accepted 🙃')),
    ).toBeVisible();
    await element(by.text('OK')).tap();
  });

  it('accept me if I give a valid name', async () => {
    await element(by.id('TextInput_name')).typeText('Gurvan');
    await element(by.text('Get in')).tap();
    await expect(element(by.text('Welcome Gurvan 🥃'))).toBeVisible();
    await element(by.text('Leave')).tap();
    await expect(element(by.text('Who are you?'))).toBeVisible();
  });
});
