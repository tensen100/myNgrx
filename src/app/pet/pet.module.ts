import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PetRoutingModule } from './pet-routing.module';

import { PetIndexComponent } from './pet-index/pet-index.component';
import { CreateComponent } from './pages/create/create.component';
import { CompleteComponent } from './pages/complete/complete.component';
import { HomeComponent } from './pages/home/home.component';
import { TagExtrasComponent } from './pages/create/tag-extras/tag-extras.component';
import { TagPreviewComponent } from './pages/create/tag-preview/tag-preview.component';
import { TagShapeComponent } from './pages/create/tag-shape/tag-shape.component';
import { TagTextComponent } from './pages/create/tag-text/tag-text.component';
import { StoreModule } from '@ngrx/store';
import { petTagReducer } from './reducer/pet.reducer';


@NgModule({
  imports: [
    CommonModule,
    PetRoutingModule,
    FormsModule,
    StoreModule.forRoot({ petTag: petTagReducer })
  ],
  declarations: [
    PetIndexComponent,
    CreateComponent,
    CompleteComponent,
    HomeComponent,
    TagExtrasComponent,
    TagPreviewComponent,
    TagShapeComponent,
    TagTextComponent
  ],
})
export class PetModule { }
