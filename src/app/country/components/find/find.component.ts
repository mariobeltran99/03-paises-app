import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';


@Component({
    selector: 'app-find',
    templateUrl: './find.component.html',
    styles: [
    ]
})
export class FindComponent implements OnInit {

    @Output()
    private find: EventEmitter<string> = new EventEmitter();

    @Output()
    private write: EventEmitter<string> = new EventEmitter();

    private debouncer: Subject<string> = new Subject();

    public term = '';


    constructor() { }

    ngOnInit(): void {
        this.debouncer
            .pipe(debounceTime(300))
            .subscribe(text => {
                this.write.emit(text);
            });
    }

    public onFind(): void {
        if (this.term) {
            this.find.emit(this.term);
        }
    }

    public keyPress(): void {
        this.debouncer.next(this.term);
    }

}
