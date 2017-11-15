import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodosComponent } from 'app/todos/todos.component';

const routes: Routes = [
  {path: '', redirectTo: '/todo', pathMatch: 'full'},
  {path: 'todo', component: TodosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
