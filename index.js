import puppeteer from "puppeteer";

(async () => {
    const browser = await puppeteer.launch({
        headless: false
    })
    const page = await browser.newPage()

    await page.goto("https://web.whatsapp.com/")

    await page.setViewport({ width: 1280, height: 720 });

    await new Promise(resolve => setTimeout(resolve, 35000)); // Esperar 1 minuto para la carga

    console.log("Ya logeado...")

    const contactsList = ["Brandon", "José Luis Mowa", "Markos Mowa", "Fredy MOWA", "Jhordy", "Bryan Y", "Maria Mowa Corporativo", 
    "Brandon", "José Luis Mowa", "Markos Mowa", "Fredy MOWA", "Jhordy", "Bryan Y", "Maria Mowa Corporativo"
    ]

    for (const contact of contactsList) {
        await sentMessage(contact, page);
    }

     // 945 384 934

})()


const sentMessage = async (contact, page) => {
    try {
        await page.click("div._3sHED")

        await page.keyboard.type(contact)

        await new Promise(resolve => setTimeout(resolve, 2000)); // Esperar que carguen los contactos

        const selector = `span[title="${contact}"]`

        const userBox = await page.$(selector)

        if (userBox) {
            await page.click(selector)
            await new Promise(resolve => setTimeout(resolve, 1500))
            await page.click('div[contenteditable="true"][role="textbox"][title="Escribe un mensaje"]')
            await page.keyboard.type("Hola Vecino. Le recordamos que estamos inaugurando una canchita de fútbol en san lejos")
            await page.keyboard.press("Enter")
        } else {
            console.log("Chat/Usuario no encontrado")
        }

        await new Promise(resolve => setTimeout(resolve, randomWaitTime()))

    } catch (error) {
        console.error(`No se pudo mandar mensaje a ${contact}`)
        console.log(error)
    }

}

const randomWaitTime = () => {
    const randomFraction = Math.random();

    const randomNum = 10 + randomFraction * (25 - 10);

    return randomNum * 1000;
}