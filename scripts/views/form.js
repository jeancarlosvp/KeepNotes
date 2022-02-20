const Form = (() => {
  const template = `
  <form class="js-note-form note-form">
    <input
      name="title"
      type="text"
      class="note-form__title"
      placeholder="The title for my new note"
    />
    <textarea
      name="body"
      class="note-form__body"
      placeholder="This is the body for the note."
    ></textarea>
    <footer>
      <div class="tooltip">
        <input type="hidden" name="color" />
        <a class="tooltip-trigger">
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
      <button type="submit">Keep it!</button>
    </footer>
  </form>`

  return {
    toString: () => template,
    addListeners() {}
  }
})()