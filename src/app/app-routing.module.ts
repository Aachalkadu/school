import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminComponent } from './admin/admin.component';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ApplyLeavesComponent } from './student-dashboard/apply-leaves/apply-leaves.component';
import { DashboardComponent } from './student-dashboard/dashboard/dashboard.component';
import { DropMessageComponent } from './student-dashboard/drop-message/drop-message.component';
import { PayFeesComponent } from './student-dashboard/pay-fees/pay-fees.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { StudentRegisterComponent } from './student-register/student-register.component';
import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';
import { TeacherLoginComponent } from './teacher-login/teacher-login.component';
import { TeacherRegisterComponent } from './teacher-register/teacher-register.component';

const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  // {
  //   path:'home',component:HomeComponent
  // },
  // {
  //   path:'admin',component:AdminComponent
  // },
  // {
  //   path: '',redirectTo:'home', pathMatch: 'full'
  // },

  { path: '', component: HomeComponent },
  { path: 'student-profile', component: StudentProfileComponent }, //done
  { path: 'student-login', component: StudentLoginComponent }, //done
  { path: 'student-register', component: StudentRegisterComponent }, //done
  { path: 'teacher-register', component: TeacherRegisterComponent }, //done
  { path: 'teacher-login', component: TeacherLoginComponent },  //done
  { path: 'admin-login', component: AdminLoginComponent }, //done
  {
    path: 'student-dashboard', component: StudentDashboardComponent,
    children: [
      {
        path: 'dashboard', component: DashboardComponent
      },
      {
        path: 'pay-fees', component: PayFeesComponent
      },
      {
        path: 'apply-leaves', component: ApplyLeavesComponent
      },
      {
        path: 'drop-message', component: DropMessageComponent
      },
      {
        path: 'student-profile', component: StudentProfileComponent
      },
      {
        path: '', redirectTo: 'dashboard', pathMatch: 'full'
      }
    ]
  },  //done
  { path: 'admin-dashboard', component: AdminDashboardComponent }, //done
  { path: 'teacher-dashboard', component: TeacherDashboardComponent }, //done
  { path: 'about', component: AboutComponent }, //done

]



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
