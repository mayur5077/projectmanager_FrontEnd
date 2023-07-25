import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-workreport',
  templateUrl: './workreport.component.html',
  styleUrls: ['./workreport.component.css']
})
export class WorkreportComponent implements OnInit  {

  projectdata:any;
  employees:any;
  projectname ="";
  employeename="";
  stetus="";
  projectstetus:any;
  reportlistorignal:any[] = [];
  reportlist:any[] = [];


  constructor(private api:ApiService){}



  ngOnInit(): void {
    this.load();

  }

  load(){

    this.api.get("projecttasks/workreport").subscribe((result:any)=>{
      this.reportlistorignal = result;
      console.log(result);

      this.changed();
    })

    this.api.get("projects").subscribe((result:any)=>{
      this.projectdata = result;

    })

    this.api.get("employees").subscribe((result:any)=>{
      this.employees = result;
    })





}

changed(){
  console.log(this.projectname + this.employeename + this.stetus);

  this.reportlist = this.reportlistorignal.filter((data:any)=>{
    let toshow = false;
    if((this.employeename == "" || data.employeename == this.employeename) && (this.projectname == "" || data.projectname == this.projectname) && (this.stetus == "" || data.projectstatus == this.stetus)){
      toshow=true;
    }
    if(toshow){
    return data;
    }
  });




}

reset(){
  this.employeename = "";
  this.projectname = "";
  this.stetus = "";
  this.load();
}

Print(data:string){
  // console.log(data);
 let printContents = document.getElementById(data)?.innerHTML;
 // var printContents = this. filteredDataAfterDate;
  var originalContents = document.body.innerHTML;
  // console.log(data, printContents, originalContents);

  document.body.innerHTML = printContents!;

  window.print();

  document.body.innerHTML = originalContents;
}

exportexcel(): void
{
  let fileName= 'ExcelSheet.xlsx';
  /* pass here the table id */
  let element = document.getElementById('excel-table');
  const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

  /* generate workbook and add the worksheet */
  const wb: XLSX.WorkBook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

  /* save to file */
  XLSX.writeFile(wb, fileName);

}


}
