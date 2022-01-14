const Apify = require('apify');
const { INPUT } = require('./input');
const { log } = Apify.utils;

Apify.main(async () => {
    // Get the username and password inputs
    // const input = await Apify.getValue('INPUT');

    const browser = await Apify.launchPuppeteer();
    const page = await browser.newPage();
    await page.goto('https://learn.gomycode.co');

    // Login
    await page.type('#login_email',INPUT.username);
    await page.type('#login_password', INPUT.password);
    await page.click('button.login__form__login__btn');
    await page.waitForNavigation();

    // Get cookies
    const cookies = await page.cookies();

    // Use cookies in another tab or browser
    const page2 = await browser.newPage();
    await page2.setCookie(...cookies);
    // Open the page as a logged-in user
    await page2.goto('https://learn.gomycode.co/checkpoints');
    await page2.click('tbody.ant-table-tbody tr:first-child td:last-child a')
    // await browser.close();

    log.info('Done.');
});