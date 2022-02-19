const Aside = (function(){
  const template = `
  <aside class="aside">
    <ul>
      <li data-value="notes" class="selected">
        Notes
      </li>
      <li data-value="trash">
        Trash
      </li>
    </ul>
  </aside>`;

  const listenNavigation = () => {
    const navbarMenu = document.querySelector(".aside ul");
    console.log(navbarMenu);
    navbarMenu.addEventListener("click", (e) => {
      const li = e.target;
      const sibling = li.nextElementSibling || li.previousElementSibling;
      if ( !li.classList.contains("selected") ) {
        li.classList.add("selected");
        sibling.classList.remove("selected");
      }
      const valueView = e.target.dataset.value;
      switch (valueView){
        case "notes":
          
          // agreagar a notes selected
          // quitar al trash

        case "trash":
          // agreagar a trash selected
          // quitar al 
        }
    });
  };


  return {
    toString() {
      return template;
    },
    addListeners() {
      listenNavigation();
    },
  };
})();

