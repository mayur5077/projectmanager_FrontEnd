import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-projectmodule',
  templateUrl: './projectmodule.component.html',
  styleUrls: ['./projectmodule.component.css']
})
export class ProjectmoduleComponent implements OnInit {

  moduledata:any;
 project:any;
  id:any;
  projectid:any;
  modules:any;

  constructor(private api:ApiService,private route:ActivatedRoute){
    this.projectid = route.snapshot.paramMap.get('projectid');

  }



  ngOnInit(): void {
    this.api.get("projects/"+this.projectid).subscribe((result:any)=>{
      console.log(result);
      this.project = result;
    })
    this.show();

  }
  show(){
    this.id = null
    this.moduledata = new FormGroup({
      id:new FormControl(0),
      projectid:new FormControl(this.projectid),
      name:new FormControl("")
    })


    this.api.get("projectmodules/listmodule/" + this.projectid).subscribe((result:any)=>{
      this.modules = result;
      console.log(result);

    })

  }


  Edit(id:number){

    this.api.get("projectmodules/"+id).subscribe((result:any)=>{
      console.log(result);

      this.moduledata.patchValue({
        id:this.id,
        projectid:result.projectid,
        name:result.name
      })

    })
    this.id = id

  }

  modulesubmit(data:any){
    if(this.id == null){
      this.api.post("projectmodules",data).subscribe((result:any)=>{
        console.log(result);
        this.show();

      })
    }
    else{
      this.api.put("projectmodules/"+this.id, data).subscribe((result:any)=>{
        console.log(result);
        this.show();

      })
    }


  }
  Delete(id:number){
    this.api.delete("projectmodules/"+id).subscribe((result:any)=>{
      console.log(result);
      this.show();


    })


  }







}
