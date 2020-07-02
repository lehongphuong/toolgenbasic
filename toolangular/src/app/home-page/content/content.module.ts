import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import { RouterModule } from '@angular/router';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { ApiService } from '../../common/api-service/api.service';
import { AuthGuard } from 'src/app/common/_guards';
import { Role } from 'src/app/common/_models';
import { AuthenticationService } from 'src/app/common/_services';

@NgModule({
    declarations: [ContentComponent],
    imports: [
        TransferHttpCacheModule,
        CommonModule,
        RouterModule.forChild([
            {
                // ng g module home-page/content/sellTicket --module content
                // ng g c home-page/content/sellTicket
                path: '',
                component: ContentComponent,
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('./home/home.module').then(m => m.HomeModule)
                    },
                    {
                        path: 'a1-user',
                        canActivate: [AuthGuard],
                        data: { roles: [Role.User] },
                        loadChildren: () =>
                            import('./a1-user/a1-user.module').then(
                                m => m.A1UserModule
                            )
                    },
                    {
                        path: 'a2-account',
                        canActivate: [AuthGuard],
                        data: { roles: [Role.User] },
                        loadChildren: () =>
                            import('./a2-account/a2-account.module').then(
                                m => m.A2AccountModule
                            )
                    },
                    {
                        path: 'a3-linked',
                        canActivate: [AuthGuard],
                        data: { roles: [Role.User] },
                        loadChildren: () =>
                            import('./a3-linked/a3-linked.module').then(
                                m => m.A3LinkedModule
                            )
                    },
                    {
                        path: 'a4-advisory',
                        canActivate: [AuthGuard],
                        data: { roles: [Role.User] },
                        loadChildren: () =>
                            import('./a4-advisory/a4-advisory.module').then(
                                m => m.A4AdvisoryModule
                            )
                    },
                    {
                        path: 'a5-transaction',
                        canActivate: [AuthGuard],
                        data: { roles: [Role.User] },
                        loadChildren: () =>
                            import('./a5-transaction/a5-transaction.module').then(
                                m => m.A5TransactionModule
                            )
                    },
                    {
                        path: 'b1-manager-user',
                        canActivate: [AuthGuard],
                        data: { roles: [Role.Admin, Role.Staff] },
                        loadChildren: () =>
                            import('./b1-manager-user/b1-manager-user.module').then(
                                m => m.B1ManagerUserModule
                            )
                    },
                    {
                        path: 'b2-manager-account',
                        canActivate: [AuthGuard],
                        data: { roles: [Role.Admin, Role.Staff] },
                        loadChildren: () =>
                            import('./b2-manager-account/b2-manager-account.module').then(
                                m => m.B2ManagerAccountModule
                            )
                    },
                    {
                        path: 'b3-manager-transction',
                        canActivate: [AuthGuard],
                        data: { roles: [Role.Admin, Role.Staff] },
                        loadChildren: () =>
                            import('./b3-manager-transaction/b3-manager-transaction.module').then(
                                m => m.B3ManagerTransactionModule
                            )
                    },
                    {
                        path: 'b4-manager-staff',
                        canActivate: [AuthGuard],
                        data: { roles: [Role.Admin, Role.Staff] },
                        loadChildren: () =>
                            import('./b4-manager-staff/b4-manager-staff.module').then(
                                m => m.B4ManagerStaffModule
                            )
                    },
                    {
                        path: 'b5-manager-categorie',
                        canActivate: [AuthGuard],
                        data: { roles: [Role.Admin, Role.Staff] },
                        loadChildren: () =>
                            import('./b5-manager-categorie/b5-manager-categorie.module').then(
                                m => m.B5ManagerCategorieModule
                            )
                    },
                    {
                        path: 'b6-manager-comission',
                        canActivate: [AuthGuard],
                        data: { roles: [Role.Admin, Role.Staff] },
                        loadChildren: () =>
                            import('./b6-manager-comission/b6-manager-comission.module').then(
                                m => m.B6ManagerComissionModule
                            )
                    },
                    {
                        path: 'b7-manager-linked',
                        canActivate: [AuthGuard],
                        data: { roles: [Role.Admin, Role.Staff] },
                        loadChildren: () =>
                            import('./b7-manager-linked/b7-manager-linked.module').then(
                                m => m.B7ManagerLinkedModule
                            )
                    },
                    {
                        path: 'b8-manager-import',
                        canActivate: [AuthGuard],
                        data: { roles: [Role.Admin, Role.Staff] },
                        loadChildren: () =>
                            import('./b8-manager-import/b8-manager-import.module').then(
                                m => m.B8ManagerImportModule
                            )
                    },
                ]
            }
        ]),

    ],
    providers: [
        ApiService,
        AuthenticationService
    ],
    entryComponents: []
})
export class ContentModule { }
