import { NgModule } from '@angular/core';	
import { CommonModule } from '@angular/common';	
import { PackageComponent, PackageDialog } from './package.component';	
import { TransferHttpCacheModule } from '@nguniversal/common';	
import { RouterModule } from '@angular/router';	
import { FormsModule, ReactiveFormsModule } from '@angular/forms';	
import { MatCardModule } from '@angular/material/card';              
import { MatCheckboxModule } from '@angular/material/checkbox';      
import { MatPaginatorModule } from '@angular/material/paginator';    
import { MatSelectModule } from '@angular/material/select';          
import { MatSortModule } from '@angular/material/sort';              
import { MatTableModule } from '@angular/material/table';            
import { MatInputModule } from '@angular/material/input';            
import { MatButtonModule } from '@angular/material/button';          
import {MatRadioModule} from '@angular/material/radio';              
import {MatDatepickerModule} from '@angular/material/datepicker';  
import {MatNativeDateModule} from '@angular/material/core';        
import {MatDialogModule} from '@angular/material/dialog';          
	
@NgModule({	
  declarations: [PackageComponent, PackageDialog],	
  imports: [	
    TransferHttpCacheModule,	
    CommonModule,	
    RouterModule.forChild([	
      {	
        path: '', component: PackageComponent, children: [	
        ],	
      }	
    ]),	
    FormsModule,	
    ReactiveFormsModule,	
	
    MatInputModule,	
    MatDatepickerModule,	
    MatNativeDateModule,	
    MatSelectModule,	
    MatRadioModule,	
    MatDialogModule,	
    MatCardModule,	
    MatSortModule,	
    MatTableModule,	
    MatPaginatorModule,	
    MatButtonModule,	
    MatCheckboxModule,	
  ],	
  entryComponents: [PackageDialog]	
})	
export class PackageModule { }	
