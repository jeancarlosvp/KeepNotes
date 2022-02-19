const Header = (function() {
    const template = `
    <header class="header">
        <h1><img src="/assets/images/keepable.png" alt="Keepable" /></h1>
        <h2>Welcome to {keepable}</h2>
    </header> 
    `;

    return {
        toString(){
            return template;
        },
        addListeners(){},
    };

})();