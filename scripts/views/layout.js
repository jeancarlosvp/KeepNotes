const Layout = (function () {
    const template = `
    ${Header}
    ${Aside}
    <main class="section">
      <div class="container js-main">
      </div>
    </main>`;

    return {
        toString() {
            return template;
        },
        addListeners() {
            Aside.addListeners();
        }
    }
})();
