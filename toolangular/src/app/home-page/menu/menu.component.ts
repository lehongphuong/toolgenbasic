import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LoginCookie } from '../../common/core/login-cookie';
import { ApiService } from 'src/app/common/api-service/api.service';
import { AuthenticationService } from 'src/app/common/_services';
import { Router } from '@angular/router';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
    menuFlag: boolean = false;
    menuMobileFlag: boolean = false;
    settingButton: boolean = false;
    searchFlag: boolean = false;
    isMobile: boolean = false;
    today: Date = new Date();

    // model permission
    users: boolean = false;
    accounts: boolean = false;
    transactions: boolean = false;
    staffs: boolean = false;
    categories: boolean = false;
    comissions: boolean = false;
    linked: boolean = false;
    import: boolean = false;

    constructor(private login: LoginCookie,
        public api: ApiService,
        private authenticationService: AuthenticationService,
        private router: Router
    ) {
    }

    ngOnInit() {
        this.isMobile = this.isMobileDevice();
        // load permission
        this.api.excuteAllByWhat({ 'id': this.api.idStaff }, '44').subscribe(data => {
            if (data.length > 0) {
                // load current permission
                if (data[0].permission.search('1') >= 0) {
                    this.users = true;
                }
                if (data[0].permission.search('2') >= 0) {
                    this.accounts = true;
                }
                if (data[0].permission.search('3') >= 0) {
                    this.transactions = true;
                }
                if (data[0].permission.search('4') >= 0) {
                    this.staffs = true;
                }
                if (data[0].permission.search('5') >= 0) {
                    this.categories = true;
                }
                if (data[0].permission.search('6') >= 0) {
                    this.comissions = true;
                }
                if (data[0].permission.search('7') >= 0) {
                    this.linked = true;
                }
                if (data[0].permission.search('8') >= 0) {
                    this.import = true;
                }
            }
        });

        console.log('phuong',this.api.staff); 
    }

    isMobileDevice() {
        return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
    };

    /**
     * on Request To Be A Partner Click
     */
    onRequestToBeAPartnerClick() {
        this.sentMailForUser();

        this.api.showSuccess('Request to be a partner of you being processing, please wait reponse');
    }

    /**
    * sent Mail to user
    */
    sentMailForUser() {
        const from = 'no-reply@ttfxprime.com';
        const to = 'support@ttfxprime.com';
        let subject = 'Request to be a Partner';
        let message = ` 
            <p>Hi Admin,</p>
            <p>Have one user request to be a Partner please check:</p>
            <p>Email: `+ this.api.user.email + `</p>  
            <p>Username: `+ this.api.user.username + `</p>  
            <p>Phone: `+ this.api.user.phone + `</p>  
            <p>Born: `+ this.api.user.born + `</p>  
            <p>Address: `+ this.api.user.address + `</p>   
            <p>CMND: `+ this.api.user.link + `</p>   
            <p>Thanks.</p> 
            <p><strong>----</strong></p>
            <img style="width: 200px; height: 80px" src="http://ttfxprime.com/logo.PNG">
            <p><strong>Department Support </strong></p>
            <p>TTFX Prime Trading International Ltd</p> 
            <p>E: <a href="mailto:support@ttfxprime.com">support@ttfxprime.com</a>&nbsp; | &nbsp;W: TTFXPrime.com &nbsp;&nbsp;|&nbsp; T: +12 845-892&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
        `;
        this.api.sentMail(from, to, subject, message).subscribe(data => { });
    }

    /**
     * onLogoutClick
     */
    onLogoutClick() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }

    /**
     * onLogoutClick
     */
    onLogoutStaffClick() {
        this.authenticationService.logout();
        this.router.navigate(['/login-staff']);
    }
}
