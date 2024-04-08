import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskComponent } from './components/task/task.component';
import { BookCreateComponent } from './components/book-create/book-create.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookManagementComponent } from './components/book-management/book-management.component';

const routes: Routes = [
  { path: '', pathMatch: "full", component: BookManagementComponent},
  { path: 'tasks', component: TaskComponent},
  { path: 'book/create', component: BookCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
