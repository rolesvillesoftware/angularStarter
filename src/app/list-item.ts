export class ListItem {
    selected: Boolean = false;
    remove: Boolean = false;
    completed: Boolean = false;
    edit: Boolean = false;

    constructor(public itemId: number, public itemName: string) {
    }
    doEdit() {
        this.edit = true;
    }
    completeEdit() {
        this.edit = false;
    }
    doReset() {
        this.remove = false;
        this.completed = false;
    }
}
