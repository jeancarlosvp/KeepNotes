const Layout = (function () {
    const template = `
    ${Header}
    ${Aside}
    <section class="section js-main">
    </section>`;
    return {
        toString() {
            return template;
        },
        addListeners() {
            Aside.addListeners();
        }
    }
})();
