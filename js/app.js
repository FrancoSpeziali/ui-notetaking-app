function initialiseNotey() {

    const titles = data.map((listItem, index) => {
        return {
            index: index,
            title: listItem.title
        }
    });
    
    new NoteList('#note-list', titles);
    new NoteView('#note-view');
    
}

initialiseNotey();