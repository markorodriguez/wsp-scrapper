import puppeteer from "puppeteer";

(async() => {
    const browser = await puppeteer.launch({
        headless: false
    })
    const page = await browser.newPage()

    await page.goto("https://web.whatsapp.com/")

    await page.setViewport({width: 1600, height: 1024});

    await new Promise(resolve => setTimeout(resolve, 25000)); // Esperar 1 minuto para la carga

    console.log("Ya logeado...")

    await page.click("div._3sHED")

    await page.keyboard.type("uwu")

    await new Promise(resolve => setTimeout(resolve, 5000)); // Esperar que carguen los contactos



})()

