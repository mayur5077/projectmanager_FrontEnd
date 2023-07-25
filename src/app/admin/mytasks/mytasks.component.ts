import { Component, OnInit } from '@angular/core';
import { OnSameUrlNavigation } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-mytasks',
  templateUrl: './mytasks.component.html',
  styleUrls: ['./mytasks.component.css']
})
export class MytasksComponent implements OnInit{

  mytasks:any;
  id:any;
  data:any;



  constructor(private api:ApiService){}
  ngOnInit(): void {

this.Load();

  }

  Load(){
    this.id = localStorage.getItem("id");
    this.api.get("projecttasks/mytask/"+this.id).subscribe((result:any)=>{
      this.mytasks = result;
      })
  }
  open(id:number){
    let data = null;
    this.api.put("projecttasks/updatestetus/"+ id +"/Completed",data).subscribe((result:any)=>{
      console.log(result);
      alert("Status Updated");
      this.Load();
    })
    
  }
  close(id:number){
    let data = null;
    this.api.put("projecttasks/updatestetus/"+ id +"/Pending",data).subscribe((result:any)=>{
      console.log(result);
      alert("Status Updated")
      this.Load();
    })

  }


}
