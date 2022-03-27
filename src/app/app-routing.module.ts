import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DonateComponent } from './donate/donate.component';
import { FundraiserComponent } from './fundraiser/fundraiser.component';
import { FundraisingComponent } from './fundraising/fundraising.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import {MypageComponent} from "./myprofile/mypage/mypage.component";
import {EditpageComponent} from "./myprofile/editpage/editpage.component";
import {ChangepassComponent} from "./myprofile/changepass/changepass.component";
import {MydonationsComponent} from "./myprofile/mydonations/mydonations.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'fundraising/:id',
    component: FundraisingComponent
  },
  {
    path: 'fundraiser',
    component: FundraiserComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'donate/:id',
    component: DonateComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'myprofile/:id',
    component: MypageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'editpage/:id',
    component: EditpageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'changepass/:id',
    component: ChangepassComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'mydonations/:id',
    component: MydonationsComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
