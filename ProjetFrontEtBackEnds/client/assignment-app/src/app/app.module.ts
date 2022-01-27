import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { AssignmentsComponent } from './assignments/assignments.component';
import { RenduDirective } from './shared/rendu.directive';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { AssignmentDetailComponent } from './assignments/assignment-detail/assignment-detail.component';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AddAssignmentComponent } from './assignments/add-assignment/add-assignment.component';
import { Routes, RouterModule } from '@angular/router';
import { EditAssignmentComponent } from './assignments/edit-assignment/edit-assignment.component';
import { AuthGuard } from './shared/auth.guard';
import { HttpClientModule } from '@angular/common/http';
import { DevoirsComponent } from './devoirs/devoirs.component';
import { MatieresComponent } from './matieres/matieres.component';
import { DevoirDetailComponent } from './devoirs/devoir-detail/devoir-detail.component';
import { MatiereDetailComponent } from './matieres/matiere-detail/matiere-detail.component';
import { LoginComponent } from './login/login.component';
import { AddDevoirComponent } from './devoirs/add-devoir/add-devoir.component';
import { EditDevoirComponent } from './devoirs/edit-devoir/edit-devoir.component';
import { EditMatiereComponent } from './edit-matiere/edit-matiere.component';
import { AddMatiereComponent } from './add-matiere/add-matiere.component';

const routes:Routes = [
  {
    path:"", component: LoginComponent
  },
  {
    path:"home", component: AssignmentsComponent
  },
  {
    path:"login", component: LoginComponent
  },
  {
    path:"add-assignment", component: AddAssignmentComponent
  },
  {
    path:"assignment/:id", component: AssignmentDetailComponent
  },
  {
    path:"assignment/:id/edit", component: EditAssignmentComponent,
    canActivate : [AuthGuard]
  },
  {
    path:"add-devoir", component: AddDevoirComponent
  },
  {
    path:"devoir/:id", component: DevoirDetailComponent
  },
  {
    path:"devoir/:id/edit", component: EditDevoirComponent,
    canActivate : [AuthGuard]
  },
  {
    path:"add-matiere", component: AddMatiereComponent
  },
  {
    path:"matiere/:id", component: MatiereDetailComponent
  },
  {
    path:"matiere/:id/edit", component: EditMatiereComponent,
    canActivate : [AuthGuard]
  },
]
@NgModule({
  declarations: [
    AppComponent,
    AssignmentsComponent,
    RenduDirective,
    AssignmentDetailComponent,
    AddAssignmentComponent,
    EditAssignmentComponent,
    DevoirsComponent,
    MatieresComponent,
    DevoirDetailComponent,
    MatiereDetailComponent,
    LoginComponent,
    AddDevoirComponent,
    EditDevoirComponent,
    EditMatiereComponent,
    AddMatiereComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, MatIconModule, MatDividerModule,
    FormsModule, MatFormFieldModule, MatInputModule,
    MatDatepickerModule, MatNativeDateModule,
    MatListModule, MatCardModule, MatCheckboxModule,
    MatSlideToggleModule,HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
