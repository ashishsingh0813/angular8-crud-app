import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from './services/auth/auth.service';


// Routes
const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: () => import('./components/meeting/list/meeting-list.module').then(m => m.MeetingListModule)
      },
      {
        path: 'add',
        loadChildren: () => import('./components/meeting/add/meeting-add.module').then(m => m.MeetingAddModule)
      },
      {
        path: 'update/:id',
        loadChildren: () => import('./components/meeting/add/meeting-add.module').then(m => m.MeetingAddModule)
      }
    ],
    canActivate: [AuthService]
  },
  {
    path: 'login',
    loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
