import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Security } from './security';
import { CRUDCookieService } from './cookie-service';
import { User } from '../_models/10user.models';
import { Staff } from '../_models/40staff.models';

@Injectable()
export class ApiService {
    private url = "";
    private urlMail = "";
    private getAllWhatUrl = "";
    private audio = new Audio();
    protected se: Security = new Security();
    public lang: string = 'vn';
    public idCompany: any;
    public idUser: any = 1;
    public idStaff: any = 1;

    // check login 
    public user: User;
    public staff: Staff;

    public usd: number = 23382.33;
    SERVER_URL: string = "https://file.io/";
    // SERVER_URL: string = "https://ttfxprime.com/api/Controller/Upload.php";

    constructor(public httpClient: HttpClient,
        private toastrService: ToastrService,
        public cookie: CRUDCookieService
    ) {
        this.url = "http://localhost:8000/api/";
        this.url = "https://ttfxprime.com/api/Controller/SelectAllByWhat.php";
        this.urlMail = "https://ttfxprime.com/api/Controller/BaseMail.php";

        // get data from cookie
        this.getDataUserStaffFromCookie();
    }

    /**
     * isUserLogin
     */
    public get isUserLogin(): boolean {
        return localStorage.getItem('isUserLogin') == '1' ? true : false;
    }

    /**
     * isUserLogin
     */
    public get isStaffLogin(): boolean {
        return localStorage.getItem('isStaffLogin') == '1' ? true : false;
    }

    /**
     * permission
     */
    public get getPermission(): string {
        return localStorage.getItem('permission');
    }

    /**
    * get Data User Staff From Cookie
    */
    getDataUserStaffFromCookie() {
        // get data user
        if (this.isUserLogin) {
            this.user = JSON.parse(localStorage.getItem('user'));
            this.idUser = this.user.id;
        }

        // get data staff
        if (this.isStaffLogin) {
            this.staff = JSON.parse(localStorage.getItem('staff'));
            this.idStaff = this.staff.id;
        }
    }

    /**
     * 
     * @param param 
     * @param what 
     */
    excuteAllByWhat(param: any, what: string): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };

        param.what = what;
        this.getAllWhatUrl = this.url;

        console.log('Param input', JSON.stringify(param));

        return this.httpClient.post<any>(this.getAllWhatUrl, JSON.stringify(param), httpOptions)
            .pipe(map((response: Response) => {
                return response;
            }));
    }

    uploadImage(image) {
        const formData: FormData = new FormData();
        formData.append('Image', image, image.name);
        return this.httpClient.post(this.SERVER_URL, formData);
    }

    public upload(formData) {
        return this.httpClient.post<any>(this.SERVER_URL, formData);
    }

    /**
     * sent Mail functions
     * @param from 
     * @param to 
     * @param subject 
     * @param message 
     */
    sentMail(from: any, to: any, subject: any, message: any): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };

        const param = {
            'from': from,
            'to': to,
            'subject': subject,
            'message': message
        };

        return this.httpClient.post<any>(this.urlMail, JSON.stringify(param), httpOptions)
            .pipe(map((response: Response) => {
                return response;
            }));
    }



    /**
     * convert To Data
     * @param data 
     */
    convertToData(data): any[] {
        data = JSON.parse(data + '');
        let result: any[] = [];
        data.forEach(item => {
            item.fields.id = item.pk;
            result.push(item.fields);
        });
        return result;
    }

    /**
     * 
     * @param date 
     */
    formatDate(date: Date): string {
        const month = date.getMonth() + 1;
        const day = date.getDate();
        return date.getFullYear() + '-'
            + (month > 9 ? month : ('0' + month)) + '-'
            + (day > 9 ? day : ('0' + day));
    }

    /**
     * 
     * @param param 
     * @param what 
     */
    excuteAllByWhatWithUrl(url: string, param: any, what: string): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'my-auth-token',
                'Access-Control-Allow-Origin': '*',
            })
        };

        this.getAllWhatUrl = this.url + what;

        console.log('Param input', JSON.stringify(param));

        return this.httpClient.post<any>(url, JSON.stringify(param), httpOptions)
            .pipe(map((response: Response) => response.json()));
    }

    public showError(mess: string) {
        this.toastrService.error('Pinks Ways!', mess, {
            timeOut: 2500,
            progressBar: true
        });
    }

    public showSuccess(mess: string) {
        this.toastrService.success('Pinks Ways!', mess + '!', {
            timeOut: 2000,
            progressBar: true
        });
    }

    public showWarning(mess: string) {
        this.toastrService.warning('Pinks Ways!', mess + '!', {
            timeOut: 2500,
            progressBar: true
        });
    }

    public playSuccess() {
        this.audio = new Audio();
        this.audio.src = "../../assets/sounds/beep-02.wav";
        this.audio.load();
        this.audio.play();
    }

    public playError() {
        this.audio = new Audio();
        this.audio.src = "../../assets/sounds/beep-05.wav";
        this.audio.load();
        this.audio.play();
    }

    /**
     * format Html Tag
     * @param content 
     */
    formatHtmlTag(content) {
        let result: string;
        let dummyElem = document.createElement('DIV');
        dummyElem.innerHTML = content;
        document.body.appendChild(dummyElem);
        result = dummyElem.textContent;
        document.body.removeChild(dummyElem);
        return result;
    }

    /**
      * bỏ dấu tiếng việt để search
    */
    public cleanAccents(str: string): string {
        str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
        str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
        str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
        str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
        str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
        str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
        str = str.replace(/đ/g, "d");
        str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
        str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
        str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
        str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
        str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
        str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
        str = str.replace(/Đ/g, "D");
        // Combining Diacritical Marks
        str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // huyền, sắc, hỏi, ngã, nặng 
        str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // mũ â (ê), mũ ă, mũ ơ (ư)

        return str;
    }
}

