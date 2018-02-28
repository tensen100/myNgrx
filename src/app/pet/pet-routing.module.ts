import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetIndexComponent } from './pet-index/pet-index.component';
import { HomeComponent } from './pages/home/home.component';
import { CreateComponent } from './pages/create/create.component';
import { CompleteComponent } from './pages/complete/complete.component';

const routes: Routes = [
  {
    path: '',
    component: PetIndexComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'create',
        component: CreateComponent
      },
      {
        path: 'complete',
        component: CompleteComponent
      },
    ]
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PetRoutingModule { }
