const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
    const page = await browser.newPage();
    await page.setViewport({
        width: 1200,
        height: 4000
    });

    while(1) {
        await page.goto('https://en.wikipedia.org/wiki/Special:Random');
        await page.screenshot({path: 'wikiSafari.png'});
        await page.waitFor(1000);
    }

    await browser.close();
})();