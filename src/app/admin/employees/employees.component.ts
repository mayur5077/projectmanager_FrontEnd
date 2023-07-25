import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {


  formdata:any;
  setforms:any;
  id:any;

  constructor(private api:ApiService,private route:ActivatedRoute){


  }
  ngOnInit(): void {
    this.formdata = new FormGroup({
      id:new FormControl(0),
      name:new FormControl(""),
      code:new FormControl(""),
      gender:new FormControl(""),
      email:new FormControl(""),
      mobileno:new FormControl(""),
      password:new FormControl("")
    })

    this.show();

  }
  show(){
    this.api.get("employees").subscribe((result:any)=>{
      this.setforms = result;

    })



  }

  showdata(data:any){
    if(this.id == null){
      this.api.post("employees",data).subscribe((result:any)=>{
        console.log(result);
        this.show();

      })
    }
    else{
      this.api.put("employees/"+this.id, data).subscribe((result:any)=>{
        console.log(result);
        this.show();

      })
    }





  }
  Delete(id:number){
    this.api.delete("employees/"+id).subscribe((result:any)=>{
      console.log(result);
      this.show();


    })
  }




    Edit(id:number){
      this.id = id;
      console.log(id);

      if(id != null){
      this.api.get("employees/"+ id).subscribe((result:any)=>{
        console.log(result);
        this.show();
        this.formdata.patchValue({
          id:this.id,
          name:result.name,
          code:result.code,
          gender:result.gender,
          email:result.email,
          mobileno:result.mobileno,
          password:result.password
        })
      })

    }







  }





}
