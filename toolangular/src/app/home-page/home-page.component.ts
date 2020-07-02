import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

    constructor(private router: Router) { }

    ngOnInit() {
        let url = this.router.url.substr(2);

        // login
        if (url.search('login=1') >= 0) {
            this.router.navigate(['/login']);
        }

        // login-staff
        if (url.search('login-staff=1') >= 0) {
            this.router.navigate(['/login-staff']);
        }

        // register
        if (url.search('register=1') >= 0) {
            this.router.navigate(['/register']);
        }

        // verifier
        if (url.search('verifier=1') >= 0) {
            url = url.replace('=1&', '/');
            url = url.replace('=:', '/');
            url = url.replace(':', '/');
            url = url.replace(':', '/');
            url = url.replace(':', '/'); 
            
            this.router.navigate(['/' + url]);
        }
    }

}
