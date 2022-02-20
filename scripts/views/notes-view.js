const NotesView = (function(){
    
    function renderNote(note) {
        let footer = `<footer>
          <div class="tooltip">
            <input type="hidden" name="color" />
            <a class="tooltip-trigger" href="#color">
                <img src="./assets/icons/color.svg"/>
            </a>
            <div class="tooltip-content hidden">
              <div class="tooltip-content__body">
                <div
                  data-color="white"
                  class="tooltip-option tooltip-option--white"
                ></div>
                <div
                  data-color="red"
                  class="tooltip-option tooltip-option--red"
                ></div>
                <div
                  data-color="orange"
                  class="tooltip-option tooltip-option--orange"
                ></div>
                <div
                  data-color="yellow"
                  class="tooltip-option tooltip-option--yellow"
                ></div>
                <div
                  data-color="green"
                  class="tooltip-option tooltip-option--green"
                ></div>
                <div
                  data-color="turquoise"
                  class="tooltip-option tooltip-option--turquoise"
                ></div>
                <div
                  data-color="cyan"
                  class="tooltip-option tooltip-option--cyan"
                ></div>
                <div
                  data-color="blue"
                  class="tooltip-option tooltip-option--blue"
                ></div>
                <div
                  data-color="purple"
                  class="tooltip-option tooltip-option--purple"
                ></div>
                <div
                  data-color="pink"
                  class="tooltip-option tooltip-option--pink"
                ></div>
              </div>
            </div>
          </div>
          <div class="trash">
            <a class= "tooltip-trigger" href="#trash">
                <img src="./assets/icons/trash.svg"/>
            </a>
          </div>
        </footer>`;
      
        return `<li class="note" style="background-color: var(--${note.color})" data-id="${note.id}">
          <h3 class="note-title">${note.title}</h3>
          <p class="note-body">${note.body}</p>
          ${footer}
        </li>`;
    }
    
    function renderNotes() {
        const notes = Store.initialNotes.filter((note) => !note.deleted);
        if (notes.length === 0) return `<div class="notes notes--no-content"><h2>No notes to keep</h2></div>`;
          
        return `<div class="notes"><ul>${notes.map(renderNote).join("")}</ul></div>`;
    }

    const template = `
    ${Form}
    <div class="js-content content"></div>
        ${renderNotes()}
    </div>`;

    return {
        toString(){
            return template;
        },
        addListeners(){},
    };
})();

