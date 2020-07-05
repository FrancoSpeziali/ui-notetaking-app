class noteList {

    constructor(parent, list) {
        this.parent = document.querySelector(parent);
        this.node = document.createElement('ul');
        this.list = list;

        this.parent.appendChild(this.node);

        this.generateList();
    }

    generateList() {

        this.list.forEach(listItem => {
            const listElement = document.createElement('li');

            lisElement.setAttribute('data-index', listItem.index);
            
            litElement.addEventListener('click', (event) => {
                const domObject = event.target;
                const index = domObject.getAttribute('data-index');

                const noteListClickEvent = new CustomEvent('noteList:click', {
                    detail: {
                        index: index
                    }
                });

                document.dispatchEvent(noteListClickEvent);
            });

            listElemen.textContent = listItem.title;

            this.node.appendChild(listement);
        });
    }

}