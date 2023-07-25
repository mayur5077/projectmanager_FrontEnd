import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-projecttask',
  templateUrl: './projecttask.component.html',
  styleUrls: ['./projecttask.component.css']
})
export class ProjecttaskComponent implements OnInit {

  taskdata:any;
  projectdata:any;
  moduleid:any;
  module:any;
  projectid:any;
  projectlogin:any;
  employeeid:any;
  id:any;


  constructor(private api:ApiService , private route:ActivatedRoute){
    this.moduleid = route.snapshot.paramMap.get('moduleid');
    this.projectid = route.snapshot.paramMap.get('projectid');
    this.employeeid = route.snapshot.paramMap.get('manegerid');

  }



  ngOnInit(): void {

    this.load();

  }

  load(){
    this.id = null
    this.taskdata = new FormGroup({
      id:new FormControl(0),
      moduleid:new FormControl(this.moduleid),
      projectid:new FormControl(this.projectid),
      task: new FormControl(),
      description: new FormControl(),
      employeeid:new FormControl(this.employeeid),
      startdate: new FormControl(),
      starttime: new FormControl(),
      enddate: new FormControl(),
      endtime: new FormControl(),
      duration: new FormControl(),
      stetus: new FormControl()


    })

    this.api.get("projectmodules/"+this.moduleid).subscribe((result:any)=>{
      this.module = result;



    })

    this.api.get("projects/"+this.projectid).subscribe((result:any)=>{
      this.projectlogin = result;



    })

    this.api.get("employee/"+this.employeeid).subscribe((result:any)=>{
      console.log(result);


    })

    this.api.get("projecttasks/listtask/"+this.moduleid).subscribe((result:any)=>{
      this.projectdata = result;
      console.log(this.projectdata);


    })
  }

  logindata(data:any){
    if(this.id == null){
      this.api.post("projecttasks",data).subscribe((result:any)=>{
        console.log(result);
        this.load();

      })
    }
    else{
      this.api.put("projecttasks/"+this.id, data).subscribe((result:any)=>{
        console.log(result);
        this.load();

      })
    }





  }

  Delete(id:number){
    this.api.delete("projecttasks/"+id).subscribe((result:any)=>{
      console.log(result);
      this.load();

    })

  }

  Edit(id:number){
    this.id = id;
    this.api.get("projecttasks/"+id).subscribe((result:any)=>{
      console.log(result);

      this.taskdata.patchValue({
        id:this.id,
        task:result.task,
        description:result.description,
        startdate:result.startdate,
        starttime:result.starttime,
        enddate:result.enddate,
        endtime:result.endtime,
        duration:result.duration,
        stetus:result.stetus
      })


    })

  }




}
