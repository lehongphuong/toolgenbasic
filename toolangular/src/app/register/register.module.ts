import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../common/api-service/api.service';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginCookie } from '../common/core/login-cookie';
import { MatSelectModule } from '@angular/material/select';
import { RegisterComponent} from '../register/register.component'

@NgModule({
    declarations: [RegisterComponent],
    imports: [
        TransferHttpCacheModule,
        CommonModule,
        RouterModule.forChild([
            {
                path: '', component: RegisterComponent
            }
        ]),
        FormsModule,
        ReactiveFormsModule,

        MatSelectModule,
        

    ],
    providers: [ApiService, LoginCookie],
})
export class RegisterModule { }
