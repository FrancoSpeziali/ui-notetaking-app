class NoteView {
    
    constructor(parent) {
        this.parent = document.querySelector(parent);
        this.titleNode = document.createElement('h3');
        this.bodyNode = document.createElement('textarea');
        this.parent.append(this.titleNode, this.bodyNode);
    }

    handleEvents() {
        document.addEventListener('noteList:click', (event) => {            
            const index = event.detail.index;
        });
    }

    updateViewData(index) {

        const note = data[index];

        this.titleNode.textContent = note.title;
        this.bodyNode.value = note.body;

    }

}