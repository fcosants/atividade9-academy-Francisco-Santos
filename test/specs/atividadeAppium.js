// describe("Primeiro teste", () => {
    
//     it("App/Alert Dialogs/OK CANCEL DIALOG WITH MESSAGE", async () => {
        // await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        // await $('android=new UiSelector().text("Alert Dialogs").className("android.widget.TextView")').click();
        // await $("id=two_buttons").click();
        // const textoTitulo = await $("android.widget.TextView").getText();
        // expect(textoTitulo).toBe("Lorem ipsum dolor sit aie consectetur adipiscing Plloaso mako nuto siwuf cakso dodtos anr koop.");
    //     const textoButton = await $("android.widget.Button").getText();
    //     expect(textoButton).toBe("App");
        
    // });

    describe("Primeiro teste", () => {
        it("Verificar o botão ok na opção: OK CANCEL DIALOG WITH MESSAGE;", async() => {
            await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
            await $('android=new UiSelector().text("Alert Dialogs").className("android.widget.TextView")').click();
            await $("id=two_buttons").click();
            await $("id=alertTitle").click();
            // const botaoOk = await $("android.widget.TextView").click();
            // expect(botaoOk).toBe("API Demos");
            // await $("android.widget.TextView[3]").click()
            // await $("accessibility id=Alert Dialogs").click();
            // await $("accessibility id=OK Cancel dialog with a message").click();
            // const visibilidadeModal = await $("class =     android.widget.FrameLayout").isDisplayed();
            // expect(visibilidadeModal).toBe(true);
            // const texto = await $('android=new UiSelector().text("Lorem ipsum dolor sit aie consectetur adipiscing Plloaso mako nuto siwuf cakso dodtos anr koop.")');
            // const visibiidadeTexto = await $(texto).isDisplayed();
            // expect(visibiidadeTexto).toBe(true);
            // const botaoOk = await $("id = android:id/button1").getText();
            // expect(botaoOk).toBe("OK");
            // await $(botaoOk).click();
            // expect(visibilidadeModal).toBe(false);
        });

    
    // await $("id=App").click();
    // const textoLimpar = await $("id=clear_button").getText();
    // expect(textoLimpar).toBe("CLEAR");



});