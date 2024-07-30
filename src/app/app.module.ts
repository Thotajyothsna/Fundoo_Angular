import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { ForgotpasswordComponent } from './Components/forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './Components/resetpassword/resetpassword.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { CreateNotesComponent } from './Components/create-notes/create-notes.component';
import { IconsComponent } from './Components/icons/icons.component';
import {MatMenuModule} from '@angular/material/menu';
import { DisplayNotesComponent } from './Components/display-notes/display-notes.component';
import { GetNotesComponent } from './Components/get-notes/get-notes.component';
import {MatCardModule} from '@angular/material/card';
import { UpdateNotesComponent } from './Components/update-notes/update-notes.component';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgotpasswordComponent,
    ResetpasswordComponent,
    DashboardComponent,
    CreateNotesComponent,
    IconsComponent,
    DisplayNotesComponent,
    GetNotesComponent,
    UpdateNotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatCardModule,
    MatDialogModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
