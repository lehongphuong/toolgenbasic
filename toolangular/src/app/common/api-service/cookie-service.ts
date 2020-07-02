import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class CRUDCookieService {

    constructor(private cookieService: CookieService
    ) {
    }

    /**
     * set data by key
     * @param key 
     * @param value 
     */
    setCookie(key, value) {
        this.cookieService.delete(key);
        if (this.cookieService.check(key)) {
            this.cookieService.delete(key);
        } 
        this.cookieService.set(key, value);
    }

    /**
     * get data Cookie by key
     * @param key 
     */
    getCookie(key): string {
        if (this.cookieService.check(key)) {
            return this.cookieService.get(key);
        }
        return null;
    }

    /**
     * set data by key
     * @param key 
     * @param value 
     */
    clearAll() {
        this.cookieService.deleteAll();
    }


}

