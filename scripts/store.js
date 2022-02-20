const Store = (function(){

    const idGenerator = (() => {
        let id = 0;
    
        return {
          next: () => ++id,
        };
      })();
    
    const initialNotes = [
      {
        id: idGenerator.next(),
        title: "A note 1",
        body: "A content z",
        color: "green",
        deleted: true,
      },
      {
        id: idGenerator.next(),
        title: "A note 2",
        body: "A content y",
        color: "white",
        deleted: true,
      },
      {
        id:idGenerator.next(),
        title: "A note 3",
        body: "A content x",
        color: "yellow",
        deleted: false,
            
      },
      {
        id:idGenerator.next(),
        title: "A note in trash",
        body: "A content w",
        color: "cyan",
        deleted: true,
      },
    ];

    return {
      notes: JSON.parse(localStorage.getItem('notes')) || initialNotes
    };

})()
