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
          Main.load(NotesView);
          break;
        case "trash":
          Main.load(TrashesView);
          break;
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

