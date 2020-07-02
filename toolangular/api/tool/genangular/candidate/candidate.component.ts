import { Component, OnInit, Inject, ViewChild } from '@angular/core';	
import { ApiService } from '../../../common/api-service/api.service';	
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';	
import { MatTableDataSource } from '@angular/material/table';      
import { MatPaginator } from '@angular/material/paginator';        
import { MatSort } from '@angular/material/sort';                  
import { Observable, Observer, Subscription } from 'rxjs';	
	
@Component({	
  selector: 'app-candidate',	
  templateUrl: './candidate.component.html',	
  styleUrls: ['./candidate.component.scss']	
})	
export class CandidateComponent implements OnInit {	
	
  /** for table */	
  subscription: Subscription[] = [];	
	
  displayedColumns: string[] = ['id', 'email', 'password', 'avatar', 'fullname', 'phone', 'born', 'country', 'city', 'provine', 'address', 'sex', 'marriage', 'positionapply', 'academiclevel', 'yearsofexperience', 'workingplace', 'career', 'typeofwork', 'level', 'salary', 'minsalary', 'maxsalary', 'targetjob', 'descriptionstargetjob', 'school', 'department', 'certificate', 'specialized', 'classification', 'startadmission', 'endadmission', 'additioninfor', 'posisionold', 'companyold', 'startworked', 'endworked', 'descriptionsoldjob', 'descriptionskill', 'skill', 'language', 'infomation'];	
	
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
    this.getCandidate();	
  }	
	
  /**	
   * get Data getCandidate  	
   */	
  getCandidate() {	
    this.api.excuteAllByWhat({ 'idCompany': this.api.idCompany }, '20')	
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
    const dialogRef = this.dialog.open(CandidateDialog, {	
      width: '400px',	
      data: { type: 0, id: 0 }	
    });	
	
    dialogRef.afterClosed().subscribe(result => { 	
      if (result) { 	
        this.getCandidate();	
      }	
    });	
  }	
	
  /**	
   * on update data	
   * @param event 	
   */	
  onUpdateData(row) {	
    const dialogRef = this.dialog.open(CandidateDialog, {	
      width: '400px',	
      data: { type: 1, input: row }	
    });	
	
    dialogRef.afterClosed().subscribe(result => { 	
      if (result) { 	
        this.getCandidate();	
      }	
    });	
  }	
}	
	
	
/**	
 * Component show thông tin để insert hoặc update	
 */	
@Component({	
  selector: 'candidate-dialog',	
  templateUrl: 'candidate-dialog.html',	
  styleUrls: ['./candidate.component.scss']	
})	
export class CandidateDialog implements OnInit {	
	
  observable: Observable<any>;	
  observer: Observer<any>;	
  type: number;	
  idCompany: number;	
	
  // init input value	
  input: any = {	
    email: '',	
    password: '',	
    avatar: '',	
    fullname: '',	
    phone: '',	
    born: '',	
    country: '',	
    city: '',	
    provine: '',	
    address: '',	
    sex: '',	
    marriage: '',	
    positionapply: '',	
    academiclevel: '',	
    yearsofexperience: '',	
    workingplace: '',	
    career: '',	
    typeofwork: '',	
    level: '',	
    salary: '',	
    minsalary: '',	
    maxsalary: '',	
    targetjob: '',	
    descriptionstargetjob: '',	
    school: '',	
    department: '',	
    certificate: '',	
    specialized: '',	
    classification: '',	
    startadmission: '',	
    endadmission: '',	
    additioninfor: '',	
    posisionold: '',	
    companyold: '',	
    startworked: '',	
    endworked: '',	
    descriptionsoldjob: '',	
    descriptionskill: '',	
    skill: '',	
    language: '',	
    infomation: '',	
  };	
	
  constructor(	
    public dialogRef: MatDialogRef<CandidateDialog>,	
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
	
      this.api.excuteAllByWhat(this.input, ''+ Number(21 + this.type) +'').subscribe(data => {	
        this.dialogRef.close(true);	
        this.api.showSuccess("Xử Lý Thành Công!");	
      });	
  }	
	
  /**	
   * onDeleteClick	
   */	
  onDeleteClick() {	
    this.api.excuteAllByWhat(this.input, '23').subscribe(data => {	
      this.dialogRef.close(true);	
      this.api.showSuccess("Xử Lý Xóa Thành Công!");	
    });	
  }	
}	
