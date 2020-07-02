import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'hce-edu';

    constructor(private router: Router) {  
        console.log(this.router.url);  
        // this.router.navigate(['/login'], { skipLocationChange: true });
    }

}
