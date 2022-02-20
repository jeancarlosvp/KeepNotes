const App = DOMHandler("#root");
App.load(Layout);

const Main = DOMHandler(".js-main")
Main.load(NotesView)
// Module Example:

// const Module = (function () {
//   const template = ``;

//   return {
//     toString() {
//       return template;
//     },
//     addListeners() {},
//   };
// })();
