describe("Primeiro teste.apk", () => {
    afterEach(async() =>{
        driver.reset();
    });
    
    it("Executando teste no App/Alert Dialogs/OK CANCEL DIALOG WITH MESSAGE", async () => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Alert Dialogs").className("android.widget.TextView")').click();
        await $("id=two_buttons").click();
        await $("id=alertTitle").isDisplayed();
        await $('android=new UiSelector().text("OK").className("android.widget.Button")').click();
        });

    it("Executando teste em App/Alert Dialogs/LIST DIALOG", async () => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Alert Dialogs").className("android.widget.TextView")').click();
        await $("id=select_button").click();
        await $('android=new UiSelector().text("Header title").className("android.widget.TextView")').isDisplayed();
        });

    it("Executando teste em App/Fragment/Hide and Show", async () => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Fragment").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Hide and Show").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Demonstration of hiding and showing fragments.").className("android.widget.TextView")').click();
        await $("id=frag1hide").click();
        await $("id=frag2hide").click();
        const clicarBotao = await $("id=frag1hide").getText();
        expect(clicarBotao).toBe("SHOW");
        const clicarBotao1 = await $("id=frag2hide").getText();
        expect(clicarBotao1).toBe("SHOW");
        });

    it("Executando teste em App/Action Bar/Display options, e a opção DISPLAY_HOME_AS_UP", async () => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Action Bar").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Display Options").className("android.widget.TextView")').click();
        await $("id=toggle_show_home").click();
        const trechoTitulo = await $("android.widget.TextView").getText();
        expect(trechoTitulo).toBe("App/Action Bar/Display Options");
        });

    it("Executando teste em App/Action Bar/Display options, e a opção DISPLAY_SHOW_TITLE", async () => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Action Bar").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Display Options").className("android.widget.TextView")').click();
        await $("id=toggle_show_title").click();
        const trechoTitulo = await $("android.view.ViewGroup").getText();
        expect(trechoTitulo).toBe("");
        });

    it("Executando teste em App/Action Bar/Display options, e a opção DISPLAY_SHOW_CUSTOM", async () => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Action Bar").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Display Options").className("android.widget.TextView")').click();
        await $("id=toggle_show_custom").click();
        const botaoSuperior = await $("android.widget.Button").getText();
        expect(botaoSuperior).toBe("CUSTOM VIEW!");
        });

    it("Executando teste em App/Action Bar/Display options, e a opção DISPLAY_SHOW_NAVIGATION", async () => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Action Bar").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Display Options").className("android.widget.TextView")').click();
        await $("id=toggle_navigation").click();
        });

});