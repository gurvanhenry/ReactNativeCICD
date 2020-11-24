import { by, device, element } from 'detox';

describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should show "Who are you?"', async () => {
    await expect(element(by.text('Who are you?'))).toBeVisible();
  });
});
