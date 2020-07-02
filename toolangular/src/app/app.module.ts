import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TransferHttpCacheModule } from '@nguniversal/common';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment'; 
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { CookieService } from 'ngx-cookie-service';
import { CRUDCookieService } from './common/api-service/cookie-service';
import { JwtInterceptor, ErrorInterceptor } from './common/_helpers';
import { Routing } from './app.routing';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'hce-edu' }),
        Routing,

        // https://www.npmjs.com/package/ngx-toastr
        ToastrModule.forRoot(), // ToastrModule added
        TransferHttpCacheModule,
        CommonModule,
        HttpClientModule,

        // https://www.npmjs.com/package/angular-animations
        BrowserAnimationsModule,
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),

    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        CookieService,
        CRUDCookieService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
