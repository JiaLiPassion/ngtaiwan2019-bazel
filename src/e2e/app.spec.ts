import { browser, by, element } from 'protractor';

const timeout = 2000;

describe('e2e', () => {
  beforeEach(() => {
    browser.waitForAngularEnabled(false);
  });

  it('should output username', async () => {
    await browser.get(browser.baseUrl);
    const userElem = await element(by.id('user'));
    await browser.wait(() => userElem.isDisplayed(), timeout);
    expect(userElem.getText()).toEqual('testUser');
  });
});
