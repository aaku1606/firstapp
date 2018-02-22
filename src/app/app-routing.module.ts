import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{LoginComponent} from './login/login.component';
import{ Page2Component } from './page2/page2.component';
import{ AddstudentComponent} from './addstudent/addstudent.component';
import{ UpdateComponent} from './update/update.component';

const routes: Routes = [
  {path:'', redirectTo:'login',pathMatch:'full' },
  {path:'login', component:LoginComponent},
  {path:'page2',component: Page2Component},
  {path:'addstudent',component:AddstudentComponent},
  {path: 'update',component:UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, Page2Component,
                   AddstudentComponent,UpdateComponent]
