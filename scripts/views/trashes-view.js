const TrashesView = (function(){

    function renderNote(note){
        let footer = `<footer>
            <div class = "restore">
                <a class="tooltip-trigger" href="#restore">
                    <img src="./assets/icons/arrow.svg"/>
                </a>
            </div>
            <div class="trash delete">
                <a class= "tooltip-trigger"  href="#trash">
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
        const notes = Store.initialNotes.filter((note) => note.deleted);
        return `<div class="notes"><ul>${notes.map(renderNote).join("")}</ul></div>`;
    }

    const template = `
    <div class="js-content content"></div>
        ${renderNotes()}
    </div>`;

    const listenRestore = () => {
        const ul = document.querySelector(".notes ul");
        ul.addEventListener("click", (e) =>{
            // console.log("estoy aqui")
            // console.log(event.target.href)
            const iconRestores = document.querySelectorAll(".restore");
            iconRestores.forEach(iconrestore => {
                console.log(iconrestore, e.target)
                if(iconrestore === e.target.closest('.restore')) {
                    const noteRestore = iconrestore.closest('.note')
                    idNotex = noteRestore.dataset.id
                    Store.initialNotes.map(note => {
                        if (note.id == idNotex) {
                            note.deleted = false
                            console.log('soy ese id')
                        }  
                    })
                    Main.load(TrashesView);
                }
            })
            // console.log("estoy ")
            // console.log(iconRestore);
        })

    }

    return {
        toString(){
            return template;
        },
        addListeners(){
            listenRestore();
        },
    };
})();