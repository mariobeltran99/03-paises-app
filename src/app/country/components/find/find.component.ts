import { Component, EventEmitter, Output } from '@angular/core';


@Component({
    selector: 'app-find',
    templateUrl: './find.component.html',
    styles: [
    ]
})
export class FindComponent {

    @Output() find: EventEmitter<string> = new EventEmitter();

    public term = '';

    constructor() { }

    public onFind(): void {
        if (this.term) {
            this.find.emit(this.term);
        }
    }

}
