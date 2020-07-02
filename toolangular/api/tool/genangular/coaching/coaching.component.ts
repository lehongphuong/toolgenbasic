import { Component, OnInit, Inject, ViewChild } from '@angular/core';	
import { ApiService } from '../../../common/api-service/api.service';	
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';	
import { MatTableDataSource } from '@angular/material/table';      
import { MatPaginator } from '@angular/material/paginator';        
import { MatSort } from '@angular/material/sort';                  
import { Observable, Observer, Subscription } from 'rxjs';	
	
@Component({	
  selector: 'app-coaching',	
  templateUrl: './coaching.component.html',	
  styleUrls: ['./coaching.component.scss']	
})	
export class CoachingComponent implements OnInit {	
	
  /** for table */	
  subscription: Subscription[] = [];	
	
  displayedColumns: string[] = ['id', 'fullname', 'born', 'sex', 'phone', 'address', 'about', 'skill', 'avatar'];	
	
  dataSource: MatTableDataSource<any>;	
	
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;	
  @ViewChild(MatSort, { static: false }) sort: MatSort;	
	
  applyFilter(filterValue: string) {	
    this.dataSource.filter = filterValue.trim().toLowerCase();	
	
    if (this.dataSource.paginator) {	
      this.dataSource.paginator.firstPage();	
    }	
  }	
  /** for table */	
	
  constructor(	
    private api: ApiService,	
    public dialog: MatDialog	
  ) { }	
	
	
  ngOnInit() {	
	
    // get trains	
    this.getCoaching();	
  }	
	
  /**	
   * get Data getCoaching  	
   */	
  getCoaching() {	
    this.api.excuteAllByWhat({ 'idCompany': this.api.idCompany }, '90')	
      .subscribe(data => {	
        // set data for table	
        this.dataSource = new MatTableDataSource(data);	
        this.dataSource.paginator = this.paginator;	
        this.dataSource.sort = this.sort;	
      })	
	
  }	
	
  /**	
   * on insert data	
   * @param event 	
   */	
  onInsertData() {	
    const dialogRef = this.dialog.open(CoachingDialog, {	
      width: '400px',	
      data: { type: 0, id: 0 }	
    });	
	
    dialogRef.afterClosed().subscribe(result => { 	
      if (result) { 	
        this.getCoaching();	
      }	
    });	
  }	
	
  /**	
   * on update data	
   * @param event 	
   */	
  onUpdateData(row) {	
    const dialogRef = this.dialog.open(CoachingDialog, {	
      width: '400px',	
      data: { type: 1, input: row }	
    });	
	
    dialogRef.afterClosed().subscribe(result => { 	
      if (result) { 	
        this.getCoaching();	
      }	
    });	
  }	
}	
	
	
/**	
 * Component show thông tin để insert hoặc update	
 */	
@Component({	
  selector: 'coaching-dialog',	
  templateUrl: 'coaching-dialog.html',	
  styleUrls: ['./coaching.component.scss']	
})	
export class CoachingDialog implements OnInit {	
	
  observable: Observable<any>;	
  observer: Observer<any>;	
  type: number;	
  idCompany: number;	
	
  // init input value	
  input: any = {	
    fullname: '',	
    born: '',	
    sex: '',	
    phone: '',	
    address: '',	
    about: '',	
    skill: '',	
    avatar: '',	
  };	
	
  constructor(	
    public dialogRef: MatDialogRef<CoachingDialog>,	
    @Inject(MAT_DIALOG_DATA) public data: any,	
    private api: ApiService	
  ) {	
    this.type = data.type;	
    this.input.idCompany = this.api.idCompany;	
	
    // nếu là update	
    if (this.type == 1) {	
      this.input = data.input;	
    }	
	
    console.log('data nhan duoc ', this.data);	
	
    // xử lý bất đồng bộ	
    this.observable = Observable.create((observer: any) => {	
      this.observer = observer;	
    });	
  }	
	
  /**	
   * ngOnInit	
   */	
  ngOnInit() {	
	
  }	
	
	
  /**	
   * on ok click	
   */	
  onOkClick(): void {	
    // convert data time	
    // this.input.born = new Date(this.input.born);	
    // this.input.born = this.api.formatDate(this.input.born);	
	
      this.api.excuteAllByWhat(this.input, ''+ Number(91 + this.type) +'').subscribe(data => {	
        this.dialogRef.close(true);	
        this.api.showSuccess("Xử Lý Thành Công!");	
      });	
  }	
	
  /**	
   * onDeleteClick	
   */	
  onDeleteClick() {	
    this.api.excuteAllByWhat(this.input, '93').subscribe(data => {	
      this.dialogRef.close(true);	
      this.api.showSuccess("Xử Lý Xóa Thành Công!");	
    });	
  }	
}	
