import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';
import { UserService } from '../../Services/user/user.service';
import { response } from 'express';
import { AsyncLocalStorage } from 'async_hooks';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  loginDataFORM!:FormGroup;
  submitvalue:boolean=false;
  constructor(private formbuilder:FormBuilder,private userservice:UserService){}
  ngOnInit():void{
    this.loginDataFORM=this.formbuilder.group({
      emailId:[''],
      Password:['']
    })
  }
  OnLogIn(){
    this.submitvalue=true;
  
    let reqData={
      Email:this.loginDataFORM.value.emailId,
      password:this.loginDataFORM.value.Password
    }
    this.userservice.login(reqData).subscribe((res:any)=>{
      console.log(res.message);

      localStorage.setItem("token",res.data);
    });
  }
};