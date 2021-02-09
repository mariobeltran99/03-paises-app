import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styles: [
        `ul li {
          cursor: pointer;
      }`
    ]
})
export class SidenavComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

}
