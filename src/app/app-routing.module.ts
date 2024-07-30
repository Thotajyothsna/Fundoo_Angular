import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { ForgotpasswordComponent } from './Components/forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './Components/resetpassword/resetpassword.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { CreateNotesComponent } from './Components/create-notes/create-notes.component';
import { GetNotesComponent } from './Components/get-notes/get-notes.component';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'password',component:ForgotpasswordComponent},
  {path:'reset',component:ResetpasswordComponent},
  {path:'dashboard',component:DashboardComponent,
    children:[
      {
        path:'',redirectTo:"/dashboard/notes",pathMatch:'full'
      },
      {path:'notes',component:GetNotesComponent}
    ]
  },
  {path:'notes',component:GetNotesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
