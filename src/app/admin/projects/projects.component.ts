import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { ApiService } from 'src/app/api.service';

export const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY'
  },
};

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }
  ]
})
export class ProjectsComponent implements OnInit {

  projects:any;
  projectdata:any;
  employees:any;
  id:any;

  constructor(private api:ApiService){}




  ngOnInit(): void {



    this.load();


  }
load(){
  this.id = null
  this.projectdata = new FormGroup({
    id:new FormControl(0),
    name:new FormControl(""),
    descreption:new FormControl(""),
    startdate:new FormControl(new Date()),
    targetdate:new FormControl(new Date()),
    manegerid:new FormControl("")



  })

 this.api.get("projects/listproject").subscribe((result:any)=>{
  this.projects = result;
  console.log(this.projects);

 })




 this.api.get("employees").subscribe((result:any)=>{
  this.employees = result;
 })

}

  submitdata(data:any){
    if(this.id == null){
      this.api.post("projects",data).subscribe((result:any)=>{
        console.log(result);
        this.load();

      })
    }
    else{
      this.api.put("projects/"+this.id, data).subscribe((result:any)=>{
        console.log(result);
        this.load();

      })
    }


  }

  Delete(id:number){
    this.api.delete("projects/"+ id).subscribe((result:any)=>{
      console.log(result);
      this.load();

    })
  }

  Edit(id:number){
    this.id = id;
    this.api.get("projects/"+id).subscribe((result:any)=>{
      console.log(result);
      this.projectdata.patchValue({
        id:this.id,
        name:result.name,
        descreption:result.descreption,
        startdate:result.startdate,
        targetdate:result.targetdate,
        manegerid:result.manegerid
      })

    })


  }







}
