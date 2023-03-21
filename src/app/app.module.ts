import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminComponent } from './admin/admin.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AllTeachersComponent } from './all-teachers/all-teachers.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { StudentRegisterComponent } from './student-register/student-register.component';
import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';
import { TeacherLoginComponent } from './teacher-login/teacher-login.component';
import { TeacherRegisterComponent } from './teacher-register/teacher-register.component';
import { ApplyLeavesComponent } from './student-dashboard/apply-leaves/apply-leaves.component';
import { DashboardComponent } from './student-dashboard/dashboard/dashboard.component';
import { DropMessageComponent } from './student-dashboard/drop-message/drop-message.component';
import { PayFeesComponent } from './student-dashboard/pay-fees/pay-fees.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    AdminComponent,
    AboutComponent,
    AdminDashboardComponent,
    AdminLoginComponent,
    AllTeachersComponent,
    FooterComponent,
    HeaderComponent,
    StudentDashboardComponent,
    StudentLoginComponent,
    StudentProfileComponent,
    StudentRegisterComponent,
    TeacherDashboardComponent,
    TeacherLoginComponent,
    TeacherRegisterComponent,
    ApplyLeavesComponent,
    DashboardComponent,
    DropMessageComponent,
    PayFeesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
     RouterModule,
     NgbModule,
     HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
