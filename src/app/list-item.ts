export class ListItem {
    selected: Boolean = false;
    remove: Boolean = false;
    edit: Boolean = false;

    private origItem: ListItem;
    constructor(public itemId?: number, public itemName?: string, public completed = false) {
        if (this.itemId != null || itemName != null) {
            this.origItem = new ListItem();
            this.copy(this.origItem);
        }
    }

    copy(dest: ListItem) {
        if (dest == null) { return; }
        dest.completed = this.completed;
        dest.itemName = this.itemName;
        dest.itemId = this.itemId;
    }
    doEdit() {
        this.edit = true;
    }
    completeEdit() {
        this.edit = false;
    }
    doReset() {
        this.remove = false;
        if (this.origItem != null) { this.origItem.copy(this); }
    }
}
